"use client";

import { useState, useCallback } from "react";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import type { Id } from "../../convex/_generated/dataModel";

const VAPID_PUBLIC_KEY =
  "BJrNq1vuRQrQp_IN_AbvdUv908MISevIe9hgqFFKnc7LlexaROXHeDkxirh8LPU9XcjVbfzuLNC0yUojyHizOFs";

function urlBase64ToUint8Array(base64String: string): ArrayBuffer {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const raw = atob(base64);
  const buf = new ArrayBuffer(raw.length);
  const arr = new Uint8Array(buf);
  for (let i = 0; i < raw.length; i++) arr[i] = raw.charCodeAt(i);
  return buf;
}

export function usePushNotifications(userId: Id<"users"> | null) {
  const [permission, setPermission] = useState<NotificationPermission>(
    typeof Notification !== "undefined" ? Notification.permission : "default"
  );
  const [isSubscribed, setIsSubscribed] = useState(false);

  const subscribe = useMutation(api.pushSubscriptions.subscribe);
  const unsubscribe = useMutation(api.pushSubscriptions.unsubscribe);

  const requestPermission = useCallback(async () => {
    if (!("Notification" in window) || !("serviceWorker" in navigator) || !userId) {
      return false;
    }

    const result = await Notification.requestPermission();
    setPermission(result);

    if (result === "granted") {
      try {
        const registration = await navigator.serviceWorker.ready;
        const subscription = await registration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY),
        });

        const json = subscription.toJSON();
        await subscribe({
          userId,
          endpoint: json.endpoint!,
          keys: {
            p256dh: json.keys!.p256dh!,
            auth: json.keys!.auth!,
          },
        });

        setIsSubscribed(true);
        return true;
      } catch (err) {
        console.error("Push subscription failed:", err);
        return false;
      }
    }
    return false;
  }, [userId, subscribe]);

  const disableNotifications = useCallback(async () => {
    try {
      const registration = await navigator.serviceWorker.ready;
      const subscription = await registration.pushManager.getSubscription();
      if (subscription) {
        await unsubscribe({ endpoint: subscription.endpoint });
        await subscription.unsubscribe();
      }
      setIsSubscribed(false);
    } catch (err) {
      console.error("Unsubscribe failed:", err);
    }
  }, [unsubscribe]);

  return {
    permission,
    isSubscribed,
    isSupported: typeof Notification !== "undefined" && "serviceWorker" in (typeof navigator !== "undefined" ? navigator : {}),
    requestPermission,
    disableNotifications,
  };
}

import { NextRequest, NextResponse } from 'next/server'
import { S3Client, GetObjectCommand, PutObjectCommand } from '@aws-sdk/client-s3'

const R2_ENDPOINT = 'https://97ffb7df18e8eb1b21bde1082ab21ee6.eu.r2.cloudflarestorage.com'
const R2_BUCKET = 'autofound'
const R2_KEY = 'fitgg/waitlist.json'

const s3 = new S3Client({
  region: 'auto',
  endpoint: R2_ENDPOINT,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY || '',
  },
})

interface WaitlistEntry {
  email: string
  source: string
  createdAt: string
}

async function getEntries(): Promise<WaitlistEntry[]> {
  try {
    const res = await s3.send(new GetObjectCommand({ Bucket: R2_BUCKET, Key: R2_KEY }))
    const body = await res.Body?.transformToString()
    return body ? JSON.parse(body) : []
  } catch {
    return []
  }
}

async function saveEntries(entries: WaitlistEntry[]) {
  await s3.send(new PutObjectCommand({
    Bucket: R2_BUCKET,
    Key: R2_KEY,
    Body: JSON.stringify(entries, null, 2),
    ContentType: 'application/json',
  }))
}

export async function POST(req: NextRequest) {
  try {
    const { email, source } = await req.json()

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ success: false, reason: 'invalid_email' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const normalizedEmail = email.toLowerCase().trim()
    if (!emailRegex.test(normalizedEmail)) {
      return NextResponse.json({ success: false, reason: 'invalid_email' }, { status: 400 })
    }

    const entries = await getEntries()

    if (entries.some(e => e.email === normalizedEmail)) {
      return NextResponse.json({ success: true, reason: 'already_joined' })
    }

    entries.push({
      email: normalizedEmail,
      source: source || 'landing',
      createdAt: new Date().toISOString(),
    })

    await saveEntries(entries)

    return NextResponse.json({ success: true, count: entries.length })
  } catch (err) {
    console.error('Waitlist error:', err)
    return NextResponse.json({ success: false, reason: 'server_error' }, { status: 500 })
  }
}

export async function GET() {
  const entries = await getEntries()
  return NextResponse.json({ count: entries.length })
}

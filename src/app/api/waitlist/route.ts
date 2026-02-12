import { NextRequest, NextResponse } from 'next/server'
import { readFile, writeFile, mkdir } from 'fs/promises'
import { join } from 'path'

const DATA_DIR = '/tmp/fitgg'
const DATA_FILE = join(DATA_DIR, 'waitlist.json')

interface WaitlistEntry {
  email: string
  source: string
  createdAt: string
}

async function getEntries(): Promise<WaitlistEntry[]> {
  try {
    const data = await readFile(DATA_FILE, 'utf-8')
    return JSON.parse(data)
  } catch {
    return []
  }
}

async function saveEntries(entries: WaitlistEntry[]) {
  await mkdir(DATA_DIR, { recursive: true })
  await writeFile(DATA_FILE, JSON.stringify(entries, null, 2))
}

export async function POST(req: NextRequest) {
  try {
    const { email, source } = await req.json()

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ success: false, reason: 'invalid_email' }, { status: 400 })
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const normalizedEmail = email.toLowerCase().trim()
    if (!emailRegex.test(normalizedEmail)) {
      return NextResponse.json({ success: false, reason: 'invalid_email' }, { status: 400 })
    }

    const entries = await getEntries()

    // Duplicate check
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
  } catch {
    return NextResponse.json({ success: false, reason: 'server_error' }, { status: 500 })
  }
}

export async function GET() {
  const entries = await getEntries()
  return NextResponse.json({ count: entries.length })
}

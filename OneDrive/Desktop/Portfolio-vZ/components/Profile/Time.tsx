"use client"

import { useState, useEffect } from 'react'

export default function Time() {
  const [time, setTime] = useState<Date | null>(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    // Set the initial time after component mounts
    setTime(new Date())

    return () => {
      clearInterval(timer)
    }
  }, [])

  const formatDateTime = (date: Date) => {
    const formattedDate = date.toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric'
    })
    const formattedTime = date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    })
    return `${formattedDate}, ${formattedTime}`
  }

  // Don't render time until it's available after client-side hydration
  if (!time) {
    return null
  }

  return (
    <div className="flex items-center justify-center">
      <time 
        className="text-sm font-light text-zinc-500 font-mono tabular-nums tracking-wider"
        dateTime={time.toISOString()}
        aria-label="Current time"
      >
        {formatDateTime(time)}
      </time>
    </div>
  )
}

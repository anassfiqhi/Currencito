'use client'
import { useState, useEffect } from 'react'
import { WifiOff } from 'lucide-react'

export default function OnlineStatus() {
    const [isOnline, setIsOnline] = useState(true)

    useEffect(() => {
        setIsOnline(navigator.onLine)
        const handleOnline = () => setIsOnline(true)
        const handleOffline = () => setIsOnline(false)
        window.addEventListener('online', handleOnline)
        window.addEventListener('offline', handleOffline)
        return () => {
            window.removeEventListener('online', handleOnline)
            window.removeEventListener('offline', handleOffline)
        }
    }, [])

    if (isOnline) return null
    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center gap-2 bg-yellow-500 px-4 py-2 text-sm font-medium text-black shadow-md">
            <WifiOff className="h-4 w-4" />
            You are offline - Changes will apply when you reconnect
        </div>
    )
}

'use client'

import { useState, useEffect } from 'react'
import { isVRSupported } from '@/lib/vr-utils'
import { Glasses } from 'lucide-react'

interface VRButtonProps {
    onEnterVR: () => void
}

export function VRButton({ onEnterVR }: VRButtonProps) {
    const [vrSupported, setVrSupported] = useState(false)
    const [checking, setChecking] = useState(true)

    useEffect(() => {
        isVRSupported().then((supported) => {
            setVrSupported(supported)
            setChecking(false)
        })
    }, [])

    if (checking || !vrSupported) return null

    return (
        <button
            onClick={onEnterVR}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-dark font-medium rounded-sm hover:bg-primary-light transition-colors"
            title="Mode VR disponible sur casques compatibles (WebXR)"
        >
            <Glasses className="w-5 h-5" />
            <span className="hidden sm:inline">Mode VR</span>
        </button>
    )
}

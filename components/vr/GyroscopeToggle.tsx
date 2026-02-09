'use client'

import { useState, useEffect } from 'react'
import { isGyroscopeAvailable, isIOS, requestGyroscopePermission, isMobile } from '@/lib/vr-utils'
import { Smartphone } from 'lucide-react'

interface GyroscopeToggleProps {
    enabled: boolean
    onToggle: (enabled: boolean) => void
}

export function GyroscopeToggle({ enabled, onToggle }: GyroscopeToggleProps) {
    const [available, setAvailable] = useState(false)
    const [permissionGranted, setPermissionGranted] = useState(false)
    const [needsPermission, setNeedsPermission] = useState(false)

    useEffect(() => {
        if (!isMobile()) {
            setAvailable(false)
            return
        }

        const hasGyro = isGyroscopeAvailable()
        setAvailable(hasGyro)
        setNeedsPermission(isIOS())

        // Sur Android, pas besoin de permission
        if (hasGyro && !isIOS()) {
            setPermissionGranted(true)
        }
    }, [])

    const handleClick = async () => {
        if (!available) return

        if (needsPermission && !permissionGranted) {
            // iOS: demander la permission
            const granted = await requestGyroscopePermission()
            setPermissionGranted(granted)
            if (granted) {
                onToggle(true)
            } else {
                alert('Permission gyroscope refusée. Utilisez le mode tactile.')
            }
        } else {
            // Permission déjà accordée ou pas nécessaire
            onToggle(!enabled)
        }
    }

    if (!available) return null

    return (
        <button
            onClick={handleClick}
            className={`flex items-center gap-2 px-4 py-2 rounded-sm transition-colors ${enabled
                    ? 'bg-primary text-dark'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
            title={enabled ? 'Désactiver le gyroscope' : 'Activer le gyroscope'}
        >
            <Smartphone className="w-5 h-5" />
            <span className="hidden sm:inline">
                {needsPermission && !permissionGranted
                    ? 'Activer gyroscope'
                    : (enabled ? 'Gyro ON' : 'Gyro OFF')
                }
            </span>
        </button>
    )
}

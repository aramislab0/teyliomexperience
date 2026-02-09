'use client'

// Détection support WebXR VR
export async function isVRSupported(): Promise<boolean> {
    if (typeof window === 'undefined') return false
    if (!('xr' in navigator)) return false

    try {
        const xr = (navigator as any).xr
        return await xr.isSessionSupported('immersive-vr')
    } catch {
        return false
    }
}

// Détection support gyroscope (mobile)
export function isGyroscopeAvailable(): boolean {
    if (typeof window === 'undefined') return false
    return 'DeviceOrientationEvent' in window
}

// Demande permission gyroscope iOS 13+
export async function requestGyroscopePermission(): Promise<boolean> {
    if (typeof window === 'undefined') return false

    // iOS 13+ nécessite une permission explicite
    const DeviceOrientationEvent = (window as any).DeviceOrientationEvent

    if (typeof DeviceOrientationEvent?.requestPermission === 'function') {
        try {
            const permission = await DeviceOrientationEvent.requestPermission()
            return permission === 'granted'
        } catch {
            return false
        }
    }

    // Android et autres = pas de permission nécessaire
    return true
}

// Détection mobile/tablet
export function isMobile(): boolean {
    if (typeof window === 'undefined') return false
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
}

// Détection iOS
export function isIOS(): boolean {
    if (typeof window === 'undefined') return false
    return /iPhone|iPad|iPod/i.test(navigator.userAgent)
}

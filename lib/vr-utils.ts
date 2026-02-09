// VR and 360 utilities
export function isGyroscopeAvailable(): boolean {
    if (typeof window === 'undefined') return false
    return 'DeviceOrientationEvent' in window
}

export function requestGyroscopePermission(): Promise<boolean> {
    // iOS 13+ requires permission
    if (typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
        return (DeviceOrientationEvent as any).requestPermission()
            .then((permissionState: string) => permissionState === 'granted')
            .catch(() => false)
    }
    return Promise.resolve(true)
}

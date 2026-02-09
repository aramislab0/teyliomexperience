'use client'

import {
    ArrowRight,
    ArrowUpRight,
    ArrowLeft,
    Menu,
    Building2,
    MapPin,
    Check,
    CheckCircle,
    X,
    ChevronLeft,
    ChevronRight,
    Maximize,
    Minimize,
    Smartphone,
    Glasses,
    Mail,
    Phone,
    Search,
    User,
    FileText,
    Calendar,
    Download,
    Heart,
    Eye,
    ZoomIn,
    BadgeHelp,
    Home,
    CircleCheckBig,
    Info,
    ChevronDown,
    Badge,
} from 'lucide-react'

const icons = {
    'arrow_forward': ArrowRight,
    'arrow_outward': ArrowUpRight,
    'arrow_back': ArrowLeft,
    'menu': Menu,
    'apartment': Building2,
    'location_on': MapPin,
    'check': Check,
    'check_circle': CheckCircle,
    'close': X,
    'chevron_left': ChevronLeft,
    'chevron_right': ChevronRight,
    'fullscreen': Maximize,
    'fullscreen_exit': Minimize,
    'smartphone': Smartphone,
    'vrpano': Glasses,
    'mail': Mail,
    'call': Phone,
    'phone': Phone,
    'search': Search,
    'person': User,
    'assignment': FileText,
    'calendar_month': Calendar,
    'download': Download,
    'favorite': Heart,
    'visibility': Eye,
    'zoom_in': ZoomIn,
    'west': ArrowLeft,
    'support_agent': BadgeHelp,
    'home': Home,
    'task_alt': CircleCheckBig,
    'info': Info,
    'expand_more': ChevronDown,
    'badge': Badge,
    'error': Info,
    '360': Glasses,
} as const

interface IconProps {
    name: keyof typeof icons
    className?: string
    size?: number
}

export function Icon({ name, className = '', size = 24 }: IconProps) {
    const IconComponent = icons[name]
    if (!IconComponent) {
        console.warn(`Icon "${name}" not found`)
        return null
    }
    return <IconComponent className={className} size={size} />
}

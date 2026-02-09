import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline'
    children: React.ReactNode
}

export default function Button({
    variant = 'primary',
    className,
    children,
    ...props
}: ButtonProps) {
    return (
        <button
            className={cn(
                variant === 'primary' ? 'btn-primary' : 'btn-outline',
                className
            )}
            {...props}
        >
            {children}
        </button>
    )
}

import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

export default function Card({ children, className, ...props }: CardProps) {
    return (
        <div
            className={cn(
                'bg-dark-lighter border border-dark-gray p-6',
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
}

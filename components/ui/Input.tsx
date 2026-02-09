import { cn } from '@/lib/utils'
import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
    error?: string
}

export default function Input({ label, error, className, ...props }: InputProps) {
    return (
        <div className="w-full">
            {label && (
                <label className="block text-sm font-medium text-light mb-2">
                    {label}
                </label>
            )}
            <input
                className={cn(
                    'w-full px-4 py-3 bg-dark-lighter border border-dark-gray',
                    'text-light placeholder:text-light/40',
                    'focus:outline-none focus:border-primary transition-colors',
                    error && 'border-red-500',
                    className
                )}
                {...props}
            />
            {error && (
                <p className="mt-1 text-sm text-red-500">{error}</p>
            )}
        </div>
    )
}

import { cn } from '@/lib/utils'
import { SelectHTMLAttributes } from 'react'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label?: string
    error?: string
    options: { value: string; label: string }[]
}

export default function Select({ label, error, options, className, ...props }: SelectProps) {
    return (
        <div className="w-full">
            {label && (
                <label className="block text-sm font-medium text-light mb-2">
                    {label}
                </label>
            )}
            <select
                className={cn(
                    'w-full px-4 py-3 bg-dark-lighter border border-dark-gray',
                    'text-light',
                    'focus:outline-none focus:border-primary transition-colors',
                    error && 'border-red-500',
                    className
                )}
                {...props}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {error && (
                <p className="mt-1 text-sm text-red-500">{error}</p>
            )}
        </div>
    )
}

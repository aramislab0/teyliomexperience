// Project data types and utilities
export interface Project {
    id: string
    slug: string
    name: string
    description: string
    location: string
    price: string
    images: string[]
    vr360Available: boolean
}

// Placeholder project data
export const projects: Project[] = [
    // Projects will be added in later phases
]

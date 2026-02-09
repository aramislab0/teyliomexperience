export interface VirtualTour {
    id: string
    name: string
    thumbnail: string
    panoramaUrl: string
    initialView?: {
        pitch: number
        yaw: number
        hfov: number
    }
}

export interface Project {
    id: string
    slug: string
    name: string
    tagline: string
    description: string
    coverImage: string
    images: string[]
    virtualTours: VirtualTour[]
    features: string[]
    location: string
    status: 'available' | 'coming_soon' | 'sold_out'
}

export const projects: Project[] = [
    {
        id: '1',
        slug: 'lynea',
        name: 'Lynea',
        tagline: "L'élégance contemporaine au cœur de Dakar",
        description: "Lynea incarne la vision d'un habitat moderne et raffiné. Située dans le quartier prisé des Almadies, cette résidence d'exception offre un cadre de vie unique où chaque détail a été pensé pour allier confort absolu et design avant-gardiste. Des appartements spacieux aux finitions haut de gamme, baignés de lumière naturelle, avec des vues imprenables sur l'océan Atlantique.",
        coverImage: 'https://placehold.co/1920x1080/0A0A0A/C9A84C?text=Lynea',
        images: [
            'https://placehold.co/1920x1080/0A0A0A/C9A84C?text=Lynea+Gallery+1',
            'https://placehold.co/1920x1080/1A1A2E/C9A84C?text=Lynea+Gallery+2',
            'https://placehold.co/1920x1080/0A0A0A/C9A84C?text=Lynea+Gallery+3',
            'https://placehold.co/1920x1080/1A1A2E/C9A84C?text=Lynea+Gallery+4',
            'https://placehold.co/1920x1080/0A0A0A/C9A84C?text=Lynea+Gallery+5',
            'https://placehold.co/1920x1080/1A1A2E/C9A84C?text=Lynea+Gallery+6',
        ],
        virtualTours: [
            {
                id: 'lynea-living',
                name: 'Appartement témoin',
                thumbnail: 'https://placehold.co/400x300/0A0A0A/C9A84C?text=VR+Lynea',
                panoramaUrl: 'https://pannellum.org/images/cerro-toco-0.jpg',
                initialView: { pitch: 0, yaw: 180, hfov: 110 },
            },
        ],
        features: [
            'Piscine à débordement',
            'Salle de sport équipée',
            'Conciergerie 24/7',
            'Parking souterrain sécurisé',
            'Espaces verts paysagers',
            'Rooftop lounge',
        ],
        location: 'Almadies, Dakar',
        status: 'available',
    },
    {
        id: '2',
        slug: 'divinity',
        name: 'Divinity',
        tagline: "Le luxe absolu face à l'océan",
        description: "Divinity redéfinit les standards du luxe résidentiel à Dakar. Implantée sur la prestigieuse Corniche Ouest, cette adresse d'exception offre une expérience de vie incomparable. Chaque lever de soleil sur l'Atlantique devient un spectacle privé, chaque instant un moment de grâce. Des penthouses aux villas, Divinity est la promesse d'un art de vivre sans compromis.",
        coverImage: 'https://placehold.co/1920x1080/0A0A0A/F5E6B8?text=Divinity',
        images: [
            'https://placehold.co/1920x1080/0A0A0A/F5E6B8?text=Divinity+Gallery+1',
            'https://placehold.co/1920x1080/1A1A2E/F5E6B8?text=Divinity+Gallery+2',
            'https://placehold.co/1920x1080/0A0A0A/F5E6B8?text=Divinity+Gallery+3',
            'https://placehold.co/1920x1080/1A1A2E/F5E6B8?text=Divinity+Gallery+4',
        ],
        virtualTours: [
            {
                id: 'divinity-penthouse',
                name: 'Penthouse vue mer',
                thumbnail: 'https://placehold.co/400x300/0A0A0A/F5E6B8?text=VR+Divinity',
                panoramaUrl: 'https://pannellum.org/images/alma.jpg',
                initialView: { pitch: 5, yaw: 90, hfov: 100 },
            },
        ],
        features: [
            'Vue océan panoramique',
            'Accès plage privée',
            'Spa & wellness center',
            'Restaurant gastronomique',
            'Service voiturier',
            'Majordome personnel',
        ],
        location: 'Corniche Ouest, Dakar',
        status: 'available',
    },
    {
        id: '3',
        slug: 'coralie',
        name: 'Coralie',
        tagline: "L'harmonie entre nature et modernité",
        description: "Coralie propose un art de vivre unique où architecture contemporaine et environnement naturel se conjuguent harmonieusement. Nichée dans le quartier paisible de Ngor, cette résidence offre un refuge de sérénité à quelques minutes du centre-ville. Un havre de paix où les familles s'épanouissent dans un cadre verdoyant et sécurisé.",
        coverImage: 'https://placehold.co/1920x1080/0A0A0A/8B6914?text=Coralie',
        images: [
            'https://placehold.co/1920x1080/0A0A0A/8B6914?text=Coralie+Gallery+1',
            'https://placehold.co/1920x1080/1A1A2E/8B6914?text=Coralie+Gallery+2',
            'https://placehold.co/1920x1080/0A0A0A/8B6914?text=Coralie+Gallery+3',
        ],
        virtualTours: [],
        features: [
            'Jardins tropicaux',
            'Piscine familiale',
            'Aire de jeux enfants',
            'Espace coworking',
            'Local vélos',
            'Parking visiteurs',
        ],
        location: 'Ngor, Dakar',
        status: 'coming_soon',
    },
    {
        id: '4',
        slug: 'shiramba',
        name: 'Shiramba',
        tagline: "L'excellence architecturale africaine",
        description: "Shiramba célèbre l'héritage architectural africain réinterprété avec audace et modernité. Située dans la nouvelle ville de Diamniadio, cette résidence visionnaire marie traditions séculaires et innovations durables. Un projet qui incarne l'Afrique de demain : ambitieuse, créative et résolument tournée vers l'avenir.",
        coverImage: 'https://placehold.co/1920x1080/0A0A0A/C9A84C?text=Shiramba',
        images: [
            'https://placehold.co/1920x1080/0A0A0A/C9A84C?text=Shiramba+Gallery+1',
            'https://placehold.co/1920x1080/1A1A2E/C9A84C?text=Shiramba+Gallery+2',
            'https://placehold.co/1920x1080/0A0A0A/C9A84C?text=Shiramba+Gallery+3',
            'https://placehold.co/1920x1080/1A1A2E/C9A84C?text=Shiramba+Gallery+4',
            'https://placehold.co/1920x1080/0A0A0A/C9A84C?text=Shiramba+Gallery+5',
        ],
        virtualTours: [],
        features: [
            'Architecture bioclimatique',
            'Matériaux locaux nobles',
            'Énergie solaire intégrée',
            'Récupération eaux de pluie',
            'Artisanat local',
            'Centre communautaire',
        ],
        location: 'Diamniadio, Dakar',
        status: 'coming_soon',
    },
]

export function getAllProjects(): Project[] {
    return projects
}

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((p) => p.slug === slug)
}

export function getProjectsWithVirtualTours(): Project[] {
    return projects.filter((p) => p.virtualTours.length > 0)
}

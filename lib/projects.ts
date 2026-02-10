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
        coverImage: '/projects/lynea/rooftop-aerien.jpg',
        images: [
            '/projects/lynea/rooftop-aerien.jpg',
            '/projects/lynea/facade-principale.jpg',
            '/projects/lynea/facade-angle.jpg',
            '/projects/lynea/chambre-artistique.png',
            '/projects/lynea/cuisine-marbre.jpg',
        ],
        virtualTours: [
            {
                id: 'lynea-living',
                name: 'Appartement témoin',
                thumbnail: 'https://placehold.co/400x300/f6f6f8/b91c2e?text=VR+Lynea',
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
        coverImage: '/projects/divinity/piscine-panoramique.jpg',
        images: [
            '/projects/divinity/piscine-panoramique.jpg',
            '/projects/divinity/chambre-2.jpg',
            '/projects/divinity/chambre-1.jpg',
            '/projects/divinity/cuisine-1.jpg',
            '/projects/divinity/cuisine-2.jpg',
            '/projects/divinity/terrasse-piscine-ocean-1.jpg',
            '/projects/divinity/terrasse-piscine-ocean-2.jpg',
            '/projects/divinity/piscine-lounge-artistique.jpg',
            '/projects/divinity/terrasse-piscine-ocean-3.jpg',
            '/projects/divinity/piscine-lounge-nuageux.jpg',
            '/projects/divinity/terrasse-famille.jpg',
            '/projects/divinity/salle-bain-moderne.jpg',
            '/projects/divinity/salon-spacieux.jpg',
        ],
        virtualTours: [
            {
                id: 'divinity-piscine',
                name: 'Piscine & Rooftop',
                thumbnail: '/360/divinity/piscine.jpg',
                panoramaUrl: '/360/divinity/piscine.jpg',
                initialView: { pitch: 0, yaw: 180, hfov: 110 },
            },
            {
                id: 'divinity-salon',
                name: 'Salon Principal',
                thumbnail: '/360/divinity/salon.jpg',
                panoramaUrl: '/360/divinity/salon.jpg',
                initialView: { pitch: 0, yaw: 90, hfov: 110 },
            },
            {
                id: 'divinity-salon-vue-mer',
                name: 'Salon Vue Mer',
                thumbnail: '/360/divinity/salon-vue-mer.jpg',
                panoramaUrl: '/360/divinity/salon-vue-mer.jpg',
                initialView: { pitch: 0, yaw: 180, hfov: 110 },
            },
            {
                id: 'divinity-chambre',
                name: 'Suite Parentale',
                thumbnail: '/360/divinity/chambre.png',
                panoramaUrl: '/360/divinity/chambre.png',
                initialView: { pitch: 0, yaw: 0, hfov: 110 },
            },
            {
                id: 'divinity-sport',
                name: 'Salle de Sport',
                thumbnail: '/360/divinity/salle-sport.png',
                panoramaUrl: '/360/divinity/salle-sport.png',
                initialView: { pitch: 0, yaw: 90, hfov: 110 },
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
        coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2xMz2h5KKpJ-4L1hfbxx2pUmZHZ6Tm-soQ5YCBX4Sy5_yVrfT_XRE8-z-mfAwUPjziNArSf63RI-iA4YLPY04j_mGV3G-u-reIYfj2HDx9IPnJuRH4VdQRZKL_xSLzYjxUf89I_4_8pEtZ6Ep87kVHSoCXIcbCpou2RmJzeiV53ZMwkfxejFuy-tJH1SuasmMPhv6i2bR8QIbPl60-dtCLzqaMl7mQm47goDI72YtcAOvrfT16-5nAy6E5NFru-a6sCnO37VZ5t4J',
        images: [
            'https://lh3.googleusercontent.com/aida-public/AB6AXuC2xMz2h5KKpJ-4L1hfbxx2pUmZHZ6Tm-soQ5YCBX4Sy5_yVrfT_XRE8-z-mfAwUPjziNArSf63RI-iA4YLPY04j_mGV3G-u-reIYfj2HDx9IPnJuRH4VdQRZKL_xSLzYjxUf89I_4_8pEtZ6Ep87kVHSoCXIcbCpou2RmJzeiV53ZMwkfxejFuy-tJH1SuasmMPhv6i2bR8QIbPl60-dtCLzqaMl7mQm47goDI72YtcAOvrfT16-5nAy6E5NFru-a6sCnO37VZ5t4J',
            'https://placehold.co/1920x1080/f6f6f8/b91c2e?text=Coralie+Gallery+2',
            'https://placehold.co/1920x1080/ffffff/b91c2e?text=Coralie+Gallery+3',
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
        coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvRtN9HKSvIfBQ5_gSDg-5sQenc28HsM2UKn9ivlkP9SPXzkn-WxzC_feVqkl7huDFMzVu8UlXWagq5AeGQYBJAbrC3qYQROp8_Dz9dKJeC8CBdeBarzINEhcan4CvsVsohrbEt1w0A3iCutU3A4ZAqyBN5KizRHN3xJn88X9HBxsIMYIo2nIx_eUyzlAHdM4hULJshfip4zMOlopSQ9nxn_nTEe9dgbnJt5CRYHULgE4IwRaCGaZaMwd2xIL2AEfBAomtNgLCNPup',
        images: [
            'https://lh3.googleusercontent.com/aida-public/AB6AXuAvRtN9HKSvIfBQ5_gSDg-5sQenc28HsM2UKn9ivlkP9SPXzkn-WxzC_feVqkl7huDFMzVu8UlXWagq5AeGQYBJAbrC3qYQROp8_Dz9dKJeC8CBdeBarzINEhcan4CvsVsohrbEt1w0A3iCutU3A4ZAqyBN5KizRHN3xJn88X9HBxsIMYIo2nIx_eUyzlAHdM4hULJshfip4zMOlopSQ9nxn_nTEe9dgbnJt5CRYHULgE4IwRaCGaZaMwd2xIL2AEfBAomtNgLCNPup',
            'https://placehold.co/1920x1080/f6f6f8/b91c2e?text=Shiramba+Gallery+2',
            'https://placehold.co/1920x1080/ffffff/b91c2e?text=Shiramba+Gallery+3',
            'https://placehold.co/1920x1080/f6f6f8/b91c2e?text=Shiramba+Gallery+4',
            'https://placehold.co/1920x1080/ffffff/b91c2e?text=Shiramba+Gallery+5',
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

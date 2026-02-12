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
        description: "Lynea incarne la vision d'un habitat moderne et raffiné. Située sur l'Avenue Cheikh Anta Diop, cette résidence d'exception offre un cadre de vie unique où chaque détail a été pensé pour allier confort absolu et design avant-gardiste. Des appartements spacieux aux finitions haut de gamme, baignés de lumière naturelle, au cœur d'un quartier dynamique et prestigieux.",
        coverImage: '/projects/lynea/rooftop-aerien.jpg',
        images: [
            '/projects/lynea/rooftop-aerien.jpg',
            '/projects/lynea/facade-principale.jpg',
            '/projects/lynea/facade-angle.jpg',
            '/projects/lynea/chambre-artistique.png',
            '/projects/lynea/cuisine-marbre.jpg',
            '/projects/lynea/facade-nuit.jpg',
            '/projects/lynea/cuisine-marbre-2.jpg',
            '/projects/lynea/facade-terrasses.jpg',
            '/projects/lynea/facade-jour.png',
            '/projects/lynea/rooftop-jour.jpg',
            '/projects/lynea/salle-bain-moderne.jpg',
            '/projects/lynea/salle-bain-douche.jpg',
            '/projects/lynea/salon-tv-cuisine.png',
            '/projects/lynea/salon-ouvert.png',
            '/projects/lynea/salon-salle-manger.png',
        ],
        virtualTours: [
            {
                id: 'lynea-cuisine',
                name: 'Cuisine Moderne',
                thumbnail: '/360/lynea/cuisine.jpg',
                panoramaUrl: '/360/lynea/cuisine.jpg',
                initialView: { pitch: 0, yaw: 180, hfov: 110 },
            },
            {
                id: 'lynea-salon',
                name: 'Salon & Salle à Manger',
                thumbnail: '/360/lynea/salon.jpg',
                panoramaUrl: '/360/lynea/salon.jpg',
                initialView: { pitch: 0, yaw: 180, hfov: 110 },
            },
            {
                id: 'lynea-chambre',
                name: 'Suite Parentale',
                thumbnail: '/360/lynea/chambre.jpg',
                panoramaUrl: '/360/lynea/chambre.jpg',
                initialView: { pitch: 0, yaw: 90, hfov: 110 },
            },
            {
                id: 'lynea-couloir',
                name: 'Couloir & Ascenseurs',
                thumbnail: '/360/lynea/couloir.jpg',
                panoramaUrl: '/360/lynea/couloir.jpg',
                initialView: { pitch: 0, yaw: 0, hfov: 110 },
            },
            {
                id: 'lynea-chambre-moderne',
                name: 'Chambre Moderne',
                thumbnail: '/360/lynea/chambre-moderne.jpg',
                panoramaUrl: '/360/lynea/chambre-moderne.jpg',
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
        location: 'Avenue Cheikh Anta Diop, Dakar',
        status: 'available',
    },
    {
        id: '2',
        slug: 'divinity',
        name: 'Divinity',
        tagline: "Le luxe absolu face à l'océan",
        description: "Divinity redéfinit les standards du luxe résidentiel à Dakar. Implantée aux Mamelles, cette adresse d'exception offre une expérience de vie incomparable dans un quartier prisé offrant sérénité et prestige. Chaque détail a été pensé pour offrir un confort absolu. Des penthouses aux villas, Divinity est la promesse d'un art de vivre sans compromis.",
        coverImage: '/projects/divinity/piscine-panoramique.jpg',
        images: [
            '/projects/divinity/piscine-panoramique.jpg',
            '/projects/divinity/facade-angle-rue.jpg',
            '/projects/divinity/facade-terrasses-jour.jpg',
            '/projects/divinity/Façade divinity 3.jpg',
            '/projects/divinity/salle de sport Divinity.jpg',
            '/projects/divinity/salle de sport 2 DIVINITY.jpg',
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
                thumbnail: '/360/divinity/chambre.jpg',
                panoramaUrl: '/360/divinity/chambre.jpg',
                initialView: { pitch: 0, yaw: 0, hfov: 110 },
            },
            {
                id: 'divinity-sport',
                name: 'Salle de Sport',
                thumbnail: '/360/divinity/salle-sport.jpg',
                panoramaUrl: '/360/divinity/salle-sport.jpg',
                initialView: { pitch: 0, yaw: 90, hfov: 110 },
            },
            {
                id: 'divinity-salon-luxe',
                name: 'Salon Luxe Marbre',
                thumbnail: '/360/divinity/salon-luxe.jpg',
                panoramaUrl: '/360/divinity/salon-luxe.jpg',
                initialView: { pitch: 0, yaw: 180, hfov: 110 },
            },
            {
                id: 'divinity-piscine-rooftop',
                name: 'Piscine Rooftop Panoramique',
                thumbnail: '/360/divinity/piscine-rooftop.jpg',
                panoramaUrl: '/360/divinity/piscine-rooftop.jpg',
                initialView: { pitch: 0, yaw: 90, hfov: 110 },
            },
            {
                id: 'divinity-sport-ocean',
                name: 'Salle de Sport Océan',
                thumbnail: '/360/divinity/salle-sport-2.jpg',
                panoramaUrl: '/360/divinity/salle-sport-2.jpg',
                initialView: { pitch: 0, yaw: 0, hfov: 110 },
            },
            {
                id: 'divinity-salon-dining',
                name: 'Salon & Salle à Manger',
                thumbnail: '/360/divinity/salon-dining.jpg',
                panoramaUrl: '/360/divinity/salon-dining.jpg',
                initialView: { pitch: 0, yaw: 180, hfov: 110 },
            },
            {
                id: 'divinity-chambre-2',
                name: 'Chambre Moderne',
                thumbnail: '/360/divinity/chambre-2.jpg',
                panoramaUrl: '/360/divinity/chambre-2.jpg',
                initialView: { pitch: 0, yaw: 180, hfov: 110 },
            },
            {
                id: 'divinity-cuisine',
                name: 'Cuisine Océan',
                thumbnail: '/360/divinity/cuisine.jpg',
                panoramaUrl: '/360/divinity/cuisine.jpg',
                initialView: { pitch: 0, yaw: 90, hfov: 110 },
            },
        ],
        features: [
            'Vue océan panoramique',
            'Spa & wellness center',
            'Conciergerie',
            'Majordome personnel',
        ],
        location: 'Mamelles, Dakar',
        status: 'available',
    },
    {
        id: '3',
        slug: 'coralie',
        name: 'Coralie',
        tagline: "Luxe, Harmonie, Exception, Pieds dans l'eau",
        description: "Coralie propose un art de vivre unique où architecture contemporaine et environnement naturel se conjuguent harmonieusement. Implantée sur la prestigieuse Corniche Ouest, cette résidence offre des vues imprenables sur l'océan Atlantique. Un havre de paix où les familles s'épanouissent dans un cadre d'exception, alliant luxe et tranquillité.",
        coverImage: '/projects/coralie/facade-nuit.jpg',
        images: [
            '/projects/coralie/salon-decoratif.jpg',
            '/projects/coralie/chambre-vue-mer.jpg',
            '/projects/coralie/salon-salle-manger.jpg',
            '/projects/coralie/grand-salon.jpg',
            '/projects/coralie/salle-bain-luxe.jpg',
            '/projects/coralie/facade-nuit.jpg',
            '/projects/coralie/facade-jour.jpg',
            '/projects/coralie/entree.jpg',
            '/projects/coralie/facade-piscine.jpg',
            '/projects/coralie/entree-nuit.jpg',
            '/projects/coralie/facade-plage.jpg',
        ],
        virtualTours: [],
        features: [
            'Piscines individuelles et collectives',
            'Vue Ocean pour chaque appartement',
            'Accès Plage privée',
        ],
        location: 'Corniche Ouest, Dakar',
        status: 'coming_soon',
    },
    {
        id: '4',
        slug: 'shiramba',
        name: 'Shiramba',
        tagline: "L'excellence architecturale africaine",
        description: "Shiramba célèbre l'héritage architectural africain réinterprété avec audace et modernité. Située à Diamniadio, cette résidence visionnaire marie traditions séculaires et innovations durables. Un projet qui incarne l'Afrique de demain : ambitieuse, créative et résolument tournée vers l'avenir.",
        coverImage: '/projects/shiramba/facade-rue.jpg',
        images: [
            '/projects/shiramba/facade-rue.jpg',
            '/projects/shiramba/facade-couleurs.jpg',
            '/projects/shiramba/chambre-plafond.jpg',
            '/projects/shiramba/cuisine-beige.jpg',
            '/projects/shiramba/cuisine-vue.jpg',
            '/projects/shiramba/facade-paysage.jpg',
            '/projects/shiramba/facade-nuit.jpg',
            '/projects/shiramba/facade-crepuscule.jpg',
            '/projects/shiramba/salon-salle-manger.jpg',
            '/projects/shiramba/salle-bain-miroir.jpg',
            '/projects/shiramba/salon-famille.jpg',
            '/projects/shiramba/facade-complete.jpg',
            '/projects/shiramba/facade-angle-jour.jpg',
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
        location: 'Diamniadio',
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

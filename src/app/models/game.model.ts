export interface Game {
    id: number;
    name: string;
    genre: string;
    platform: string;
    status: 'A jouer' | 'En cours' | 'Terminé';
    releaseDate: Date;
    rating?: number;
    coverUrl?: string;
}
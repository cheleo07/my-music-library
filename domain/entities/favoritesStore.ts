import { Album } from "./album";

export interface FavoritesStore {
    favorites: Album[];
    addFavorite: (album: Album) => void;
    removeFavorite: (album: Album) => void;
}
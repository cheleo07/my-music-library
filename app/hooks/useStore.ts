import { FavoritesStore } from '@/domain/entities/favoritesStore';
import { create } from 'zustand'

const useFavoritesStore = create<FavoritesStore>((set) => ({
    favorites: [],
    addFavorite: (album) => set((state) => {
        const alreadyInFavorites = state.favorites.some(fav => fav.collectionId === album.collectionId);
        if (alreadyInFavorites) return state;
        return {
          favorites: [...state.favorites, album],
        };
      }),
    removeFavorite: (albumToRemove) => set((state) => ({
        favorites: state.favorites.filter(album => album.collectionId !== albumToRemove.collectionId),
      })),
}));

export default useFavoritesStore;
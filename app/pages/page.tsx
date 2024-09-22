"use client";
import { useState, useEffect } from 'react';
import ButtonComponent from "../components/button";
import AddIcon from '@mui/icons-material/Add';
import { InputComponent } from "../components/input";
import { SearchAlbums } from '../../domain/useCases/searchAlbum';
import { AlbumRepository } from '../../infrastructure/repositories/albumRepository';
import { Album } from '@/domain/entities/album';
import useFavoritesStore from '../hooks/useStore';
import ClearIcon from '@mui/icons-material/Clear';

export default function Home() {
  const albumRepo = new AlbumRepository();
  const [searchTerm, setSearchTerm] = useState('');
  const [albums, setAlbums] = useState<Album[]>([]);
  const {favorites, addFavorite, removeFavorite} = useFavoritesStore();

  const searchAlbums = new SearchAlbums(albumRepo);

  const handleSearch = async (term: string) => {
    if(term){
      const results = await searchAlbums.execute(term);
      setAlbums(results);
    }else{
      setAlbums([]);
    }
  };

  useEffect(() => {
    handleSearch(searchTerm);
  }, [searchTerm]);


  return (
    <div className="page-container">
      <main className="main-content">
        <div className="search-section">
          <InputComponent
            name="search"
            variant="filled"
            placeholder="Search for Albums"
            startIcon
            value={searchTerm} 
            onChange={setSearchTerm}
          />
        </div>
        <div className="results-section">
          <div className="album-list">
            {albums.map((album: Album) => (
              <div key={album.collectionId} className="album-card">
                <img src={album.artworkUrl100} alt={album.collectionName} className="album-image" />
                <p className="album-name">{album.collectionName}</p>
                <ButtonComponent 
                  name="favorite-btn" 
                  variant="contained" 
                  type="button" 
                  text="Add" 
                  startIcon={<AddIcon/>}
                  onClick={() => addFavorite(album)}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="favorites-section">
          <h2 className="section-title">Favorites</h2>
          <div className="album-list">
            {favorites.map((album: Album) => (
              <div key={album.collectionId} className="album-card">
                <img src={album.artworkUrl100} alt={album.collectionName} className="album-image" />
                <p className="album-name">{album.collectionName}</p>
                <ButtonComponent 
                  name="remove-btn" 
                  variant="contained" 
                  type="button" 
                  text="Remove" 
                  startIcon={<ClearIcon />}
                  onClick={() => removeFavorite(album)}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

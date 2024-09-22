import { Album } from '../entities/album';

export interface IAlbumRepository {
  searchAlbums(searchTerm: string): Promise<Album[]>;
}
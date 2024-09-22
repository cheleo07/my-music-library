import { IAlbumRepository } from '../../domain/repositories/IAlbumRepository';
import { searchAlbums as fetchAlbums } from '../apis/itunesApi';
import { Album } from '../../domain/entities/album';

export class AlbumRepository implements IAlbumRepository {
  async searchAlbums(term: string): Promise<Album[]> {
    const albums = await fetchAlbums(term);
    return albums.map((album: Album) => ({
      collectionId: album.collectionId,
      collectionName: album.collectionName,
      artworkUrl100: album.artworkUrl100,
    }));
  }
}

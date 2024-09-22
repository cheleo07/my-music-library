import { IAlbumRepository } from '../repositories/IAlbumRepository';

export class SearchAlbums {
  constructor(private albumRepo: IAlbumRepository) {}

  async execute(searchTerm: string) {
    return await this.albumRepo.searchAlbums(searchTerm);
  }
}
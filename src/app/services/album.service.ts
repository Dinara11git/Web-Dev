import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from '../models/album.model';
import { Photo } from '../models/photo.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  // Получить все альбомы
  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.apiUrl}/albums`);
  }

  // Получить один альбом по ID
  getAlbum(id: number): Observable<Album> {
    return this.http.get<Album>(`${this.apiUrl}/albums/${id}`);
  }

  // Получить фотографии альбома
  getAlbumPhotos(id: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.apiUrl}/albums/${id}/photos`);
  }

  // Обновить альбом
  updateAlbum(album: Album): Observable<Album> {
    return this.http.put<Album>(`${this.apiUrl}/albums/${album.id}`, album);
  }

  // Удалить альбом
  deleteAlbum(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/albums/${id}`);
  }
}
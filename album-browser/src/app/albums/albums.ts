import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router'; // Добавьте NavigationEnd
import { AlbumService } from '../services/album.service';
import { Album } from '../models/album.model';
import { filter } from 'rxjs/operators'; // Добавьте filter

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './albums.html',
  styleUrl: './albums.css',
})
export class Albums implements OnInit {
  albums: Album[] = [];
  loading = true;
  error = '';

  constructor(
    private albumService: AlbumService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadAlbums();
    
    // Подписка на события навигации
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      // Проверяем, что текущий URL - это /albums
      if (event.url === '/albums') {
        console.log('Albums page visited, reloading data');
        this.loadAlbums();
      }
    });
  }

  loadAlbums(): void {
    this.loading = true;
    console.log('Loading albums...');
    this.albumService.getAlbums().subscribe({
      next: (data) => {
        console.log('Albums loaded:', data.length);
        this.albums = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load albums. Please try again.';
        this.loading = false;
        console.error('Error loading albums:', err);
      }
    });
  }

  viewAlbum(id: number): void {
    this.router.navigate(['/albums', id]);
  }

  deleteAlbum(id: number, event: Event): void {
    event.stopPropagation();
    
    if (confirm('Are you sure you want to delete this album?')) {
      this.albumService.deleteAlbum(id).subscribe({
        next: () => {
          this.albums = this.albums.filter(album => album.id !== id);
        },
        error: (err) => {
          console.error('Error deleting album:', err);
          alert('Failed to delete album. Please try again.');
        }
      });
    }
  }
}
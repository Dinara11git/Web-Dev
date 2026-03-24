import { Component, OnInit, ChangeDetectorRef } from '@angular/core'; // Добавьте ChangeDetectorRef
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../services/album.service';
import { Album } from '../models/album.model';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './album-detail.html',
  styleUrl: './album-detail.css',
})
export class AlbumDetail implements OnInit {
  album: Album | null = null;
  editedTitle = '';
  loading = true;
  saving = false;
  saveSuccess = false;
  saveError = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService,
    private cdr: ChangeDetectorRef  // Добавьте это
  ) {
    console.log('✅ AlbumDetail constructor called');
  }

  ngOnInit(): void {
    console.log('✅ AlbumDetail ngOnInit called');
    this.loadAlbum();
  }

  loadAlbum(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('📌 ID from URL:', id);
    
    const numericId = Number(id);
    console.log('🔢 Numeric ID:', numericId);
    
    if (isNaN(numericId)) {
      console.log('❌ Invalid ID');
      this.router.navigate(['/albums']);
      return;
    }

    console.log('🔄 Calling getAlbum with ID:', numericId);
    
    this.albumService.getAlbum(numericId).subscribe({
      next: (data) => {
        console.log('✅ Data received:', data);
        this.album = data;
        this.editedTitle = data.title;
        this.loading = false;
        console.log('🎉 Album loaded successfully');
        
        // ПРИНУДИТЕЛЬНОЕ ОБНОВЛЕНИЕ ПРЕДСТАВЛЕНИЯ
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('❌ Error in subscription:', err);
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  saveTitle(): void {
    console.log('💾 Saving title:', this.editedTitle);
    if (!this.album || this.editedTitle.trim() === '') return;

    const updatedAlbum: Album = {
      ...this.album,
      title: this.editedTitle.trim()
    };

    this.saving = true;
    this.albumService.updateAlbum(updatedAlbum).subscribe({
      next: () => {
        console.log('✅ Update successful');
        this.album = updatedAlbum;
        this.saving = false;
        this.saveSuccess = true;
        this.cdr.detectChanges();
        setTimeout(() => {
          this.saveSuccess = false;
          this.cdr.detectChanges();
        }, 3000);
      },
      error: (err) => {
        console.error('❌ Update error:', err);
        this.saving = false;
        this.saveError = 'Failed to update';
        this.cdr.detectChanges();
      }
    });
  }

  goBack(): void {
  console.log('👈 Going back to albums');
  // Переход с принудительной перезагрузкой
  this.router.navigate(['/albums'], { skipLocationChange: false }).then(() => {
    window.location.reload(); // Временное решение для проверки
  });
}
}
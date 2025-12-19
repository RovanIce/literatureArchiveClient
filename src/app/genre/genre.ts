import { Component } from '@angular/core';
import { GenreData } from './genre-data';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-genre',
  imports: [AsyncPipe],
  templateUrl: './genre.html',
  styleUrl: './genre.css'
})
export class Genre {
      genres$:Observable<GenreData[]>;
      constructor(private http: HttpClient){
        this.genres$ = http.get<GenreData[]>(environment.apiurl+"api/Genres");
      }
}

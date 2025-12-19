import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { NovelData } from './novel-data';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-novel',
  imports: [AsyncPipe],
  templateUrl: './novel.html',
  styleUrl: './novel.css'
})
export class Novel {
    novels$: Observable<NovelData[]>;
    constructor(http: HttpClient){
      this.novels$ = http.get<NovelData[]>(environment.apiurl+"api/Novels");
    }
}
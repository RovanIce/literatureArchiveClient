import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, UntypedFormGroup, Validators } from '@angular/forms';
import { environment } from '../../environments/environment';
import { GenreSubmit } from './genre-submit';
import { NovelSubmit } from './novel-submit';

@Component({
  selector: 'app-submit',
  imports: [ReactiveFormsModule],
  templateUrl: './submit.html',
  styleUrl: './submit.css'
})
export class Submit implements OnInit {
  constructor(private http:HttpClient){}
    form!: UntypedFormGroup;
    form2!: UntypedFormGroup;
  ngOnInit(): void {
        this.form = new UntypedFormGroup({
      keyword : new FormControl('',Validators.required),
      rating: new FormControl('',Validators.required),
      genre1: new FormControl('',Validators.required)
    });
            this.form2 = new UntypedFormGroup({
      isbn : new FormControl('',Validators.required),
      genreId: new FormControl('',Validators.required),
      title: new FormControl('',Validators.required),
      author: new FormControl('',Validators.required)
    });
  }
  PostGenre(){
    let genresub = <GenreSubmit>{ 
      keyword: this.form.controls['keyword'].value,
      rating: this.form.controls['rating'].value,
      genre1: this.form.controls['genre1'].value
    }
  this.http.post(environment.apiurl + "api/Genres", genresub)
    .subscribe({
      next: res => {
        console.log('Genre posted', res);
        this.form.reset();
      },
      error: err => console.error('Genre POST failed', err)
    });
  }

    PostNovel(){
    let novelsub = <NovelSubmit>{ 
      isbn: Number(this.form2.controls['isbn'].value),
      genreId: Number(this.form2.controls['genreId'].value),
      title: this.form2.controls['title'].value,
      author: this.form2.controls['author'].value
    }
       this.http.post(environment.apiurl + 'api/Novels', novelsub)
    .subscribe({
      next: res => {
        console.log('Novel posted', res);
        this.form2.reset();
      },
      error: err => console.error('Post failed', err)
    });
  }

}

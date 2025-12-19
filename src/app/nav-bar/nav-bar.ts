import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../auth/auth-service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink,
    MatToolbar,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar implements OnInit, OnDestroy {
  private destroy = new Subject();
  isloggedin!: boolean;
  constructor(public authservice:AuthService){
    authservice.authstatus.pipe(takeUntil(this.destroy)).subscribe(result => {
      this.isloggedin = result;
    });
  }
  ngOnInit(): void {
    this.isloggedin = this.authservice.IsAuthenticated();
  }
  ngOnDestroy(): void {
    this.destroy.next(true);
    this.destroy.complete();
  }
}
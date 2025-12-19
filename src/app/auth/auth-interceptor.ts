import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from './auth-service';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const auth_service = inject(AuthService);
  const token = auth_service.GetToken();
  const router = inject(Router);
  if(token){
    const AuthReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    });
    return next(AuthReq);
  }
  return next(req).pipe(catchError(err=>{
    if(err.status == 401){
      router.navigate(['login']);
    }
    return throwError(()=> err);
  }));
};
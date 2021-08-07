import { HttpClient, HttpErrorResponse, HttpResponse, HttpResponseBase } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, pipe, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import {
  UserRegister,
  UserLogin,
  UserToken,
  ServerMessage,
} from '../interfaces/interfaces';
import { EndpointService } from './endpoint.service';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(
    private http: HttpClient,
    private endopointService: EndpointService,
    private messageService: MessageService
  ) {}

  /**
   * Register user and show message of the status.
   * @param userRegister - Properties from user register form.
   * @returns {ServerMessage} - Message from server.
   */
  public userSignUp(userRegister: UserRegister): Observable<ServerMessage> {
    return this.http.post<ServerMessage>(
      this.endopointService.getUrlByMethodName('user-sign-up'),
      userRegister
    ).pipe(
      map((result: ServerMessage) => {
        this.messageService.add(result.message)
        return result;
      }),
      catchError((err: HttpErrorResponse) => {
        this.messageService.add(err.error.message);
        return throwError(err)
      }

      )
    )
  }

  /**
   *
   * @param userLogin - Properties from user login form.
   * @returns {UserToken} - User token for authentication.
   */
  public userSignIn(userLogin: UserLogin): Observable<HttpResponse<UserToken> | HttpErrorResponse> {
    return this.http
      .post<HttpResponse<UserToken>>(
        this.endopointService.getUrlByMethodName('user-sign-in'),
        userLogin
      )
      .pipe(
        map((userToken) => {
          localStorage.setItem('userToken', JSON.stringify(userToken));
          return userToken;
        })
      );
  }
}
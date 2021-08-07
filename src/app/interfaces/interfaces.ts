import { HttpResponse } from "@angular/common/http"

export interface Config {
    url: string
}

export interface UserRegister {
  name: string;
  username: string;
  email: string;
  password: string;
  roles: [string];
}

export interface UserLogin {
    username: string,
    password: string
}

export interface UserToken {
    auth: string,
    token: string
}

export interface ServerMessage {
    message: string
}
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { ServerMessage, UserRegister } from 'src/app/interfaces/interfaces';
import { MessageService } from 'src/app/services/message.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    role: new FormControl(''),
  });

  public loading = false;
  public submitted = false;
  public returnUrl: string = '';

  get f() {
    return this.registerForm.controls;
  }

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    this.formBuild();
  }
  /**
   * Submit for button.
   */
  public onSubmit(): void {
    this.submitted = true;

    if (!this.registerForm.invalid) {
      this.userService.userSignUp({
        ...this.registerForm.value,
        roles: ['user'],
      });
    }
  }

  /**
   * Form builder with validators.
   */
  private formBuild(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
}

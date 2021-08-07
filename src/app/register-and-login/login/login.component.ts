import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { ServerMessage, UserToken } from 'src/app/interfaces/interfaces';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  public loading = false;
  public submitted = false;

  /**
   * Helper getter for form controls eaasier access.
   */
  get f() {
    return this.loginForm.controls;
  }

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.formBuild();
  }

  /**
   * Submit for button.
   */
  public onSubmit(): void {
    this.submitted = true;
    if (!this.loginForm.invalid) {
      this.userService.userSignIn(this.loginForm.value);
    }
  }

  /**
   * Form builder with validators.
   */
  private formBuild(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
}

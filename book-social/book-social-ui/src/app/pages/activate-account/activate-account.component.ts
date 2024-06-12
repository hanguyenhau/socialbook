import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/services/authentication.service";

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrl: './activate-account.component.scss'
})
export class ActivateAccountComponent {
  message: string = '';
  isOkay = true;
  submitted: boolean = false;

  constructor(
    private router: Router,
    private authServicer: AuthenticationService,
  ) {
  }

  onCodeComplete(event: string) {
    this.confirmAccount(event);
  }

  redirectToLogin() {
    this.router.navigate(["login"]);
  }

  private confirmAccount(token: any) {
    this.authServicer.confirm({token})
      .subscribe({
        next:()=>{
          this.message = 'Your account has been successfully activated.\nNow you can proceed to login';
          this.submitted = true;
          this.isOkay = true;
        },
        error:() =>{
          this.message = 'Token has been expired or invalid';
          this.submitted = true;
          this.isOkay = false;
        }
      });
  }
}

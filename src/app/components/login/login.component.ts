import { Component, OnDestroy, Renderer } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [UserService]
})
export class LoginComponent implements OnDestroy {

    loginForm = new FormGroup({
        username: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required]),
        rememberCheck: new FormControl('')
    });
    constructor(
        private renderer: Renderer,
        private _userService : UserService,
        private router : Router
        ) {
        this.renderer.setElementClass(document.body, 'bg-gradient-primary', true);
    }

    ngOnDestroy(): void {
        this.renderer.setElementClass(document.body, 'bg-gradient-primary', false);
    }

    onSubmit() {
        this._userService.loginUser(this.loginForm.controls.username.value, this.loginForm.controls.password.value).subscribe(
            response => {
                localStorage.setItem('token', response.token);
            },
            error => {
                (document.getElementById('errorMessage') as HTMLElement).classList.add('alert');
                (document.getElementById('errorMessage') as HTMLElement).classList.add('alert-danger');
                if (error.status == 502)
                    (document.getElementById('errorMessage') as HTMLElement).innerHTML = "Hubo un error conectando a la base de datos";
                else if (error.status == 403) {
                    if (error.error.message == "USER_NOT_ACTIVE")
                        (document.getElementById('errorMessage') as HTMLElement).innerHTML = "Ya no tiene acceso al sistema";
                } else if (error.status == 304) {
                    console.log("no verificado");
                    this.router.navigate(['verify-account']);
                }
            }
        );
    }
    
}
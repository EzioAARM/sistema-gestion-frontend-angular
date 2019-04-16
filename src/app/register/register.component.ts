import { Component, OnInit, Renderer, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { CustomValidators } from '../custom-validators';
import { log } from 'util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {

    registerForm = new FormGroup({
        name: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        username: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required, CustomValidators.passwordValidator]),
        verifyPassword: new FormControl('', [Validators.required])
    }, [CustomValidators.verifyPassword]);

    constructor(private renderer: Renderer) {
        this.renderer.setElementClass(document.body, 'bg-gradient-primary', true);
    }

    ngOnInit() {

    }

    ngOnDestroy() {
        this.renderer.setElementClass(document.body, 'bg-gradient-primary', false);
    }

    onSubmit() {
        console.log(this.registerForm.value);
    }

    changeClass(elementId : string, toRemove : string, toAdd : string) {
        (document.getElementById(elementId) as HTMLElement).classList.remove(toRemove);
        (document.getElementById(elementId) as HTMLElement).classList.add(toAdd);
    }

    onChangedPassword(passwordData : string) {
        let passwordLenght : number = 0;
        let passwordSuperLenght : number = 0;
        let passwordUltraLenght : number = 0;
        let passwordUpper : number = 0;
        let passwordLower : number = 0;
        let passwordSymbol : number = 0;
        let passwordNumber : number = 0;
        let progressBarWith : number = 0;
        if (passwordData.length >= 10) {
            passwordLenght = 40;
            if (passwordData.length >= 13) {
                passwordSuperLenght += 15;
            }
            if (passwordData.length >= 13) {
                passwordUltraLenght += 15;
            }
            this.changeClass('enoughLenght', 'text-danger', 'text-success');
            this.changeClass('iconLenght', 'fa-times', 'fa-check');
        } else {
            passwordLenght = 0;
            this.changeClass('enoughLenght', 'text-success', 'text-danger');
            this.changeClass('iconLenght', 'fa-check', 'fa-times');
        }

        let upperRegex = new RegExp('[A-Z]');
        if (upperRegex.test(passwordData)) {
            passwordUpper = 10;
        }
        if (passwordUpper === 10) {
            this.changeClass('containUpper', 'text-danger', 'text-success');
            this.changeClass('iconUpper', 'fa-times', 'fa-check');
        } else {
            this.changeClass('containUpper', 'text-success', 'text-danger');
            this.changeClass('iconUpper', 'fa-check', 'fa-times');
        }

        let lowerRegex = new RegExp('[a-z]');
        if (lowerRegex.test(passwordData)) {
            passwordLower = 10;
        }
        if (passwordLower === 10) {
            this.changeClass('containLower', 'text-danger', 'text-success');
            this.changeClass('iconLower', 'fa-times', 'fa-check');
        } else {
            this.changeClass('containLower', 'text-success', 'text-danger');
            this.changeClass('iconLower', 'fa-check', 'fa-times');
        }

        let numberRegex = new RegExp('[1-9]');
        if (numberRegex.test(passwordData)) {
            passwordNumber = 10;
        }
        if (passwordNumber === 10) {
            this.changeClass('containNumber', 'text-danger', 'text-success');
            this.changeClass('iconNumber', 'fa-times', 'fa-check');
        } else {
            this.changeClass('containNumber', 'text-success', 'text-danger');
            this.changeClass('iconNumber', 'fa-check', 'fa-times');
        }

        progressBarWith = passwordLenght + passwordSuperLenght + passwordUltraLenght + passwordLower + passwordNumber + passwordSymbol + passwordUpper;
        (document.getElementById('progressBarPassword') as HTMLElement).style.width = String(progressBarWith) + "%";
        if (progressBarWith >= 0 && progressBarWith <= 40) {
            this.changeClass('progressBarPassword', 'bg-gradient-warning', 'bg-gradient-danger');
            this.changeClass('progressBarPassword', 'bg-gradient-success', 'bg-gradient-danger');
        } else if (progressBarWith >= 41 && progressBarWith <= 75) {
            this.changeClass('progressBarPassword', 'bg-gradient-danger', 'bg-gradient-warning');
            this.changeClass('progressBarPassword', 'bg-gradient-success', 'bg-gradient-warning');
        } else {
            this.changeClass('progressBarPassword', 'bg-gradient-danger', 'bg-gradient-success');
            this.changeClass('progressBarPassword', 'bg-gradient-warning', 'bg-gradient-success');
        }
    }
}

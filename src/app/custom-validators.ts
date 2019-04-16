import { AbstractControl, FormGroup } from '@angular/forms';

export class CustomValidators {

    static verifyPassword(group: FormGroup) {
        let password = group.controls.password.value;
        let confirmPassword = group.controls.verifyPassword.value;

        return password === confirmPassword ? null : { notSame: true }     
    }

    static passwordValidator(control : AbstractControl){
        let passwordLenght : number = 0;
        let passwordSuperLenght : number = 0;
        let passwordUltraLenght : number = 0;
        let passwordUpper : number = 0;
        let passwordLower : number = 0;
        let passwordSymbol : number = 0;
        let passwordNumber : number = 0;
        let progressBarWith : number = 0;
        let passwordData : string = control.value;
        if (passwordData.length >= 10) {
            passwordLenght = 40;
            if (passwordData.length >= 13) {
                passwordSuperLenght += 15;
            }
            if (passwordData.length >= 13) {
                passwordUltraLenght += 15;
            }
        }

        let upperRegex = new RegExp('[A-Z]');
        if (upperRegex.test(passwordData)) {
            passwordUpper = 10;
        }

        let lowerRegex = new RegExp('[a-z]');
        if (lowerRegex.test(passwordData)) {
            passwordLower = 10;
        }

        let numberRegex = new RegExp('[1-9]');
        if (numberRegex.test(passwordData)) {
            passwordNumber = 10;
        }

        progressBarWith = passwordLenght + passwordSuperLenght + passwordUltraLenght + passwordLower + passwordNumber + passwordSymbol + passwordUpper;
        if (progressBarWith <= 40) {
            return {
                password : true
            };
        } else {
            return null;
        }
    }

}

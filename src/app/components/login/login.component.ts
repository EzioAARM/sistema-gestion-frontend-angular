import { Component, OnDestroy, Renderer } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {

    constructor(private renderer: Renderer) {
        this.renderer.setElementClass(document.body, 'bg-gradient-primary', true);
    }

    ngOnDestroy(): void {
        this.renderer.setElementClass(document.body, 'bg-gradient-primary', false);
    }
    
}
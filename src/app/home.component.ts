import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    template: `
        <h1>Home Page</h1>
        <button (click)="onClick()">Go to GitHub Users</button>
        `
})

export class HomeComponent{

    constructor(private _router: Router){

    }

    onClick(){
        this._router.navigate(['github']);
    }

}
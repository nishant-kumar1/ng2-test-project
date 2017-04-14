import { Component } from '@angular/core'
import { Hero } from './hero'
@Component({
    selector: 'hero-component',
    moduleId : module.id,
    templateUrl : 'hero-form.component.html'
})

export class HeroComponent {
    //Array of powers
    powers = ['fly', 'run', 'laser'];

    //Initializing the model.
    myModel = new Hero(42, '', '', '');

    submitted = false;

    onSubmit(){this.submitted = true;}

    btnSuccessOnClick(){
        this.myModel = new Hero(1,'', '', '');
    }

}

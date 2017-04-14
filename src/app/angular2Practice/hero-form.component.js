"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var hero_1 = require("./hero");
var HeroComponent = (function () {
    function HeroComponent() {
        //Array of powers
        this.powers = ['fly', 'run', 'laser'];
        //Initializing the model.
        this.myModel = new hero_1.Hero(42, '', '', '');
        this.submitted = false;
    }
    HeroComponent.prototype.onSubmit = function () { this.submitted = true; };
    HeroComponent.prototype.btnSuccessOnClick = function () {
        this.myModel = new hero_1.Hero(1, '', '', '');
    };
    return HeroComponent;
}());
HeroComponent = __decorate([
    core_1.Component({
        selector: 'hero-component',
        moduleId: module.id,
        templateUrl: 'hero-form.component.html'
    })
], HeroComponent);
exports.HeroComponent = HeroComponent;
//# sourceMappingURL=hero-form.component.js.map
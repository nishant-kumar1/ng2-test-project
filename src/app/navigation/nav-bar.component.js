"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var NavigationBarComponent = (function () {
    function NavigationBarComponent() {
    }
    return NavigationBarComponent;
}());
NavigationBarComponent = __decorate([
    core_1.Component({
        selector: "nav-bar",
        templateUrl: "/app/navigation/nav-bar.component.html",
        styles: ["\n        .nav.navbar-nav{ font-size : 15px;}\n        #searchForm {margin-right : 100px;}\n    "]
    })
], NavigationBarComponent);
exports.NavigationBarComponent = NavigationBarComponent;
//# sourceMappingURL=nav-bar.component.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var platform_browser_1 = require("@angular/platform-browser");
var events_app_component_1 = require("./events-app.component");
var competitiveAnalysis_component_1 = require("./competitiveAnalysis/competitiveAnalysis.component");
var glossary_component_1 = require("./glossary/glossary.component");
var home_component_1 = require("./home/home.component");
var links_component_1 = require("./links/links.component");
var appRoutes = [
    { path: "Home", component: home_component_1.HomeComponent },
    { path: "CompetitiveAnalysis", component: competitiveAnalysis_component_1.CompetitiveAnalysisComponent },
    { path: "Glossary", component: glossary_component_1.GlossaryComponent },
    { path: "Link", component: links_component_1.LinkComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot(appRoutes)
        ],
        declarations: [
            events_app_component_1.eventsAppComponent,
            competitiveAnalysis_component_1.CompetitiveAnalysisComponent,
            glossary_component_1.GlossaryComponent,
            home_component_1.HomeComponent,
            links_component_1.LinkComponent
        ],
        bootstrap: [events_app_component_1.eventsAppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
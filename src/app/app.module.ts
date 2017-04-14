import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule }   from '@angular/forms';

import { eventsAppComponent } from './events-app.component'
import { CompetitiveAnalysisComponent } from './competitiveAnalysis/competitiveAnalysis.component'
import { GlossaryComponent } from './glossary/glossary.component'
import { HomeComponent } from './home/home.component'
import { LinkComponent } from './links/links.component'
import { HeroComponent } from './angular2Practice/hero-form.component'

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: "Home", component: HomeComponent },
    { path: "CompetitiveAnalysis", component: CompetitiveAnalysisComponent },
    { path: "Glossary", component: GlossaryComponent },
    { path: "Link", component: LinkComponent },
    { path: "Ng2Practise", component: HeroComponent }
];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        eventsAppComponent,
        CompetitiveAnalysisComponent,
        GlossaryComponent,
        HomeComponent,
        LinkComponent,
        HeroComponent],
    bootstrap: [eventsAppComponent]
})

export class AppModule {

}

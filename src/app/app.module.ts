import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'
import { eventsAppComponent } from './events-app.component'
import { CompetitiveAnalysisComponent } from './competitiveAnalysis/competitiveAnalysis.component'
import { GlossaryComponent } from './glossary/glossary.component'
import { HomeComponent } from './home/home.component'
import { LinkComponent } from './links/links.component'

const appRoutes: Routes = [
    { path: "Home", component: HomeComponent },
    { path: "CompetitiveAnalysis", component: CompetitiveAnalysisComponent },
    { path: "Glossary", component: GlossaryComponent },
    { path: "Link", component: LinkComponent }
];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        eventsAppComponent,
        CompetitiveAnalysisComponent,
        GlossaryComponent,
        HomeComponent,
        LinkComponent],
    bootstrap: [eventsAppComponent]
})

export class AppModule {

}

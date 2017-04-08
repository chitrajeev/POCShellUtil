import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { DisclaimerComponent } from './components/disclaimer/disclaimer.component';
import { SubmissionComponent } from './components/submissiontable/submissiontable.component';
import {
    ButtonModule,
    DialogModule,
    DataTableModule,
    SharedModule,
    InputTextModule
} from 'primeng/primeng';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        DisclaimerComponent,
        SubmissionComponent
    ],
    imports: [
        UniversalModule,FormsModule, ButtonModule, DialogModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        DataTableModule,InputTextModule,
        SharedModule, RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'disclaimer', component: DisclaimerComponent },
            { path: 'submission', component: SubmissionComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModule {
}

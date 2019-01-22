import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatToolbarModule, MatButtonModule, MatIcon, MatSelect, MatSelectModule, MatListModule, MatCardModule} from '@angular/material';
import { MatInputModule, MatNativeDateModule, MatSidenavModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { InscriptionComponent } from './inscription/inscription.component';
import {MatIconModule} from '@angular/material/icon';
import { PanierComponent } from './panier/panier.component';
import {MatFormFieldModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConnexionComponent } from './connexion/connexion.component';
import { ProfileComponent } from './profile/profile.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { PayComponent } from './pay/pay.component';

const routes: Routes = [
  { path : '', component : HomeComponent},
  { path : 'inscription', component : InscriptionComponent},
  { path : 'connexion', component : ConnexionComponent},
  { path : 'panier', component : PanierComponent},
  { path : 'profile', component : ProfileComponent},
  { path : 'testPay', component : PayComponent},
  { path : '**', component : ErrorComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent,
    InscriptionComponent,
    ErrorComponent,
    PanierComponent,
    ConnexionComponent,
    ProfileComponent,
    PayComponent,
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule,
    RouterModule.forRoot(routes),
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatSidenavModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatListModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

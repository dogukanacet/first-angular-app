import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule, MatButtonToggleModule, MatDialogModule, MatCheckboxModule, MatTableModule, MatDividerModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import { MovieComponent } from './components/movie/movie.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';






// import { UserService } from './services/user/user.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    MovieComponent,

  ],
  imports: [
    MatExpansionModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    HttpClientModule,
    NgbModule,
    MatDialogModule,
    MatCheckboxModule,
    MatTableModule,
    MatDividerModule
  ],
  providers: [
    MovieComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

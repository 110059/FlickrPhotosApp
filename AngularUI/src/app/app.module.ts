import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { ImageOnlyPipe } from './shared/image-only.pipe';

const appRoutes: Routes = [ 
  { 
    path: '',
    redirectTo: 'photos',
    pathMatch: 'full'
  },  { 
    path: 'photos',
    component: PhotoListComponent
  },
  { 
    path: '**', 
    component: PageNotFoundComponent 
  }

  ];

@NgModule({
  declarations: [
    AppComponent,
    PhotoListComponent,
    PageNotFoundComponent,
    NavBarComponent,
    ImageOnlyPipe
  ],
  imports: [
    BrowserModule,    
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,   
    RouterModule.forRoot(appRoutes),            
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule { }

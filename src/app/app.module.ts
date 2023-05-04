import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateThoughtComponent } from './components/thoughts/create-thought/create-thought.component';
import { FormsModule } from '@angular/forms';
import { ListThoughtsComponent } from './components/thoughts/list-thoughts/list-thoughts.component';
import { ThoughtComponent } from './components/thoughts/thought/thought.component';
import { HttpClientModule } from '@angular/common/http';
import { ThoughtExclusionComponent } from './components/thoughts/thought-exclusion/thought-exclusion.component';
import { EditThoughtComponent } from './components/thoughts/edit-thought/edit-thought.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CreateThoughtComponent,
    ListThoughtsComponent,
    ThoughtComponent,
    ThoughtExclusionComponent,
    EditThoughtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

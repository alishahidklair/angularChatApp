import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


import { LoginComponent } from './login/login.component';
import { ChatComponent } from './chat/chat.component';
import { ChatInputComponent } from './chat/chat-input/chat-input.component';
import { ChatHistoryComponent } from './chat/chat-history/chat-history.component';
import { ChatSearchHistoryComponent } from './chat/chat-search-history/chat-search-history.component';
import { ChatRoomListComponent } from './chat/chat-room-list/chat-room-list.component';
import { ChatSearchRoomListComponent } from './chat/chat-search-room-list/chat-search-room-list.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChatComponent,
    ChatInputComponent,
    ChatHistoryComponent,
    ChatSearchHistoryComponent,
    ChatRoomListComponent,
    ChatSearchRoomListComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

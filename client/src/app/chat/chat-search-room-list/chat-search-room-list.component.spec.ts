import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatSearchRoomListComponent } from './chat-search-room-list.component';

describe('ChatSearchRoomListComponent', () => {
  let component: ChatSearchRoomListComponent;
  let fixture: ComponentFixture<ChatSearchRoomListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatSearchRoomListComponent]
    });
    fixture = TestBed.createComponent(ChatSearchRoomListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

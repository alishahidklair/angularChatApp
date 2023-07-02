import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatSearchHistoryComponent } from './chat-search-history.component';

describe('ChatSearchHistoryComponent', () => {
  let component: ChatSearchHistoryComponent;
  let fixture: ComponentFixture<ChatSearchHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatSearchHistoryComponent]
    });
    fixture = TestBed.createComponent(ChatSearchHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

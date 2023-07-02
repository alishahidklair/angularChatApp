import { Component, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css']
})
export class ChatInputComponent {
  @ViewChild('inputField') inputField!: ElementRef;

  messageText!: string;
  isInputValid!: boolean;

  checkInput() {
    this.isInputValid = this.messageText.trim().length > 0;
  }

  sendMessage() {
    if (this.isInputValid) {
      console.log('Sending message:', this.messageText);
      // Add your logic to send the message to the server or update the chat history
      this.messageText = ''; // Clear the input field after sending the message
      this.isInputValid = false; // Reset the input validity
      this.setFocusOnInputField(); // Move the cursor back to the input field

    }
  }
  setFocusOnInputField() {
    this.inputField.nativeElement.focus();
  }

// Add functions for Keyboard Enter
// https://stackoverflow.com/questions/62929308/ts-error-type-event-is-missing-the-following-properties-from-type-keyboardev
//   handleKeyPress(event: KeyboardEvent) {
//     if (event.key === 'Enter') {
//       this.sendMessage();
//       event.preventDefault(); // Prevent the default form submission behavior
//     }
//   }

//   useEffect(callback: Function, dependencies: any[]) {
//     const savedCallback = useRef<Function>();

//     useEffect(() => {
//       savedCallback.current = callback;
//     }, [callback]);

//     useEffect(() => {
//       function tick() {
//         if (savedCallback.current) {
//           savedCallback.current();
//         }
//       }

//       const id = setInterval(tick, 1000);
//       return () => clearInterval(id);
//     }, [dependencies]);
//   }

//   useEffect(() => {
//     const handleKeyPress = (event: KeyboardEvent) => {
//       if (event.key === 'Enter') {
//         this.sendMessage();
//         event.preventDefault(); // Prevent the default form submission behavior
//       }
//     };

//     useEventListener('keydown', handleKeyPress);
//   }, []);

//   useEventListener(eventName: 'keydown' | 'keyup', handler: ({key}: KeyboardEvent) => void) {
//     const savedHandler = useRef<({key}: KeyboardEvent) => void>(handler);

//     useEffect(() => {
//       savedHandler.current = handler;
//     }, [handler]);

//     useEffect(() => {
//       const eventListener = (event: KeyboardEvent) => savedHandler.current(event);

//       window.addEventListener(eventName, eventListener);

//       return () => {
//         window.removeEventListener(eventName, eventListener);
//       };
//     }, [eventName]);
//   }
// }




}

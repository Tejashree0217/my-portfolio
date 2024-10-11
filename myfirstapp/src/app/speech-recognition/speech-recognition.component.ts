import { CommonModule } from '@angular/common';
import { Component, ElementRef ,ViewChild} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';

declare var window: any;

@Component({
  selector: 'app-speech-recognition',
  standalone: true,
  imports: [FormsModule,CommonModule,ButtonModule,DropdownModule,TableModule],
  templateUrl: './speech-recognition.component.html',
  styleUrl: './speech-recognition.component.scss'
})
export class SpeechRecognitionComponent {


  // Use ViewChild to access the input elements
  @ViewChild('nameInput') nameInput!: ElementRef;
  @ViewChild('emailInput') emailInput!: ElementRef;


  recognition: any;

  constructor() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    this.recognition = new SpeechRecognition();
    this.recognition.lang = 'en-US';
    this.recognition.interimResults = false;
    this.recognition.maxAlternatives = 1;
  }

  // startVoiceTyping(field: string, inputRef: ElementRef): void {
  //   const placeholder = inputRef.nativeElement.placeholder;
  //   console.log(`Starting voice typing for: ${placeholder}`);

  //   this.recognition.onstart = () => {
  //     console.log('Speech recognition started');
  //   };

  //   // On receiving the speech result
  //   this.recognition.onresult = (event: any) => {
  //     const transcript = event.results[0][0].transcript;
  //     console.log(`Speech recognized: ${transcript}`);

  //     // Assign the speech result to the appropriate input field
  //     inputRef.nativeElement.value = transcript;
  //   };

  //   // Handle any errors
  //   this.recognition.onerror = (event: any) => {
  //     console.error('Speech recognition error:', event.error);
  //   };

  //   // Start speech recognition
  //   this.recognition.start();
  // }



  startVoiceTyping(field: string): void {
    const inputRef = field === 'name' ? this.nameInput : this.emailInput;
    const placeholder = inputRef.nativeElement.placeholder;
    console.log(`Starting voice typing for: ${placeholder}`);

    this.recognition.onstart = () => {
      console.log('Speech recognition started');
    };

    // On receiving the speech result
    this.recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      console.log(`Speech recognized: ${transcript}`);

      // Assign the speech result to the appropriate input field
      inputRef.nativeElement.value = transcript;
    };

    // Handle any errors
    this.recognition.onerror = (event: any) => {
      console.error('Speech recognition error:', event.error);
    };

    // Start speech recognition
    this.recognition.start();
  }

}

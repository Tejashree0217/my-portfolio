import { Routes } from '@angular/router';
import { SpeechRecognitionComponent } from './speech-recognition/speech-recognition.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'speech-recognition', component: SpeechRecognitionComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to home if no path is provided
  { path: '**', redirectTo: '/home' } // Redirect any unknown path to home

];

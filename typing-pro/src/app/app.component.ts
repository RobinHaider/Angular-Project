import { Component } from '@angular/core';
import {lorem} from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputText = '';
  randomText = lorem.sentence();

  onChangeInput(value: string){
    this.inputText = value;
    // let randomTextArr = this.randomText.split('');
    // let inputTextArr = inputText.split('');

    // for(let i=0; i<inputTextArr.length; i++){

    // }
  }

  correctColor(randomLetter: string, inputLetter: string){
    if(!inputLetter){
      return 'pending';
    }

    return randomLetter === inputLetter? 'correct' : 'incorrect';
  }
}

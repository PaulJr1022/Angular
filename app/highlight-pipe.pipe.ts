import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlightPipe',
  standalone: true
})
export class HighlightPipePipe implements PipeTransform {

  transform(value: string, serachtext: string): string {

    // const UserInput : string = serachtext[0];
    // const output1 = value.filter(a =>a.toLowerCase().includes(UserInput.toLowerCase()));
    // return output1;

    // if(!serachtext) return value;
    // const re = new RegExp("\\b("+serachtext+"\\b)", 'igm');
    // value= value.replace(re, '<span class="highlighted-text">$&</span>');
    // return value;

    //let title = serachtext[0];

    if(!serachtext){
      return value;
    }
    
    const regex = new RegExp (serachtext, 'gi');
    const match = value.match(regex);

    if(!match){
      return value;
    }

    return value.replace(regex,  `<mark>${match[0]}</mark>`);

  }

}

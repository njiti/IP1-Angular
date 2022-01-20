import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  constructor(public sanitizer: DomSanitizer) {}

  transform(value: string, username: string): any {

    return this.sanitizer.bypassSecurityTrustHtml('<div style="background: linear-gradient(90deg, #00dbde, #fc00ff); -webkit-background-clip: text; -webkit-text-fill-color: transparent; width: 20%; margin: auto; position: relative; bottom: 1rem; font-weight: bold">' + username + '</div>');
  }

}

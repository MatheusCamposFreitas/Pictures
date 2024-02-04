import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vmessage',
  templateUrl: './vmessage.component.html',
  styleUrl: './vmessage.component.css'
})
export class VmessageComponent {
  
  @Input() message: string = '';

}

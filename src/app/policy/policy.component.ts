import { Component } from '@angular/core';

@Component({
  selector: 'policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})
export class PolicyComponent {
  onAccept(): void {
    // Add your logic here for handling the accept button click
    console.log('Accept button clicked');
  }
}

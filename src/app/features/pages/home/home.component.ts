import { Component } from '@angular/core';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('enterAnimation', [
      transition(':enter', [
        query('.fadeinAnim', [
          style({ opacity: 0, transform: 'translateX(-20px)' }),
          stagger('400ms', [
            animate('500ms 0.5s ease-in-out',
              style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true }),
      ])
    ])
  ]
})
export class HomeComponent {

  buttonText = 'explore';

}

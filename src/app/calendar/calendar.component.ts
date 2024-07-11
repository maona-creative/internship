import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PickerInteractionMode } from 'igniteui-angular';

import { IGX_TIME_PICKER_DIRECTIVES } from 'igniteui-angular';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    IGX_TIME_PICKER_DIRECTIVES,
    FormsModule
  ],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {

  public date = new Date();
}

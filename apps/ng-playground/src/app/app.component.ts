import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InputmaskElementPredicate, InputmaskOptions, NgInputmaskModule } from '@luisbytes/ng-inputmask';

@Component({
  standalone: true,
  imports: [RouterModule, NgInputmaskModule],
  selector: 'inputmask-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  maskOptions: InputmaskOptions = {
    mask: '99 99',
    placeholder: ''
  };

  readonly maskPredicate: InputmaskElementPredicate = async (el) => (el as HTMLInputElement);

}

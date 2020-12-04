import { Component } from '@angular/core';

@Component({
  selector: 'yiran-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'yiran-sys';

  ngOnInit(): void {
    console.log('app init')
  }


}

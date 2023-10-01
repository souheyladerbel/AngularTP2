import { Component } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  logo =
    'https://d6xcmfyh68wv8.cloudfront.net/learn-content/uploads/2019/09/register-company-online.png';
  title = 'Welcome to our website';
}

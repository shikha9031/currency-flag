import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'currency-flag-number';
  selectedCurrency = {
    "countryCode": "IN",
    "countryName": "India",
    "currencyCode": "INR",
    "population": "1173108018",
    "capital": "New Delhi",
    "continentName": "Asia",
    "Currency": "Indian rupee",
    "CurrencySymbol": "₹"
  };
  selectedVal(event:any){
    console.log(event)
  }
}

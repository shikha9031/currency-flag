import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as data from '../json/newCurrencyJson.json';

@Component({
  selector: 'lib-currency-flag',
  templateUrl: './currency-flag.component.html',
  styleUrls: ['./currency-flag.component.scss']
})
export class CurrencyFlagComponent implements OnInit {
  
  @Input() selectedCurrency:any;
  @Output() currency  = new EventEmitter<any>();
  currencyArray = [
    {
      "countryCode": "",
      "countryName": "",
      "currencyCode": "",
      "population": "",
      "capital": "",
      "continentName": "",
      "Currency": "",
      "CurrencySymbol": ""
    }
  ];
  openCurrencyBox = false;
  searchText:any;
  constructor() { }

  ngOnInit(): void {
    this.currencyArray = data.response;
  }
  selectedConCurrency(list:any){
    this.selectedCurrency = list;
    this.currency.emit(this.selectedCurrency);
  }

}

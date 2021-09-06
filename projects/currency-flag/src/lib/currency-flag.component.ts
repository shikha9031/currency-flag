import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import * as data from '../json/newCurrencyJson.json';

@Component({
  selector: 'lib-currency-flag',
  templateUrl: './currency-flag.component.html',
  styleUrls: ['./currency-flag.component.scss']
})
export class CurrencyFlagComponent implements OnInit , OnChanges{
  
  @Input() selectedCurrency:any;
  @Output() currency  = new EventEmitter<any>();
  @Input() showCurrencyAndFlag = false;
  @Input() showFlagAndCountry = false;
  searchItem = 'currency';

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
  ngOnChanges(change: SimpleChanges){
    if(this.showFlagAndCountry){
        this.searchItem = "country";
    }
  }
  selectedConCurrency(list:any){
    this.selectedCurrency = list;
    this.currency.emit(this.selectedCurrency);
  }

}

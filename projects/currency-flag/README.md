# CurrencyFlag

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.0.

## Installation

```
npm i currency-flag

```

## Usage

> App.module.ts file

```

            import { CurrencyFlagModule } from 'currency-flag';
            @NgModule({
            declarations: [AppComponent],
            imports: [BrowserModule, CurrencyFlagModule],
            bootstrap: [AppComponent]
            })
            class AppModule {}

```

> HTML file

```
<lib-currency-flag 
[selectedCurrency]="selectedCurrency"
(currency)="selectedVal($event)"
[showCurrencyAndFlag]="true">
</lib-currency-flag>

```

> TS file

```
selectedCurrency =
{
    "countryCode": "IN",
    "countryName": "India",
    "currencyCode": "INR",
    "population": "1173108018",
    "capital": "New Delhi",
    "continentName": "Asia",
    "Currency": "Indian rupee",
    "CurrencySymbol": "₹"
};
```

> Note: selectedVal($event) is a function which you can use it in ts file.

| Input                 | Values        | 
| -------------         |:-------------:| 
| showCurrencyAndFlag   | boolean value (true/ false) | 
| showFlagAndCountry    | boolean value (true/ false)      |  


## Preview
![CurrencyFlag Demo](https://raw.githubusercontent.com/shikha9031/currency-flag/master/src/assets/images/currency.png)

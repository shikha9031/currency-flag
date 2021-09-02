# CurrencyFlag

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.0.

## Installation

```
npm i currency-flag

```

## Usage

> Note: Add CurrencyFlagModule to your list of module imports:

```
        {
            import { CurrencyFlagModule } from 'currency-flag';
            @NgModule({
            declarations: [AppComponent],
            imports: [BrowserModule, CurrencyFlagModule],
            bootstrap: [AppComponent]
            })
            class AppModule {}
        }
```

## You can then use this library in your templates:

```
<lib-currency-flag [selectedCurrency]="selectedCurrency" (currency)="selectedVal($event)"></lib-currency-flag>

```

> Note: You need to provide initial value

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

> selectedVal($event) is a function which you can use it in ts file.

> Demo

/src/assets/images/currency.png

# CurrencyFlag

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.0.

## Installation

> Note: npm i currency-flag

## Usage

> Note: Add CurrencyFlagModule to your list of module imports:

import { CurrencyFlagModule } from 'ng-click-outside';

@NgModule({
declarations: [AppComponent],
imports: [BrowserModule, CurrencyFlagModule],
bootstrap: [AppComponent]
})
class AppModule {}

## You can then use this library in your templates:

> Note: <lib-currency-flag [selectedCurrency]="selectedCurrency" (currency)="selectedVal($event)"></lib-currency-flag>

You need to provide initial value

> Note: selectedCurrency = {

    "countryCode": "IN",
    "countryName": "India",
    "currencyCode": "INR",
    "population": "1173108018",
    "capital": "New Delhi",
    "continentName": "Asia",
    "Currency": "Indian rupee",
    "CurrencySymbol": "₹"

};

## Code scaffolding

Run `ng generate component component-name --project currency-flag` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project currency-flag`.

> Note: Don't forget to add `--project currency-flag` or else it will be added to the default project in your `angular.json` file.

## Build

Run `ng build currency-flag` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build currency-flag`, go to the dist folder `cd dist/currency-flag` and run `npm publish`.

## Running unit tests

Run `ng test currency-flag` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

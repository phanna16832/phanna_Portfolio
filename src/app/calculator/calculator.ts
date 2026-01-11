import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculator.html',
  styleUrls: ['./calculator.css'],
})
export class Calculator {
  price ="";
  result = 0;

  rates = [6.00, 6.10, 6.20, 6.25, 6.30, 6.40, 6.45, 6.50, 6.55, 6.60, 6.70, 6.75];
  rate = this.rates[0]

  convertPriceFunction() {
  const priceValue = Number(this.price);
  const rateValue = Number(this.rate);

  if (isNaN(priceValue) || isNaN(rateValue) || rateValue === 0) {
    this.result = 0;
    return;
  }

  this.result = priceValue / rateValue;
}

}

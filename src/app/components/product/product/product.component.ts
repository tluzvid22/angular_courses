import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product, RatingRateEvent } from '../../../../types/types';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RatingModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  @Input() product!: Product;
  @Output() onRatingChange = new EventEmitter<RatingRateEvent>();

  emitEvent(event: any) {
    const product = this.product;
    const originalEvent = event.originalEvent;
    this.onRatingChange.emit({ originalEvent, product });
  }
}

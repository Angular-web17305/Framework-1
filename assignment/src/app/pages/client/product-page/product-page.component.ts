import { Component, OnInit, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/service/product.service';
@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})

export class ProductPageComponent {
  products!: IProduct[]
  constructor(
    private router: ActivatedRoute,
    private productService: ProductService
  ){
    this.productService.getProducts().subscribe(data => {
      this.products = data
    })
    }
  }

  // constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
  // ngOnInit() { }

  // ngAfterViewInit() {
  //   const rangeSlider = this.elementRef.nativeElement.querySelector('.price-range');
  //   const minAmount = this.elementRef.nativeElement.querySelector('#minamount');
  //   const maxAmount = this.elementRef.nativeElement.querySelector('#maxamount');
  //   const minPrice = rangeSlider.dataset.min;
  //   const maxPrice = rangeSlider.dataset.max;



  //   this.renderer.setProperty(rangeSlider, 'min', minPrice);
  //   this.renderer.setProperty(rangeSlider, 'max', maxPrice);
  //   this.renderer.setProperty(rangeSlider, 'value', [minPrice, maxPrice]);

  //   this.renderer.listen(rangeSlider, 'input', (event) => {
  //     const values = event.target.value.split(',');
  //     minAmount.value = '$' + values[0];
  //     maxAmount.value = '$' + values[1];
  //   });

  //   minAmount.value = '$' + rangeSlider.value.toString().split(',')[0];
  //   maxAmount.value = '$' + rangeSlider.value.toString().split(',')[1];

  // }




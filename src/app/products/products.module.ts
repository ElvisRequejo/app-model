import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductComponent } from './presentation/views/product/product.component';
import { PageProductComponent } from './presentation/pages/page-product/page-product.component';


@NgModule({
  declarations: [
    ProductComponent,
    PageProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  exports: [PageProductComponent]
})
export class ProductsModule { }

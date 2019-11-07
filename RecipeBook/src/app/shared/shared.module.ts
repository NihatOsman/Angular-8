import { NgModule } from '@angular/core';
import { DropdownDirective } from './dropdown.directive';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { AlertComponent } from './alert/alert.components';
import { PlaceHolderDirective } from './placeholder/placeholder.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    DropdownDirective,
    LoadingSpinnerComponent,
    AlertComponent,
    PlaceHolderDirective
  ],
  imports: [CommonModule],
  exports: [
    DropdownDirective,
    LoadingSpinnerComponent,
    AlertComponent,
    PlaceHolderDirective,
    CommonModule
  ],
  entryComponents: [AlertComponent]
})
export class SharedModule {}

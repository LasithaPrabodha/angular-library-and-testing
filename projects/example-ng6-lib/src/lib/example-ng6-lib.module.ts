import { NgModule } from '@angular/core';
import { ExampleNg6LibComponent } from './example-ng6-lib.component';
import { FooComponent } from './foo/foo.component';

@NgModule({
  declarations: [ExampleNg6LibComponent, FooComponent],
  imports: [
  ],
  exports: [ExampleNg6LibComponent,
  FooComponent]
})
export class ExampleNg6LibModule { }

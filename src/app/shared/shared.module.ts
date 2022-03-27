import { NgModule } from '@angular/core';
import { HighlightDirective } from './directives/highlight.directive';
import { ExponentialStrengthPipe } from './pipes/exponential-strength.pipe';

@NgModule({
  declarations: [
    HighlightDirective,
    ExponentialStrengthPipe
  ],
  imports: [],
  exports: [HighlightDirective, ExponentialStrengthPipe],
  providers: []
})
export class SharedModule { }

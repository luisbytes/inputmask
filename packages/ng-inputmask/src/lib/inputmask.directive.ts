import { Directive, ElementRef, Inject, Input, NgZone, OnChanges } from '@angular/core';
import { InputmaskElementPredicate, InputmaskOptions } from './types';

import _Inputmask from 'inputmask';
import type Inputmask from 'inputmask';

const InputmaskConstructor =
  (_Inputmask as unknown as { default?: Inputmask.Static }).default ||
  _Inputmask;

@Directive({
  selector: '[inputmask]'
})
export class InputmaskDirective implements OnChanges {
  private maskedElement: Inputmask.Instance | null = null;

  @Input() inputmask: InputmaskOptions = {};
  @Input() inputmaskElement?: InputmaskElementPredicate;

  constructor(
    @Inject(NgZone) private readonly ngZone: NgZone,
    @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
  ) { }

  async ngOnChanges(): Promise<void> {
    const predicate = this.inputmaskElement;

    if (!predicate) {
      throw new Error('inputmaskElement is required');
    }

    const predicateResult = await predicate(this.elementRef.nativeElement);

    if (this.inputmaskElement !== predicate) {
      return;
    }

    this.ngZone.runOutsideAngular(() => {
      this.maskedElement = new InputmaskConstructor(this.inputmask);

      this.maskedElement.mask(predicateResult);
    });
  }

}

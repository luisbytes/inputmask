import type Inputmask from 'inputmask';

export type InputmaskElementPredicate = (
  element: HTMLElement,
) => Promise<HTMLInputElement | HTMLTextAreaElement>;

export type InputmaskOptions = Inputmask.Options;

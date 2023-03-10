import { Directive, Input, } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * A helper directive to focus buttons. You will only need this if using a custom template
 */
export class FocusDirective {
    constructor(elm) {
        this.elm = elm;
    }
    ngOnChanges(changes) {
        if (changes.mwlFocus && this.mwlFocus === true) {
            this.elm.nativeElement.focus();
        }
    }
}
FocusDirective.ɵfac = function FocusDirective_Factory(t) { return new (t || FocusDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
FocusDirective.ɵdir = i0.ɵɵdefineDirective({ type: FocusDirective, selectors: [["", "mwlFocus", ""]], inputs: { mwlFocus: "mwlFocus" }, features: [i0.ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FocusDirective, [{
        type: Directive,
        args: [{
                selector: '[mwlFocus]',
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { mwlFocus: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWxhci1jb25maXJtYXRpb24tcG9wb3Zlci9zcmMvbGliL2ZvY3VzLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssR0FHTixNQUFNLGVBQWUsQ0FBQzs7QUFFdkI7O0dBRUc7QUFJSCxNQUFNLE9BQU8sY0FBYztJQUd6QixZQUFvQixHQUFlO1FBQWYsUUFBRyxHQUFILEdBQUcsQ0FBWTtJQUFHLENBQUM7SUFFdkMsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksRUFBRTtZQUM5QyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNoQztJQUNILENBQUM7OzRFQVRVLGNBQWM7bURBQWQsY0FBYztrREFBZCxjQUFjO2NBSDFCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTthQUN2Qjs7a0JBRUUsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlcyxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQSBoZWxwZXIgZGlyZWN0aXZlIHRvIGZvY3VzIGJ1dHRvbnMuIFlvdSB3aWxsIG9ubHkgbmVlZCB0aGlzIGlmIHVzaW5nIGEgY3VzdG9tIHRlbXBsYXRlXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttd2xGb2N1c10nLFxufSlcbmV4cG9ydCBjbGFzcyBGb2N1c0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIG13bEZvY3VzOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxtOiBFbGVtZW50UmVmKSB7fVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5td2xGb2N1cyAmJiB0aGlzLm13bEZvY3VzID09PSB0cnVlKSB7XG4gICAgICB0aGlzLmVsbS5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuICB9XG59XG4iXX0=
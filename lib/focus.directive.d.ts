import { ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * A helper directive to focus buttons. You will only need this if using a custom template
 */
export declare class FocusDirective implements OnChanges {
    private elm;
    mwlFocus: boolean;
    constructor(elm: ElementRef);
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDef<FocusDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<FocusDirective, "[mwlFocus]", never, { "mwlFocus": "mwlFocus"; }, {}, never>;
}

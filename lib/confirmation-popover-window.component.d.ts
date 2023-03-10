import { AfterViewInit } from '@angular/core';
import { ConfirmationPopoverWindowOptions } from './confirmation-popover-window-options.provider';
import * as i0 from "@angular/core";
/**
 * @internal
 */
export declare class ConfirmationPopoverWindowComponent implements AfterViewInit {
    options: ConfirmationPopoverWindowOptions;
    constructor(options: ConfirmationPopoverWindowOptions);
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<ConfirmationPopoverWindowComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ConfirmationPopoverWindowComponent, "mwl-confirmation-popover-window", never, {}, {}, never, never>;
}

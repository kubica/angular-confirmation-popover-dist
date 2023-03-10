import { ConfirmCancelEvent } from './confirmation-popover.directive';
import { TemplateRef } from '@angular/core';
import { ConfirmationPopoverOptions } from './confirmation-popover-options.provider';
import * as i0 from "@angular/core";
/**
 * @internal
 */
export declare class ConfirmationPopoverWindowOptions extends ConfirmationPopoverOptions {
    onConfirm: (event: ConfirmCancelEvent) => void;
    onCancel: (event: ConfirmCancelEvent) => void;
    onAfterViewInit: () => void;
    customTemplate: TemplateRef<any>;
    static ɵfac: i0.ɵɵFactoryDef<ConfirmationPopoverWindowOptions, never>;
    static ɵprov: i0.ɵɵInjectableDef<ConfirmationPopoverWindowOptions>;
}

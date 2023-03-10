import { ModuleWithProviders, InjectionToken } from '@angular/core';
import { ConfirmationPopoverOptions, ConfirmationPopoverOptionsInterface } from './confirmation-popover-options.provider';
import * as i0 from "@angular/core";
import * as i1 from "./confirmation-popover.directive";
import * as i2 from "./confirmation-popover-window.component";
import * as i3 from "./focus.directive";
import * as i4 from "@angular/common";
export declare const USER_OPTIONS: InjectionToken<string>;
export declare function optionsFactory(userOptions: ConfirmationPopoverOptions): ConfirmationPopoverOptions;
export declare class ConfirmationPopoverModule {
    static forRoot(options?: ConfirmationPopoverOptionsInterface): ModuleWithProviders<ConfirmationPopoverModule>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<ConfirmationPopoverModule, [typeof i1.ConfirmationPopoverDirective, typeof i2.ConfirmationPopoverWindowComponent, typeof i3.FocusDirective], [typeof i4.CommonModule], [typeof i1.ConfirmationPopoverDirective, typeof i3.FocusDirective]>;
    static ɵinj: i0.ɵɵInjectorDef<ConfirmationPopoverModule>;
}

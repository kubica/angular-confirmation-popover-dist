import { Directive, Input, Output, EventEmitter, HostListener, Injector, } from '@angular/core';
import { ConfirmationPopoverWindowComponent } from './confirmation-popover-window.component';
import { ConfirmationPopoverWindowOptions } from './confirmation-popover-window-options.provider';
import { positionElements } from 'positioning';
import * as i0 from "@angular/core";
import * as i1 from "./confirmation-popover-options.provider";
/**
 All properties can be set on the directive as attributes like so (use `ConfirmationPopoverModule.forRoot()` to configure them globally):
 ```html
 <button
   class="btn btn-outline-secondary"
   mwlConfirmationPopover
   [popoverTitle]="popoverTitle"
   [popoverMessage]="popoverMessage"
   placement="left"
   (confirm)="confirmClicked = true"
   (cancel)="cancelClicked = true"
   [(isOpen)]="isOpen">
    Show confirm popover!
  </button>
  ```
 */
export class ConfirmationPopoverDirective {
    /**
     * @internal
     */
    constructor(viewContainerRef, elm, defaultOptions, cfr, renderer) {
        this.viewContainerRef = viewContainerRef;
        this.elm = elm;
        this.defaultOptions = defaultOptions;
        this.cfr = cfr;
        this.renderer = renderer;
        /**
         * Whether to disable showing the popover. Default `false`.
         */
        this.isDisabled = false;
        /**
         * Will open or show the popover when changed.
         * Can be sugared with `isOpenChange` to emulate 2-way binding like so `[(isOpen)]="isOpen"`
         */
        this.isOpen = false;
        /**
         * Will emit when the popover is opened or closed
         */
        this.isOpenChange = new EventEmitter(true);
        /**
         * An expression that is called when the confirm button is clicked.
         */
        this.confirm = new EventEmitter();
        /**
         * An expression that is called when the cancel button is clicked.
         */
        this.cancel = new EventEmitter();
        this.eventListeners = [];
    }
    /**
     * @internal
     */
    ngOnInit() {
        this.isOpenChange.emit(false);
    }
    /**
     * @internal
     */
    ngOnChanges(changes) {
        if (changes.isOpen) {
            if (changes.isOpen.currentValue === true) {
                this.showPopover();
            }
            else {
                this.hidePopover();
            }
        }
    }
    /**
     * @internal
     */
    ngOnDestroy() {
        this.hidePopover();
    }
    /**
     * @internal
     */
    onConfirm(event) {
        this.confirm.emit(event);
        this.hidePopover();
    }
    /**
     * @internal
     */
    onCancel(event) {
        this.cancel.emit(event);
        this.hidePopover();
    }
    /**
     * @internal
     */
    togglePopover() {
        if (!this.popover) {
            this.showPopover();
        }
        else {
            this.hidePopover();
        }
    }
    onDocumentClick(event) {
        const closeOnOutsideClick = typeof this.closeOnOutsideClick !== 'undefined'
            ? this.closeOnOutsideClick
            : this.defaultOptions.closeOnOutsideClick;
        if (this.popover &&
            !this.elm.nativeElement.contains(event.target) &&
            !this.popover.location.nativeElement.contains(event.target) &&
            closeOnOutsideClick) {
            this.hidePopover();
        }
    }
    showPopover() {
        if (!this.popover && !this.isDisabled) {
            // work around for https://github.com/mattlewis92/angular-confirmation-popover/issues/65
            // otherwise the document click event gets fired after the click event
            // that triggered the popover to open (no idea why this is so)
            setTimeout(() => {
                this.eventListeners = [
                    this.renderer.listen('document', 'click', (event) => this.onDocumentClick(event)),
                    this.renderer.listen('document', 'touchend', (event) => this.onDocumentClick(event)),
                    this.renderer.listen('window', 'resize', () => this.positionPopover()),
                ];
            });
            const options = new ConfirmationPopoverWindowOptions();
            Object.assign(options, this.defaultOptions, {
                onConfirm: (event) => {
                    this.onConfirm(event);
                },
                onCancel: (event) => {
                    this.onCancel(event);
                },
                onAfterViewInit: () => {
                    this.positionPopover();
                },
            });
            const optionalParams = [
                'confirmText',
                'cancelText',
                'placement',
                'confirmButtonType',
                'cancelButtonType',
                'focusButton',
                'hideConfirmButton',
                'hideCancelButton',
                'popoverClass',
                'appendToBody',
                'customTemplate',
                'reverseButtonOrder',
                'popoverTitle',
                'popoverMessage',
            ];
            optionalParams.forEach((param) => {
                if (typeof this[param] !== 'undefined') {
                    options[param] = this[param];
                }
            });
            const componentFactory = this.cfr.resolveComponentFactory(ConfirmationPopoverWindowComponent);
            const childInjector = Injector.create({
                providers: [
                    {
                        provide: ConfirmationPopoverWindowOptions,
                        useValue: options,
                    },
                ],
            });
            this.popover = this.viewContainerRef.createComponent(componentFactory, this.viewContainerRef.length, childInjector);
            if (options.appendToBody) {
                document.body.appendChild(this.popover.location.nativeElement);
            }
            this.isOpenChange.emit(true);
        }
    }
    positionPopover() {
        if (this.popover) {
            const popoverElement = this.popover.location.nativeElement.children[0];
            positionElements(this.elm.nativeElement, popoverElement, this.placement || this.defaultOptions.placement, this.appendToBody || this.defaultOptions.appendToBody);
        }
    }
    hidePopover() {
        if (this.popover) {
            this.popover.destroy();
            delete this.popover;
            this.isOpenChange.emit(false);
            this.eventListeners.forEach((fn) => fn());
            this.eventListeners = [];
        }
    }
}
ConfirmationPopoverDirective.??fac = function ConfirmationPopoverDirective_Factory(t) { return new (t || ConfirmationPopoverDirective)(i0.????directiveInject(i0.ViewContainerRef), i0.????directiveInject(i0.ElementRef), i0.????directiveInject(i1.ConfirmationPopoverOptions), i0.????directiveInject(i0.ComponentFactoryResolver), i0.????directiveInject(i0.Renderer2)); };
ConfirmationPopoverDirective.??dir = i0.????defineDirective({ type: ConfirmationPopoverDirective, selectors: [["", "mwlConfirmationPopover", ""]], hostBindings: function ConfirmationPopoverDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.????listener("click", function ConfirmationPopoverDirective_click_HostBindingHandler() { return ctx.togglePopover(); });
    } }, inputs: { popoverTitle: "popoverTitle", popoverMessage: "popoverMessage", confirmText: "confirmText", cancelText: "cancelText", placement: "placement", confirmButtonType: "confirmButtonType", cancelButtonType: "cancelButtonType", focusButton: "focusButton", hideConfirmButton: "hideConfirmButton", hideCancelButton: "hideCancelButton", isDisabled: "isDisabled", isOpen: "isOpen", customTemplate: "customTemplate", popoverClass: "popoverClass", appendToBody: "appendToBody", reverseButtonOrder: "reverseButtonOrder", closeOnOutsideClick: "closeOnOutsideClick" }, outputs: { isOpenChange: "isOpenChange", confirm: "confirm", cancel: "cancel" }, features: [i0.????NgOnChangesFeature] });
/*@__PURE__*/ (function () { i0.??setClassMetadata(ConfirmationPopoverDirective, [{
        type: Directive,
        args: [{
                selector: '[mwlConfirmationPopover]',
            }]
    }], function () { return [{ type: i0.ViewContainerRef }, { type: i0.ElementRef }, { type: i1.ConfirmationPopoverOptions }, { type: i0.ComponentFactoryResolver }, { type: i0.Renderer2 }]; }, { popoverTitle: [{
            type: Input
        }], popoverMessage: [{
            type: Input
        }], confirmText: [{
            type: Input
        }], cancelText: [{
            type: Input
        }], placement: [{
            type: Input
        }], confirmButtonType: [{
            type: Input
        }], cancelButtonType: [{
            type: Input
        }], focusButton: [{
            type: Input
        }], hideConfirmButton: [{
            type: Input
        }], hideCancelButton: [{
            type: Input
        }], isDisabled: [{
            type: Input
        }], isOpen: [{
            type: Input
        }], customTemplate: [{
            type: Input
        }], isOpenChange: [{
            type: Output
        }], confirm: [{
            type: Output
        }], cancel: [{
            type: Output
        }], popoverClass: [{
            type: Input
        }], appendToBody: [{
            type: Input
        }], reverseButtonOrder: [{
            type: Input
        }], closeOnOutsideClick: [{
            type: Input
        }], togglePopover: [{
            type: HostListener,
            args: ['click']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybWF0aW9uLXBvcG92ZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWxhci1jb25maXJtYXRpb24tcG9wb3Zlci9zcmMvbGliL2NvbmZpcm1hdGlvbi1wb3BvdmVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLFlBQVksRUFPWixRQUFRLEdBTVQsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFFN0YsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDbEcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sYUFBYSxDQUFDOzs7QUFTL0M7Ozs7Ozs7Ozs7Ozs7OztHQWVHO0FBSUgsTUFBTSxPQUFPLDRCQUE0QjtJQTBIdkM7O09BRUc7SUFDSCxZQUNVLGdCQUFrQyxFQUNsQyxHQUFlLEVBQ2YsY0FBMEMsRUFDMUMsR0FBNkIsRUFDN0IsUUFBbUI7UUFKbkIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQ2YsbUJBQWMsR0FBZCxjQUFjLENBQTRCO1FBQzFDLFFBQUcsR0FBSCxHQUFHLENBQTBCO1FBQzdCLGFBQVEsR0FBUixRQUFRLENBQVc7UUEzRTdCOztXQUVHO1FBQ00sZUFBVSxHQUFZLEtBQUssQ0FBQztRQUVyQzs7O1dBR0c7UUFDTSxXQUFNLEdBQVksS0FBSyxDQUFDO1FBZ0JqQzs7V0FFRztRQUNPLGlCQUFZLEdBQTBCLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXZFOztXQUVHO1FBQ08sWUFBTyxHQUFxQyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXpFOztXQUVHO1FBQ08sV0FBTSxHQUFxQyxJ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LENBQUM7O3dHQTVTVSw0QkFBNEI7aUVBQTVCLDRCQUE0Qjt5R0FBNUIsbUJBQWU7O2tEQUFmLDRCQUE0QjtjQUh4QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjthQUNyQzs7a0JBTUUsS0FBSzs7a0JBS0wsS0FBSzs7a0JBS0wsS0FBSzs7a0JBS0wsS0FBSzs7a0JBS0wsS0FBSzs7a0JBTUwsS0FBSzs7a0JBTUwsS0FBSzs7a0JBTUwsS0FBSzs7a0JBS0wsS0FBSzs7a0JBS0wsS0FBSzs7a0JBS0wsS0FBSzs7a0JBTUwsS0FBSzs7a0JBY0wsS0FBSzs7a0JBS0wsTUFBTTs7a0JBS04sTUFBTTs7a0JBS04sTUFBTTs7a0JBS04sS0FBSzs7a0JBS0wsS0FBSzs7a0JBS0wsS0FBSzs7a0JBS0wsS0FBSzs7a0JBa0VMLFlBQVk7bUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0TGlzdGVuZXIsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIENvbXBvbmVudFJlZixcbiAgT25EZXN0cm95LFxuICBFbGVtZW50UmVmLFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgSW5qZWN0b3IsXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgQ29tcG9uZW50RmFjdG9yeSxcbiAgU2ltcGxlQ2hhbmdlcyxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maXJtYXRpb25Qb3BvdmVyV2luZG93Q29tcG9uZW50IH0gZnJvbSAnLi9jb25maXJtYXRpb24tcG9wb3Zlci13aW5kb3cuY29tcG9uZW50JztcbmltcG9ydCB7IENvbmZpcm1hdGlvblBvcG92ZXJPcHRpb25zIH0gZnJvbSAnLi9jb25maXJtYXRpb24tcG9wb3Zlci1vcHRpb25zLnByb3ZpZGVyJztcbmltcG9ydCB7IENvbmZpcm1hdGlvblBvcG92ZXJXaW5kb3dPcHRpb25zIH0gZnJvbSAnLi9jb25maXJtYXRpb24tcG9wb3Zlci13aW5kb3ctb3B0aW9ucy5wcm92aWRlcic7XG5pbXBvcnQgeyBwb3NpdGlvbkVsZW1lbnRzIH0gZnJvbSAncG9zaXRpb25pbmcnO1xuXG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpcm1DYW5jZWxFdmVudCB7XG4gIGNsaWNrRXZlbnQ6IE1vdXNlRXZlbnQ7XG59XG5cbi8qKlxuIEFsbCBwcm9wZXJ0aWVzIGNhbiBiZSBzZXQgb24gdGhlIGRpcmVjdGl2ZSBhcyBhdHRyaWJ1dGVzIGxpa2Ugc28gKHVzZSBgQ29uZmlybWF0aW9uUG9wb3Zlck1vZHVsZS5mb3JSb290KClgIHRvIGNvbmZpZ3VyZSB0aGVtIGdsb2JhbGx5KTpcbiBgYGBodG1sXG4gPGJ1dHRvblxuICAgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCJcbiAgIG13bENvbmZpcm1hdGlvblBvcG92ZXJcbiAgIFtwb3BvdmVyVGl0bGVdPVwicG9wb3ZlclRpdGxlXCJcbiAgIFtwb3BvdmVyTWVzc2FnZV09XCJwb3BvdmVyTWVzc2FnZVwiXG4gICBwbGFjZW1lbnQ9XCJsZWZ0XCJcbiAgIChjb25maXJtKT1cImNvbmZpcm1DbGlja2VkID0gdHJ1ZVwiXG4gICAoY2FuY2VsKT1cImNhbmNlbENsaWNrZWQgPSB0cnVlXCJcbiAgIFsoaXNPcGVuKV09XCJpc09wZW5cIj5cbiAgICBTaG93IGNvbmZpcm0gcG9wb3ZlciFcbiAgPC9idXR0b24+XG4gIGBgYFxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbXdsQ29uZmlybWF0aW9uUG9wb3Zlcl0nLFxufSlcbmV4cG9ydCBjbGFzcyBDb25maXJtYXRpb25Qb3BvdmVyRGlyZWN0aXZlXG4gIGltcGxlbWVudHMgT25EZXN0cm95LCBPbkNoYW5nZXMsIE9uSW5pdCB7XG4gIC8qKlxuICAgKiBUaGUgdGl0bGUgb2YgdGhlIHBvcG92ZXJcbiAgICovXG4gIEBJbnB1dCgpIHBvcG92ZXJUaXRsZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgYm9keSB0ZXh0IG9mIHRoZSBwb3BvdmVyLlxuICAgKi9cbiAgQElucHV0KCkgcG9wb3Zlck1lc3NhZ2U6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIHRleHQgb2YgdGhlIGNvbmZpcm0gYnV0dG9uLiBEZWZhdWx0IGBDb25maXJtYFxuICAgKi9cbiAgQElucHV0KCkgY29uZmlybVRleHQ6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIHRleHQgb2YgdGhlIGNhbmNlbCBidXR0b24uIERlZmF1bHQgYENhbmNlbGBcbiAgICovXG4gIEBJbnB1dCgpIGNhbmNlbFRleHQ6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIHBsYWNlbWVudCBvZiB0aGUgcG9wb3Zlci4gSXQgY2FuIGJlIGVpdGhlciBgdG9wYCwgYHJpZ2h0YCwgYGJvdHRvbWAgb3IgYGxlZnRgLiBEZWZhdWx0IGB0b3BgXG4gICAqL1xuICBASW5wdXQoKSBwbGFjZW1lbnQ6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIGJvb3RzdHJhcCBidXR0b24gdHlwZSBvZiB0aGUgY29uZmlybSBidXR0b24uIEl0IGNhbiBiZSBhbnkgc3VwcG9ydGVkIGJvb3RzdHJhcCBjb2xvciB0eXBlXG4gICAqIGUuZy4gYGRlZmF1bHRgLCBgd2FybmluZ2AsIGBkYW5nZXJgIGV0Yy4gRGVmYXVsdCBgc3VjY2Vzc2BcbiAgICovXG4gIEBJbnB1dCgpIGNvbmZpcm1CdXR0b25UeXBlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBib290c3RyYXAgYnV0dG9uIHR5cGUgb2YgdGhlIGNhbmNlbCBidXR0b24uIEl0IGNhbiBiZSBhbnkgc3VwcG9ydGVkIGJvb3RzdHJhcCBjb2xvciB0eXBlXG4gICAqIGUuZy4gYGRlZmF1bHRgLCBgd2FybmluZ2AsIGBkYW5nZXJgIGV0Yy4gRGVmYXVsdCBgZGVmYXVsdGBcbiAgICovXG4gIEBJbnB1dCgpIGNhbmNlbEJ1dHRvblR5cGU6IHN0cmluZztcblxuICAvKipcbiAgICogU2V0IHRvIGVpdGhlciBgY29uZmlybWAgb3IgYGNhbmNlbGAgdG8gZm9jdXMgdGhlIGNvbmZpcm0gb3IgY2FuY2VsIGJ1dHRvbi5cbiAgICogSWYgb21pdHRlZCwgYnkgZGVmYXVsdCBpdCB3aWxsIG5vdCBmb2N1cyBlaXRoZXIgYnV0dG9uLlxuICAgKi9cbiAgQElucHV0KCkgZm9jdXNCdXR0b246IHN0cmluZztcblxuICAvKipcbiAgICogV2hldGhlciB0byBoaWRlIHRoZSBjb25maXJtIGJ1dHRvbi4gRGVmYXVsdCBgZmFsc2VgLlxuICAgKi9cbiAgQElucHV0KCkgaGlkZUNvbmZpcm1CdXR0b246IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gaGlkZSB0aGUgY2FuY2VsIGJ1dHRvbi4gRGVmYXVsdCBgZmFsc2VgLlxuICAgKi9cbiAgQElucHV0KCkgaGlkZUNhbmNlbEJ1dHRvbjogYm9vbGVhbjtcblxuICAvKipcbiAgICogV2hldGhlciB0byBkaXNhYmxlIHNob3dpbmcgdGhlIHBvcG92ZXIuIERlZmF1bHQgYGZhbHNlYC5cbiAgICovXG4gIEBJbnB1dCgpIGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogV2lsbCBvcGVuIG9yIHNob3cgdGhlIHBvcG92ZXIgd2hlbiBjaGFuZ2VkLlxuICAgKiBDYW4gYmUgc3VnYXJlZCB3aXRoIGBpc09wZW5DaGFuZ2VgIHRvIGVtdWxhdGUgMi13YXkgYmluZGluZyBsaWtlIHNvIGBbKGlzT3BlbildPVwiaXNPcGVuXCJgXG4gICAqL1xuICBASW5wdXQoKSBpc09wZW46IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogQSByZWZlcmVuY2UgdG8gYSA8bmctdGVtcGxhdGU+IHRhZyB0aGF0IGlmIHNldCB3aWxsIG92ZXJyaWRlIHRoZSBwb3BvdmVycyB0ZW1wbGF0ZS4gVXNlIGxpa2Ugc286XG4gICAqIGBgYGh0bWxcbiAgICogPG5nLXRlbXBsYXRlICNjdXN0b21UZW1wbGF0ZSBsZXQtb3B0aW9ucz1cIm9wdGlvbnNcIj5cbiAgICogICA8ZGl2IFtjbGFzc109XCIncG9wb3ZlciAnICsgb3B0aW9ucy5wbGFjZW1lbnRcIiBzdHlsZT1cImRpc3BsYXk6IGJsb2NrXCI+XG4gICAqICAgICBNeSBjdXN0b20gdGVtcGxhdGVcbiAgICogICA8L2Rpdj5cbiAgICogPC9uZy10ZW1wbGF0ZT5cbiAgICogYGBgXG4gICAqXG4gICAqIFRoZW4gcGFzcyBjdXN0b21UZW1wbGF0ZSB0byB0aGUgbXdsQ29uZmlybWF0aW9uUG9wb3ZlciBkaXJlY3RpdmUgbGlrZSBzbyBgW2N1c3RvbVRlbXBsYXRlXT1cImN1c3RvbVRlbXBsYXRlXCJgXG4gICAqL1xuICBASW5wdXQoKSBjdXN0b21UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAvKipcbiAgICogV2lsbCBlbWl0IHdoZW4gdGhlIHBvcG92ZXIgaXMgb3BlbmVkIG9yIGNsb3NlZFxuICAgKi9cbiAgQE91dHB1dCgpIGlzT3BlbkNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcih0cnVlKTtcblxuICAvKipcbiAgICogQW4gZXhwcmVzc2lvbiB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSBjb25maXJtIGJ1dHRvbiBpcyBjbGlja2VkLlxuICAgKi9cbiAgQE91dHB1dCgpIGNvbmZpcm06IEV2ZW50RW1pdHRlcjxDb25maXJtQ2FuY2VsRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBBbiBleHByZXNzaW9uIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIGNhbmNlbCBidXR0b24gaXMgY2xpY2tlZC5cbiAgICovXG4gIEBPdXRwdXQoKSBjYW5jZWw6IEV2ZW50RW1pdHRlcjxDb25maXJtQ2FuY2VsRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBBIGN1c3RvbSBDU1MgY2xhc3MgdG8gYmUgYWRkZWQgdG8gdGhlIHBvcG92ZXJcbiAgICovXG4gIEBJbnB1dCgpIHBvcG92ZXJDbGFzczogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBcHBlbmQgdGhlIGVsZW1lbnQgdG8gdGhlIGRvY3VtZW50IGJvZHkgcmF0aGVyIHRoYW4gdGhlIHRyaWdnZXIgZWxlbWVudFxuICAgKi9cbiAgQElucHV0KCkgYXBwZW5kVG9Cb2R5OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBTd2FwIHRoZSBvcmRlciBvZiB0aGUgY29uZmlybSBhbmQgY2FuY2VsIGJ1dHRvbnNcbiAgICovXG4gIEBJbnB1dCgpIHJldmVyc2VCdXR0b25PcmRlcjogYm9vbGVhbjtcblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIG9yIG5vdCB0aGUgcG9wb3ZlciBzaG91bGQgc3RheSBvcGVuIGV2ZW4gd2hlbiBjbGlja2luZyBvdXRzaWRlIG9mIGl0XG4gICAqL1xuICBASW5wdXQoKSBjbG9zZU9uT3V0c2lkZUNsaWNrOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHBvcG92ZXI6IENvbXBvbmVudFJlZjxDb25maXJtYXRpb25Qb3BvdmVyV2luZG93Q29tcG9uZW50PjtcblxuICBwcml2YXRlIGV2ZW50TGlzdGVuZXJzOiAoKCkgPT4gdm9pZClbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIGVsbTogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGRlZmF1bHRPcHRpb25zOiBDb25maXJtYXRpb25Qb3BvdmVyT3B0aW9ucyxcbiAgICBwcml2YXRlIGNmcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHt9XG5cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pc09wZW5DaGFuZ2UuZW1pdChmYWxzZSk7XG4gIH1cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXMuaXNPcGVuKSB7XG4gICAgICBpZiAoY2hhbmdlcy5pc09wZW4uY3VycmVudFZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMuc2hvd1BvcG92ZXIoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaGlkZVBvcG92ZXIoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmhpZGVQb3BvdmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBvbkNvbmZpcm0oZXZlbnQ6IENvbmZpcm1DYW5jZWxFdmVudCkge1xuICAgIHRoaXMuY29uZmlybS5lbWl0KGV2ZW50KTtcbiAgICB0aGlzLmhpZGVQb3BvdmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBvbkNhbmNlbChldmVudDogQ29uZmlybUNhbmNlbEV2ZW50KSB7XG4gICAgdGhpcy5jYW5jZWwuZW1pdChldmVudCk7XG4gICAgdGhpcy5oaWRlUG9wb3ZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICB0b2dnbGVQb3BvdmVyKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wb3BvdmVyKSB7XG4gICAgICB0aGlzLnNob3dQb3BvdmVyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGlkZVBvcG92ZXIoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG9uRG9jdW1lbnRDbGljayhldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBjbG9zZU9uT3V0c2lkZUNsaWNrID1cbiAgICAgIHR5cGVvZiB0aGlzLmNsb3NlT25PdXRzaWRlQ2xpY2sgIT09ICd1bmRlZmluZWQnXG4gICAgICAgID8gdGhpcy5jbG9zZU9uT3V0c2lkZUNsaWNrXG4gICAgICAgIDogdGhpcy5kZWZhdWx0T3B0aW9ucy5jbG9zZU9uT3V0c2lkZUNsaWNrO1xuICAgIGlmIChcbiAgICAgIHRoaXMucG9wb3ZlciAmJlxuICAgICAgIXRoaXMuZWxtLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJlxuICAgICAgIXRoaXMucG9wb3Zlci5sb2NhdGlvbi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiZcbiAgICAgIGNsb3NlT25PdXRzaWRlQ2xpY2tcbiAgICApIHtcbiAgICAgIHRoaXMuaGlkZVBvcG92ZXIoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNob3dQb3BvdmVyKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wb3BvdmVyICYmICF0aGlzLmlzRGlzYWJsZWQpIHtcbiAgICAgIC8vIHdvcmsgYXJvdW5kIGZvciBodHRwczovL2dpdGh1Yi5jb20vbWF0dGxld2lzOTIvYW5ndWxhci1jb25maXJtYXRpb24tcG9wb3Zlci9pc3N1ZXMvNjVcbiAgICAgIC8vIG90aGVyd2lzZSB0aGUgZG9jdW1lbnQgY2xpY2sgZXZlbnQgZ2V0cyBmaXJlZCBhZnRlciB0aGUgY2xpY2sgZXZlbnRcbiAgICAgIC8vIHRoYXQgdHJpZ2dlcmVkIHRoZSBwb3BvdmVyIHRvIG9wZW4gKG5vIGlkZWEgd2h5IHRoaXMgaXMgc28pXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5ldmVudExpc3RlbmVycyA9IFtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLmxpc3RlbignZG9jdW1lbnQnLCAnY2xpY2snLCAoZXZlbnQ6IEV2ZW50KSA9PlxuICAgICAgICAgICAgdGhpcy5vbkRvY3VtZW50Q2xpY2soZXZlbnQpXG4gICAgICAgICAgKSxcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLmxpc3RlbignZG9jdW1lbnQnLCAndG91Y2hlbmQnLCAoZXZlbnQ6IEV2ZW50KSA9PlxuICAgICAgICAgICAgdGhpcy5vbkRvY3VtZW50Q2xpY2soZXZlbnQpXG4gICAgICAgICAgKSxcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLmxpc3Rlbignd2luZG93JywgJ3Jlc2l6ZScsICgpID0+XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uUG9wb3ZlcigpXG4gICAgICAgICAgKSxcbiAgICAgICAgXTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBvcHRpb25zID0gbmV3IENvbmZpcm1hdGlvblBvcG92ZXJXaW5kb3dPcHRpb25zKCk7XG4gICAgICBPYmplY3QuYXNzaWduKG9wdGlvbnMsIHRoaXMuZGVmYXVsdE9wdGlvbnMsIHtcbiAgICAgICAgb25Db25maXJtOiAoZXZlbnQ6IENvbmZpcm1DYW5jZWxFdmVudCk6IHZvaWQgPT4ge1xuICAgICAgICAgIHRoaXMub25Db25maXJtKGV2ZW50KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25DYW5jZWw6IChldmVudDogQ29uZmlybUNhbmNlbEV2ZW50KTogdm9pZCA9PiB7XG4gICAgICAgICAgdGhpcy5vbkNhbmNlbChldmVudCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQWZ0ZXJWaWV3SW5pdDogKCk6IHZvaWQgPT4ge1xuICAgICAgICAgIHRoaXMucG9zaXRpb25Qb3BvdmVyKCk7XG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgY29uc3Qgb3B0aW9uYWxQYXJhbXM6IChrZXlvZiBDb25maXJtYXRpb25Qb3BvdmVyRGlyZWN0aXZlKVtdID0gW1xuICAgICAgICAnY29uZmlybVRleHQnLFxuICAgICAgICAnY2FuY2VsVGV4dCcsXG4gICAgICAgICdwbGFjZW1lbnQnLFxuICAgICAgICAnY29uZmlybUJ1dHRvblR5cGUnLFxuICAgICAgICAnY2FuY2VsQnV0dG9uVHlwZScsXG4gICAgICAgICdmb2N1c0J1dHRvbicsXG4gICAgICAgICdoaWRlQ29uZmlybUJ1dHRvbicsXG4gICAgICAgICdoaWRlQ2FuY2VsQnV0dG9uJyxcbiAgICAgICAgJ3BvcG92ZXJDbGFzcycsXG4gICAgICAgICdhcHBlbmRUb0JvZHknLFxuICAgICAgICAnY3VzdG9tVGVtcGxhdGUnLFxuICAgICAgICAncmV2ZXJzZUJ1dHRvbk9yZGVyJyxcbiAgICAgICAgJ3BvcG92ZXJUaXRsZScsXG4gICAgICAgICdwb3BvdmVyTWVzc2FnZScsXG4gICAgICBdO1xuICAgICAgb3B0aW9uYWxQYXJhbXMuZm9yRWFjaCgocGFyYW0pID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzW3BhcmFtXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAob3B0aW9ucyBhcyBhbnkpW3BhcmFtXSA9IHRoaXNbcGFyYW1dO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgY29tcG9uZW50RmFjdG9yeTogQ29tcG9uZW50RmFjdG9yeTxDb25maXJtYXRpb25Qb3BvdmVyV2luZG93Q29tcG9uZW50PiA9IHRoaXMuY2ZyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFxuICAgICAgICBDb25maXJtYXRpb25Qb3BvdmVyV2luZG93Q29tcG9uZW50XG4gICAgICApO1xuICAgICAgY29uc3QgY2hpbGRJbmplY3RvciA9IEluamVjdG9yLmNyZWF0ZSh7XG4gICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHByb3ZpZGU6IENvbmZpcm1hdGlvblBvcG92ZXJXaW5kb3dPcHRpb25zLFxuICAgICAgICAgICAgdXNlVmFsdWU6IG9wdGlvbnMsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5wb3BvdmVyID0gdGhpcy52aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUNvbXBvbmVudChcbiAgICAgICAgY29tcG9uZW50RmFjdG9yeSxcbiAgICAgICAgdGhpcy52aWV3Q29udGFpbmVyUmVmLmxlbmd0aCxcbiAgICAgICAgY2hpbGRJbmplY3RvclxuICAgICAgKTtcbiAgICAgIGlmIChvcHRpb25zLmFwcGVuZFRvQm9keSkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMucG9wb3Zlci5sb2NhdGlvbi5uYXRpdmVFbGVtZW50KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaXNPcGVuQ2hhbmdlLmVtaXQodHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBwb3NpdGlvblBvcG92ZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucG9wb3Zlcikge1xuICAgICAgY29uc3QgcG9wb3ZlckVsZW1lbnQgPSB0aGlzLnBvcG92ZXIubG9jYXRpb24ubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXTtcbiAgICAgIHBvc2l0aW9uRWxlbWVudHMoXG4gICAgICAgIHRoaXMuZWxtLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgIHBvcG92ZXJFbGVtZW50LFxuICAgICAgICB0aGlzLnBsYWNlbWVudCB8fCB0aGlzLmRlZmF1bHRPcHRpb25zLnBsYWNlbWVudCxcbiAgICAgICAgdGhpcy5hcHBlbmRUb0JvZHkgfHwgdGhpcy5kZWZhdWx0T3B0aW9ucy5hcHBlbmRUb0JvZHlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoaWRlUG9wb3ZlcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wb3BvdmVyKSB7XG4gICAgICB0aGlzLnBvcG92ZXIuZGVzdHJveSgpO1xuICAgICAgZGVsZXRlIHRoaXMucG9wb3ZlcjtcbiAgICAgIHRoaXMuaXNPcGVuQ2hhbmdlLmVtaXQoZmFsc2UpO1xuICAgICAgdGhpcy5ldmVudExpc3RlbmVycy5mb3JFYWNoKChmbikgPT4gZm4oKSk7XG4gICAgICB0aGlzLmV2ZW50TGlzdGVuZXJzID0gW107XG4gICAgfVxuICB9XG59XG4iXX0=
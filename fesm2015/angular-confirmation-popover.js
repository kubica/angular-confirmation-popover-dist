import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵgetInheritedFactory, ɵɵdirectiveInject, ElementRef, ɵɵdefineDirective, ɵɵNgOnChangesFeature, Directive, Input, ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵelementEnd, ɵɵadvance, ɵɵclassMap, ɵɵproperty, ɵɵsanitizeHtml, ɵɵelement, ɵɵtemplate, ɵɵpureFunction4, ɵɵattribute, ɵɵclassProp, ɵɵdefineComponent, ɵɵtemplateRefExtractor, ɵɵreference, ɵɵpureFunction1, Component, EventEmitter, Injector, ViewContainerRef, ComponentFactoryResolver, Renderer2, Output, HostListener, InjectionToken, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NgTemplateOutlet, NgClass, NgIf, CommonModule } from '@angular/common';
import { positionElements } from 'positioning';

class ConfirmationPopoverOptions {
    constructor() {
        this.confirmText = 'Confirm';
        this.cancelText = 'Cancel';
        this.confirmButtonType = 'success';
        this.cancelButtonType = 'outline-secondary';
        this.placement = 'top';
        this.hideConfirmButton = false;
        this.hideCancelButton = false;
        this.popoverClass = '';
        this.appendToBody = false;
        this.reverseButtonOrder = false;
        this.closeOnOutsideClick = true;
    }
}
ConfirmationPopoverOptions.ɵfac = function ConfirmationPopoverOptions_Factory(t) { return new (t || ConfirmationPopoverOptions)(); };
ConfirmationPopoverOptions.ɵprov = ɵɵdefineInjectable({ token: ConfirmationPopoverOptions, factory: ConfirmationPopoverOptions.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ConfirmationPopoverOptions, [{
        type: Injectable
    }], null, null); })();

/**
 * @internal
 */
class ConfirmationPopoverWindowOptions extends ConfirmationPopoverOptions {
}
ConfirmationPopoverWindowOptions.ɵfac = function ConfirmationPopoverWindowOptions_Factory(t) { return ɵConfirmationPopoverWindowOptions_BaseFactory(t || ConfirmationPopoverWindowOptions); };
ConfirmationPopoverWindowOptions.ɵprov = ɵɵdefineInjectable({ token: ConfirmationPopoverWindowOptions, factory: ConfirmationPopoverWindowOptions.ɵfac });
const ɵConfirmationPopoverWindowOptions_BaseFactory = ɵɵgetInheritedFactory(ConfirmationPopoverWindowOptions);
/*@__PURE__*/ (function () { ɵsetClassMetadata(ConfirmationPopoverWindowOptions, [{
        type: Injectable
    }], null, null); })();

/**
 * A helper directive to focus buttons. You will only need this if using a custom template
 */
class FocusDirective {
    constructor(elm) {
        this.elm = elm;
    }
    ngOnChanges(changes) {
        if (changes.mwlFocus && this.mwlFocus === true) {
            this.elm.nativeElement.focus();
        }
    }
}
FocusDirective.ɵfac = function FocusDirective_Factory(t) { return new (t || FocusDirective)(ɵɵdirectiveInject(ElementRef)); };
FocusDirective.ɵdir = ɵɵdefineDirective({ type: FocusDirective, selectors: [["", "mwlFocus", ""]], inputs: { mwlFocus: "mwlFocus" }, features: [ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FocusDirective, [{
        type: Directive,
        args: [{
                selector: '[mwlFocus]',
            }]
    }], function () { return [{ type: ElementRef }]; }, { mwlFocus: [{
            type: Input
        }] }); })();

function ConfirmationPopoverWindowComponent_ng_template_0_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 9);
    ɵɵelementStart(1, "button", 10);
    ɵɵlistener("click", function ConfirmationPopoverWindowComponent_ng_template_0_div_6_Template_button_click_1_listener($event) { ɵɵrestoreView(_r7); const options_r3 = ɵɵnextContext().options; return options_r3.onCancel({ clickEvent: $event }); });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const options_r3 = ɵɵnextContext().options;
    ɵɵadvance(1);
    ɵɵclassMap("btn btn-block btn-" + options_r3.cancelButtonType);
    ɵɵproperty("mwlFocus", options_r3.focusButton === "cancel")("innerHtml", options_r3.cancelText, ɵɵsanitizeHtml);
} }
function ConfirmationPopoverWindowComponent_ng_template_0_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r11 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 9);
    ɵɵelementStart(1, "button", 10);
    ɵɵlistener("click", function ConfirmationPopoverWindowComponent_ng_template_0_div_7_Template_button_click_1_listener($event) { ɵɵrestoreView(_r11); const options_r3 = ɵɵnextContext().options; return options_r3.onConfirm({ clickEvent: $event }); });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const options_r3 = ɵɵnextContext().options;
    ɵɵadvance(1);
    ɵɵclassMap("btn btn-block btn-" + options_r3.confirmButtonType);
    ɵɵproperty("mwlFocus", options_r3.focusButton === "confirm")("innerHtml", options_r3.confirmText, ɵɵsanitizeHtml);
} }
const _c0 = function (a1, a2, a3, a5) { return ["popover", a1, a2, a3, "bs-popover-auto", a5]; };
function ConfirmationPopoverWindowComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵelement(1, "div", 3);
    ɵɵelement(2, "h3", 4);
    ɵɵelementStart(3, "div", 5);
    ɵɵelement(4, "p", 6);
    ɵɵelementStart(5, "div", 7);
    ɵɵtemplate(6, ConfirmationPopoverWindowComponent_ng_template_0_div_6_Template, 2, 4, "div", 8);
    ɵɵtemplate(7, ConfirmationPopoverWindowComponent_ng_template_0_div_7_Template, 2, 4, "div", 8);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const options_r3 = ctx.options;
    ɵɵproperty("ngClass", ɵɵpureFunction4(8, _c0, options_r3.placement, "popover-" + options_r3.placement, "bs-popover-" + options_r3.placement, options_r3.popoverClass));
    ɵɵattribute("data-popper-placement", options_r3.placement);
    ɵɵadvance(2);
    ɵɵproperty("innerHTML", options_r3.popoverTitle, ɵɵsanitizeHtml);
    ɵɵadvance(2);
    ɵɵproperty("innerHTML", options_r3.popoverMessage, ɵɵsanitizeHtml);
    ɵɵadvance(1);
    ɵɵclassProp("confirm-btns-reversed", options_r3.reverseButtonOrder);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !options_r3.hideCancelButton);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !options_r3.hideConfirmButton);
} }
function ConfirmationPopoverWindowComponent_ng_template_2_Template(rf, ctx) { }
const _c1 = function (a0) { return { options: a0 }; };
/**
 * @internal
 */
class ConfirmationPopoverWindowComponent {
    constructor(options) {
        this.options = options;
    }
    ngAfterViewInit() {
        this.options.onAfterViewInit();
    }
}
ConfirmationPopoverWindowComponent.ɵfac = function ConfirmationPopoverWindowComponent_Factory(t) { return new (t || ConfirmationPopoverWindowComponent)(ɵɵdirectiveInject(ConfirmationPopoverWindowOptions)); };
ConfirmationPopoverWindowComponent.ɵcmp = ɵɵdefineComponent({ type: ConfirmationPopoverWindowComponent, selectors: [["mwl-confirmation-popover-window"]], decls: 3, vars: 4, consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngClass"], [1, "popover-arrow", "arrow"], [1, "popover-title", "popover-header", 3, "innerHTML"], [1, "popover-content", "popover-body"], [3, "innerHTML"], [1, "confirm-btns"], ["class", "confirm-btn-container", 4, "ngIf"], [1, "confirm-btn-container"], ["type", "button", 3, "mwlFocus", "innerHtml", "click"]], template: function ConfirmationPopoverWindowComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, ConfirmationPopoverWindowComponent_ng_template_0_Template, 8, 13, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        ɵɵtemplate(2, ConfirmationPopoverWindowComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
    } if (rf & 2) {
        const _r0 = ɵɵreference(1);
        ɵɵadvance(2);
        ɵɵproperty("ngTemplateOutlet", ctx.options.customTemplate || _r0)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c1, ctx.options));
    } }, directives: [NgTemplateOutlet, NgClass, NgIf, FocusDirective], styles: [".popover[_ngcontent-%COMP%]{display:block}.bs-popover-bottom[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%], .bs-popover-top[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]{left:50%}.bs-popover-left[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%], .bs-popover-right[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]{top:calc(50% - 8px)}.btn[_ngcontent-%COMP%]{transition:none}.confirm-btns[_ngcontent-%COMP%]{display:flex;justify-content:space-around}.confirm-btn-container[_ngcontent-%COMP%]{flex-basis:50%}.confirm-btn-container[_ngcontent-%COMP%]:not(:first-child){margin-left:4px}.confirm-btn-container[_ngcontent-%COMP%]:not(:last-child){margin-right:4px}.confirm-btns-reversed[_ngcontent-%COMP%]{flex-direction:row-reverse}.confirm-btns-reversed[_ngcontent-%COMP%]   .confirm-btn-container[_ngcontent-%COMP%]:not(:first-child){margin-left:0;margin-right:4px}.confirm-btns-reversed[_ngcontent-%COMP%]   .confirm-btn-container[_ngcontent-%COMP%]:not(:last-child){margin-left:4px;margin-right:0}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ConfirmationPopoverWindowComponent, [{
        type: Component,
        args: [{
                selector: 'mwl-confirmation-popover-window',
                styleUrls: ['./confirmation-popover-window.component.scss'],
                templateUrl: './confirmation-popover-window.component.html',
            }]
    }], function () { return [{ type: ConfirmationPopoverWindowOptions }]; }, null); })();

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
class ConfirmationPopoverDirective {
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
ConfirmationPopoverDirective.ɵfac = function ConfirmationPopoverDirective_Factory(t) { return new (t || ConfirmationPopoverDirective)(ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ConfirmationPopoverOptions), ɵɵdirectiveInject(ComponentFactoryResolver), ɵɵdirectiveInject(Renderer2)); };
ConfirmationPopoverDirective.ɵdir = ɵɵdefineDirective({ type: ConfirmationPopoverDirective, selectors: [["", "mwlConfirmationPopover", ""]], hostBindings: function ConfirmationPopoverDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("click", function ConfirmationPopoverDirective_click_HostBindingHandler() { return ctx.togglePopover(); });
    } }, inputs: { popoverTitle: "popoverTitle", popoverMessage: "popoverMessage", confirmText: "confirmText", cancelText: "cancelText", placement: "placement", confirmButtonType: "confirmButtonType", cancelButtonType: "cancelButtonType", focusButton: "focusButton", hideConfirmButton: "hideConfirmButton", hideCancelButton: "hideCancelButton", isDisabled: "isDisabled", isOpen: "isOpen", customTemplate: "customTemplate", popoverClass: "popoverClass", appendToBody: "appendToBody", reverseButtonOrder: "reverseButtonOrder", closeOnOutsideClick: "closeOnOutsideClick" }, outputs: { isOpenChange: "isOpenChange", confirm: "confirm", cancel: "cancel" }, features: [ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ConfirmationPopoverDirective, [{
        type: Directive,
        args: [{
                selector: '[mwlConfirmationPopover]',
            }]
    }], function () { return [{ type: ViewContainerRef }, { type: ElementRef }, { type: ConfirmationPopoverOptions }, { type: ComponentFactoryResolver }, { type: Renderer2 }]; }, { popoverTitle: [{
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

const USER_OPTIONS = new InjectionToken('confirmation popover user options');
function optionsFactory(userOptions) {
    const options = new ConfirmationPopoverOptions();
    Object.assign(options, userOptions);
    return options;
}
class ConfirmationPopoverModule {
    static forRoot(options = {}) {
        return {
            ngModule: ConfirmationPopoverModule,
            providers: [
                {
                    provide: USER_OPTIONS,
                    useValue: options,
                },
                {
                    provide: ConfirmationPopoverOptions,
                    useFactory: optionsFactory,
                    deps: [USER_OPTIONS],
                },
            ],
        };
    }
}
ConfirmationPopoverModule.ɵmod = ɵɵdefineNgModule({ type: ConfirmationPopoverModule });
ConfirmationPopoverModule.ɵinj = ɵɵdefineInjector({ factory: function ConfirmationPopoverModule_Factory(t) { return new (t || ConfirmationPopoverModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(ConfirmationPopoverModule, { declarations: [ConfirmationPopoverDirective,
        ConfirmationPopoverWindowComponent,
        FocusDirective], imports: [CommonModule], exports: [ConfirmationPopoverDirective, FocusDirective] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(ConfirmationPopoverModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    ConfirmationPopoverDirective,
                    ConfirmationPopoverWindowComponent,
                    FocusDirective,
                ],
                imports: [CommonModule],
                exports: [ConfirmationPopoverDirective, FocusDirective],
                entryComponents: [ConfirmationPopoverWindowComponent],
            }]
    }], null, null); })();

/*
 * Public API Surface of angular-confirmation-popover
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ConfirmationPopoverDirective, ConfirmationPopoverModule, FocusDirective };
//# sourceMappingURL=angular-confirmation-popover.js.map

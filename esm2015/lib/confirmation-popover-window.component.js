import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./confirmation-popover-window-options.provider";
import * as i2 from "@angular/common";
import * as i3 from "./focus.directive";
function ConfirmationPopoverWindowComponent_ng_template_0_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵelementStart(1, "button", 10);
    i0.ɵɵlistener("click", function ConfirmationPopoverWindowComponent_ng_template_0_div_6_Template_button_click_1_listener($event) { i0.ɵɵrestoreView(_r7); const options_r3 = i0.ɵɵnextContext().options; return options_r3.onCancel({ clickEvent: $event }); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const options_r3 = i0.ɵɵnextContext().options;
    i0.ɵɵadvance(1);
    i0.ɵɵclassMap("btn btn-block btn-" + options_r3.cancelButtonType);
    i0.ɵɵproperty("mwlFocus", options_r3.focusButton === "cancel")("innerHtml", options_r3.cancelText, i0.ɵɵsanitizeHtml);
} }
function ConfirmationPopoverWindowComponent_ng_template_0_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵelementStart(1, "button", 10);
    i0.ɵɵlistener("click", function ConfirmationPopoverWindowComponent_ng_template_0_div_7_Template_button_click_1_listener($event) { i0.ɵɵrestoreView(_r11); const options_r3 = i0.ɵɵnextContext().options; return options_r3.onConfirm({ clickEvent: $event }); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const options_r3 = i0.ɵɵnextContext().options;
    i0.ɵɵadvance(1);
    i0.ɵɵclassMap("btn btn-block btn-" + options_r3.confirmButtonType);
    i0.ɵɵproperty("mwlFocus", options_r3.focusButton === "confirm")("innerHtml", options_r3.confirmText, i0.ɵɵsanitizeHtml);
} }
const _c0 = function (a1, a2, a3, a5) { return ["popover", a1, a2, a3, "bs-popover-auto", a5]; };
function ConfirmationPopoverWindowComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelement(1, "div", 3);
    i0.ɵɵelement(2, "h3", 4);
    i0.ɵɵelementStart(3, "div", 5);
    i0.ɵɵelement(4, "p", 6);
    i0.ɵɵelementStart(5, "div", 7);
    i0.ɵɵtemplate(6, ConfirmationPopoverWindowComponent_ng_template_0_div_6_Template, 2, 4, "div", 8);
    i0.ɵɵtemplate(7, ConfirmationPopoverWindowComponent_ng_template_0_div_7_Template, 2, 4, "div", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const options_r3 = ctx.options;
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction4(8, _c0, options_r3.placement, "popover-" + options_r3.placement, "bs-popover-" + options_r3.placement, options_r3.popoverClass));
    i0.ɵɵattribute("data-popper-placement", options_r3.placement);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHTML", options_r3.popoverTitle, i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHTML", options_r3.popoverMessage, i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("confirm-btns-reversed", options_r3.reverseButtonOrder);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !options_r3.hideCancelButton);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !options_r3.hideConfirmButton);
} }
function ConfirmationPopoverWindowComponent_ng_template_2_Template(rf, ctx) { }
const _c1 = function (a0) { return { options: a0 }; };
/**
 * @internal
 */
export class ConfirmationPopoverWindowComponent {
    constructor(options) {
        this.options = options;
    }
    ngAfterViewInit() {
        this.options.onAfterViewInit();
    }
}
ConfirmationPopoverWindowComponent.ɵfac = function ConfirmationPopoverWindowComponent_Factory(t) { return new (t || ConfirmationPopoverWindowComponent)(i0.ɵɵdirectiveInject(i1.ConfirmationPopoverWindowOptions)); };
ConfirmationPopoverWindowComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ConfirmationPopoverWindowComponent, selectors: [["mwl-confirmation-popover-window"]], decls: 3, vars: 4, consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngClass"], [1, "popover-arrow", "arrow"], [1, "popover-title", "popover-header", 3, "innerHTML"], [1, "popover-content", "popover-body"], [3, "innerHTML"], [1, "confirm-btns"], ["class", "confirm-btn-container", 4, "ngIf"], [1, "confirm-btn-container"], ["type", "button", 3, "mwlFocus", "innerHtml", "click"]], template: function ConfirmationPopoverWindowComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, ConfirmationPopoverWindowComponent_ng_template_0_Template, 8, 13, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(2, ConfirmationPopoverWindowComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(1);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngTemplateOutlet", ctx.options.customTemplate || _r0)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c1, ctx.options));
    } }, directives: [i2.NgTemplateOutlet, i2.NgClass, i2.NgIf, i3.FocusDirective], styles: [".popover[_ngcontent-%COMP%]{display:block}.bs-popover-bottom[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%], .bs-popover-top[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]{left:50%}.bs-popover-left[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%], .bs-popover-right[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]{top:calc(50% - 8px)}.btn[_ngcontent-%COMP%]{transition:none}.confirm-btns[_ngcontent-%COMP%]{display:flex;justify-content:space-around}.confirm-btn-container[_ngcontent-%COMP%]{flex-basis:50%}.confirm-btn-container[_ngcontent-%COMP%]:not(:first-child){margin-left:4px}.confirm-btn-container[_ngcontent-%COMP%]:not(:last-child){margin-right:4px}.confirm-btns-reversed[_ngcontent-%COMP%]{flex-direction:row-reverse}.confirm-btns-reversed[_ngcontent-%COMP%]   .confirm-btn-container[_ngcontent-%COMP%]:not(:first-child){margin-left:0;margin-right:4px}.confirm-btns-reversed[_ngcontent-%COMP%]   .confirm-btn-container[_ngcontent-%COMP%]:not(:last-child){margin-left:4px;margin-right:0}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ConfirmationPopoverWindowComponent, [{
        type: Component,
        args: [{
                selector: 'mwl-confirmation-popover-window',
                styleUrls: ['./confirmation-popover-window.component.scss'],
                templateUrl: './confirmation-popover-window.component.html',
            }]
    }], function () { return [{ type: i1.ConfirmationPopoverWindowOptions }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybWF0aW9uLXBvcG92ZXItd2luZG93LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItY29uZmlybWF0aW9uLXBvcG92ZXIvc3JjL2xpYi9jb25maXJtYXRpb24tcG9wb3Zlci13aW5kb3cuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWxhci1jb25maXJtYXRpb24tcG9wb3Zlci9zcmMvbGliL2NvbmZpcm1hdGlvbi1wb3BvdmVyLXdpbmRvdy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7Ozs7OztJQ3VCakQsOEJBQ0U7SUFBQSxrQ0FNVTtJQUZSLCtNQUFTLDJDQUF3QyxJQUFDO0lBRW5ELGlCQUFTO0lBQ1osaUJBQU07OztJQUpGLGVBQXlEO0lBQXpELGlFQUF5RDtJQUR6RCw4REFBNkMsdURBQUE7Ozs7SUFNakQsOEJBQ0U7SUFBQSxrQ0FNVTtJQUZSLGdOQUFTLDRDQUF5QyxJQUFDO0lBRXBELGlCQUFTO0lBQ1osaUJBQU07OztJQUpGLGVBQTBEO0lBQTFELGtFQUEwRDtJQUQxRCwrREFBOEMsd0RBQUE7Ozs7SUFsQ3hELDhCQVdFO0lBQUEseUJBQXVDO0lBQ3ZDLHdCQUdNO0lBQ04sOEJBQ0U7SUFBQSx1QkFBNEM7SUFDNUMsOEJBSUU7SUFBQSxpR0FDRTtJQVFGLGlHQUNFO0lBUUosaUJBQU07SUFDUixpQkFBTTtJQUNSLGlCQUFNOzs7SUF6Q0osNEtBT0U7SUFDRiw2REFBZ0Q7SUFLOUMsZUFBa0M7SUFBbEMsc0VBQWtDO0lBRy9CLGVBQW9DO0lBQXBDLHdFQUFvQztJQUdyQyxlQUEwRDtJQUExRCxzRUFBMEQ7SUFFdkIsZUFBaUM7SUFBakMsbURBQWlDO0lBU2pDLGVBQWtDO0lBQWxDLG9EQUFrQzs7OztBRDdCN0U7O0dBRUc7QUFNSCxNQUFNLE9BQU8sa0NBQWtDO0lBQzdDLFlBQW1CLE9BQXlDO1FBQXpDLFlBQU8sR0FBUCxPQUFPLENBQWtDO0lBQUcsQ0FBQztJQUVoRSxlQUFlO1FBQ2IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNqQyxDQUFDOztvSEFMVSxrQ0FBa0M7dUVBQWxDLGtDQUFrQztRQ1gvQyxxSUFDRTtRQTRDRixtR0FJQTs7O1FBSEUsZUFBOEQ7UUFBOUQsb0VBQThELG9FQUFBOztrRERuQ25ELGtDQUFrQztjQUw5QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlDQUFpQztnQkFDM0MsU0FBUyxFQUFFLENBQUMsOENBQThDLENBQUM7Z0JBQzNELFdBQVcsRUFBRSw4Q0FBOEM7YUFDNUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpcm1hdGlvblBvcG92ZXJXaW5kb3dPcHRpb25zIH0gZnJvbSAnLi9jb25maXJtYXRpb24tcG9wb3Zlci13aW5kb3ctb3B0aW9ucy5wcm92aWRlcic7XG5cbi8qKlxuICogQGludGVybmFsXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ213bC1jb25maXJtYXRpb24tcG9wb3Zlci13aW5kb3cnLFxuICBzdHlsZVVybHM6IFsnLi9jb25maXJtYXRpb24tcG9wb3Zlci13aW5kb3cuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbmZpcm1hdGlvbi1wb3BvdmVyLXdpbmRvdy5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENvbmZpcm1hdGlvblBvcG92ZXJXaW5kb3dDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgY29uc3RydWN0b3IocHVibGljIG9wdGlvbnM6IENvbmZpcm1hdGlvblBvcG92ZXJXaW5kb3dPcHRpb25zKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm9wdGlvbnMub25BZnRlclZpZXdJbml0KCk7XG4gIH1cbn1cbiIsIjxuZy10ZW1wbGF0ZSAjZGVmYXVsdFRlbXBsYXRlIGxldC1vcHRpb25zPVwib3B0aW9uc1wiPlxuICA8ZGl2XG4gICAgW25nQ2xhc3NdPVwiW1xuICAgICAgJ3BvcG92ZXInLFxuICAgICAgb3B0aW9ucy5wbGFjZW1lbnQsXG4gICAgICAncG9wb3Zlci0nICsgb3B0aW9ucy5wbGFjZW1lbnQsXG4gICAgICAnYnMtcG9wb3Zlci0nICsgb3B0aW9ucy5wbGFjZW1lbnQsXG4gICAgICAnYnMtcG9wb3Zlci1hdXRvJyxcbiAgICAgIG9wdGlvbnMucG9wb3ZlckNsYXNzXG4gICAgXVwiXG4gICAgW2F0dHIuZGF0YS1wb3BwZXItcGxhY2VtZW50XT1cIm9wdGlvbnMucGxhY2VtZW50XCJcbiAgPlxuICAgIDxkaXYgY2xhc3M9XCJwb3BvdmVyLWFycm93IGFycm93XCI+PC9kaXY+XG4gICAgPGgzXG4gICAgICBjbGFzcz1cInBvcG92ZXItdGl0bGUgcG9wb3Zlci1oZWFkZXJcIlxuICAgICAgW2lubmVySFRNTF09XCJvcHRpb25zLnBvcG92ZXJUaXRsZVwiXG4gICAgPjwvaDM+XG4gICAgPGRpdiBjbGFzcz1cInBvcG92ZXItY29udGVudCBwb3BvdmVyLWJvZHlcIj5cbiAgICAgIDxwIFtpbm5lckhUTUxdPVwib3B0aW9ucy5wb3BvdmVyTWVzc2FnZVwiPjwvcD5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJjb25maXJtLWJ0bnNcIlxuICAgICAgICBbY2xhc3MuY29uZmlybS1idG5zLXJldmVyc2VkXT1cIm9wdGlvbnMucmV2ZXJzZUJ1dHRvbk9yZGVyXCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbmZpcm0tYnRuLWNvbnRhaW5lclwiICpuZ0lmPVwiIW9wdGlvbnMuaGlkZUNhbmNlbEJ1dHRvblwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgW213bEZvY3VzXT1cIm9wdGlvbnMuZm9jdXNCdXR0b24gPT09ICdjYW5jZWwnXCJcbiAgICAgICAgICAgIFtjbGFzc109XCInYnRuIGJ0bi1ibG9jayBidG4tJyArIG9wdGlvbnMuY2FuY2VsQnV0dG9uVHlwZVwiXG4gICAgICAgICAgICAoY2xpY2spPVwib3B0aW9ucy5vbkNhbmNlbCh7IGNsaWNrRXZlbnQ6ICRldmVudCB9KVwiXG4gICAgICAgICAgICBbaW5uZXJIdG1sXT1cIm9wdGlvbnMuY2FuY2VsVGV4dFwiXG4gICAgICAgICAgPjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbmZpcm0tYnRuLWNvbnRhaW5lclwiICpuZ0lmPVwiIW9wdGlvbnMuaGlkZUNvbmZpcm1CdXR0b25cIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIFttd2xGb2N1c109XCJvcHRpb25zLmZvY3VzQnV0dG9uID09PSAnY29uZmlybSdcIlxuICAgICAgICAgICAgW2NsYXNzXT1cIididG4gYnRuLWJsb2NrIGJ0bi0nICsgb3B0aW9ucy5jb25maXJtQnV0dG9uVHlwZVwiXG4gICAgICAgICAgICAoY2xpY2spPVwib3B0aW9ucy5vbkNvbmZpcm0oeyBjbGlja0V2ZW50OiAkZXZlbnQgfSlcIlxuICAgICAgICAgICAgW2lubmVySHRtbF09XCJvcHRpb25zLmNvbmZpcm1UZXh0XCJcbiAgICAgICAgICA+PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9uZy10ZW1wbGF0ZT5cbjxuZy10ZW1wbGF0ZVxuICBbbmdUZW1wbGF0ZU91dGxldF09XCJvcHRpb25zLmN1c3RvbVRlbXBsYXRlIHx8IGRlZmF1bHRUZW1wbGF0ZVwiXG4gIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7IG9wdGlvbnM6IG9wdGlvbnMgfVwiXG4+XG48L25nLXRlbXBsYXRlPlxuIl19
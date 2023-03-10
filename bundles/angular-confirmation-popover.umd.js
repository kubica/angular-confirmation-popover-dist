(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('positioning')) :
    typeof define === 'function' && define.amd ? define('angular-confirmation-popover', ['exports', '@angular/core', '@angular/common', 'positioning'], factory) :
    (global = global || self, factory(global['angular-confirmation-popover'] = {}, global.ng.core, global.ng.common, global.positioning));
}(this, (function (exports, i0, i2, positioning) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, exports) {
        for (var p in m)
            if (p !== "default" && !exports.hasOwnProperty(p))
                __createBinding(exports, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    ;
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (Object.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var ConfirmationPopoverOptions = /** @class */ (function () {
        function ConfirmationPopoverOptions() {
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
        return ConfirmationPopoverOptions;
    }());
    ConfirmationPopoverOptions.ɵfac = function ConfirmationPopoverOptions_Factory(t) { return new (t || ConfirmationPopoverOptions)(); };
    ConfirmationPopoverOptions.ɵprov = i0.ɵɵdefineInjectable({ token: ConfirmationPopoverOptions, factory: ConfirmationPopoverOptions.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ConfirmationPopoverOptions, [{
                type: i0.Injectable
            }], null, null);
    })();

    /**
     * @internal
     */
    var ConfirmationPopoverWindowOptions = /** @class */ (function (_super) {
        __extends(ConfirmationPopoverWindowOptions, _super);
        function ConfirmationPopoverWindowOptions() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return ConfirmationPopoverWindowOptions;
    }(ConfirmationPopoverOptions));
    ConfirmationPopoverWindowOptions.ɵfac = function ConfirmationPopoverWindowOptions_Factory(t) { return ɵConfirmationPopoverWindowOptions_BaseFactory(t || ConfirmationPopoverWindowOptions); };
    ConfirmationPopoverWindowOptions.ɵprov = i0.ɵɵdefineInjectable({ token: ConfirmationPopoverWindowOptions, factory: ConfirmationPopoverWindowOptions.ɵfac });
    var ɵConfirmationPopoverWindowOptions_BaseFactory = i0.ɵɵgetInheritedFactory(ConfirmationPopoverWindowOptions);
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ConfirmationPopoverWindowOptions, [{
                type: i0.Injectable
            }], null, null);
    })();

    /**
     * A helper directive to focus buttons. You will only need this if using a custom template
     */
    var FocusDirective = /** @class */ (function () {
        function FocusDirective(elm) {
            this.elm = elm;
        }
        FocusDirective.prototype.ngOnChanges = function (changes) {
            if (changes.mwlFocus && this.mwlFocus === true) {
                this.elm.nativeElement.focus();
            }
        };
        return FocusDirective;
    }());
    FocusDirective.ɵfac = function FocusDirective_Factory(t) { return new (t || FocusDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    FocusDirective.ɵdir = i0.ɵɵdefineDirective({ type: FocusDirective, selectors: [["", "mwlFocus", ""]], inputs: { mwlFocus: "mwlFocus" }, features: [i0.ɵɵNgOnChangesFeature] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FocusDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[mwlFocus]',
                    }]
            }], function () { return [{ type: i0.ElementRef }]; }, { mwlFocus: [{
                    type: i0.Input
                }] });
    })();

    function ConfirmationPopoverWindowComponent_ng_template_0_div_6_Template(rf, ctx) {
        if (rf & 1) {
            var _r7_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 9);
            i0.ɵɵelementStart(1, "button", 10);
            i0.ɵɵlistener("click", function ConfirmationPopoverWindowComponent_ng_template_0_div_6_Template_button_click_1_listener($event) { i0.ɵɵrestoreView(_r7_1); var options_r3 = i0.ɵɵnextContext().options; return options_r3.onCancel({ clickEvent: $event }); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var options_r3 = i0.ɵɵnextContext().options;
            i0.ɵɵadvance(1);
            i0.ɵɵclassMap("btn btn-block btn-" + options_r3.cancelButtonType);
            i0.ɵɵproperty("mwlFocus", options_r3.focusButton === "cancel")("innerHtml", options_r3.cancelText, i0.ɵɵsanitizeHtml);
        }
    }
    function ConfirmationPopoverWindowComponent_ng_template_0_div_7_Template(rf, ctx) {
        if (rf & 1) {
            var _r11_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 9);
            i0.ɵɵelementStart(1, "button", 10);
            i0.ɵɵlistener("click", function ConfirmationPopoverWindowComponent_ng_template_0_div_7_Template_button_click_1_listener($event) { i0.ɵɵrestoreView(_r11_1); var options_r3 = i0.ɵɵnextContext().options; return options_r3.onConfirm({ clickEvent: $event }); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var options_r3 = i0.ɵɵnextContext().options;
            i0.ɵɵadvance(1);
            i0.ɵɵclassMap("btn btn-block btn-" + options_r3.confirmButtonType);
            i0.ɵɵproperty("mwlFocus", options_r3.focusButton === "confirm")("innerHtml", options_r3.confirmText, i0.ɵɵsanitizeHtml);
        }
    }
    var _c0 = function (a1, a2, a3, a5) { return ["popover", a1, a2, a3, "bs-popover-auto", a5]; };
    function ConfirmationPopoverWindowComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
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
        }
        if (rf & 2) {
            var options_r3 = ctx.options;
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
        }
    }
    function ConfirmationPopoverWindowComponent_ng_template_2_Template(rf, ctx) { }
    var _c1 = function (a0) { return { options: a0 }; };
    /**
     * @internal
     */
    var ConfirmationPopoverWindowComponent = /** @class */ (function () {
        function ConfirmationPopoverWindowComponent(options) {
            this.options = options;
        }
        ConfirmationPopoverWindowComponent.prototype.ngAfterViewInit = function () {
            this.options.onAfterViewInit();
        };
        return ConfirmationPopoverWindowComponent;
    }());
    ConfirmationPopoverWindowComponent.ɵfac = function ConfirmationPopoverWindowComponent_Factory(t) { return new (t || ConfirmationPopoverWindowComponent)(i0.ɵɵdirectiveInject(ConfirmationPopoverWindowOptions)); };
    ConfirmationPopoverWindowComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ConfirmationPopoverWindowComponent, selectors: [["mwl-confirmation-popover-window"]], decls: 3, vars: 4, consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngClass"], [1, "popover-arrow", "arrow"], [1, "popover-title", "popover-header", 3, "innerHTML"], [1, "popover-content", "popover-body"], [3, "innerHTML"], [1, "confirm-btns"], ["class", "confirm-btn-container", 4, "ngIf"], [1, "confirm-btn-container"], ["type", "button", 3, "mwlFocus", "innerHtml", "click"]], template: function ConfirmationPopoverWindowComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, ConfirmationPopoverWindowComponent_ng_template_0_Template, 8, 13, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵtemplate(2, ConfirmationPopoverWindowComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
            }
            if (rf & 2) {
                var _r0 = i0.ɵɵreference(1);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngTemplateOutlet", ctx.options.customTemplate || _r0)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c1, ctx.options));
            }
        }, directives: [i2.NgTemplateOutlet, i2.NgClass, i2.NgIf, FocusDirective], styles: [".popover[_ngcontent-%COMP%]{display:block}.bs-popover-bottom[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%], .bs-popover-top[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]{left:50%}.bs-popover-left[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%], .bs-popover-right[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]{top:calc(50% - 8px)}.btn[_ngcontent-%COMP%]{transition:none}.confirm-btns[_ngcontent-%COMP%]{display:flex;justify-content:space-around}.confirm-btn-container[_ngcontent-%COMP%]{flex-basis:50%}.confirm-btn-container[_ngcontent-%COMP%]:not(:first-child){margin-left:4px}.confirm-btn-container[_ngcontent-%COMP%]:not(:last-child){margin-right:4px}.confirm-btns-reversed[_ngcontent-%COMP%]{flex-direction:row-reverse}.confirm-btns-reversed[_ngcontent-%COMP%]   .confirm-btn-container[_ngcontent-%COMP%]:not(:first-child){margin-left:0;margin-right:4px}.confirm-btns-reversed[_ngcontent-%COMP%]   .confirm-btn-container[_ngcontent-%COMP%]:not(:last-child){margin-left:4px;margin-right:0}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ConfirmationPopoverWindowComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'mwl-confirmation-popover-window',
                        styleUrls: ['./confirmation-popover-window.component.scss'],
                        templateUrl: './confirmation-popover-window.component.html',
                    }]
            }], function () { return [{ type: ConfirmationPopoverWindowOptions }]; }, null);
    })();

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
    var ConfirmationPopoverDirective = /** @class */ (function () {
        /**
         * @internal
         */
        function ConfirmationPopoverDirective(viewContainerRef, elm, defaultOptions, cfr, renderer) {
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
            this.isOpenChange = new i0.EventEmitter(true);
            /**
             * An expression that is called when the confirm button is clicked.
             */
            this.confirm = new i0.EventEmitter();
            /**
             * An expression that is called when the cancel button is clicked.
             */
            this.cancel = new i0.EventEmitter();
            this.eventListeners = [];
        }
        /**
         * @internal
         */
        ConfirmationPopoverDirective.prototype.ngOnInit = function () {
            this.isOpenChange.emit(false);
        };
        /**
         * @internal
         */
        ConfirmationPopoverDirective.prototype.ngOnChanges = function (changes) {
            if (changes.isOpen) {
                if (changes.isOpen.currentValue === true) {
                    this.showPopover();
                }
                else {
                    this.hidePopover();
                }
            }
        };
        /**
         * @internal
         */
        ConfirmationPopoverDirective.prototype.ngOnDestroy = function () {
            this.hidePopover();
        };
        /**
         * @internal
         */
        ConfirmationPopoverDirective.prototype.onConfirm = function (event) {
            this.confirm.emit(event);
            this.hidePopover();
        };
        /**
         * @internal
         */
        ConfirmationPopoverDirective.prototype.onCancel = function (event) {
            this.cancel.emit(event);
            this.hidePopover();
        };
        /**
         * @internal
         */
        ConfirmationPopoverDirective.prototype.togglePopover = function () {
            if (!this.popover) {
                this.showPopover();
            }
            else {
                this.hidePopover();
            }
        };
        ConfirmationPopoverDirective.prototype.onDocumentClick = function (event) {
            var closeOnOutsideClick = typeof this.closeOnOutsideClick !== 'undefined'
                ? this.closeOnOutsideClick
                : this.defaultOptions.closeOnOutsideClick;
            if (this.popover &&
                !this.elm.nativeElement.contains(event.target) &&
                !this.popover.location.nativeElement.contains(event.target) &&
                closeOnOutsideClick) {
                this.hidePopover();
            }
        };
        ConfirmationPopoverDirective.prototype.showPopover = function () {
            var _this = this;
            if (!this.popover && !this.isDisabled) {
                // work around for https://github.com/mattlewis92/angular-confirmation-popover/issues/65
                // otherwise the document click event gets fired after the click event
                // that triggered the popover to open (no idea why this is so)
                setTimeout(function () {
                    _this.eventListeners = [
                        _this.renderer.listen('document', 'click', function (event) { return _this.onDocumentClick(event); }),
                        _this.renderer.listen('document', 'touchend', function (event) { return _this.onDocumentClick(event); }),
                        _this.renderer.listen('window', 'resize', function () { return _this.positionPopover(); }),
                    ];
                });
                var options_1 = new ConfirmationPopoverWindowOptions();
                Object.assign(options_1, this.defaultOptions, {
                    onConfirm: function (event) {
                        _this.onConfirm(event);
                    },
                    onCancel: function (event) {
                        _this.onCancel(event);
                    },
                    onAfterViewInit: function () {
                        _this.positionPopover();
                    },
                });
                var optionalParams = [
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
                optionalParams.forEach(function (param) {
                    if (typeof _this[param] !== 'undefined') {
                        options_1[param] = _this[param];
                    }
                });
                var componentFactory = this.cfr.resolveComponentFactory(ConfirmationPopoverWindowComponent);
                var childInjector = i0.Injector.create({
                    providers: [
                        {
                            provide: ConfirmationPopoverWindowOptions,
                            useValue: options_1,
                        },
                    ],
                });
                this.popover = this.viewContainerRef.createComponent(componentFactory, this.viewContainerRef.length, childInjector);
                if (options_1.appendToBody) {
                    document.body.appendChild(this.popover.location.nativeElement);
                }
                this.isOpenChange.emit(true);
            }
        };
        ConfirmationPopoverDirective.prototype.positionPopover = function () {
            if (this.popover) {
                var popoverElement = this.popover.location.nativeElement.children[0];
                positioning.positionElements(this.elm.nativeElement, popoverElement, this.placement || this.defaultOptions.placement, this.appendToBody || this.defaultOptions.appendToBody);
            }
        };
        ConfirmationPopoverDirective.prototype.hidePopover = function () {
            if (this.popover) {
                this.popover.destroy();
                delete this.popover;
                this.isOpenChange.emit(false);
                this.eventListeners.forEach(function (fn) { return fn(); });
                this.eventListeners = [];
            }
        };
        return ConfirmationPopoverDirective;
    }());
    ConfirmationPopoverDirective.ɵfac = function ConfirmationPopoverDirective_Factory(t) { return new (t || ConfirmationPopoverDirective)(i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(ConfirmationPopoverOptions), i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver), i0.ɵɵdirectiveInject(i0.Renderer2)); };
    ConfirmationPopoverDirective.ɵdir = i0.ɵɵdefineDirective({ type: ConfirmationPopoverDirective, selectors: [["", "mwlConfirmationPopover", ""]], hostBindings: function ConfirmationPopoverDirective_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("click", function ConfirmationPopoverDirective_click_HostBindingHandler() { return ctx.togglePopover(); });
            }
        }, inputs: { popoverTitle: "popoverTitle", popoverMessage: "popoverMessage", confirmText: "confirmText", cancelText: "cancelText", placement: "placement", confirmButtonType: "confirmButtonType", cancelButtonType: "cancelButtonType", focusButton: "focusButton", hideConfirmButton: "hideConfirmButton", hideCancelButton: "hideCancelButton", isDisabled: "isDisabled", isOpen: "isOpen", customTemplate: "customTemplate", popoverClass: "popoverClass", appendToBody: "appendToBody", reverseButtonOrder: "reverseButtonOrder", closeOnOutsideClick: "closeOnOutsideClick" }, outputs: { isOpenChange: "isOpenChange", confirm: "confirm", cancel: "cancel" }, features: [i0.ɵɵNgOnChangesFeature] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ConfirmationPopoverDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[mwlConfirmationPopover]',
                    }]
            }], function () { return [{ type: i0.ViewContainerRef }, { type: i0.ElementRef }, { type: ConfirmationPopoverOptions }, { type: i0.ComponentFactoryResolver }, { type: i0.Renderer2 }]; }, { popoverTitle: [{
                    type: i0.Input
                }], popoverMessage: [{
                    type: i0.Input
                }], confirmText: [{
                    type: i0.Input
                }], cancelText: [{
                    type: i0.Input
                }], placement: [{
                    type: i0.Input
                }], confirmButtonType: [{
                    type: i0.Input
                }], cancelButtonType: [{
                    type: i0.Input
                }], focusButton: [{
                    type: i0.Input
                }], hideConfirmButton: [{
                    type: i0.Input
                }], hideCancelButton: [{
                    type: i0.Input
                }], isDisabled: [{
                    type: i0.Input
                }], isOpen: [{
                    type: i0.Input
                }], customTemplate: [{
                    type: i0.Input
                }], isOpenChange: [{
                    type: i0.Output
                }], confirm: [{
                    type: i0.Output
                }], cancel: [{
                    type: i0.Output
                }], popoverClass: [{
                    type: i0.Input
                }], appendToBody: [{
                    type: i0.Input
                }], reverseButtonOrder: [{
                    type: i0.Input
                }], closeOnOutsideClick: [{
                    type: i0.Input
                }], togglePopover: [{
                    type: i0.HostListener,
                    args: ['click']
                }] });
    })();

    var USER_OPTIONS = new i0.InjectionToken('confirmation popover user options');
    function optionsFactory(userOptions) {
        var options = new ConfirmationPopoverOptions();
        Object.assign(options, userOptions);
        return options;
    }
    var ConfirmationPopoverModule = /** @class */ (function () {
        function ConfirmationPopoverModule() {
        }
        ConfirmationPopoverModule.forRoot = function (options) {
            if (options === void 0) { options = {}; }
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
        };
        return ConfirmationPopoverModule;
    }());
    ConfirmationPopoverModule.ɵmod = i0.ɵɵdefineNgModule({ type: ConfirmationPopoverModule });
    ConfirmationPopoverModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ConfirmationPopoverModule_Factory(t) { return new (t || ConfirmationPopoverModule)(); }, imports: [[i2.CommonModule]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ConfirmationPopoverModule, { declarations: [ConfirmationPopoverDirective,
                ConfirmationPopoverWindowComponent,
                FocusDirective], imports: [i2.CommonModule], exports: [ConfirmationPopoverDirective, FocusDirective] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ConfirmationPopoverModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            ConfirmationPopoverDirective,
                            ConfirmationPopoverWindowComponent,
                            FocusDirective,
                        ],
                        imports: [i2.CommonModule],
                        exports: [ConfirmationPopoverDirective, FocusDirective],
                        entryComponents: [ConfirmationPopoverWindowComponent],
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of angular-confirmation-popover
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ConfirmationPopoverDirective = ConfirmationPopoverDirective;
    exports.ConfirmationPopoverModule = ConfirmationPopoverModule;
    exports.FocusDirective = FocusDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-confirmation-popover.umd.js.map

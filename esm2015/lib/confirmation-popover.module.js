import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationPopoverDirective } from './confirmation-popover.directive';
import { ConfirmationPopoverWindowComponent } from './confirmation-popover-window.component';
import { FocusDirective } from './focus.directive';
import { ConfirmationPopoverOptions, } from './confirmation-popover-options.provider';
import * as i0 from "@angular/core";
export const USER_OPTIONS = new InjectionToken('confirmation popover user options');
export function optionsFactory(userOptions) {
    const options = new ConfirmationPopoverOptions();
    Object.assign(options, userOptions);
    return options;
}
export class ConfirmationPopoverModule {
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
ConfirmationPopoverModule.ɵmod = i0.ɵɵdefineNgModule({ type: ConfirmationPopoverModule });
ConfirmationPopoverModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ConfirmationPopoverModule_Factory(t) { return new (t || ConfirmationPopoverModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ConfirmationPopoverModule, { declarations: [ConfirmationPopoverDirective,
        ConfirmationPopoverWindowComponent,
        FocusDirective], imports: [CommonModule], exports: [ConfirmationPopoverDirective, FocusDirective] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ConfirmationPopoverModule, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybWF0aW9uLXBvcG92ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWxhci1jb25maXJtYXRpb24tcG9wb3Zlci9zcmMvbGliL2NvbmZpcm1hdGlvbi1wb3BvdmVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzdGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQ0wsMEJBQTBCLEdBRTNCLE1BQU0seUNBQXlDLENBQUM7O0FBRWpELE1BQU0sQ0FBQyxNQUFNLFlBQVksR0FBMkIsSUFBSSxjQUFjLENBQ3BFLG1DQUFtQyxDQUNwQyxDQUFDO0FBRUYsTUFBTSxVQUFVLGNBQWMsQ0FDNUIsV0FBdUM7SUFFdkMsTUFBTSxPQUFPLEdBQUcsSUFBSSwwQkFBMEIsRUFBRSxDQUFDO0lBQ2pELE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3BDLE9BQU8sT0FBTyxDQUFDO0FBQ2pCLENBQUM7QUFZRCxNQUFNLE9BQU8seUJBQXlCO0lBQ3BDLE1BQU0sQ0FBQyxPQUFPLENBQ1osVUFBK0MsRUFBRTtRQUVqRCxPQUFPO1lBQ0wsUUFBUSxFQUFFLHlCQUF5QjtZQUNuQyxTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLFlBQVk7b0JBQ3JCLFFBQVEsRUFBRSxPQUFPO2lCQUNsQjtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsMEJBQTBCO29CQUNuQyxVQUFVLEVBQUUsY0FBYztvQkFDMUIsSUFBSSxFQUFFLENBQUMsWUFBWSxDQUFDO2lCQUNyQjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7OzZEQWxCVSx5QkFBeUI7aUlBQXpCLHlCQUF5QixrQkFKM0IsQ0FBQyxZQUFZLENBQUM7d0ZBSVoseUJBQXlCLG1CQVJsQyw0QkFBNEI7UUFDNUIsa0NBQWtDO1FBQ2xDLGNBQWMsYUFFTixZQUFZLGFBQ1osNEJBQTRCLEVBQUUsY0FBYztrREFHM0MseUJBQXlCO2NBVnJDLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osNEJBQTRCO29CQUM1QixrQ0FBa0M7b0JBQ2xDLGNBQWM7aUJBQ2Y7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUN2QixPQUFPLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRSxjQUFjLENBQUM7Z0JBQ3ZELGVBQWUsRUFBRSxDQUFDLGtDQUFrQyxDQUFDO2FBQ3REIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29uZmlybWF0aW9uUG9wb3ZlckRpcmVjdGl2ZSB9IGZyb20gJy4vY29uZmlybWF0aW9uLXBvcG92ZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IENvbmZpcm1hdGlvblBvcG92ZXJXaW5kb3dDb21wb25lbnQgfSBmcm9tICcuL2NvbmZpcm1hdGlvbi1wb3BvdmVyLXdpbmRvdy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9jdXNEaXJlY3RpdmUgfSBmcm9tICcuL2ZvY3VzLmRpcmVjdGl2ZSc7XG5pbXBvcnQge1xuICBDb25maXJtYXRpb25Qb3BvdmVyT3B0aW9ucyxcbiAgQ29uZmlybWF0aW9uUG9wb3Zlck9wdGlvbnNJbnRlcmZhY2UsXG59IGZyb20gJy4vY29uZmlybWF0aW9uLXBvcG92ZXItb3B0aW9ucy5wcm92aWRlcic7XG5cbmV4cG9ydCBjb25zdCBVU0VSX09QVElPTlM6IEluamVjdGlvblRva2VuPHN0cmluZz4gPSBuZXcgSW5qZWN0aW9uVG9rZW4oXG4gICdjb25maXJtYXRpb24gcG9wb3ZlciB1c2VyIG9wdGlvbnMnXG4pO1xuXG5leHBvcnQgZnVuY3Rpb24gb3B0aW9uc0ZhY3RvcnkoXG4gIHVzZXJPcHRpb25zOiBDb25maXJtYXRpb25Qb3BvdmVyT3B0aW9uc1xuKTogQ29uZmlybWF0aW9uUG9wb3Zlck9wdGlvbnMge1xuICBjb25zdCBvcHRpb25zID0gbmV3IENvbmZpcm1hdGlvblBvcG92ZXJPcHRpb25zKCk7XG4gIE9iamVjdC5hc3NpZ24ob3B0aW9ucywgdXNlck9wdGlvbnMpO1xuICByZXR1cm4gb3B0aW9ucztcbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQ29uZmlybWF0aW9uUG9wb3ZlckRpcmVjdGl2ZSxcbiAgICBDb25maXJtYXRpb25Qb3BvdmVyV2luZG93Q29tcG9uZW50LFxuICAgIEZvY3VzRGlyZWN0aXZlLFxuICBdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZXhwb3J0czogW0NvbmZpcm1hdGlvblBvcG92ZXJEaXJlY3RpdmUsIEZvY3VzRGlyZWN0aXZlXSxcbiAgZW50cnlDb21wb25lbnRzOiBbQ29uZmlybWF0aW9uUG9wb3ZlcldpbmRvd0NvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIENvbmZpcm1hdGlvblBvcG92ZXJNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChcbiAgICBvcHRpb25zOiBDb25maXJtYXRpb25Qb3BvdmVyT3B0aW9uc0ludGVyZmFjZSA9IHt9XG4gICk6IE1vZHVsZVdpdGhQcm92aWRlcnM8Q29uZmlybWF0aW9uUG9wb3Zlck1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQ29uZmlybWF0aW9uUG9wb3Zlck1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogVVNFUl9PUFRJT05TLFxuICAgICAgICAgIHVzZVZhbHVlOiBvcHRpb25zLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogQ29uZmlybWF0aW9uUG9wb3Zlck9wdGlvbnMsXG4gICAgICAgICAgdXNlRmFjdG9yeTogb3B0aW9uc0ZhY3RvcnksXG4gICAgICAgICAgZGVwczogW1VTRVJfT1BUSU9OU10sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==
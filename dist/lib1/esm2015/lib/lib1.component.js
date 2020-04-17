import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./lib1.service";
import * as i2 from "@angular/common";
export class Lib1Component {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
    }
}
Lib1Component.ɵfac = function Lib1Component_Factory(t) { return new (t || Lib1Component)(i0.ɵɵdirectiveInject(i1.Lib1Service)); };
Lib1Component.ɵcmp = i0.ɵɵdefineComponent({ type: Lib1Component, selectors: [["lib-lib1"]], decls: 3, vars: 3, template: function Lib1Component_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p");
        i0.ɵɵtext(1);
        i0.ɵɵpipe(2, "async");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" lib1 works! ", i0.ɵɵpipeBind1(2, 1, ctx.service.getstring()), " ");
    } }, pipes: [i2.AsyncPipe], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(Lib1Component, [{
        type: Component,
        args: [{
                selector: 'lib-lib1',
                template: `
    <p>
      lib1 works!
      {{service.getstring()|async}}
    </p>
  `,
                styles: []
            }]
    }], function () { return [{ type: i1.Lib1Service }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliMS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9saWIxLyIsInNvdXJjZXMiOlsibGliL2xpYjEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7Ozs7QUFhbEQsTUFBTSxPQUFPLGFBQWE7SUFFeEIsWUFBbUIsT0FBb0I7UUFBcEIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtJQUFJLENBQUM7SUFFNUMsUUFBUTtJQUNSLENBQUM7OzBFQUxVLGFBQWE7a0RBQWIsYUFBYTtRQVB0Qix5QkFDRTtRQUFBLFlBRUY7O1FBQUEsaUJBQUk7O1FBRkYsZUFFRjtRQUZFLDBGQUVGOztrREFJUyxhQUFhO2NBVnpCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsUUFBUSxFQUFFOzs7OztHQUtUO2dCQUNELE1BQU0sRUFBRSxFQUFFO2FBQ1giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGliMVNlcnZpY2UgfSBmcm9tICcuL2xpYjEuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1saWIxJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIGxpYjEgd29ya3MhXG4gICAgICB7e3NlcnZpY2UuZ2V0c3RyaW5nKCl8YXN5bmN9fVxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBMaWIxQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2VydmljZTogTGliMVNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbn1cbiJdfQ==
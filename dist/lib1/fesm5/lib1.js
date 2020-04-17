import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdirectiveInject, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵpipe, ɵɵelementEnd, ɵɵadvance, ɵɵtextInterpolate1, ɵɵpipeBind1, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { of } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';

var Lib1Service = /** @class */ (function () {
    function Lib1Service() {
    }
    Lib1Service.prototype.getstring = function () {
        return of('lib service works v3');
    };
    Lib1Service.ɵfac = function Lib1Service_Factory(t) { return new (t || Lib1Service)(); };
    Lib1Service.ɵprov = ɵɵdefineInjectable({ token: Lib1Service, factory: Lib1Service.ɵfac, providedIn: 'root' });
    return Lib1Service;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(Lib1Service, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

var Lib1Component = /** @class */ (function () {
    function Lib1Component(service) {
        this.service = service;
    }
    Lib1Component.prototype.ngOnInit = function () {
    };
    Lib1Component.ɵfac = function Lib1Component_Factory(t) { return new (t || Lib1Component)(ɵɵdirectiveInject(Lib1Service)); };
    Lib1Component.ɵcmp = ɵɵdefineComponent({ type: Lib1Component, selectors: [["lib-lib1"]], decls: 3, vars: 3, template: function Lib1Component_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "p");
            ɵɵtext(1);
            ɵɵpipe(2, "async");
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(1);
            ɵɵtextInterpolate1(" lib1 works! ", ɵɵpipeBind1(2, 1, ctx.service.getstring()), " ");
        } }, pipes: [AsyncPipe], encapsulation: 2 });
    return Lib1Component;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(Lib1Component, [{
        type: Component,
        args: [{
                selector: 'lib-lib1',
                template: "\n    <p>\n      lib1 works!\n      {{service.getstring()|async}}\n    </p>\n  ",
                styles: []
            }]
    }], function () { return [{ type: Lib1Service }]; }, null); })();

var Lib1Module = /** @class */ (function () {
    function Lib1Module() {
    }
    Lib1Module.ɵmod = ɵɵdefineNgModule({ type: Lib1Module });
    Lib1Module.ɵinj = ɵɵdefineInjector({ factory: function Lib1Module_Factory(t) { return new (t || Lib1Module)(); }, imports: [[
                CommonModule
            ]] });
    return Lib1Module;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(Lib1Module, { declarations: [Lib1Component], imports: [CommonModule], exports: [Lib1Component] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(Lib1Module, [{
        type: NgModule,
        args: [{
                declarations: [Lib1Component],
                imports: [
                    CommonModule
                ],
                exports: [Lib1Component]
            }]
    }], null, null); })();

/*
 * Public API Surface of lib1
 */

/**
 * Generated bundle index. Do not edit.
 */

export { Lib1Component, Lib1Module, Lib1Service };
//# sourceMappingURL=lib1.js.map

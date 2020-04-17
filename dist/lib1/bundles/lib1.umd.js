(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('projects/lib1/src/lib/lib1.service'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('lib1', ['exports', '@angular/core', 'rxjs', 'projects/lib1/src/lib/lib1.service', '@angular/common'], factory) :
    (global = global || self, factory(global.lib1 = {}, global.ng.core, global.rxjs, global.lib1_service, global.ng.common));
}(this, (function (exports, core, rxjs, lib1_service, common) { 'use strict';

    var Lib1Service = /** @class */ (function () {
        function Lib1Service() {
        }
        Lib1Service.prototype.getstring = function () {
            return rxjs.of('lib service works v3');
        };
        Lib1Service.ɵfac = function Lib1Service_Factory(t) { return new (t || Lib1Service)(); };
        Lib1Service.ɵprov = core.ɵɵdefineInjectable({ token: Lib1Service, factory: Lib1Service.ɵfac, providedIn: 'root' });
        return Lib1Service;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(Lib1Service, [{
            type: core.Injectable,
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
        Lib1Component.ɵfac = function Lib1Component_Factory(t) { return new (t || Lib1Component)(core.ɵɵdirectiveInject(lib1_service.Lib1Service)); };
        Lib1Component.ɵcmp = core.ɵɵdefineComponent({ type: Lib1Component, selectors: [["lib-lib1"]], decls: 3, vars: 3, template: function Lib1Component_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "p");
                core.ɵɵtext(1);
                core.ɵɵpipe(2, "async");
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵadvance(1);
                core.ɵɵtextInterpolate1(" lib1 works! ", core.ɵɵpipeBind1(2, 1, ctx.service.getstring()), " ");
            } }, pipes: [common.AsyncPipe], encapsulation: 2 });
        return Lib1Component;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(Lib1Component, [{
            type: core.Component,
            args: [{
                    selector: 'lib-lib1',
                    template: "\n    <p>\n      lib1 works!\n      {{service.getstring()|async}}\n    </p>\n  ",
                    styles: []
                }]
        }], function () { return [{ type: lib1_service.Lib1Service }]; }, null); })();

    var Lib1Module = /** @class */ (function () {
        function Lib1Module() {
        }
        Lib1Module.ɵmod = core.ɵɵdefineNgModule({ type: Lib1Module });
        Lib1Module.ɵinj = core.ɵɵdefineInjector({ factory: function Lib1Module_Factory(t) { return new (t || Lib1Module)(); }, imports: [[
                    common.CommonModule
                ]] });
        return Lib1Module;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(Lib1Module, { declarations: [Lib1Component], imports: [common.CommonModule], exports: [Lib1Component] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(Lib1Module, [{
            type: core.NgModule,
            args: [{
                    declarations: [Lib1Component],
                    imports: [
                        common.CommonModule
                    ],
                    exports: [Lib1Component]
                }]
        }], null, null); })();

    exports.Lib1Component = Lib1Component;
    exports.Lib1Module = Lib1Module;
    exports.Lib1Service = Lib1Service;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=lib1.umd.js.map

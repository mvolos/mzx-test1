import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import * as i0 from "@angular/core";
var Lib1Service = /** @class */ (function () {
    function Lib1Service() {
    }
    Lib1Service.prototype.getstring = function () {
        return of('lib service works v3');
    };
    Lib1Service.ɵfac = function Lib1Service_Factory(t) { return new (t || Lib1Service)(); };
    Lib1Service.ɵprov = i0.ɵɵdefineInjectable({ token: Lib1Service, factory: Lib1Service.ɵfac, providedIn: 'root' });
    return Lib1Service;
}());
export { Lib1Service };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(Lib1Service, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliMS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbGliMS8iLCJzb3VyY2VzIjpbImxpYi9saWIxLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUV0QztJQUtFO0lBQWdCLENBQUM7SUFFakIsK0JBQVMsR0FBVDtRQUNFLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDLENBQUE7SUFDbkMsQ0FBQzswRUFOVSxXQUFXO3VEQUFYLFdBQVcsV0FBWCxXQUFXLG1CQUZWLE1BQU07c0JBSnBCO0NBYUMsQUFWRCxJQVVDO1NBUFksV0FBVztrREFBWCxXQUFXO2NBSHZCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIExpYjFTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIGdldHN0cmluZygpOk9ic2VydmFibGU8c3RyaW5nPntcbiAgICByZXR1cm4gb2YoJ2xpYiBzZXJ2aWNlIHdvcmtzIHYzJylcbiAgfVxufVxuIl19
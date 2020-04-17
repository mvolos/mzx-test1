import { OnInit } from '@angular/core';
import { Lib1Service } from 'projects/lib1/src/lib/lib1.service';
import * as i0 from "@angular/core";
export declare class Lib1Component implements OnInit {
    service: Lib1Service;
    constructor(service: Lib1Service);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<Lib1Component, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<Lib1Component, "lib-lib1", never, {}, {}, never, never>;
}

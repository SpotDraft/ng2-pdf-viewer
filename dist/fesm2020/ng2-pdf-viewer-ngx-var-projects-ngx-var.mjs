import * as i0 from '@angular/core';
import { Directive, Input, NgModule } from '@angular/core';

class Context {
}
class NgxVarDirective {
    constructor(_vcr, _templateRef) {
        this._vcr = _vcr;
        this._templateRef = _templateRef;
        this._context = new Context();
    }
    set ngxVar(value) {
        this._context.$implicit = value;
        this._context.ngxVar = value;
    }
    ngOnInit() {
        this._vcr.createEmbeddedView(this._templateRef, this._context);
    }
    /**
     * Asserts the correct type of the context for the template that `ngxVar` will render.
     *
     * The presence of this method is a signal to the Ivy template type-check compiler that the
     * `ngxVar` structural directive renders its template with a specific context type.
     */
    static ngTemplateContextGuard(dir, ctx) {
        return true;
    }
}
NgxVarDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: NgxVarDirective, deps: [{ token: i0.ViewContainerRef }, { token: i0.TemplateRef }], target: i0.ɵɵFactoryTarget.Directive });
NgxVarDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.1.3", type: NgxVarDirective, selector: "[ngxVar]", inputs: { ngxVar: "ngxVar" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: NgxVarDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngxVar]',
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }, { type: i0.TemplateRef }]; }, propDecorators: { ngxVar: [{
                type: Input
            }] } });

class NgxVarModule {
}
NgxVarModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: NgxVarModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgxVarModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: NgxVarModule, declarations: [NgxVarDirective], exports: [NgxVarDirective] });
NgxVarModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: NgxVarModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: NgxVarModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [NgxVarDirective],
                    imports: [],
                    exports: [NgxVarDirective],
                }]
        }] });

/*
 * Public API Surface of ngx-var
 */

/**
 * Generated bundle index. Do not edit.
 */

export { Context, NgxVarDirective, NgxVarModule };
//# sourceMappingURL=ng2-pdf-viewer-ngx-var-projects-ngx-var.mjs.map

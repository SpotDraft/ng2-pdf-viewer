import { Directive, Input, } from '@angular/core';
import * as i0 from "@angular/core";
export class Context {
}
export class NgxVarDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXZhci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9uZ3gtdmFyL3Byb2plY3RzL25neC12YXIvc3JjL2xpYi9uZ3gtdmFyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssR0FJTixNQUFNLGVBQWUsQ0FBQzs7QUFFdkIsTUFBTSxPQUFPLE9BQU87Q0E2Qm5CO0FBS0QsTUFBTSxPQUFPLGVBQWU7SUFTMUIsWUFDVSxJQUFzQixFQUN0QixZQUFxQztRQURyQyxTQUFJLEdBQUosSUFBSSxDQUFrQjtRQUN0QixpQkFBWSxHQUFaLFlBQVksQ0FBeUI7UUFWdkMsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFLLENBQUM7SUFXakMsQ0FBQztJQVRKLElBQ0ksTUFBTSxDQUFDLEtBQVE7UUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUMvQixDQUFDO0lBT0QsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakUsQ0FBQztJQVlEOzs7OztPQUtHO0lBQ0gsTUFBTSxDQUFDLHNCQUFzQixDQUMzQixHQUF1QixFQUN2QixHQUFRO1FBRVIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs0R0F2Q1UsZUFBZTtnR0FBZixlQUFlOzJGQUFmLGVBQWU7a0JBSDNCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7aUJBQ3JCO2lJQUtLLE1BQU07c0JBRFQsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDb250YWluZXJSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQ29udGV4dDxUID0gdW5rbm93bj4ge1xuICAvKipcbiAgICogVGhlIGAkaW1wbGljaXRgIHByb3BlcnR5IHBvd2VycyB0aGUgZGVmYXVsdCBgbGV0LWAgc3ludGF4LlxuICAgKiBFZzpcbiAgICpcbiAgICogYGBgXG4gICAqIDxuZy1jb250YWluZXIgKm5neFZhcj1cImlzRW5hYmxlZCQgfCBhc3luYzsgbGV0IGVuYWJsZWRcIj5cbiAgICogYGBgXG4gICAqICBvclxuICAgKiBgYGBcbiAgICogPG5nLWNvbnRhaW5lciAqbmd4VmFyPVwiaXNFbmFibGVkJCB8IGFzeW5jOyBsZXQtZW5hYmxlZD1uZ3hWYXI+XG4gICAqIGBgYFxuICAgKi9cbiAgJGltcGxpY2l0OiBUO1xuICAvKipcbiAgICogVGhlIG5hbWUgb2YgdGhpcyBwcm9wZXJ0eSAqbXVzdCogbWF0Y2ggdGhlIHNlbGVjdG9yIG9mIHRoZSBkaXJlY3RpdmUuIFRoaXMgaXNcbiAgICogYmVjYXVzZSBBbmd1bGFyIGRlc3VnYXJzIHRoZSBtaWNyb3N5bnRheCB3aXRoIHRoaXMgYXNzdW1wdGlvbi4gRm9yIEVnOlxuICAgKlxuICAgKiBgYGBcbiAgICogPG5nLWNvbnRhaW5lciAqbmd4VmFyPVwiaXNFbmFibGVkJCB8IGFzeW5jIGFzIGVuYWJsZWRcIj5cbiAgICogYGBgXG4gICAqIGlzIHN5bnRhY3RpYyBzdWdhciBmb3IgLVxuICAgKlxuICAgKiBgYGBcbiAgICogPG5nLWNvbnRhaW5lciAqbmd4VmFyPVwiaXNFbmFibGVkJCB8IGFzeW5jXCIgbGV0LWVuYWJsZWQ9XCJuZ3hWYXJcIj5cbiAgICogYGBgXG4gICAqXG4gICAqL1xuICBuZ3hWYXI6IFQ7XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuZ3hWYXJdJyxcbn0pXG5leHBvcnQgY2xhc3MgTmd4VmFyRGlyZWN0aXZlPFQgPSB1bmtub3duPiBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgX2NvbnRleHQgPSBuZXcgQ29udGV4dDxUPigpO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuZ3hWYXIodmFsdWU6IFQpIHtcbiAgICB0aGlzLl9jb250ZXh0LiRpbXBsaWNpdCA9IHZhbHVlO1xuICAgIHRoaXMuX2NvbnRleHQubmd4VmFyID0gdmFsdWU7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF92Y3I6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSBfdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPENvbnRleHQ8VD4+XG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl92Y3IuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMuX3RlbXBsYXRlUmVmLCB0aGlzLl9jb250ZXh0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBc3NlcnQgdGhlIGNvcnJlY3QgdHlwZSBvZiB0aGUgZXhwcmVzc2lvbiBib3VuZCB0byB0aGUgYG5neFZhcmAgaW5wdXQgd2l0aGluIHRoZSB0ZW1wbGF0ZS5cbiAgICpcbiAgICogVGhlIHByZXNlbmNlIG9mIHRoaXMgc3RhdGljIGZpZWxkIGlzIGEgc2lnbmFsIHRvIHRoZSBJdnkgdGVtcGxhdGUgdHlwZSBjaGVjayBjb21waWxlciB0aGF0XG4gICAqIHdoZW4gdGhlIGBuZ3hWYXJgIHN0cnVjdHVyYWwgZGlyZWN0aXZlIHJlbmRlcnMgaXRzIHRlbXBsYXRlLCB0aGUgdHlwZSBvZiB0aGUgZXhwcmVzc2lvbiBib3VuZFxuICAgKiB0byBgbmd4VmFyYCBzaG91bGQgYmUgbmFycm93ZWQgaW4gc29tZSB3YXkuIEZvciBgbmd4VmFyYCwgdGhlIGJpbmRpbmcgZXhwcmVzc2lvbiBpdHNlbGYgaXMgdXNlZCB0b1xuICAgKiBuYXJyb3cgaXRzIHR5cGUsIHdoaWNoIGFsbG93cyB0aGUgc3RyaWN0TnVsbENoZWNrcyBmZWF0dXJlIG9mIFR5cGVTY3JpcHQgdG8gd29yayB3aXRoIGBuZ3hWYXJgLlxuICAgKi9cbiAgc3RhdGljIG5nVGVtcGxhdGVHdWFyZF9uZ3hWYXI6ICdiaW5kaW5nJztcblxuICAvKipcbiAgICogQXNzZXJ0cyB0aGUgY29ycmVjdCB0eXBlIG9mIHRoZSBjb250ZXh0IGZvciB0aGUgdGVtcGxhdGUgdGhhdCBgbmd4VmFyYCB3aWxsIHJlbmRlci5cbiAgICpcbiAgICogVGhlIHByZXNlbmNlIG9mIHRoaXMgbWV0aG9kIGlzIGEgc2lnbmFsIHRvIHRoZSBJdnkgdGVtcGxhdGUgdHlwZS1jaGVjayBjb21waWxlciB0aGF0IHRoZVxuICAgKiBgbmd4VmFyYCBzdHJ1Y3R1cmFsIGRpcmVjdGl2ZSByZW5kZXJzIGl0cyB0ZW1wbGF0ZSB3aXRoIGEgc3BlY2lmaWMgY29udGV4dCB0eXBlLlxuICAgKi9cbiAgc3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQ8VD4oXG4gICAgZGlyOiBOZ3hWYXJEaXJlY3RpdmU8VD4sXG4gICAgY3R4OiBhbnlcbiAgKTogY3R4IGlzIENvbnRleHQ8RXhjbHVkZTxULCBmYWxzZSB8IDAgfCAnJyB8IG51bGwgfCB1bmRlZmluZWQ+PiB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiJdfQ==
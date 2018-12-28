import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ~~~ Directives ~~~
// import { InfiniteScrollDirective } from './directives/infinite-scroll.directive';
// import { ResizeDirective } from './directives/resize.directive';
// import { ScrollTrapDirective } from './directives/scroll-trap.directive';
const unfetterDirectives = [
    // InfiniteScrollDirective,
    // ResizeDirective,
    // ScrollTrapDirective,
];

// ~~~ Pipes ~~~
// import { CapitalizePipe } from './pipes/capitalize.pipe';
// import { ColumnSizePipe } from './pipes/column-size.pipe';
// import { FieldSortPipe } from './pipes/field-sort.pipe';
// import { FirstSentencePipe } from './pipes/first-sentence.pipe';
// import { IdentifierSummarizedPipe } from './pipes/identifier-summarized.pipe';
// import { IdentifierTypePipe } from './pipes/identifier-type.pipe';
// import { ReadableBytesPipe } from './pipes/readable-bytes.pipe';
// import { RestSentencePipe } from './pipes/rest-sentence.pipe';
// import { RiskColorPipe } from './pipes/risk-color.pipe';
// import { SophisticationPipe } from './pipes/sophistication.pipe';
// import { TimeAgoPipe } from './pipes/time-ago.pipe';
const unfetterPipes = [
    // CapitalizePipe,
    // ColumnSizePipe,
    // FieldSortPipe,
    // FirstSentencePipe,
    // IdentifierSummarizedPipe,
    // IdentifierTypePipe,
    // ReadableBytesPipe,
    // RestSentencePipe,
    // RiskColorPipe,
    // SophisticationPipe,
    // TimeAgoPipe,
];

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        // ...unfetterDirectives,
        // ...unfetterPipes,
    ],
    exports: [
        // ...unfetterDirectives,
        // ...unfetterPipes,
    ],
    providers: [
    ],
})
export class CommonsModule {
}

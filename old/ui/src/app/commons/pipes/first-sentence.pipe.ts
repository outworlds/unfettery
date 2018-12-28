import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'firstSentence'
})
export class FirstSentencePipe implements PipeTransform {

    public transform(sentence: string): string {
        if (sentence) {
            const trim = this.trimSpace(sentence);
            const result = trim.match( /[^\.!\?]+[\.!\?]+/g );
            if (result) {
                return result[0];
            }
            return trim;
        }
        return '';
    }

    private trimSpace(str) {
        return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    }

}

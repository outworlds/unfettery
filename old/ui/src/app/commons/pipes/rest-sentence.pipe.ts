import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'restSentence'
})
export class RestSentencePipe implements PipeTransform {

    public transform(sentence: string): string {
        if (sentence) {
            const trim = this.trimSpace(sentence);
            const result = trim.match( /[^\.!\?]+[\.!\?]+/g );
            if (result) {
                const last = result.splice(1 , 1);
                return last[0];
            }
            return trim;
        }
        return sentence;
    }

    private trimSpace(str: string): string {
        return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    }

}

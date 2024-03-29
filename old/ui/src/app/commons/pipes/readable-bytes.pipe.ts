import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'readableBytes'
})
export class ReadableBytesPipe implements PipeTransform {

    public transform(bytes: number): string {
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        const i = Math.floor(Math.log(bytes) / Math.log(1024));
        if (i === 0) {
            return `${bytes} ${sizes[i]}`;
        }
        return `${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`;
    }

}

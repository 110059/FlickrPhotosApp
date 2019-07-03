import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'imageOnly' })
export class ImageOnlyPipe implements PipeTransform {
    transform(links: any, type: string = 'image/jpeg'): string {
        if (!links || links.length === 0) { return ''; }
        let imageLink: string = '';
        links.forEach(link => {
            if (link.$['type'] === type) {
                imageLink = link.$['href'];
            }
        });
        return imageLink;
    }
}
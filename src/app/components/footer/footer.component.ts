import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [NgOptimizedImage],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss',
})
export class FooterComponent {
    goToTop(): void {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }
}

import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [NgOptimizedImage],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent {
    menuOptions: string[] = ['home', 'sobre', 'projetos', 'contato'];
    menuIsVisible: boolean = false;

    constructor(private router: Router, private route: ActivatedRoute) {}

    toggleMenuVisibility(): void {
        this.menuIsVisible = !this.menuIsVisible;
    }

    closeMenu(): void {
        this.menuIsVisible = false;
    }

    goToPage(page: string): void {
        this.closeMenu();
        this.router.navigate([`/${page}`]);
    }

    isRouteActive(page: string): boolean {
        return this.router.routerState.snapshot.url.startsWith(`/${page}`);
    }
}

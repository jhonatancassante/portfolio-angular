import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-projetos',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './projetos.component.html',
    styleUrl: './projetos.component.scss',
})
export class ProjetosComponent {
    menuOptions: string[] = ['pokedex', 'dots on screen', 'formulário'];
    menuIsVisible: boolean = false;

    constructor(private router: Router) {}

    toggleMenuVisibility(): void {
        this.menuIsVisible = !this.menuIsVisible;
    }

    closeMenu(): void {
        this.menuIsVisible = false;
    }

    prepareSringPath(path: string): string {
        return path
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/ /g, '_');
    }

    goToPage(page: string): void {
        this.closeMenu();
        this.router.navigate([`/projetos/${this.prepareSringPath(page)}`]);
    }

    isRouteActive(page: string): boolean {
        return this.router.routerState.snapshot.url.endsWith(
            this.prepareSringPath(page)
        );
    }
}

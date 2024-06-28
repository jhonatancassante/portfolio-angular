import { Component } from '@angular/core';

@Component({
    selector: 'app-projetos',
    standalone: true,
    imports: [],
    templateUrl: './projetos.component.html',
    styleUrl: './projetos.component.scss',
})
export class ProjetosComponent {
    menuOptions: string[] = ['pokedex', 'dost on screen', 'formulário'];
    menuIsVisible: boolean = true;

    toggleMenuVisibility(): void {
        this.menuIsVisible = !this.menuIsVisible;
        console.log(this.menuIsVisible);
    }

    closeMenu(): void {
        this.menuIsVisible = false;
    }
}

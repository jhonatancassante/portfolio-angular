import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProjetosComponent } from './pages/projetos/projetos.component';
import { PokedexComponent } from './pages/projetos/components/pokedex/pokedex.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'projetos',
        component: ProjetosComponent,
        children: [
            {
                path: '',
                redirectTo: 'pokedex',
                pathMatch: 'full',
            },
            {
                path: 'pokedex',
                component: PokedexComponent,
            },
            {
                path: '**',
                component: NotFoundComponent,
            },
        ],
    },
    {
        path: '**',
        component: NotFoundComponent,
    },
];

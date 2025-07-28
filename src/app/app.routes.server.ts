import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'certificados/:id',
    renderMode: RenderMode.Server // evita prerender nessa rota dinâmica
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender // continua prerender para o resto
  }
];

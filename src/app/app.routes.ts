import { Routes } from '@angular/router';
import { Certificados } from './pages/certificados/certificados';
import { Certificado } from './pages/certificado/certificado';
import { CertificadoForm } from './pages/certificado-form/certificado-form';

export const routes: Routes = [
  {
    path: '',
    component: Certificados,
  },
  {
    path: 'certificados/novo',
    component: CertificadoForm,
  },
  {
  path: 'certificados/:id',
  component: Certificado,
  }


];

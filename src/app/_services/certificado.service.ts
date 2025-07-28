import { Injectable } from '@angular/core';
import { CertificadoInterface } from '../interfaces/certificado';

@Injectable({
  providedIn: 'root',
})
export class CertificadoService {
  certificados: CertificadoInterface[] = [];

  constructor() {}

  adicionarCertificado(certificado: CertificadoInterface) {
    this.certificados.unshift({ ...certificado });
    localStorage.setItem('certificados', JSON.stringify(this.certificados));
    //recuperar lista

    console.log(this.certificados);
  }
}

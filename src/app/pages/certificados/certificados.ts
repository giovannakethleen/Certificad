import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ItemCertificado } from '../../_components/item-certificado/item-certificado';
import { SecondaryButton } from '../../_components/secondary-button/secondary-button';
import { CertificadoService } from '../../_services/certificado.service';
import { CertificadoInterface } from '../../interfaces/certificado';

@Component({
  selector: 'app-certificados',
  imports: [SecondaryButton, RouterLink, ItemCertificado],
  templateUrl: './certificados.html',
  styleUrl: './certificados.css',
})

export class Certificados implements OnInit {
  certificados: CertificadoInterface[] = [];

  constructor(private CertificadoService: CertificadoService) {}

  ngOnInit(): void {
    this.certificados = this.CertificadoService.certificados.reverse();
    console.log(this.certificados)
  }
}

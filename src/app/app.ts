import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./_components/navbar/navbar";
import { BaseUi } from "./_components/base-ui/base-ui";
import { CertificadoService } from './_services/certificado.service';

@Component({
  selector: 'app-root',
  imports: [Navbar, BaseUi, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App implements OnInit{
  protected title = 'Gerador-Certificado';
  exibeNavbar: boolean = true;

  constructor(private certifadoService: CertificadoService){}

  ngOnInit(): void {
   const certificados = localStorage.getItem('certificados');
   this.certifadoService.certificados = certificados ? JSON.parse(certificados) : [];
   console.log(this.certifadoService.certificados)
  }
  //verificar localStorage.
}

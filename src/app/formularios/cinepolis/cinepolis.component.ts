import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {
  boletosForm: FormGroup;
  maxEntradas: number = 7;  
  montoTotal: number | null = null;
  numEntradas: number | null = null;
  nombre: string = "";

  constructor(private fb: FormBuilder) {
    this.boletosForm = this.fb.group({
      nombre: ['', Validators.required],
      numEntradas: [1, [Validators.required, Validators.min(1)]],
      numPersonas: [1, [Validators.required, Validators.min(1), Validators.max(7)]],
      tarjetaSocioCineco: [false]
    });
  }

  actualizarMaxEntradas() {
    const numPersonas = this.boletosForm.get('numPersonas')?.value || 1;
    this.maxEntradas = numPersonas * 7; 

    const numEntradas = this.boletosForm.get('numEntradas')?.value;
    if (numEntradas > this.maxEntradas) {
      this.boletosForm.get('numEntradas')?.setValue(this.maxEntradas);
    }
  }

  obtenerTotal() {
    const numEntradas = this.boletosForm.get('numEntradas')?.value;
    const tarjetaSocio = this.boletosForm.get('tarjetaSocioCineco')?.value;

    let precioPorEntrada = 12; 
    let descuento = 0;

    if (numEntradas > 5) {
      descuento = 0.15;
    } else if (numEntradas >= 3) {
      descuento = 0.10; 
    }

    let total = numEntradas * precioPorEntrada;
    total -= total * descuento;

    if (tarjetaSocio) {
      total -= total * 0.10; 
    }

    this.numEntradas = numEntradas;
    this.montoTotal = total;
  }
}
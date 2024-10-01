import { Component} from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

interface ResultadoTolerancia {
  tolerancia: number;
  color1: string;
  color2: string;
  color3: string;
  estilocolor1: string;
  estilocolor2: string;
  estilocolor3: string;
  colTolerancia: string;
  valor: number;
  valorMaximo: number;
  valorMinimo: number;

}
@Component({
  selector: 'app-resistencia',
  templateUrl: './resistencia.component.html',
  styleUrl: './resistencia.component.css'
})
export class ResistenciaComponent {
  formulario!: FormGroup;

  resultado: ResultadoTolerancia | null = null;

  constructor() { }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      color1: new FormControl('', Validators.required),
      color2: new FormControl('', Validators.required),
      color3: new FormControl('', Validators.required),
      tolerancia: new FormControl('', Validators.required),
     
    });
  }
  generaTolerancia(): void {
    const colores: { [key: number]: string } = {
      0: 'Negro',
      1: 'Café',
      2: 'Rojo',
      3: 'Naranja',
      4: 'Amarillo',
      5: 'Verde',
      6: 'Azul',
      7: 'Violeta',
      8: 'Gris',
      9: 'Blanco'
    };
    const colTolerancia: { [key: string]: string } = {
      'oro': '#FFD700',
      'plata': '#C0C0C0'
    }
    const colorescolor3: { [key: number]: string } = {
      1: 'Negro',
      10: 'Café',
      100: 'Rojo',
      1000: 'Naranja',
      10000: 'Amarillo',
      100000: 'Verde',
      1000000: 'Azul',
      10000000: 'Violeta',
      100000000: 'Gris',
      1000000000: 'Blanco'
    };
    const coloresBackground: { [key: number]: string } = {
      0: '#000000',  // Negro
      1: '#6F4E37',  // Café
      2: '#FF0000',  // Rojo
      3: '#FFA500',  // Naranja
      4: '#FFFF00',  // Amarillo
      5: '#008000',  // Verde
      6: '#0000FF',  // Azul
      7: '#8A2BE2',  // Violeta
      8: '#808080',  // Gris
      9: '#FFFFFF'   // Blanco
    }
    const coloresBackground2: { [key: number]: string } = {
      1: '#000000',       // Negro
      10: '#6F4E37',      // Café
      100: '#FF0000',     // Rojo
      1000: '#FFA500',    // Naranja
      10000: '#FFFF00',   // Amarillo
      100000: '#008000',  // Verde
      1000000: '#0000FF', // Azul
      10000000: '#8A2BE2',// Violeta
      100000000: '#808080',// Gris
      1000000000: '#FFFFFF'// Blanco
    };



    let toleranciaFinal = 0;
    let toleranciaFinalMin = 0;
    let color1 = this.formulario.get('color1')?.value;
    let color2 = this.formulario.get('color2')?.value;
    let color3 = this.formulario.get('color3')?.value;
    let tolerancia = this.formulario.get('tolerancia')?.value;
    let realizaCalculo = color1 + color2;
    let ohm = parseInt(realizaCalculo) * parseInt(color3);
    if (tolerancia == 'oro') {
      toleranciaFinal = ohm + (ohm * 0.05);
      toleranciaFinalMin = ohm - (ohm * 0.05);
      this.resultado = {
        tolerancia: tolerancia,
        color1: colores[color1],
        color2: colores[color2],
        color3: colorescolor3[color3],
        estilocolor1: coloresBackground[color1],
        estilocolor2: coloresBackground[color2],
        estilocolor3: coloresBackground2[color3],
        colTolerancia: colTolerancia[tolerancia],
        valor: ohm,
        valorMaximo: toleranciaFinal,
        valorMinimo: toleranciaFinalMin
      };

    } else if (tolerancia == 'plata') {
      toleranciaFinal = ohm + (ohm * 0.10);
      toleranciaFinalMin = ohm - (ohm * 0.10);
      this.resultado = {
        tolerancia: tolerancia,
        color1: colores[color1],
        color2: colores[color2],
        color3: colorescolor3[color3],
        estilocolor1: coloresBackground[color1],
        estilocolor2: coloresBackground[color2],
        estilocolor3: coloresBackground2[color3],
        colTolerancia: colTolerancia[tolerancia],
        valor: ohm,
        valorMaximo: toleranciaFinal,
        valorMinimo: toleranciaFinalMin
      };
    }

    console.log('color1', color1);
    console.log('color2', color2);
    console.log('RealizaCalculo', realizaCalculo);
    console.log('ohm', ohm);
    console.log('Tolerancia', toleranciaFinal);
    console.log('Resultado', this.resultado);
    console.log('Colores', colores[color1]);

  }
}
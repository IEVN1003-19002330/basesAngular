import { Component } from '@angular/core';
import {IProducto} from '../producto'

@Component({
  selector: 'app-product-list',
  templateUrl:'./product-list.component.html', 
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  title="Saludo de variable";

  imageWidth:number=50;
  imageMargi:number=2;
  muestraImg:boolean=true;
  listFilter:string='';

  showImage():void{
    this.muestraImg=!this.muestraImg;
  }


  productos:IProducto [] = [
    {

      "producto":1,
      "modelo": 'Sentra',
      "descripcion":'4 puertas familiar',
      "year":'febrero 3 2022',
      "precio":200000,
      "marca":'NISSAN',
      "color":'morado',
      "imagenUrl":"https://blogmedia.dealerfire.com/wp-content/uploads/sites/858/2019/11/Sentra-Reveal-2-source.jpg"
    },
    {

      "producto":2,
      "modelo": 'A4',
      "descripcion":'2 puertas familiar',
      "year":'febrero 3 2023',
      "precio":200000,
      "marca":'NISSAN',
      "color":'morado',
      "imagenUrl":"http://www.audi-sport.net/xf/attachments/inspiration-jpg.75443/"
    },
    {

      "producto":3,
      "modelo": 'Rio',
      "descripcion":'2 puertas familiar',
      "year":'febrero 3 2022',
      "precio":200000,
      "marca":'KIA',
      "color":'Azul',
      "imagenUrl":"https://tse2.mm.bing.net/th?id=OIP.A8wpf_PlilMC71zmOURwawHaE7&pid=Api"
    }

  ]
}

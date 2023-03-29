import { Component } from '@angular/core';
import { Empleado } from './models/empleado';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Arreglo de empleados
  empleadoArray: Empleado[] = [
    {id:1, nombre:'Victor', pais:'México',puesto:'QA'},
    {id:2, nombre:'Alex', pais:'USA',puesto:'Front-end'},
    {id:3, nombre:'Yessi', pais:'Colombia',puesto:'Back-end'}
  ];


  selectEmpleado: Empleado = new Empleado();

  abrirEdit(empleado: Empleado){
    this.selectEmpleado = empleado;
  }
  
  agregar_editar(){
    if(this.selectEmpleado.id === 0){
      //Agregar
      //Hacer el campo id autoincrementable
      this.selectEmpleado.id = this.empleadoArray.length + 1;
      this.empleadoArray.push(this.selectEmpleado);
    }

      //Editar
      this.selectEmpleado = new Empleado();
  }

  eliminar(){

    if(confirm('Quieres eliminar al usuario?')){
      this.empleadoArray = this.empleadoArray.filter(x => x != this.selectEmpleado)
      this.selectEmpleado =  new Empleado();
    }

    
  }
  
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClientesService } from './clientes/clientes.service';
import { ClientesFormComponent } from './clientes/clientes-form/clientes-form.component';
import { TareasComponent } from './tareas/tareas.component';
import { TareasFormComponent } from './tareas/tareas-form/tareas-form.component';
import { TareasService } from './tareas/tareas.service';
import { OrdenesTrabajoComponent } from './ordenes-trabajo/ordenes-trabajo.component';
import { OrdenesTrabajoFormComponent } from './ordenes-trabajo/ordenes-trabajo-form/ordenes-trabajo-form.component';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { DetalleTareaComponent } from './ordenes-trabajo/detalle-tarea/detalle-tarea.component';
import { ContenedorOrdenTrabajoComponent } from './ordenes-trabajo/contenedor-orden-trabajo/contenedor-orden-trabajo.component';
import { DetalleTareaService } from './ordenes-trabajo/detalle-tarea/detalle-tarea.service';
import { DetalleTareaFormComponent } from './ordenes-trabajo/detalle-tarea/detalle-tarea-form/detalle-tarea-form.component';
import { MatFormField, MatInput, MatOption, MatAutocomplete, MatCheckboxModule, MatLabel, MatAutocompleteModule, MatOptionModule, MatPaginatorModule, MatFormFieldModule, MatGridListModule, MatDatepickerModule, MatNativeDateModule, MatListModule, MatIconModule, MatTooltipModule, MatExpansionModule, MatDialogModule, MatSliderModule, MatCardModule } from '@angular/material';
import { EmpleadosComponent } from './empleados/empleados.component';
import { EmpleadosService } from './empleados/empleados.service';
import { EmpleadosFormComponent } from './empleados/empleados-form/empleados-form.component';
import { DetalleEmpleadoService } from './ordenes-trabajo/detalle-empleado/detalle-empleado.service';
import { DetalleEmpleadoComponent } from './ordenes-trabajo/detalle-empleado/detalle-empleado.component';
import { DetalleEmpleadoFormComponent } from './ordenes-trabajo/detalle-empleado/detalle-empleado-form/detalle-empleado-form.component';
import { DetallePagoService } from './ordenes-trabajo/detalle-pago/detalle-pago.service';
import { DetallePagoComponent } from './ordenes-trabajo/detalle-pago/detalle-pago.component';
import { DetallePagoFormComponent } from './ordenes-trabajo/detalle-pago/detalle-pago-form/detalle-pago-form.component';
import { RepuestosService } from './repuestos/repuestos.service';
import { RepuestosComponent } from './repuestos/repuestos.component';
import { RepuestosFormComponent } from './repuestos/repuestos-form/repuestos-form.component';
import { contenedorOrdenTrabajoService } from './ordenes-trabajo/contenedor-orden-trabajo/contenedor-orden-trabajo.service';
import { ContenedorImagenComponent } from './ordenes-trabajo/contenedor-imagen/contenedor-imagen.component';
import { TipoMaquinariaComponent } from './maquinarias/tipo-maquinaria/tipo-maquinaria.component';
import { TipoMaquinariaFormComponent } from './maquinarias/tipo-maquinaria/tipo-maquinaria-form/tipo-maquinaria-form.component';
import { MarcaMaquinariaComponent } from './maquinarias/marca-maquinaria/marca-maquinaria.component';
import { MarcaMaquinariaFormComponent } from './maquinarias/marca-maquinaria/marca-maquinaria-form/marca-maquinaria-form.component';
import { EstadoMaquinariasComponent } from './maquinarias/estado-maquinarias/estado-maquinarias.component';
import { EstadoMaquinariasFormComponent } from './maquinarias/estado-maquinarias/estado-maquinarias-form/estado-maquinarias-form.component';
import { MaquinariasComponent } from './maquinarias/maquinarias.component';
import { MaquinariaFormComponent } from './maquinarias/maquinaria-form/maquinaria-form.component';


@NgModule({


  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    ClientesComponent,
    ClientesFormComponent,
    TareasComponent,
    TareasFormComponent,
    OrdenesTrabajoComponent,
    OrdenesTrabajoFormComponent,
    ContenedorOrdenTrabajoComponent,
    DetallePagoComponent,
    DetallePagoFormComponent,
    DetalleTareaComponent,
    DetalleTareaFormComponent,
    DetalleEmpleadoComponent,
    DetalleEmpleadoFormComponent,
    EmpleadosComponent,
    EmpleadosFormComponent,
    RepuestosComponent,
    RepuestosFormComponent,
    MatInput,
    ContenedorImagenComponent,
    TipoMaquinariaComponent,
    TipoMaquinariaFormComponent,
    MarcaMaquinariaComponent,
    MarcaMaquinariaFormComponent,
    EstadoMaquinariasComponent,
    EstadoMaquinariasFormComponent,
    MaquinariasComponent,
    MaquinariaFormComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatOptionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatTabsModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatGridListModule,
    MatListModule,
    MatIconModule,
    MatGridListModule,
    MatTooltipModule,
    MatExpansionModule,
    MatDialogModule,
    MatSliderModule,
    MatCardModule,
    BrowserAnimationsModule,
   

    RouterModule.forRoot([
      { path: '', component: OrdenesTrabajoComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'clientes', component: ClientesComponent },
      { path: 'clientes-agregar', component: ClientesFormComponent },
      { path: 'clientes-editar/:id', component: ClientesFormComponent },
      { path: 'tareas', component: TareasComponent },
      { path: 'tareas-agregar', component: TareasFormComponent },
      { path: 'tareas-editar/:id', component: TareasFormComponent },
      { path: 'empleados', component: EmpleadosComponent },
      { path: 'empleados-agregar', component: EmpleadosFormComponent },
      { path: 'empleados-editar/:id', component: EmpleadosFormComponent },
      { path: 'ordenesTrabajo', component: OrdenesTrabajoComponent },
      { path: 'tipo-maquinarias', component: TipoMaquinariaComponent },
      { path: 'tipoMaquinaria-agregar', component: TipoMaquinariaFormComponent },
      { path: 'tipoMaquinaria-editar/:id', component: TipoMaquinariaFormComponent },
      { path: 'marca-maquinarias', component: MarcaMaquinariaComponent },
      { path: 'marcaMaquinaria-agregar', component: MarcaMaquinariaFormComponent },
      { path: 'marcaMaquinaria-editar/:id', component: MarcaMaquinariaFormComponent },
      { path: 'estado-maquinarias', component: EstadoMaquinariasComponent },
      { path: 'estadoMaquinaria-agregar', component: EstadoMaquinariasFormComponent },
      { path: 'estadoMaquinaria-editar/:id', component: EstadoMaquinariasFormComponent },
      { path: 'maquinarias', component: MaquinariasComponent },
      { path: 'maquinaria-agregar', component: MaquinariaFormComponent },
      { path: 'maquinaria-editar/:id', component: MaquinariaFormComponent },
      { path: 'contenedorOrdenTrabajo', component: ContenedorOrdenTrabajoComponent },
      {
        path: 'ordenesTrabajo-agregar', component: OrdenesTrabajoFormComponent,
        children: [
          { path: 'detallesTareas/:idOT', component: DetalleTareaComponent },
          { path: 'detalleTarea-agregar/:idOT', component: DetalleTareaFormComponent },
          { path: 'detalleTarea-editar/:id', component: DetalleTareaFormComponent },
          { path: 'detallesEmpleados/:idOT', component: DetalleEmpleadoComponent },
          { path: 'detallesEmpleados-agregar/:idOT', component: DetalleEmpleadoFormComponent },
          { path: 'detallesEmpleados-editar/:id', component: DetalleEmpleadoFormComponent },
          { path: 'detallesPagos/:idOT', component: DetallePagoComponent },
          { path: 'detallesPago-agregar/:idOT', component: DetallePagoFormComponent },
          { path: 'detallesPago-editar/:id', component: DetallePagoFormComponent},
        ]

      },
      {
        path: 'ordenesTrabajo-editar/:id', component: OrdenesTrabajoFormComponent,
        children: [
          { path: 'detallesTareas/:idOT', component: DetalleTareaComponent },
          { path: 'detalleTarea-agregar/:idOT', component: DetalleTareaFormComponent },
          { path: 'detalleTarea-editar/:id', component: DetalleTareaFormComponent },
          { path: 'detallesEmpleados/:idOT', component: DetalleEmpleadoComponent },
          { path: 'detalleEmpleado-agregar/:idOT', component: DetalleEmpleadoFormComponent },
          { path: 'detalleEmpleado-editar/:id', component: DetalleEmpleadoFormComponent },
          { path: 'detallesPagos/:idOT', component: DetallePagoComponent },
          { path: 'detallesPago-agregar/:idOT', component: DetallePagoFormComponent },
          { path: 'detallesPago-editar/:id', component: DetallePagoFormComponent },
        ]

      },
      { path: 'repuestos', component: RepuestosComponent },
      { path: 'repuesto-agregar', component: RepuestosFormComponent },
      
    ])
  ],
  providers: [ClientesService, TareasService, DetalleTareaService, MatDatepickerModule, EmpleadosService, DetalleEmpleadoService, DetallePagoService, RepuestosService, contenedorOrdenTrabajoService],
  bootstrap: [AppComponent],
  entryComponents: [ContenedorImagenComponent],
})
export class AppModule { }

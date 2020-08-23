import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule as NgRxStoreModule, ActionReducerMap } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { DestinoViajeComponent } from './destino-viaje/destino-viaje.component';
import { ListaDestinosComponent } from './lista-destinos/lista-destinos.component';
import { DestinoDetalleComponent } from './destino-detalle/destino-detalle.component';
import { DestinosApiClient } from './models/destinos-api-client.model';
import { DestinosViajesState, reducerDestinosViajes, initializeDestinosViajesState, DestinosViajesEffects } from './models/destinos-viajes-state.model';
import { FormDestinoViajeComponent } from './form-destino-viaje/form-destino-viaje.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: ListaDestinosComponent },
    { path: 'destino', component: DestinoDetalleComponent }
  ];
  
  export interface AppState {
  	destinos: DestinosViajesState;
  }
  
  const reducers: ActionReducerMap<AppState> = {
  	destinos: reducerDestinosViajes
  };
  
  
  
  const reducersInitialState = {
  	destinos: initializeDestinosViajesState()
  };

@NgModule({
  declarations: [
    AppComponent,
    DestinoViajeComponent,
    ListaDestinosComponent,
    DestinoDetalleComponent,
    FormDestinoViajeComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    NgRxStoreModule.forRoot(routes),
    NgRxStoreModule.forRoot( reducers, { initialState: reducersInitialState}),
    EffectsModule.forRoot([DestinosViajesEffects])
  ],
  providers: [
    DestinosApiClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

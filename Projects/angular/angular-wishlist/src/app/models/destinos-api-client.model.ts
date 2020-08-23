import { DestinoViaje } from './destino-viaje.model';

export class DestinosApiClient {
	destinos:DestinoViaje[];
	constructor() {
       this.destinos = [];
	}
	add(d:DestinoViaje){
	  this.destinos.push(d);
	}
	getAll(){
	  return this.destinos;
    }
    
     elegir(d: DestinoViaje) {
    // aqui incovariamos al servidor
    this.store.dispatch(new ElegidoFavoritoAction(d));
  }
  
  
}

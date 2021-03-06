import { Component, OnInit, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { DestinoViaje } from './../models/destino-viaje.model';
import { DestinosApiClient } from './../models/destinos-api-client.model';

@Component({
  selector: 'app-destino-viaje',
  templateUrl: './destino-viaje.component.html',
  styleUrls: ['./destino-viaje.component.css']
})
export class DestinoViajeComponent implements OnInit {

  @Input() destino: DestinoViaje;
  @Input("idx") position: number;
  @HostBinding('attr.class') cssClass = 'col-md-4';
  @Output() onClicked: EventEmitter<DestinoViaje>;

  constructor() {
    this.onClicked = new EventEmitter();
  }

  ngOnInit() {
  }

  ir() {
  	console.log("ir clicado");
  	this.onClicked.emit(this.destino);
  	//this.destino.setSelected(true);
  	return false;
  }
}

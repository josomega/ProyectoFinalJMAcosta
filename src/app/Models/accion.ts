import { acciones } from "../enums/acciones";
import { Persona } from "./persona";

export interface Accion {
    accion: acciones;
    serviciopersonas: Persona
}

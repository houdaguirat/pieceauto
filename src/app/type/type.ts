import { Marque } from "../marque/marque";

export interface Type {
    id: number;
    name: string;
    annee: number;
    marque: Marque;
  }
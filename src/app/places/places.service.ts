import { Injectable } from "@angular/core";
import { Place } from "../places/place.model";

@Injectable({
  providedIn: "root"
})
export class PlacesService {
  private places: Place[] = [
    {
      id: '1',
      title: "Monserrate",
      imageURL:
        "https://www.bogotraveltours.com/wp-content/uploads/monserrate-bogota-tours.jpg",
      comments: ["Asombroso cerro de Monserrate", "Iglesia"]
    },
    {
      id: "2",
      title: "Guatepe",
      imageURL:
        "https://vuelamax.com/wp-content/uploads/2018/05/Pe%C3%B1ol-y-Guatap%C3%A9-3-600x337.png",
      comments: ["Ubicado en Antioquia", "Un sitio hermoso"]
    },
    {
      id: "3",
      title: "sierra Nevada de Santamarta",
      imageURL:
        "https://www.las2orillas.co/wp-content/uploads/2017/05/Sierra-Nevada-de-Santa-Marta.jpg",
      comments: ["Ubicado en Costa Pacífica", "Un sitio hermoso"]
    },
    {
      id: "4",
      title: "Santuario de Las Lajas",
      imageURL:
        "https://lanotapositiva.com/wp-content/uploads/2019/02/Por-su-arquitectura-y-ubicaci%C3%B3n-la-iglesia-de-Las-Lajas-en-Nari%C3%B1o-es-considerada-como-la-m%C3%A1s-bonita-del-mundo.jpg",
      comments: ["Ubicado en el Dpto. de Nariño", "Una maravilla arquitectónica"]
    },
    {
      id: "5",
      title: "Minas de sal de Nemocón",
      imageURL:
        "https://chipviajero.com/wp-content/uploads/2017/10/Como-Llegar-A-La-Mina-De-Sal-De-Nemoc%C3%B3n-Cundinamarca-Chip-Viajero-Blog-8.jpg",
      comments:["Ubicado en Cundinamarca", "famoso por su gran actividad minera"]
    }
  ];

  constructor() {}

  getPlaces(): Place[] {
    return [...this.places];
  }

  getPlace(placeId: string) {
    return {
      ...this.places.find(place => {
        return place.id === placeId;
      })
    };
  }

  deletePlace(placeId: string) {
    this.places = this.places.filter(place => {
      return place.id !== placeId;
    });
  }

  addPlace(title, imageURL) {
    this.places.push({
      title,
      imageURL,
      comments: [],
      id: this.places.length + 1 + ""
    });
  }

}

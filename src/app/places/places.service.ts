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
      comments: ["Ubicado en Costa pacifica", "Un sitio hermoso"]
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

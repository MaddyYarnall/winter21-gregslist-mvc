import { generateId } from "../Utils/generateId.js";

export class House {
  constructor(data){
    this.id = generateId();
    this.address = data.address;
    this.beds = data.beds;
    this.baths = data.baths;
    this.sqft = data.sqft;
    this.price = data.price;
    this.imgUrl = data.imgUrl;
  }

  get Template(){
    return `<div class="col-md-4 p-4">
    <div class="bg-white shadow rounded">
      <img class="w-100 rounded-top" src="${this.imgUrl}" alt="${this.address}">
      <div class="p-3">
        <p class="text-center"><b>${this.beds} - ${this.baths} - ${this.sqft}</b></p>
        <p class="m-0">${this.address}</p>
      </div>
      <div class="p-3 d-flex justify-content-between align-items-center">
        <p class="m-0">$${this.price}</p>
        <i class="mdi mdi-delete"></i>
      </div>
    </div>
  </div>`
}
 }
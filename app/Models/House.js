
export class House {
  constructor(data){
    this.id = data.id;
    this.year = data.year;
    this.bedrooms = data.bedrooms;
    this.bathrooms = data.bathrooms;
    this.description = data.description;
    this.price = data.price;
    this.imgUrl = data.imgUrl;
    this.levels = data.levels
  }

  get Template(){
    return `<div class="col-md-4 p-4">
    <div class="bg-white shadow rounded">
      <img class="w-100 rounded-top" src="${this.imgUrl}" alt="${this.id}">
      <div class="p-3">
        <p class="text-center"><b>BEDS ${this.bedrooms} - BATHS ${this.bathrooms} - YEAR ${this.year} - STORIES ${this.levels}</b></p>
        <p class="m-0">${this.description}</p>
      </div>
      <div class="p-3 d-flex justify-content-between align-items-center">
        <p class="m-0">$${this.price}</p>
        <i class="mdi mdi-delete selectable" onclick="app.HousesController.removeHouse"></i>
        <i class="mdi mdi-pencil selectable" onclick="app.HousesController.editHouse"></i>
      </div>
    </div>
  </div>`
}
 }

export class Car {
  constructor(data) {
    this.id = data.id || ''
    this.make = data.make || ''
    this.model = data.model || ''
    this.year = data.year || ''
    this.price = data.price || ''
    this.description = data.description || ''
    this.color = data.color
    this.imgUrl = data.imgUrl || ''
  }

  //NOTE ID's are already created in the server, so we don't need our generateId() function to generate one for us

  get Template() {
    return `
    <div class="col-md-4 p-4">
      <div class="bg-white shadow rounded">
        <img class="w-100 rounded-top" src="${this.imgUrl}" alt="${this.model}-image">
        <div class="p-3">
          <p class="text-center uppercase"><b>${this.make} - ${this.model} - ${this.year}</b></p>
          <p class="m-0">${this.description}</p>
        </div>
        <div class="p-3 d-flex justify-content-between align-items-center">
          <p class="m-0">$${this.price}</p>
          <div class="d-flex align-items-center">
            <p class="m-0">Color:</p>
            <div class="color-box border border-dark" style="background-color: ${this.color};"></div>
          </div>
          <i class="mdi mdi-delete selectable" onclick="app.carsController.removeCar('${this.id}')"></i>
          <i class="mdi mdi-pencil selectable" onclick="app.carsController.editCar('${this.id}')"></i>
        </div>
      </div>
    </div>`
  }
}
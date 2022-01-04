import { ProxyState } from "../AppState.js"
import { getHouseform } from "../Component/HouseForm.js"
import { housesService } from "../Services/HousesService.js"

function _drawHouses() {
  const houses = ProxyState.houses
  let template = ''
  houses.forEach(h => template += h.Template)
  document.getElementById('listings').innerHTML = template
}


export class HousesController {
constructor(){
  ProxyState.on('houses',  _drawHouses)
  housesService.getAllHouses()
}

drawHouses() {
  _drawHouses()
  document.getElementById('modal-body-slot').innerHTML = getHouseform()
}

async createHouse(id) {
  try{
  // prevents page reload
  window.event.preventDefault()
  console.log("submitted")
  /** @type {HTMLFormElement} */
  // @ts-ignore
  const form = window.event.target
  const houseData = {
    bedrooms: form.beds.value,
    bathrooms: form.baths.value,
    year: form.year.value,
    price: form.price.value,
    levels: form.levels.value,
    imgUrl: form.imgUrl.value,
    description: form.description.value
  }
  await housesService.createHouse(houseData)
  // clear form
  form.reset()
  // close modal
  // @ts-ignore
  bootstrap.Modal.getOrCreateInstance(document.getElementById('new-listing')).hide()
}catch(error){
  window.alert(error.message)
}
}

async editHouse(id){
try{
  let foundHouse = ProxyState.houses.find(h => h.id == id)
  // @ts-ignore
  bootstrap.Modal.getOrCreateInstance(document.getElementById('new-listing')).toggle()
     document.getElementById('modal-body-slot').innerHTML = getHouseform(foundHouse)


}catch (error){
  window.alert()
}
}

removeHouse(id) {
  console.log('deleting', id)
  housesService.removeHouse(id)
}


}



import { ProxyState } from "../AppState.js"
import { getCarform } from "../Component/CarForm.js"
import { carsService } from "../Services/CarsService.js"

function _drawCars() {
  const cars = ProxyState.cars
  let template = ''
  cars.forEach(c => template += c.Template)
  document.getElementById('listings').innerHTML = template
}

export class CarsController {
  constructor() {
    ProxyState.on('cars', _drawCars)
    carsService.getAllCars()
  }
  drawCars() {
    _drawCars()
    document.getElementById('modal-body-slot').innerHTML = getCarform()
  }

  createCar() {
    // prevents page reload
    try{
    window.event.preventDefault()
    console.log("submitted")
    /** @type {HTMLFormElement} */
    // @ts-ignore
    const form = window.event.target
    const carData = {
      make: form.make.value,
      model: form.model.value,
      year: form.year.value,
      price: form.price.value,
      color: form.color.value,
      description: form.description.value,
      imgUrl: form.imgUrl.value
    }
    carsService.createCar(carData)
    // clear form
    form.reset()
    // close modal
    // @ts-ignore
    bootstrap.Modal.getOrCreateInstance(document.getElementById('new-listing')).hide()
  }catch(error){
  window.alert(error.message)
  }
  }

  //NOTE If the above "try" fails, this will catch the error and then we can display said error to the user and to the console

  //NOTE You will always write your try catch in the controller since the controller is what "interacts" with the user, and if it fails, it will send a message to the user letting them know it failed

  removeCar(id) {
    console.log('deleting', id)
    carsService.removeCar(id)
  }

 async editCar(id){
   try{

     //NOTE Find the car that we are going to edit locally first
     let foundCar = ProxyState.cars.find(c => c.id == id)

     //NOTE Grab modal that exists in HTML, and toggle it

     // @ts-ignore
     bootstrap.Modal.getOrCreateInstance(document.getElementById('new-listing')).toggle()
     document.getElementById('modal-body-slot').innerHTML = getCarform(foundCar)

   } catch (error){
     window.alert(error.message)
   }
 }

}
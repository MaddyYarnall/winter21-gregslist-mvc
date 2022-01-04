import { ProxyState } from "../AppState.js"
import { Car } from "../Models/Car.js"
import { api } from "./AxiosService.js"

class CarsService {
  async getAllCars(){
    const res = await api.get('cars')
    ProxyState.cars = res.data.map(c => new Car(c))
  }

  //NOTE The map() method creates a new array populated with the results of calling a provided function on every element in the calling array
  async removeCar(id) {
    const res = await api.delete(`cars/${id}`)
    console.log('delete car res', res)
    ProxyState.cars = ProxyState.cars.filter(c => c.id !== id)
  }

  //NOTE For ('cars/${id}') use the name of the collection (cars) slash the ID of the car we are deleting (${id})
  async createCar(carData) {
    const res = await api.post('cars', carData)
    console.log('post car res', res.data)
    ProxyState.cars = [new Car(res.data), ...ProxyState.cars]
  }

  //NOTE What you put after the comma is the data that we are giving to the server to post into the database

  //NOTE APIs are like the middleman between the database and your code

  //NOTE The ProxyState.cars = [new car (res.data)] makes it so that any new car you create will get sent to the top of the page not the bottom

async editCar(carData, id){
  const res = await api.put(`cars/${id}`)

  //NOTE This is finding the index of the car we just edited

  let editedCarIndex = ProxyState.cars.findIndex( c => c.id == id)

  //NOTE using the index of the car we are going to edit, removing only that one index, and replacing it with the newly edited car

  ProxyState.cars.splice(editedCarIndex, 1, new Car(res.data))
  ProxyState.cars = ProxyState.cars
}

}


export const carsService = new CarsService()
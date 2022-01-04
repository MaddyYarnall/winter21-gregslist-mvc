import { ProxyState } from "../AppState.js"
import { House } from "../Models/House.js"
import { api } from "./AxiosService.js"

class HousesService {
  async removeHouse(id) {
    const res = await api.delete('cars/${id}')
    ProxyState.houses = ProxyState.houses.filter(h => h.id !== id)
    console.log('delete car res', res)
    
  }
  createHouse(houseData) {
    const house = new House(houseData)
    
    ProxyState.houses = [...ProxyState.houses, house]
  }

async getAllHouses(){
  const res = await api.get('houses')
  ProxyState.houses = res.data.map(h => new House (h))
}



}
export const housesService = new HousesService()


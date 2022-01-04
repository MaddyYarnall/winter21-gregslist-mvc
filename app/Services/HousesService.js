import { ProxyState } from "../AppState.js"
import { House } from "../Models/House.js"
import { api } from "./AxiosService.js"

class HousesService {
  async removeHouse(id) {
    const res = await api.delete('cars/${id}')
    ProxyState.houses = ProxyState.houses.filter(h => h.id !== id)
    console.log('delete house res', res)
    
  }
  async createHouse(houseData) {
    const res = await api.post('houses', houseData)
    console.log('post house res', res.data)
    ProxyState.houses = [new House(res.data), ...ProxyState.houses]
  }



async getAllHouses(){
  const res = await api.get('houses')
  ProxyState.houses = res.data.map(h => new House (h))
}



}
export const housesService = new HousesService()


import { Car } from "./Models/Car.js"
import { House } from "./Models/House.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Car').Car[]} */

  cars = [
    new Car({ make: 'Dodge', model: 'Challenger', year: 2021, price: 22500, description: '2021 Dodge Challenger Hellcat', color: '#D2042D', imgUrl: 'https://www.dodge.com/content/dam/fca-brands/na/dodge/en_us/2021/challenger/gallery/desktop/2021-challenger-gallery-exterior1.jpg'}),
    new Car({ make: 'Chevrolet', model: 'Corvette Stingray', year: 1965, price: 66900, description: 'Stunning C-2 Corvette', color: '#005246', imgUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/screen-shot-2018-06-04-at-2-26-34-pm-1528136828.png'}),
    new Car({ make: 'Dodge', model: 'Ram', year: 2001, price: 23000, description: '4 in lift on 38s second gen cummins', color: '#bebebe', imgUrl: 'https://frontstreet-wpengine.netdna-ssl.com/wp-content/uploads/2019/01/5A5A0528.jpg'}),
    new Car({ make: 'Chevrolet', model: 'Camaro', year: 2019, price: 32000, description: 'Selling my 2019 Camaro on bags', color: '#ffffff', imgUrl: 'https://cdn.motor1.com/images/mgl/pvwEo/s1/2019-chevrolet-camaro-zl1-1le.webp'}),
    new Car({ make: 'Chevrolet', model: 'Silverado', year: 2018, price: 880000, description: 'TrailBuilt offroad with 5in suspension lift', color: '#ffffff', imgUrl: 'https://images.trailbuiltoffroad.com/web-compressed/1523458-13-2018-silverado-1500-chevrolet-bulletproof-suspension-lift-12in-xd-hoss-2-matte-black.jpg'}),
    new Car({ make: 'Lincoln', model: 'Continental', year: 1966, price: 68700, description: 'Beautifully restored automatic V8 in Carolina Blue', color: '#99badd', imgUrl: 'https://photos.classiccars.com/cc-temp/listing/154/4055/29181700-1966-lincoln-continental-mark-iv-thumb.jpg'})
  ]

  /** @type {import('./Models/House').House[]} */
  houses = [
    new House({beds: '3 BEDS', baths: '1.5 BATHS', sqft: '1580 SQFT', price: 380900, address: '455 W Watersfelt Way', imgUrl:'https://www.thehousedesigners.com/images/plans/HBS/bulk/1068/SanJacinto_Front_Ales_1_m.jpg'}),
    new House({beds: '5 BEDS', baths: '3 BATHS', sqft: '5300 SQFT', price: 765980, address:'8298 W St. Claire Rd.', imgUrl:'https://www.theplancollection.com/Upload/Designers/107/1002/ELEV_LR6175-0431-R1.JPG'}),
    new House({beds: '4 BEDS', baths: '3 BATHS', sqft: '3690 SQFT', price: 590700, address: '4942 E Hilltop St.', imgUrl:'https://www.theplancollection.com/Upload/Designers/158/1306/Plan1581306MainImage_7_2_2018_10_891_593.jpg'}),
    new House({beds: '4 BEDS', baths: '4 BATHS', sqft: '3280 SQFT', price: 630800, address: '857 S Water Stone Way', imgUrl:'https://cdn.decoratorist.com/wp-content/uploads/ski-out-these-dream-mountain-homes-zillow-408563.jpg'}),
    new House({beds: '5 BEDS', baths: '4 BATHS', sqft: '6250 SQFT', price: 990760, address: '25603 N Neopolean Ct.', imgUrl:'https://i.pinimg.com/originals/71/4b/a7/714ba7c5c2c5bdbe66e21b1475a5b3e6.jpg'}),
    new House({beds: '3 BEDS', baths: '2.5 BATHS', sqft: '3160 SQFT', price: 421800, address: '25603 N Neopolean Ct.', imgUrl:'https://beautifuldreamhomeplans.com/jpegs/Mediterranean%20revival%20home%20plan.jpg'})
  ]
  
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})



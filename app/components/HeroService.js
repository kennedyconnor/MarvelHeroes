import Hero from "../models/Hero.js"

//PRIVATE
let _marvelAPI = axios.create({
  baseURL: 'https://gateway.marvel.com:443/v1/public'
})
let _characters = 'characters?limit=50'
let _offset = 500
let _apiKey = '53496df3cd682930aa9108759e347171'

let _sandbox = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/Connor/heroes',
  name: { type: String, required: true },
  img: { type: String, required: true },
  description: { type: String, required: true },
  user: { type: String, required: true }
})

let _state = {
  apiHeroes: [],
  myHeroes: []
}

let _subscribers = {
  apiHeroes: [],
  myHeroes: []
}

function _setState(propName, data) {
  _state[propName] = data;
  _subscribers[propName].forEach(fn => fn());
}

//PUBLIC
export default class HeroService {

  addSubscribers(propName, fn) {
    _subscribers[propName].push(fn)
  }

  get ApiHeroes() {
    return _state.apiHeroes.map(hero => new Hero(hero))
  }

  get MyHeroes() {
    return _state.myHeroes.map(hero => new Hero(hero))
  }

  addMyHero(hero) {
    _sandbox.post()
  }
  getMarvelData() {
    _marvelAPI.get(`${_characters}&offset=${_offset}&apikey=${_apiKey}`)

      .then(res => {
        console.log(res.data)
        let heroes = res.data.data.results.map(hero => new Hero(hero))
        _setState("apiHeroes", heroes)
      })

      .catch(err => {
        console.error(err)
      })
  }
}
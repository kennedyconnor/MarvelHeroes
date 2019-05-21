import HeroService from "./HeroService.js"

//PRIVATE
let _heroService = new HeroService

function _drawApiHeroes() {

  let template = ''
  let heroes = _heroService.ApiHeroes
  for (let i = 0; i < heroes.length; i++) {
    const hero = heroes[i];
    template += hero.template;
  }
  document.getElementById('api-heroes').innerHTML = template;
}

function _drawMyHeroes() {
  let heroes = ''
}

//PUBLIC

export default class HeroController {
  constructor() {
    //register subscribers
    _heroService.addSubscribers('apiHeroes', _drawApiHeroes)
    _heroService.addSubscribers('myHeroes', _drawMyHeroes)

    //getInitialData
    _heroService.getMarvelData()

    //add data
    _heroService.addMyHero()
  }
}
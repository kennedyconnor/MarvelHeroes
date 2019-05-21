import HeroController from "./components/HeroController.js"

class App {
  constructor() {
    this.controllers = {
      HeroController: new HeroController
    }
  }
}

window['app'] = new App()
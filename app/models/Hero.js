export default class Hero {
  constructor(data) {
    this.name = data.name
  }
  get template() {
    return `
    <li>${this.name}</li>
    `
  }
}

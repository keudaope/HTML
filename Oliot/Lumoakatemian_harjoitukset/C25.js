class Pizza {
  constructor(koko) {
    this.koko = koko;
    this.taytteet = [];
  }

  lisaaTayte(tayte) {
    this.taytteet.push(tayte);
    console.log(`Lisätty täyte: ${tayte}`);
  }

  poistaTayte(tayte) {
    this.taytteet = this.taytteet.filter((t) => t !== tayte);
    console.log(`Poistettu täyte: ${tayte}`);
  }

  tulostaTaytteet() {
    console.log(`Pizza (${this.koko}): Täytteet: ${this.taytteet.join(", ")}`);
  }
}

const pizza = new Pizza("Iso");
pizza.lisaaTayte("Kinkku");
pizza.lisaaTayte("Ananas");
pizza.tulostaTaytteet();
pizza.poistaTayte("Ananas");
pizza.tulostaTaytteet();

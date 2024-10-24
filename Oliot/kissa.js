var kissa = {
  vasymys: 0,
  yksinaisyys: 0,
  nalka: 0,
  onnellisuus: 0,
  leiki: function () {
    (this.nalka += 5), (this.vasymys += 5), (this.onnellisuus += 20);
    this.yksinaisyys -= 20;
  },
  syo: function () {
    this.nalka -= 5;
    this.onnellisuus += 10;
  },
  silita: function () {
    this.onnellisuus += 20;
    this.yksinaisyys -= 10;
  },
  nuku: function () {
    this.vasymys -= 10;
  },
  tiedot: function () {
    console.log(`Vasymys: ${this.vasymys}`);
  },
};
kissa.leiki();
kissa.syo();
kissa.silita();
kissa.tiedot();

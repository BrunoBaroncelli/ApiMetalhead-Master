'use strict'

/*
|--------------------------------------------------------------------------
| BandaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Banda = use('App/Models/Banda')

class BandaSeeder {
  async run () {

    const bandas = [
      { banda: "Iron Maiden"},
      { banda: "Metallica"},
      { banda: "Guns n' Roses"},
      { banda: "Lynyrd Skynyrd"},
      { banda: "Black Sabbath"},
      { banda: "Angra"}
    ];

    await Banda.createMany(bandas);

  }
}

module.exports = BandaSeeder

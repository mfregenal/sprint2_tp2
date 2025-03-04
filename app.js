const mongoose = require('mongoose');

const superheroSchema = new mongoose.Schema({
    nombreSuperHeroe: { type: String, required: true },
    nombreReal: { type: String, require: true },
    edad: { type: Number, min: 0 },
    planetaOrigen: { type: String, default: Date.now },
    debilidad: String,
    poderes: [ String ],
    aliados: [ String ],
    enemigos: [ String ],
    createdAt: { type: Date, default: Date.now },
    creador: String
}, { collection: 'Grupo-07' });

const SuperHero = mongoose.model('SuperHero', superheroSchema);

// insertSuperHero();
async function insertSuperHero() {
    const hero = new SuperHero({
        nombreSuperHeroe: 'Spiderman',
        nombreReal: 'Peter Parker',
        edad: 25,
        planetaOrigen: 'Tierra',
        debilidad: 'Radioactiva',
        poderes: ['Trepar paredes', 'Sentido arácnido', 'Super fuerza', 'Agilidad'],
        aliados: ['Ironman'],
        enemigos: ['Duende Verde'],
        creador: 'Martin'
    });
    await hero.save();
    console.log('Superhéroe insertado:', hero);
}

// updateSuperHero('Spiderman');
async function updateSuperHero(nombreSuperHeroe) {
    const result = await SuperHero.updateOne(
        { nombreSuperHeroe: nombreSuperHeroe },
        { $set: { edad: 26 } }
    );
    console.log('Resultado de la actualización:', result);
}

// deleteSuperHero('Spiderman');
async function deleteSuperHero(nombreSuperHeroe) {
    const result = await SuperHero.deleteOne({ nombreSuperHeroe: nombreSuperHeroe });
    console.log('Superhéroe eliminado:', result);
}

// findSuperHeroes();
async function findSuperHeroes() {
    const heroes = await SuperHero.find({ planetaOrigen: 'Tierra' });
    console.log('Superhéroes encontrados:', heroes);
}

mongoose.connect( 'mongodb+srv://Grupo-07:grupo07@cursadanodejs.ls9ii.mongodb.net/Node-js' )
    .then( () => console.log('Conexión exitosa a MongoDB') )
    .catch ( error => console.error('Error al conectar a MongoDB', error) );
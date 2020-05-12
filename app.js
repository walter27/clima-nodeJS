const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'direccion de la ciudad para obtner el clima',
        demand: true

    }
}).argv;

let getTemperature = async address => {

    try {

        let coords = await lugar.getLugar(argv.direccion),
            temp = await clima.getTemperatura(coords.lat, coords.lng)
        return `el clima en ${coords.direccion} es de ${temp} °C`

    } catch (error) {
        return `No se pudo determinar el clima en ${address}`

    }

}

getTemperature(argv.direccion)
    .then((result) => {

        console.log(result);


    }).catch((err) => {

        console.log(err);


    });


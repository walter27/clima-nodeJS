const axios = require('axios');

const getLugar = async (direccion) => {

    let encodeURL = encodeURI(direccion);


    let respuesta = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${encodeURL}&key=70d8def1c1124ad8a54610eb4c0d2e6d`)

    if (respuesta.data.status === 'ZERO_RESULTS') {

        throw new Error('No hay resltado para la ciudad')
    } else {


        let location = respuesta.data.results[1],
            coords = location.geometry


        return {
            direccion,
            lat: coords.lat,
            lng: coords.lng
        }


    }

}

module.exports = {
    getLugar













}



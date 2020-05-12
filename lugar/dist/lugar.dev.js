"use strict";

var axios = require('axios');

var getLugar = function getLugar(direccion) {
  var encodeURL, respuesta, location, coords;
  return regeneratorRuntime.async(function getLugar$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          encodeURL = encodeURI(direccion);
          _context.next = 3;
          return regeneratorRuntime.awrap(axios.get("https://api.opencagedata.com/geocode/v1/json?q=".concat(encodeURL, "&key=70d8def1c1124ad8a54610eb4c0d2e6d")));

        case 3:
          respuesta = _context.sent;

          if (!(respuesta.data.status === 'ZERO_RESULTS')) {
            _context.next = 8;
            break;
          }

          throw new Error('No hay resltado para la ciudad');

        case 8:
          location = respuesta.data.results[1], coords = location.geometry;
          return _context.abrupt("return", {
            direccion: direccion,
            lat: coords.lat,
            lng: coords.lng
          });

        case 10:
        case "end":
          return _context.stop();
      }
    }
  });
};

module.exports = {
  getLugar: getLugar
};
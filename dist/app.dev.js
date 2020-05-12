"use strict";

var lugar = require('./lugar/lugar');

var clima = require('./clima/clima');

var argv = require('yargs').options({
  direccion: {
    alias: 'd',
    desc: 'direccion de la ciudad para obtner el clima',
    demand: true
  }
}).argv;

var getTemperature = function getTemperature(address) {
  var coords, temp;
  return regeneratorRuntime.async(function getTemperature$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(lugar.getLugar(argv.direccion));

        case 3:
          coords = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(clima.getTemperatura(coords.lat, coords.lng));

        case 6:
          temp = _context.sent;
          return _context.abrupt("return", "el clima en ".concat(coords.direccion, " es de ").concat(temp, " \xB0C"));

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", "No se pudo determinar el clima en ".concat(address));

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 10]]);
};

getTemperature(argv.direccion).then(function (result) {
  console.log(result);
})["catch"](function (err) {
  console.log(err);
});
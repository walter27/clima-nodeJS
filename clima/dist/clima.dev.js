"use strict";

var axios = require('axios');

var getTemperatura = function getTemperatura(lat, lng) {
  var res;
  return regeneratorRuntime.async(function getTemperatura$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(axios.get("http://api.openweathermap.org/data/2.5/weather?lat=".concat(lat, "&lon=").concat(lng, "&units=metric&appid=f369635965b00ad16ced5da4da4b9f3b")));

        case 2:
          res = _context.sent;
          return _context.abrupt("return", res.data.main.temp);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
};

module.exports = {
  getTemperatura: getTemperatura
};
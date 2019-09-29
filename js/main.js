'use strict';
var objectCount = 8;
var randomNumber = Math.floor(Math.random() * objectCount);
var checkin = ['12:00', '13:00', '14:00'];
var checkout = ['12:00', '13:00', '14:00'];
var features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var photos = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
var type = ['palace', 'flat', 'house', 'bungalo'];


var getRandomElementArray = function (array) {   
  var index = Math.floor(Math.random() * array.length);
  return array[index];
};


  for(var i = 0; i < objectCount; i++) {
    var guest = {
    "author": {
     "avatar": 'img/avatars/user' + randomNumber + '.png',
  },
    "offer": {
     "title": 'Заголовок',
     "address":  "{{location.x}}, {{location.y}}",
     "price": Math.floor(Math.random() * objectCount),
     "type": getRandomElementArray(type),
     "rooms": Math.floor(Math.random() * objectCount),
     "guests": Math.floor(Math.random() * objectCount),
     "checkin": getRandomElementArray(checkin),
     "checkout": getRandomElementArray(checkout),
     "features": getRandomElementArray(features),
     "description": 'Description',
     "photos": getRandomElementArray(photos),
  },
        
  "location": {
    "x": '200',
    "y": '400'
  }
}
    }
console.log(guest);

var pin = document.getElementById("pin");

pin.innerHTML  =  pin.innerHTML + '<button type="button" class="map__pin" style="left:' + guest.location.x + 'px; top:' + guest.location.y + 'px;"><img src=' + guest.author.avatar + ' width="40" height="40" draggable="false" alt="Метка объявления"></button>';


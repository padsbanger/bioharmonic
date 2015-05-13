// AUDIO FILES

var sounds = ['forest', 'pad', 'rain', 'thunder', 'wind'];

// GENERATE AUDIO OBJECTS

var generateSounds = function(soundsArray) {
  var soundsObject = {};

  for (var i = 0; i < soundsArray.length; i++) {
    soundsObject[soundsArray[i]] = new Audio('sound/' + soundsArray[i].toUpperCase() + '.mp3');
    soundsObject[soundsArray[i]].loop = true;
    soundsObject[soundsArray[i]].preload = "auto";
  }
  return soundsObject;
};

// HANDLE SINGLE BUTTON

var handleElement = function(sound, soundsObject) {
  var button = document.getElementById(sound);
  button.addEventListener('click', function() {
    button.classList.toggle('active');
    if (soundsObject[sound].paused) {
      soundsObject[sound].play()
    } else {
      soundsObject[sound].pause();
    }
  });
}

// ATTACH HANDLERS TO BUTTONS

var attachHandlers = function() {
  var soundsObject = generateSounds(sounds);

  for (var sound in soundsObject) {
    if (soundsObject.hasOwnProperty(sound)) {
      handleElement(sound, soundsObject);
    }
  };

}();

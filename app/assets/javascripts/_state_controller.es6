var stateManipulators = document.querySelectorAll('.js-state-manipulator');
var stateControllers  = document.querySelectorAll('.js-state-controller');

DOMTokenList.prototype.removeList = function(classes) {
    var classList = classes.split(' '),
        i = 0,
        ii = classes.length;

    for(i; i<ii; i++) {
        this.remove(classList[i]);
    }
};

// forEach method, could be shipped as part of an Object Literal/Module
var forEach = function (array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]); // passes back stuff we need
  }
};

const states = [
  '"is-loading"',
  '"is-locked"',
  '"is-unlocked"'
];

var statesList = states.join(", ");

var manipulate = function(manipulator) {

  manipulator.getData = function () {
    this.state =  this.getAttribute('data-set-state');
    this.target = this.getAttribute('data-state-manipulator');
  };

  manipulator.setData = function () {
    console.log(statesList);
    this.closest('.js-state-controller').classList.removeList("is-loading", "is-locked", "is-unlocked");
    this.closest('.js-state-controller').classList.add(manipulator.state);
  };

  manipulator.init = function() {
    this.addEventListener('click', () => { manipulator.getData(manipulator) }, false);
    this.addEventListener('click', () => { manipulator.setData(manipulator) }, false);
  };

  manipulator.init();
};

forEach(stateManipulators, function (index, manipulator) {
    manipulate(manipulator);
});

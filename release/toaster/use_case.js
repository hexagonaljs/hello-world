var UseCase,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

UseCase = (function() {

  function UseCase() {
    this.restart = __bind(this.restart, this);

    this.greetUser = __bind(this.greetUser, this);

    this.nameProvided = __bind(this.nameProvided, this);

    this.askForName = __bind(this.askForName, this);

    this.start = __bind(this.start, this);

  }

  UseCase.prototype.start = function() {
    return this.askForName();
  };

  UseCase.prototype.askForName = function() {};

  UseCase.prototype.nameProvided = function(name) {
    return this.greetUser(name);
  };

  UseCase.prototype.greetUser = function(name) {};

  UseCase.prototype.restart = function() {
    return this.askForName();
  };

  return UseCase;

})();

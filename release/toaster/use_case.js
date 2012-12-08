var UseCase,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

UseCase = (function() {

  function UseCase() {
    this.start = __bind(this.start, this);

  }

  UseCase.prototype.start = function() {};

  return UseCase;

})();

var LocalStorage,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

LocalStorage = (function() {

  function LocalStorage(namespace) {
    this.namespace = namespace;
    this.flush = __bind(this.flush, this);

    this.remove = __bind(this.remove, this);

    this.get = __bind(this.get, this);

    this.set = __bind(this.set, this);

  }

  LocalStorage.prototype.set = function(key, value) {
    console.log(value);
    return $.jStorage.set("" + this.namespace + "/" + key, value);
  };

  LocalStorage.prototype.get = function(key) {
    return $.jStorage.get("" + this.namespace + "/" + key);
  };

  LocalStorage.prototype.remove = function(key) {
    return $.jStorage.deleteKey("" + this.namespace + "/" + key);
  };

  LocalStorage.prototype.flush = function() {
    var key, _i, _len, _ref, _results;
    _ref = $.jStorage.index();
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      key = _ref[_i];
      if (key.match("^" + this.namespace)) {
        _results.push($.jStorage.deleteKey(key));
      } else {
        _results.push(void 0);
      }
    }
    return _results;
  };

  return LocalStorage;

})();

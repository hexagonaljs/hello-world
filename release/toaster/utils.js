var __hasProp = {}.hasOwnProperty;

_.defaults(this, {
  Before: function(object, methodName, adviseMethod) {
    return YouAreDaBomb(object, methodName).before(adviseMethod);
  },
  BeforeAnyCallback: function(object, methodName, adviseMethod) {
    return YouAreDaBomb(object, methodName).beforeAnyCallback(adviseMethod);
  },
  After: function(object, methodName, adviseMethod) {
    return YouAreDaBomb(object, methodName).after(adviseMethod);
  },
  Around: function(object, methodName, adviseMethod) {
    return YouAreDaBomb(object, methodName).around(adviseMethod);
  },
  AfterAll: function(object, methodNames, adviseMethod) {
    var methodName, _i, _len, _results;
    _results = [];
    for (_i = 0, _len = methodNames.length; _i < _len; _i++) {
      methodName = methodNames[_i];
      _results.push(After(object, methodName, adviseMethod));
    }
    return _results;
  },
  LogAll: function(object) {
    var key, value, _results;
    _results = [];
    for (key in object) {
      if (!__hasProp.call(object, key)) continue;
      value = object[key];
      if (_.isFunction(value)) {
        _results.push((function(key) {
          return Before(object, key, function() {
            return console.log("calling: " + key);
          });
        })(key));
      } else {
        _results.push(void 0);
      }
    }
    return _results;
  },
  AutoBind: function(gui, useCase) {
    var key, value, _results;
    _results = [];
    for (key in gui) {
      value = gui[key];
      if (_.isFunction(value)) {
        _results.push((function(key) {
          if (key.endsWith("Clicked") && useCase[key.remove("Clicked")]) {
            return After(gui, key, function(args) {
              return useCase[key.remove("Clicked")](args);
            });
          }
        })(key));
      } else {
        _results.push(void 0);
      }
    }
    return _results;
  }
});

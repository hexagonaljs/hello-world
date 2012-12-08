(function() {
  var __slice = Array.prototype.slice, __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  _.defaults(this, {
    YouAreDaBomb: __bind(function() {
      var combinator, functionNames, object;
      object = arguments[0], functionNames = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      return combinator = {
        before: __bind(function(advice) {
          var functionName, _i, _len;
          for (_i = 0, _len = functionNames.length; _i < _len; _i++) {
            functionName = functionNames[_i];
            object[functionName] = (__bind(function() {
              var fn;
              fn = object[functionName];
              return function() {
                var args, result;
                args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
                advice.apply(null, args);
                result = fn.apply(object, args);
                return result;
              };
            }, this))();
          }
          return combinator;
        }, this),
        around: function() {
          var advice, functionName, pointcut_exprs, _i, _j, _len;
          pointcut_exprs = 2 <= arguments.length ? __slice.call(arguments, 0, _i = arguments.length - 1) : (_i = 0, []), advice = arguments[_i++];
          for (_j = 0, _len = functionNames.length; _j < _len; _j++) {
            functionName = functionNames[_j];
            object[functionName] = (__bind(function() {
              var fn;
              fn = object[functionName];
              return function() {
                var args, proceed;
                args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
                proceed = function() {
                  var proceededArgs;
                  proceededArgs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
                  return fn.apply(object, proceededArgs);
                };
                return advice.apply(null, [proceed].concat(__slice.call(args)));
              };
            }, this))();
          }
          return combinator;
        },
        after: __bind(function(advice) {
          var functionName, _i, _len;
          for (_i = 0, _len = functionNames.length; _i < _len; _i++) {
            functionName = functionNames[_i];
            object[functionName] = (__bind(function() {
              var fn;
              fn = object[functionName];
              return function() {
                var args, result;
                args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
                result = fn.apply(object, args);
                advice.apply(null, args);
                return result;
              };
            }, this))();
          }
          return combinator;
        }, this),
        beforeAnyCallback: __bind(function(advice) {
          var functionName, _i, _len;
          for (_i = 0, _len = functionNames.length; _i < _len; _i++) {
            functionName = functionNames[_i];
            object[functionName] = (function() {
              var fn;
              fn = object[functionName];
              return function() {
                var adviced_args, args;
                args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
                adviced_args = [];
                _.each(args, function(arg) {
                  var new_arg;
                  new_arg = _.isFunction(arg) ? function() {
                    var callback_args;
                    callback_args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
                    advice.apply(null, callback_args);
                    return arg.apply(null, callback_args);
                  } : arg;
                  return adviced_args.push(new_arg);
                });
                return fn.apply(object, adviced_args);
              };
            })();
          }
          return combinator;
        }, this),
        afterAnyCallback: __bind(function(advice) {
          var functionName, _i, _len;
          for (_i = 0, _len = functionNames.length; _i < _len; _i++) {
            functionName = functionNames[_i];
            object[functionName] = (function() {
              var fn;
              fn = object[functionName];
              return function() {
                var adviced_args, args;
                args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
                adviced_args = [];
                _.each(args, function(arg) {
                  var new_arg;
                  new_arg = _.isFunction(arg) ? function() {
                    var callback_args, result;
                    callback_args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
                    result = arg.apply(null, callback_args);
                    advice.apply(null, callback_args);
                    return result;
                  } : void 0;
                  arg;
                  return adviced_args.push(new_arg);
                });
                return fn.apply(object, adviced_args);
              };
            })();
          }
          return combinator;
        }, this)
      };
    }, this)
  });
}).call(this);

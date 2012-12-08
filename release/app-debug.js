var __t;

__t = function(ns) {
  var curr, index, part, parts, _i, _len;
  curr = null;
  parts = [].concat = ns.split(".");
  for (index = _i = 0, _len = parts.length; _i < _len; index = ++_i) {
    part = parts[index];
    if (curr === null) {
      curr = eval(part);
      continue;
    } else {
      if (curr[part] == null) {
        curr = curr[part] = {};
      } else {
        curr = curr[part];
      }
    }
  }
  return curr;
};


document.write('<scri'+'pt src="release/toaster/utils.js"></scr'+'ipt>')
document.write('<scri'+'pt src="release/toaster/local_storage.js"></scr'+'ipt>')
document.write('<scri'+'pt src="release/toaster/use_case.js"></scr'+'ipt>')
document.write('<scri'+'pt src="release/toaster/gui.js"></scr'+'ipt>')
document.write('<scri'+'pt src="release/toaster/glue.js"></scr'+'ipt>')
document.write('<scri'+'pt src="release/toaster/app.js"></scr'+'ipt>')
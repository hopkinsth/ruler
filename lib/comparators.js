
exports.matches = function matches(a, b){
  b = 'string' == typeof b
    ? new RegExp(b)
    : b;
  return new RegExp(b).test(a);
};

exports.contains = function contains(a, b){
  return !!~a.indexOf(b);
};

exports.ncontains = function ncontains(a, b){
  return !~a.indexOf(b);
};

exports.is = function is(a, b){
  return a === b;
};

exports.not = function not(a, b){
  return a !== b;
};

exports.eq = function eq(a, b){
  return a == b;
};

exports.neq = function neq(a, b){
  return a != b;
};

exports.gt = function gt(a, b){
  return a > b;
};

exports.gte = function gte(a, b){
  return a >= b;
};

exports.lt = function lt(a, b){
  return a < b;
};

exports.lte = function lte(a, b){
  return a <= b;
};

exports.exists = function exists(a){
  return a != null;
};

exports.nexists = function nexists(a){
  return a == null;
};
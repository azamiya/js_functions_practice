function isAtom(arg) {
  switch (typeof(arg)) {
    case 'string':
      return true;
      break;

    case 'number':
      return true;
      break;

    default:
      return false;
  }
}

function isLat(arg) {
  if(Array.isArray(arg)) {
    for (i = 0; i < arg.length; i++) {
      if(isAtom(arg[i]) != true) {
        return false
      }
    }
    return true;
  } else {
    return false;
  }
}

function isMember(arg1, arg2) {
  if (arg2 == []) return false;
  for(i = 0; i < arg2.length; i++) {
    if(arg1 == arg2[i]) {
      return true;
    }
  }
  return false;
}

function rember(atom, lat) {
  let l = [];
  if (lat == []) return l;
  for (i = 0; i < lat.length; i++) {
    if(atom != lat[i]) {
      l.push(lat[i]);
    }
  }
  return l;
}


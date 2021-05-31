function minMax(date) {
  var day = date.getDate();
  var mnth = date.getMonth();
  if (day === 24 && mnth === 11) {
    return true;
  } else {
    return false;
  }
}

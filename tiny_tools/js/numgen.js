function numgen() {
  var startnum = document.getElementById("startnum");
  var endnum = document.getElementById("endnum");
  var output = document.getElementById("output");
  var zeros = window.zeros;

  s = parseInt(startnum.value);
  e = parseInt(endnum.value);
  z = parseInt(zeros.value);

  output.value = "";
  f = fseparator();
  for (i=s; i<=e; i++) {
    n = padding(i, z);
    output.value = output.value + n + f;
  }
}

function padding(n, p) {
  len = n.toString().length;
  zer = 0;
  if (len < p) {
    zer = p - len;
  }
  zstr = repeater("0", zer) + n;
  return zstr;
}

function repeater(x, n) {
  o = "";
  for (q = 0; q < n; q++) {
    o += x;
  }
  return o;
}

function toggle_options() {
  options = document.getElementById("options_div");
  if (options.style.display != "none") {
    options.style.display = "none";
  } else {
    options.style.display = "";
  }
}

function fseparator() {
  fieldsep = window.fieldsep;
  return fieldsep.value.replace(/\\n/g, '\n').replace(/\\t/g, '\t')
}

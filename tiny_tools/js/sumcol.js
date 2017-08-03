function calc_sum() {
  var input_col = document.getElementById("input_col");
  var output = document.getElementById("output");
  var sum_col = document.getElementById("sum_col");
  var msg = document.getElementById("msg");
  var fieldsep = document.getElementById("fieldsep");
  var sumfield = document.getElementById("sumfield");

  var numbers = input_col.value.replace(/[^\d\n\.\-]/g, "").replace(/\n\n+/g, "\n").replace(/\n$/, "").split("\n");
  var stats = numbers.length;

  if (window.advanced.checked) {
    sfield = parseFloat(sumfield.value) -1;
    fsep = fieldsep.value.replace(/\\t/, "\t").replace(/\\n/, "\n");
    lines = input_col.value.replace(/\n$/, "").split("\n");
    numbers = [];
    for (x = 0; x < lines.length; x++) {
      l = lines[x];
      line_split = l.split(fsep);
      field = line_split[sfield];
      val = field.replace(/[^\d\n\.\-]/g, "");
      numbers.push(val);
    }
  }

  var sum = numbers.reduce(add, 0);

  sum_col.value = numbers.join("\n");

  if (isNaN(sum)) {
    msg.style.display = "none";
  } else {
    output.value = sum;
    msg.style.display = "";
    msg.innerHTML = "<p>Total number of lines summed: " + stats + "</p>";
  }
}

function add(a, b) {
  return parseFloat(a) + parseFloat(b);
}

function toggle_options() {
  options = document.getElementById("options_div");
  if (options.style.display != "none") {
    options.style.display = "none";
  } else {
    options.style.display = "";
  }
}

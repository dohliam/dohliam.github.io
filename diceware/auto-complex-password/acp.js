function get_random_char() {
  search_space = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~!@#$%^&*()_+`-=[]|{};:,./<>?";
  var r = Math.floor(Math.random() * 91);
  var random_character = search_space[r];
  return random_character;
}

function give_me_eight() {
  var password = "";
  for (i = 1; i < 9; i++) {
    password = password + get_random_char();
  }
  return password;
}

function print_password() {
  password = give_me_eight();
  while (test_string(password) == false) {
    password = give_me_eight();
  }
  document.getElementById("pw").value = password;
}

function test_string(p) {
  var digits = /[0-9]/;
  var alpha_lower = /[a-z]/;
  var alpha_upper = /[A-Z]/;
  var symbols = /[~\!@#\$%\^&\*\(\)_+`\-=\[\]\|\{\};:,\./<>\?]/;
  var repeat = /(.)\1/;

  meets_criteria = true;

  if (repeat.test(p) || is_sequential(p)) {
    meets_criteria = false;
  } else if (digits.test(p) && alpha_lower.test(p) && alpha_upper.test(p) && symbols.test(p)) {
    meets_criteria = true;
  } else {
    meets_criteria = false;
  }
  return meets_criteria;
}

function is_sequential(p) {
  sequence = false;

  s = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~!@#$%^&*()_+`-=[]|{};:,./<>?";

  for (i = 0; i < p.length; i++) {
    idx = s.indexOf(p[i])
    if (p[i+1] == s[idx+1] || p[i-1] == s[idx-1] || p[i+1] == s[idx-1] || p[i-1] == s[idx+1]) {
      sequence = true;
      break;
    } else {
      sequence = false;
    }
  }
  return sequence;
}

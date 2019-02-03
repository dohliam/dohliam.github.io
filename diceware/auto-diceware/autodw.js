function cast() {
  var roll = Math.floor(Math.random() * 6) + 1;
  return roll.toString();
}

function get_set() {
  var set = cast() + cast() + cast() + cast() + cast();
  return set;
}

function crunch() {
  w1 = document.getElementById("w1");
  w2 = document.getElementById("w2");
  w3 = document.getElementById("w3");
  w4 = document.getElementById("w4");

  w1.value = get_set();
  w2.value = get_set();
  w3.value = get_set();
  w4.value = get_set();
}

function crunch_json() {
  w1 = document.getElementById("w1");
  w2 = document.getElementById("w2");
  w3 = document.getElementById("w3");
  w4 = document.getElementById("w4");
  pw = document.getElementById("pw");

  code1 = get_set();
  word1 = "";
  code2 = get_set();
  word2 = "";
  code3 = get_set();
  word3 = "";
  code4 = get_set();
  word4 = "";

  for (var i = 0; i < en.length; i++) {
    if (en[i].c == code1) {
      word1 = en[i].w;
    }
    if (en[i].c == code2) {
      word2 = en[i].w;
    }
    if (en[i].c == code3) {
      word3 = en[i].w;
    }
    if (en[i].c == code4) {
      word4 = en[i].w;
    }
  }

  c1.innerText = code1;
  w1.innerText = word1;
  c2.innerText = code2;
  w2.innerText = word2;
  c3.innerText = code3;
  w3.innerText = word3;
  c4.innerText = code4;
  w4.innerText = word4;
//   w2.value = get_set();
//   w3.value = get_set();
//   w4.value = get_set();

  pw.value = word1 + word2 + word3 + word4;
}

function multiling(l) {

  var head = document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'js/dw_' + l + '.js';
  head.appendChild(script);

  window.wordlist = l;
//   crunch_multi(l);
}

function crunch_multi(l) {
  w1 = document.getElementById("w1");
  w2 = document.getElementById("w2");
  w3 = document.getElementById("w3");
  w4 = document.getElementById("w4");
  pw = document.getElementById("pw");

  code1 = get_set();
  word1 = "";
  code2 = get_set();
  word2 = "";
  code3 = get_set();
  word3 = "";
  code4 = get_set();
  word4 = "";

  lang = window[l];

  for (var i = 0; i < lang.length; i++) {
    if (lang[i].c == code1) {
      word1 = lang[i].w;
    }
    if (lang[i].c == code2) {
      word2 = lang[i].w;
    }
    if (lang[i].c == code3) {
      word3 = lang[i].w;
    }
    if (lang[i].c == code4) {
      word4 = lang[i].w;
    }
  }

  c1.innerText = code1;
  w1.value = word1;
  c2.innerText = code2;
  w2.value = word2;
  c3.innerText = code3;
  w3.value = word3;
  c4.innerText = code4;
  w4.value = word4;

  grouped = word1 + word2 + word3 + word4;
  pw.value = sanitize_output(grouped);

}

function sanitize_output(t) {

//   language-specific conversions (no, eo, ja)
  t = t.replace(/[Øø]/g, "oe").replace(/[Åå]/g, "aa").replace(/[æÆ]/g, "ae").replace(/[Ĉĉ]/g, "cx").replace(/[Ĝĝ]/g, "gx").replace(/[Ĥĥ]/g, "hx").replace(/[Ĵĵ]/g, "jx").replace(/[Ŝŝ]/g, "sx").replace(/[Ŭŭ]/g, "ux").replace(/ā/g, "aa").replace(/ē/g, "ee").replace(/ī/g, "ii").replace(/ō/g, "ou").replace(/ū/g, "uu");

// diacritics to ascii
  t = t.replace(/[ÀÁÂÃÄàáâãäĀāĂăĄą]/g, "a").replace(/[ÇçĆćĊċČč]/g, "c").replace(/[ÐðĎďĐđ]/g, "d").replace(/[ÈÉÊËèéêëĒēĔĕĖėĘęĚě]/g, "e").replace(/[ĞğĠġĢģ]/g, "g").replace(/[Ħħ]/g, "h").replace(/[ÌÍÎÏìíîïĨĩĪīĬĭĮįİı]/g, "i").replace(/[Ķķĸ]/g, "k").replace(/[ĹĺĻļĽľĿŀŁł]/g, "l").replace(/[ÑñŃńŅņŇňŉŊŋ]/g, "n").replace(/[ÒÓÔÕÖòóôõöŌōŎŏŐő]/g, "o").replace(/[ŔŕŖŗŘř]/g, "r").replace(/[ŚśŞşŠšſ]/g, "s").replace(/[ŢţŤťŦŧ]/g, "t").replace(/[ÙÚÛÜùúûüŨũŪūŮůŰűŲų]/g, "u").replace(/[ŴŵÝýÿŶŷŸ]/g, "w").replace(/[ŹźŻżŽž]/g, "z");

  return t;
}

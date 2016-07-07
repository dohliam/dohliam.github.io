function get_alp() {
  l = phrases.length;
  var rnd1 = Math.floor(Math.random() * l) + 1;
  var rnd2 = Math.floor(Math.random() * l) + 1;

  phr1 = phrases[rnd1];
  phr2 = phrases[rnd2];

  pw_phrase = phr1 + " and " + phr2;
  char_length = pw_phrase.length;
  word_length = pw_phrase.split(" ").length;

  pw = document.getElementById("pw");
  full = document.getElementById("full");
  words = document.getElementById("words");
  chars = document.getElementById("chars");

  pw.value = pw_phrase;
  full.innerHTML = pw_phrase;
  words.innerHTML = "Total number of characters: " + char_length;
  chars.innerHTML = "Total number of words: " + word_length;

}

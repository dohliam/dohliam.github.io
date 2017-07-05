function pinYin() {
  var ShuRu = document.getElementById("wenzi");
  if (document.getElementById("fangshi").value == "pysPyd") {var pinArray = pysPyd;}
  if (document.getElementById("fangshi").value == "pydPys") {var pinArray = pydPys;}
  if (document.getElementById("fangshi").value == "pysZhuyin") {var pinArray = pysZhuyin;}
  if (document.getElementById("fangshi").value == "pydZhuyin") {var pinArray = pydZhuyin;}
  if (document.getElementById("fangshi").value == "zhuyinPyd") {var pinArray = zhuyinPyd;}
  if (document.getElementById("fangshi").value == "zhuyinPys") {var pinArray = zhuyinPys;}
  for (var ckey in pinArray) {
    (pinArray == pysZhuyin || pinArray == pydZhuyin) ? (re = new RegExp(ckey, "gi")) : (re = new RegExp(ckey, "g"));
    ShuRu.value = ShuRu.value.replace(re, pinArray[ckey]);
  }
}

		  var geturl = location.href;
		  if (/\?/.test(geturl) == true) {
		    var args = /\?(.*)/.exec(geturl)[1];
// 		    var comp = /\?(.*)/.exec(geturl)[1];
		  } else {
		    var args = "test";
		  }
		  function runTest() {
		    var output=document.getElementById("output");
		//     var body=document.getElementsByTagName('body')[0];
		    var script=document.createElement('script');
		    script.type='text/javascript';
		    script.src="../js/" + comp + args + '.js';
		//     test.appendChild(script);
		    document.getElementById("output").appendChild(script);
		//     document.getElementById("output").innerHTML = "goodbye";
		  }

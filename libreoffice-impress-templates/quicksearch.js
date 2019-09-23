var i;
var content = "";

obj = inputstream;

for(i=0;i < obj.length; i++){
  name = obj[i].name;
  collection = obj[i].collection;
  tags = obj[i].tags;
  dl = collection;
  if (dl.match(/^user-contrib/)) {
    dl = "user-contrib";
  }

  content+= "<div class='searchable-item card'>" + "<h3>" + name + "</h3>" + "<br>" + "<a href='https://github.com/dohliam/libreoffice-impress-templates/releases/download/v2.2/" + dl + ".zip'><img src='https://raw.githubusercontent.com/dohliam/libreoffice-impress-templates/master/" + collection + "/" + name + "/Thumbnails/thumbnail.png'></a>" + "<br><a href='https://github.com/dohliam/libreoffice-impress-templates/tree/master/" + collection + "'>" + collection + "</a><div class='hiddentext'>" + tags + "</div></div>";
}

document.getElementById("content").innerHTML =  content

// quick search regex
var qsRegex;

// init Isotope
var grid = document.querySelector('.grid');
var iso;

imagesLoaded( grid, function() {
  // init Isotope after all images have loaded
  iso = new Isotope( grid, {
    itemSelector: '.searchable-item',
    percentPosition: true,
    layoutMode: 'masonry'
  });
});

// use value of search field to filter
var quicksearch = document.getElementsByClassName("quicksearch")[0];
quicksearch.onkeyup = function() {
  qsRegex = new RegExp( quicksearch.value, 'gi' );
  filterValue = function( itemElem ) {
    var name = itemElem.textContent;
    return name.match(qsRegex);
  }
  iso.arrange({ filter: filterValue });
}

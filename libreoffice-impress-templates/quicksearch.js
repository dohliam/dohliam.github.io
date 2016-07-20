var i;
var content = "";

obj = inputstream;

for(i=0;i < obj.length; i++){
  name = obj[i].name;
  collection = obj[i].collection;
  tags = obj[i].tags;

  content+= "<div class='searchable-item card'>" + "<h3>" + name + "</h3>" + "<br>" + "<img src='https://raw.githubusercontent.com/dohliam/libreoffice-impress-templates/master/" + collection + "/" + name + "/Thumbnails/thumbnail.png'>" + "<br>" + collection + "<div class='hiddentext'>" + tags + "</div></div>";
}

document.getElementById("content").innerHTML =  content

// quick search regex
var qsRegex;

// init Isotope
var grid = document.querySelector('.grid');
var iso = new Isotope( grid, {
  itemSelector: '.searchable-item',
  layoutMode: 'masonry'
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

var elems = document.querySelectorAll('li');
var nameClass = 'passive';
elems.forEach(function(elem) {
 elem.addEventListener("click", insert, true);
});

function insert() {

  for (var i = 0; i < elems.length; i++) {
    if (elems[i] != this) {
       elems[i].className = 'passive';
    }
  }
  this.className == 'active' ? this.className = 'passive' : this.className = 'active';
}
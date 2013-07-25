// Traverse the DOM!

<<<<<<< HEAD
// document.getElementsByTagName('div')

// document.getElementsByTagName('div')[0]

// document.getElementsByTagName('div')[0].innerHTML

// document.getElementsByTagName('div')[0].innerText

function traverse_dom(search_term) {
  var elements = document.getElementsByTagName('div')
  for (var i=0; i< elements.length; i += 1) {
=======
// document.getElementById()
// document.getElementsByClassName()
// document.getElementsByTagName()


function traverse_dom(search_term) {
  // I want to traverse all the div
  // elements in the DOM and find one whose 
  // innerText is equal to our search_term
  var elements = document.getElementsByTagName('div');
  for (var i=0; i < elements.length; i+=1) {
>>>>>>> c90eb7a447302cf728cd5f9ed97a002a61aec1e0
    if (elements[i].innerText === search_term) {
      return elements[i];
    }
  }
<<<<<<< HEAD
  return null;
}

// document.getElementById('python')
// document.getElementsByClassName('myClass')
// document.getElementsByClassName('myClass')[0].classList
// document.getElementsByClassName('myClass')[0].classList[0].contains("Python")

// document.getElementsByTagName('img')[0].src

=======
  return null; 
}

// we can drill down to the properties of individual HTML tags
// document.getElementsByTagName('img')[0].src
function feed_the_shark() {
  document.getElementById('myShark').width *= 1.1;
}

function animate_the_shark() {
  var timer = setInterval(feed_the_shark, 2000); 
  return timer;
}
>>>>>>> c90eb7a447302cf728cd5f9ed97a002a61aec1e0

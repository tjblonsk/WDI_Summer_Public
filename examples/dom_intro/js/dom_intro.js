// Traverse the DOM!

// document.getElementsByTagName('div')

// document.getElementsByTagName('div')[0]

// document.getElementsByTagName('div')[0].innerHTML

// document.getElementsByTagName('div')[0].innerText

function traverse_dom(search_term) {
  var elements = document.getElementsByTagName('div')
  for (var i=0; i< elements.length; i += 1) {
    if (elements[i].innerText === search_term) {
      return elements[i];
    }
  }
  return null;
}

// document.getElementById('python')
// document.getElementsByClassName('myClass')
// document.getElementsByClassName('myClass')[0].classList
// document.getElementsByClassName('myClass')[0].classList[0].contains("Python")

// document.getElementsByTagName('img')[0].src


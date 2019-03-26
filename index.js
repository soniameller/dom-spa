
let $aTags = document.getElementsByTagName('a')

for (let i = 0; i < $aTags.length; i++) {
  $aTags[i].onclick = function(event) {
    event.preventDefault() // Stop the default behavior: stop the redirection to another page
    console.log('I was clicked!')
    // console.log(event.target.getAttribute('href'))
    // console.log($aTags[i].getAttribute('href'))
    // this refers to the element that triggered the event
    console.log(this.getAttribute('href'))
    let href = this.getAttribute('href')
    displayOneSection(href)
  }
}

function displayOneSection(href) {
  // Select all tags with the attribute "data-route"
  let $routeTags = document.querySelectorAll('[data-route]')
  for (let i = 0; i < $routeTags.length; i++) {
    if ($routeTags[i].getAttribute('data-route') === href) {
      $routeTags[i].style.display = 'block'
    }
    else {
      $routeTags[i].style.display = 'none'
    }
  }
}

// displayOneSection("/")
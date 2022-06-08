const formElem = document.querySelector('#formElem')
const isHighlight = document.querySelector('#isHighlight')
  
isHighlight.addEventListener('change', function() {
  if (this.checked) {
    this.setAttribute("value", "true")
  } //else {
  //   this.setAttribute("value", "false")  
  // }
});


document.addEventListener('submit', (e) => {
  e.preventDefault()
  console.log(formElem)
  for (var pair of Object.entries(formElem)) {
    console.log(pair[0] + ': ' + pair[1].value);
  }
})
const formElem = document.querySelector('#formElem');
const isHighlight = document.querySelector('#isHighlight');
const title = document.querySelector('#title');
const tags = document.querySelector('#tags');
// department Id placeholder
const isOnView = document.querySelector('#isOnView');
const artistOrCulture = document.querySelector('#artistOrCulture');
// medium placeholder
const hasImages = document.querySelector('#hasImages');
// geoLocation placeholder
// dateBeginENd placeholder

isHighlight.addEventListener('change', function () {
  if (this.checked) {
    this.setAttribute('value', 'true');
  } //else {
  //   this.setAttribute("value", "false")
  // }
});

title.addEventListener('change', function () {
  if (this.checked) {
    this.setAttribute('value', 'true');
  }
});

tags.addEventListener('change', function () {
  if (this.checked) {
    this.setAttribute('value', 'true');
  }
});

// department id placeholder

isOnView.addEventListener('change', function () {
  if (this.checked) {
    this.setAttribute('value', 'true');
  }
});

artistOrCulture.addEventListener('change', function () {
  if (this.checked) {
    this.setAttribute('value', 'true');
  }
});

//  medium placeholder

hasImages.addEventListener('change', function () {
  if (this.checked) {
    this.setAttribute('value', 'true');
  }
});

// geoLocation placeholder

// dateBeginENd placeholder

formElem.addEventListener('submit', async (e) => {
  e.preventDefault();
  const queryString = String(
    new URLSearchParams(new FormData(document.forms[0]))
  ); // If I add another form I need to change the index!!!
  const url = `${formElem.action}?${queryString}`;
  console.log(url);
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
});

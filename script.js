const formElem = document.querySelector('#formElem');
const checkbox = document.querySelectorAll('.checkbox');
const message = document.querySelector('.message');
const display = document.querySelector('#display');

checkbox.forEach((e) =>
  e.addEventListener('change', function () {
    if (this.checked) {
      this.setAttribute('value', 'true');
    }
  })
);

let objectIDs;
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
  // global
  objectIDs = data.objectIDs;
  message.textContent = `${objectIDs.length} entries found`;
  if (objectIDs.length) {
    display.classList.toggle('hidden');
  }
});

display.addEventListener('click', () => {
  objectIDs.forEach(async (objectID) => {
    const objUrl = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`;
    const response = await fetch(objUrl);
    const data = await response.json();
    if (data.isPublicDomain) {
      console.log(data);
    }
  });
});

function createElement(elem, ...cssClass) {
  const element = document.createElement(elem);
  cssClass.forEach((item) => element.classList.add(item));
  return element;
}

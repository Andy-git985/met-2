const formElem = document.querySelector('#formElem');
const isHighlight = document.querySelector('#isHighlight');

isHighlight.addEventListener('change', function () {
  if (this.checked) {
    this.setAttribute('value', 'true');
  } //else {
  //   this.setAttribute("value", "false")
  // }
});

formElem.addEventListener('submit', async (e) => {
  e.preventDefault();
  const queryString = String(
    new URLSearchParams(new FormData(document.forms[0]))
  );
  const url = `${formElem.action}?${queryString}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
});

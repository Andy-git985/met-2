// https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=3|9|12
// https://collectionapi.metmuseum.org/public/collection/v1/objects?metadataDate=2018-10-22&departmentIds=3|9|12
// https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=sunflowers
// const url = 'https://collectionapi.metmuseum.org/public/collection/v1/objects'


const searchBar = document.querySelector('#searchBar')
let query = ''
const url = `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${query}`
const hasImages = document.querySelector('#hasImages')

searchBar.addEventListener('input', (e) => {
  console.log(e.target.value)
  query = e.target.value
})

// const button = document.querySelector('button')
document.addEventListener('submit',(e) => {
  try {
    e.preventDefault()
    data = fetchObjects(url)
    console.log(data)
  }
  catch (error) {
    console.error(error)
  }
});

async fetchObjects(url) {
  const res = await fetch(url)
  const json = await res.json()
  return json
}


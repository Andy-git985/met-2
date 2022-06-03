// https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=3|9|12
// https://collectionapi.metmuseum.org/public/collection/v1/objects?metadataDate=2018-10-22&departmentIds=3|9|12
// https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=sunflowers
// const url = 'https://collectionapi.metmuseum.org/public/collection/v1/objects'
// https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&q=sunflowers



const searchBar = document.querySelector('#searchBar')
const hasImages = document.querySelector('#hasImages')
const isHighlight = document.querySelector('#isHighlight')


let searchUrl = 'https://collectionapi.metmuseum.org/public/collection/v1/search?'
const objUrl = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/'



document.addEventListener('submit', async (e) => {
  try {
    e.preventDefault()
    

    if (isHighlight.checked) {
      searchUrl += 'isHighlight=true&'
    } else {
      searchUrl -= 'isHighlight=true&'
    }
    const query = `q=${searchBar.value}`
    console.log(`${searchUrl}${query}`)
    const res = await fetch(`${searchUrl}${query}`)
    
    const json = await res.json()
    console.log(json) // 85

    // for (let i = 0; i < json.objectIDs.length; i++) {
    //   const res2 = await fetch(`${objUrl}${json.objectIDs[i]}`)
    //   const json2 = await res2.json()
    //   console.log(json2)
    // }
    
  }
  catch (error) {
    console.error(error)
  }
  
});
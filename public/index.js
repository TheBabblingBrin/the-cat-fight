// const pageLayout = () => {

// }
const titleLayout = async () =>{

}
const kittenPic = async () => {
  const pic = await fetch("https://api.thecatapi.com/v1/images/search")
  const url = await pic.json()
  const img = document.createElement('img')
  const div = document.createElement('div')
  div.setAttribute('id', 'picture')
  document.body.append(div)
  img.src = url[0].url
  const picDiv = document.getElementById('picture')
  console.log(picDiv)
  picDiv.append(img)

}











window.onload = kittenPic, titleLayout

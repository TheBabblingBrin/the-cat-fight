

const titleLayout = () =>{
  const h1 = document.createElement("h1")
  h1.innerText = "Kitten Pic"
  document.body.append(h1)
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

const divBox = async () => {
  const upperDiv = document.createElement("div")
  const scoreBar = document.createElement("div")
  const upVote = document.createElement("button")
  const downVote = document.createElement("button")
  const voteButtons = document.createElement("div")
  let score = 0
  scoreBar.innerText = `Popularity Score: ${score}`
  upVote.innerText = "Upvote"
  downVote.innerText = "Downvote"
  scoreBar.setAttribute("id", "scorebar")
  upVote.setAttribute("id", "upvote")
  downVote.setAttribute("id", "downvote")
  voteButtons.append(upVote, downVote)
  upperDiv.append(scoreBar, voteButtons)
  document.body.append(upperDiv)

  upperDiv.style.display = "flex"
  upperDiv.style.flexDirection = "column"
  scoreBar.style.textAlign = "center"


  upVote.addEventListener("click", () => {
    score++
    scoreBar.innerText = `Popularity Score: ${score}`
  })
  downVote.addEventListener("click", () => {
    score--
    scoreBar.innerText = `Popularity Score: ${score}`
  })
}






window.onload = async () => {
  await titleLayout();
  await kittenPic();
  await divBox();
}

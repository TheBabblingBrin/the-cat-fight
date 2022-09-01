

const titleLayout = () =>{
  const h1 = document.createElement("h1")
  h1.innerText = "Catstagram"
  document.body.append(h1)
  h1.setAttribute('id', 'title-text')
}
const fetchKitty = async () => {
  const pic = await fetch("https://api.thecatapi.com/v1/images/search")
  return pic
}
const kittenPic = async () => {
  const pic = await fetchKitty();
  const url =  await pic.json()
  const img = document.createElement('input')
  const div = document.createElement('div')
  div.setAttribute('id', 'picture')
  document.body.append(div)
  img.type = 'image'
  img.src = url[0].url
  const picDiv = document.getElementById('picture')
  // console.log(picDiv)
  picDiv.append(img)


  img.addEventListener('click', async () =>{
    const pic = await fetchKitty();
    const url =  await pic.json();
    img.src = url[0].url;
})
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
  upperDiv.setAttribute('id', 'upper-div')
  voteButtons.setAttribute('id', 'buttons')
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
    score <= -10? window.alert("All kitties deserve love!"):null;
  })
}

const commentBar = () => {
  const div = document.createElement('div')
  const label = document.createElement('label')
  const input = document.createElement('textarea')
  const submit = document.createElement('button')
  document.body.append(div)
  div.setAttribute('id', 'comment-bar')
  div.append(label, input, submit)
  input.setAttribute('name', 'comment-input')
  input.setAttribute('id', 'input')
  input.setAttribute('placeholder', 'Add a comment...')
  label.setAttribute('for', 'comment-input')
  label.setAttribute('id', 'comment-label')
  submit.setAttribute('id', 'submit')
  // label.innerText = 'Comment: ';
  submit.innerText ='Submit'

  submit.addEventListener('click', () =>{
    const list = document.getElementById('comment-list')
    const newItem = document.createElement('li');
    const newComment = input.value
    newItem.innerText = newComment
    list.append(newItem)
    input.value = ''
  })

}


const commentList = () =>{
  const div = document.createElement('div');
  document.body.append(div)
  div.setAttribute('id', 'comment-box');
  const list = document.createElement('ul');
  list.setAttribute('id', 'comment-list')
  div.append(list)


}






window.onload = async () => {
        titleLayout();
  await kittenPic();
        divBox();
        commentBar();
        commentList();

}

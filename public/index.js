

const titleLayout = () =>{
  const h1 = document.createElement("h1")
  h1.innerText = "Cat Fight"
  document.body.append(h1)
  h1.setAttribute('id', 'title-text')
}
const theOctagon = () =>{
  const div = document.createElement('div')
  div.setAttribute('id', 'the-octagon')
  document.body.append(div)
}
const fetchKitty = async () => {
  const pic = await fetch("https://api.thecatapi.com/v1/images/search")
  return pic
}


const leftkittenPic = async () => {
  const pic = await fetchKitty();
  const url =  await pic.json()
  const img = document.createElement('input')
  const div = document.createElement('div')
  div.setAttribute('id', 'picture-1')
  const octagon = document.getElementById('the-octagon')
  octagon.append(div)
  img.setAttribute('id', 'img-1')
  img.type = 'image'
  img.src = url[0].url
  const picDiv = document.getElementById('picture-1')
  // console.log(picDiv)
  picDiv.append(img)


  img.addEventListener("click", () => {
    const kitten = document.getElementById('picture-2')
    kitten.remove()
    rightkittenPic();
  })
}
const rightkittenPic = async () => {
  const pic = await fetchKitty();
  const url =  await pic.json()
  const img = document.createElement('input')
  const div = document.createElement('div')
  div.setAttribute('id', 'picture-2')
  const octagon = document.getElementById('the-octagon')
  octagon.append(div)
  img.setAttribute('id', 'img-2')
  img.type = 'image'
  img.src = url[0].url
  const picDiv = document.getElementById('picture-2')
  // console.log(picDiv)
  picDiv.append(img)


  img.addEventListener("click", () => {
    const kitten = document.getElementById('picture-2')
    console.log()
    const newChamp = document.getElementById('img-2')
    const champ = document.getElementById('img-1')
    champ.replaceWith(newChamp)
    newChamp.setAttribute('id', 'img-1')
    kitten.remove()
    rightkittenPic();
  })
}

const fight = () => {
  const animated = document.getElementById('picture-1');
  animated.addEventListener('animationend', ()=>{
    const fightText = document.createElement('p')
    const fightdiv = document.createElement('div')
    fightdiv.setAttribute('id','fight-div')
    fightText.setAttribute('id', 'fight-text')
    // const title = document.querySelector('h1')
    fightText.innerText = 'FIGHT!'
    document.body.append(fightdiv)
    fightdiv.append(fightText)
    let fight = document.getElementById('fight-text')
    fight.addEventListener('animationstart', ()=>{
      let audio = document.createElement('audio')
      audio.controls = true;
      audio.autoplay = true;


      let source = document.createElement('source')
      source.setAttribute('src','http://soundfxcenter.com/video-games/mortal-kombat-2/8d82b5_Mortal_Kombat_2_Fight_Sound_Effect.mp3')
      source.setAttribute('type', 'audio/mpeg')
      audio.append(source)
      document.body.append(audio)
      audio.setAttribute('id', 'audio')


    })
  }
  )
}
const divBox = async () => {
  const upperDiv = document.createElement("div")
  const scoreBar = document.createElement("div")
  const defender = document.createElement("button")
  const challenger = document.createElement("button")
  const voteButtons = document.createElement("div")
  scoreBar.innerText = `Choose your champion!`
  defender.innerText = "Defender"
  challenger.innerText = "Challenger"
  scoreBar.setAttribute("id", "scorebar")
  defender.setAttribute("id", "defender")
  challenger.setAttribute("id", "challenger")
  voteButtons.append(defender, challenger)
  upperDiv.append(scoreBar, voteButtons)
  upperDiv.setAttribute('id', 'upper-div')
  voteButtons.setAttribute('id', 'buttons')
  document.body.append(upperDiv)

  upperDiv.style.display = "flex"
  upperDiv.style.flexDirection = "column"
  scoreBar.style.textAlign = "center"


  defender.addEventListener("click", () => {
    const kitten = document.getElementById('picture-2')
    kitten.remove()
    rightkittenPic();
  })
  challenger.addEventListener("click", () => {
    const kitten = document.getElementById('picture-2')
    console.log()
    const newChamp = document.getElementById('img-2')
    const champ = document.getElementById('img-1')
    champ.replaceWith(newChamp)
    newChamp.setAttribute('id', 'img-1')
    kitten.remove()
    rightkittenPic();
  })

}

const music = () => {
  const animated = document.getElementById('picture-2');
  console.log(animated)
    animated.addEventListener('animationstart', ()=>{
      let audio = document.createElement('audio')
      audio.controls = true;
      audio.autoplay = true;


      let source = document.createElement('source')
      source.setAttribute('src','./SLOWER-TEMPO2019-12-11_-_Retro_Platforming_-_David_Fesliyan.mp3')
      source.setAttribute('type', 'audio/mpeg')
      audio.append(source)
      audio.volume = .3;
      document.body.append(audio)
      audio.setAttribute('id', 'audio')

})
}


const start = async () => {
  const button = document.createElement('button')
  button.innerText = 'START';
  button.setAttribute('class', 'start-button')
   document.body.append(button)
    button.addEventListener('click', async ()=> {
     await leftkittenPic();
     await rightkittenPic();
          fight();
          music();
          divBox();
          button.remove()

  })
}





window.onload = async () => {
        titleLayout();
        theOctagon();
  await start();


}

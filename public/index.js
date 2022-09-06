

const titleLayout = () =>{
  const h1 = document.createElement("h1")
  const overlay = document.createElement('div')
  const glitch = document.createElement('div')

  overlay.id ='overlay'
  glitch.id = 'glitch'
  h1.innerText = "Cat Fight"
  document.body.append(h1,overlay,glitch)
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
const leftListener = (cat) =>{
  cat.addEventListener("click", () => {
    const kitten = document.getElementById('picture-2')
    kitten.remove()
    rightkittenPic();
  })
}
let champCount = 1
const leftkittenPic = async () => {
  const pic = await fetchKitty();
  const url =  await pic.json()
  const img = document.createElement('input')
  const div = document.createElement('div')
  // const champ = localStorage.getItem('currentChamp')

  div.setAttribute('id', 'picture-1')
  const octagon = document.getElementById('the-octagon')
  octagon.append(div)
  img.setAttribute('id', 'img-1')
  img.type = 'image'

  img.src =url[0].url
  const picDiv = document.getElementById('picture-1')
  picDiv.append(img)

  await leftListener(img)

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

  picDiv.addEventListener('animationend', ()=>{
    const glitch = document.getElementById('glitch')

    setTimeout(()=>{
      // glitch.style.animationPlayState = 'running'
      glitch.style.visibility = 'visible'
    },800)
  })


  img.addEventListener("click", loser =() => {
    const kitten = document.getElementById('picture-2')
    const newChamp = document.getElementById('img-2')
    const champ = document.getElementById('img-1')
    newChamp.removeEventListener('click',loser)
    leftListener(newChamp)
    newChamp.setAttribute('id', 'img-1')
    champ.replaceWith(newChamp)
    kitten.remove()

    rightkittenPic();
  })
}

const fight =  () => {
  const animated = document.getElementById('picture-1');
  const animated2 = document.getElementById('picture-2');
  animated.style.animationPlayState = 'running'
  animated2.style.animationPlayState = 'running'

  animated.addEventListener('animationstart', fx = async()=>{
    const fightText = document.createElement('p')
    const fightdiv = document.createElement('div')
    fightdiv.setAttribute('id','fight-div')
    fightText.setAttribute('id', 'fight-text')
    fightText.innerText = 'FIGHT!'
    document.body.append(fightdiv)
    fightdiv.append(fightText)
    let fight = document.getElementById('fight-text')
    fight.addEventListener('animationstart', ()=>{
     setTimeout(()=> {
      let audio = document.createElement('audio')
      audio.controls = true;
      audio.autoplay = true;
      audio.volume = .1;

      let source = document.createElement('source')
      source.setAttribute('src','./media/fightspeech.mp3')
      source.setAttribute('type', 'audio/mpeg')
      audio.append(source)
      document.body.append(audio)
      audio.setAttribute('id', 'fightFX')

      fight.style.animationPlayState = 'paused'
      fightdiv.style.animationPlayState = 'paused'

      setTimeout(()=>{
        fight.style.animationPlayState = 'running'
        fightdiv.style.animationPlayState = 'running'

      },800)

    },1000)
    })
    animated.removeEventListener('animationstart', fx)
    fight.addEventListener('animationend', ()=>{
      fight.remove();
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
    animated.addEventListener('animationstart', bgMusic = ()=>{
      let audio = document.createElement('audio')
      audio.controls = true;
      audio.autoplay = true;
      audio.loop = 'loop'


      let source = document.createElement('source')
      source.setAttribute('src','./media/SLOWER-TEMPO2019-12-11_-_Retro_Platforming_-_David_Fesliyan.mp3')
      source.setAttribute('type', 'audio/mpeg')
      audio.append(source)
      audio.volume = .05;
      document.body.append(audio)
      audio.setAttribute('id', 'audio')
      animated.removeEventListener('animationstart', bgMusic)
})
}

const volSlider = () =>{
  const container = document.createElement('div')
  const slider = document.createElement('input')
  const nav = document.getElementsByClassName('nav-bar')
  container.append( slider)
  nav[0].append(container)
  slider.setAttribute('class', 'volume-slider');
  slider.type = 'range';
  slider.value = '10';
  slider.min = '0';
  slider.max = '100';

}
const navBar = async () => {
  const footer = document.createElement('div');
  footer.setAttribute('class', 'nav-bar')
  const heroes = document.createElement('input')
  const fallen = document.createElement('input')
  document.body.append(footer)

  heroes.type = 'image';
  heroes.id = 'teleport'
  heroes.src = './images/cyberlightningleft.png';
  fallen.type = 'image';
  fallen.id = 'teleport'
  fallen.src = './images/cyberlightningright.png';
  footer.append(heroes);
  await volSlider();
  footer.append(fallen)





}
const setVolume = (myVolume) => {
  const myMedia = document.getElementById('audio');
  const FX = document.getElementById('fightFX');

  myMedia.volume = myVolume/100;
  FX.volume = myVolume/100;
}


const volListener = () => {
  const volSlider = document.querySelector('.volume-slider')
  volSlider.addEventListener('input', ()=>{
    setVolume(volSlider.value)
  })

}
const start = async () => {
  const button = document.createElement('button' )
  const coinText = document.createElement('h2')
  coinText.innerText = 'insert coin'
  button.append(coinText)
  button.setAttribute('class', 'start-button')



   document.body.append(button)
    button.addEventListener('click', async ()=> {
      const sunBox = document.createElement('div')
      const text = document.getElementById('title-text')
      const glitch = document.getElementById('glitch')
      // glitch.style.animationPlayState = 'paused'
      glitch.style.visibility = 'hidden'
      sunBox.setAttribute('id', 'sunbox')
      document.body.append(sunBox)
      const mediaQuery = window.matchMedia('(max-width: 1660px)')
      mediaQuery.matches? null:
      text.style.animation = '2s linear .1s 1 normal both riseup';
      theOctagon();

      await leftkittenPic();
      await rightkittenPic();
          fight();
          music();
          divBox();
          setTimeout(() => {
            button.remove();
            sunBox.remove()
          }, 3000)
          navBar();
          volListener();

  })
}


const saveGame= () =>{
  const champ = document.getElementById('img-1').url.toString()
window.localStorage.setItem('current-champ', champ)

}



window.onload = async () => {
        titleLayout();
  await start();


}

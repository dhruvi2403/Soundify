console.log("Welcome to Soundify")
let songindex=0;
let audioElement=new Audio('1.mp3');
let masterplay=document.getElementById('masterplay');
let myProgressbar=document.getElementById('myProgressbar')
let gif=document.getElementById('gif')
let mastersongname = document.getElementById('mastersongname');
let songitems=Array.from(document.getElementsByClassName('songitem'));

let songs=[
    {songname:"1",filepath:"songs/1.mp3",coverpath:"cover/1.jpg"},
    {songname:"2",filepath:"songs/2.mp3",coverpath:"cover/2.jpg"},
    {songname:"3",filepath:"songs/3.mp3",coverpath:"cover/3.jpg"},
    {songname:"4",filepath:"songs/4.mp3",coverpath:"cover/4.jpg"},
    {songname:"5",filepath:"songs/5.mp3",coverpath:"cover/5.jpg"},
    {songname:"6",filepath:"songs/6.mp3",coverpath:"cover/6.jpg"},
    {songname:"7",filepath:"songs/7.mp3",coverpath:"cover/7.jpg"},
]

songs.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
//audioElement.play();
//haNDLE PLAY PAUSE
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity=0;

    }
})
//listen to events
audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');
    //seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)* 100);
    // console.log(progress);
    myProgressbar.value = progress;
})

myProgressbar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressbar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songitemilay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
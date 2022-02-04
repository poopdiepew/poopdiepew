//function to play the sound and start the animatiob
window.addEventListener('keydown', e =>{
    const audio = document.querySelector(`audio[data-keys="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-keys="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('play');
    
})

//function to attach a stop-transition function to all the keys
const keys = document.querySelectorAll('.key');
console.log(keys);
keys.forEach(key => {
    key.addEventListener('transitionend', stopF);
})

//function to stop the animation- stop-transition
function stopF(e){
    if(e.propertyName !== 'transform') return;
    console.log(this);
    this.classList.remove('play');

}
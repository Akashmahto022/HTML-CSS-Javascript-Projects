const getRandomColor = ()=>{
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

const setBackgroundColor = ()=>{
    document.body.style.backgroundColor = getRandomColor()
}

let interval;

document.getElementById('start').addEventListener('click', function(){
    if(!interval){
        interval = setInterval(setBackgroundColor, 1000)
    }
    console.log("Start changing backgound color every second")
})

document.getElementById('stop').addEventListener('click', function(){
    clearInterval(interval)
    interval = null
    console.log("Stop changing backgound color")
})
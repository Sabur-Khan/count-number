let counter = document.querySelector('.counter')
let count = 0;

function incremant(){
    count++;
    counter.innerHTML = "Happy client: " + count;
    
    // ai jaigai buji nai
    if(counter.dataset.number == count){
     clearInterval(stop)   
    }
}
let stop = setInterval(incremant,100)

// next counter
let counters = document.querySelector('.next')
let runs = 0;
function startingPoint(){
    runs++;
    counters.innerHTML = "Our projects: " + runs;
    if(counters.dataset.numbers == runs){
        clearInterval(stops)  
    }
}
let stops = setInterval(startingPoint,100)



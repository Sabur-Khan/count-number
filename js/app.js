let counter = document.querySelectorAll('.counter');

let arr = Array.from(counter);

arr.map((startCount) =>{

    let counting = 0;

    function incremant(){
        counting++

        startCount.innerHTML = "Your Timer: " + counting;

        if(counting == startCount.dataset.number){
            clearInterval(stop)
        }
    }
    let stop = setInterval(incremant, 100/startCount.dataset.speed)
})

// counter end

let acc = document.querySelectorAll('.accordion')

let ar = Array.from(acc);

ar.map((accItem)=>{

    
    accItem.addEventListener('click', function() {

        accItem.classList.toggle("active_Hoise_Sir");
        
        let pannel = accItem.nextElementSibling;

        if(pannel.style.display === "block") {

            pannel.style.display = "none";
        }else{
            
            pannel.style.display = "block";
        }
    })
})
// console.log(ar);




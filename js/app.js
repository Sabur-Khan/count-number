let counter = document.querySelectorAll('.counter');

let arr = Array.from(counter);

arr.map((startCount) =>{

    let counting = 0;

    function incremant(){
        counting++

        startCount.innerHTML = counting;

        if(counting == startCount.dataset.number){
            clearInterval(stop)
        }
    }
    let stop = setInterval(incremant, startCount.dataset.speed)
})




// arr.map((sobur)=>{
//     console.log(sobur)
// })

// let myArr = Array.from(counter);
// myArr.map((countItem)=>{
//     let count = 0;
//     function incremant() {
//         count++
//         countItem.innerHTML = count;
//         if(count == countItem.dataset.number){
//             clearInterval(stop)
//         }
//     }
//     let stop = setInterval(incremant, countItem.dataset.speed)
// })
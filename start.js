;(function(){
    function startHandler(){
        const an = document.querySelector('.start1')
        const an1 = document.querySelector('.start2')
        const hint = document.querySelector('.hint')
        const cards = document.querySelectorAll('.cards div')
        // setTimeout(cards =>{
        //     cards.forEach((card)=>{
        //         card.style.pointerEvents = "auto";
        //     })
        // },10000)
        cards.forEach((card)=>{
            setTimeout(function(){
                card.style.pointerEvents = "auto";
            },10000)
           
        })

        
        hint.style.display = "none";
        an.style.animation = "start1 6s";
        an1.style.animation = "start1 6s 5s";
    }
    const start = document.querySelector('#btnStart')
    start.addEventListener('click',startHandler)
})()
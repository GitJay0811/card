;(function(){
    let console = {
        isDev : true,
        log(...args){
            if (!this.isDev) return;
            window.console.log(...args);
        }
    }
    const cards = document.querySelectorAll('.cards div');
    const message = document.querySelector('.message');
    const reset = document.querySelector('#btn');
    let first = false , last = false;
    let count = 0;
    let firstLetter = "";
    let firstDOM = "";
    function clickHandler(card){
        let that = this;
        console.log(that)
        this.style.fontSize = `100px`;

        if(!first){
            firstDOM = this.className;
            // console.log(firstDOM);
            firstLetter = this.innerText;
            // console.log(firstLetter);
            first = true;
        }else{
            let aa = document.querySelector(`.${firstDOM}`)
            if(this.innerText === firstLetter){
                count++;
                console.log(count);
                aa.style.pointerEvents = "none";
                that.style.pointerEvents = "none";


                // that.style['pointer-events'] = "none"
            }else{
                setTimeout(function(){
                    // let aa = document.querySelector(`.${firstDOM}`)
                    // console.log(aa)
                    aa.style.fontSize  = `0px`;
                    that.style.fontSize = `0px`;
                },700)
            }
            if(count === 8){
                document.documentElement.style.background = 'url("fireworks1.gif")';
                // message.style.display = "block";
                message.style.top = "40%";
                console.log("恭喜過關");
            }
            first = false;
        }
    }
    cards.forEach((card) => {
        card.addEventListener('click',clickHandler)
    })
    reset.addEventListener('click',resetHandler)
    function resetHandler(){
        location.href = "index.html";
    }
})()
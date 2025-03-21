document.addEventListener('DOMContentLoaded', ()=>{

    //globals
    let intervalId;
    const timer = document.querySelector('#counter')
    timer.textContent = parseInt(0);

    //form handling
    const form = document.querySelector('#comment-form')
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        comment();

        form.reset();
    })


    //incrementing
    function increment(){
        const plus = document.querySelector('#plus')
        plus.addEventListener('click', () =>{

            timer.textContent++;
        })

    }
    increment()

    //decrementing
    function decrement(){
        const minus = document.querySelector('#minus')
        minus.addEventListener('click', () =>{

            timer.textContent --;
        })
        

    }
    decrement()

    //like button appending li
    function like(){
        const heart = document.querySelector('#heart')
        let counter = 0
        heart.addEventListener('click', ()=>{
            const timer = document.querySelector('#counter')
            const li = document.createElement('li')
            counter++;
            li.textContent = ` ${timer.textContent} clicked  ${counter} times`

            const ul = document.querySelector('.likes')
            ul.appendChild(li)

        })

    }
    like()

    //comments
    function comment(){
        const review = document.querySelector('#comment-input').value.trim()
        const p = document.createElement('p')
        p.textContent = review
        const list = document.querySelector('#list')
        list.appendChild(p)

    }

    //counter
    function counter (){
        
        intervalId = setInterval(()=> {
            timer.textContent++;
        }, 1000)

    }
    counter()


    function state(){
        const state = document.querySelector('#pause')
        let pause = false
        
        state.addEventListener('click',()=>{
            pause = !pause;
            
            if(pause){
                clearInterval(intervalId)
            }else{
                counter()
            }
            state.textContent = pause? 'Resume' : 'pause'
        })
           
    }
    state()


})
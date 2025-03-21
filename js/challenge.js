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

    //like button appending li ****
    function like() {
        const heart = document.querySelector('#heart');
        const timer = document.querySelector('#counter');
    
        heart.addEventListener('click', () => {
            const currentTime = timer.textContent; // Get the current time
            const existingLi = document.querySelector(`li[data-timer="${currentTime}"]`);
    
            if (existingLi) {
                let count = parseInt(existingLi.dataset.count) || 1;
                count++;
                existingLi.dataset.count = count; // Update count
                existingLi.textContent = `${currentTime} clicked ${count} times`;
            } else {
                const li = document.createElement('li');
                li.dataset.timer = currentTime; // Store current timer value
                li.dataset.count = 1; // Start count at 1
                li.textContent = `${currentTime} clicked 1 time`;
                document.querySelector('.likes').appendChild(li);
            }
        });
    }
    
    like();
    
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
        const allButtons = document.querySelectorAll('button:not(#pause)');
        const formInputs = form.querySelectorAll('input, button');
        
        state.addEventListener('click',()=>{
            pause = !pause;
            
            if(pause){
                clearInterval(intervalId)
                allButtons.forEach(button => button.disabled = true);
                formInputs.forEach(input => input.disabled = true);
            }else{
                counter()
                allButtons.forEach(button => button.disabled = false);
                formInputs.forEach(input => input.disabled = false);
            }
            state.textContent = pause? 'Resume' : 'pause'
        })
           
    }
    state()


})

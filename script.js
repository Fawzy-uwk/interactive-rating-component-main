let rateButtons=document.querySelectorAll('.rate button');
let vote=document.querySelector('.rating');
let thanks=document.querySelector('.thankyou');
let submit=document.querySelector('.submit');
let rate=document.querySelector('.val');

rateButtons.forEach(button=>{
    button.addEventListener('click',()=>{
        rateButtons.forEach((button)=>{
            button.classList.remove('active');
    })
            button.classList.add('active');
        }
    )});

    submit.addEventListener('click',()=>{
        vote.style.display='none';``
        thanks.style.display='block';
    });

    rateButtons.forEach(button=>{
        button.addEventListener('click',()=>{
        rate.innerHTML=button.innerHTML;
    })});
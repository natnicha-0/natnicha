btn = document.querySelectorAll('button')
btn.forEach((button,index) => {
    button,addEventListener('click',() => {
        alert('Good Job#' + (index+1) + '!')
    })

    button.addEventListener('mouseeter',() =>{
        button.disabled = true
    })

    button.addEventListener("mouseleave",() =>{
        button.disabled = false
    });
}) 
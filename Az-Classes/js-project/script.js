// console.log(document.getElementById('homelink'))

document.getElementById('homelink').addEventListener('click', (event)=>{
        event.preventDefault()
        console.log('link opening stopped', event.target)
    }
)
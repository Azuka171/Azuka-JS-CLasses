// console.log(document.getElementById('homelink'))

document.getElementById('homelink').addEventListener('click', (event)=>{
        event.preventDefault()
        switch_home()
    }
)
document.getElementById('aboutlink').addEventListener('click', (event)=>{
        event.preventDefault()
        switch_about()
    }
)
document.getElementById('contactlink').addEventListener('click', (event)=>{
        event.preventDefault()
        switch_contact()
    }
)

const switch_home = ()=>{
    document.getElementsByTagName('main')[0].innerHTML = `   <main>
        <h1>Home</h1>
    </main>`
}
const switch_about = ()=>{
    document.getElementsByTagName('main')[0].innerHTML = `   <main>
        <h1>About</h1>
    </main>`
}
const switch_contact = ()=>{
    document.getElementsByTagName('main')[0].innerHTML = `   <main>
        <h1>Contact</h1>
    </main>`
}
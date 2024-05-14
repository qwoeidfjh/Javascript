let username = 'admin'
let password = 'Admin@123'
document.querySelector('.login').addEventListener('click',()=>{
    let name = document.querySelector('.username').value
    let pass = document.querySelector('.password').value
    console.log(name)
    console.log(pass)
    if (name == username && pass == password)
    {
        console.log('working')
        window.location.href = './main.html';
    }else{
        alert('Username or password was incorrect')
    }
})


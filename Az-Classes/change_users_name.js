console.log('connected');
let username_containers = document.querySelectorAll('.username');
console.log('username_containers--->',username_containers)

let new_username = 'Azuka';

for (const container of username_containers) {
    container.innerText = new_username
}
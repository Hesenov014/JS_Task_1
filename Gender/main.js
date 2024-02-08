let username = prompt('enter your name')
let gender = prompt('enter your gender (k/q)')

if(gender === 'k'){
    console.log(`salam cenab ${username}`);
} else if (gender==='q'){
    console.log(`salam xanim ${username}`);
} else {
    console.log('gender eror');
}
// Create Tag

const h2 = document.createElement('h2');
const h4 = document.createElement('h4');
const p = document.createElement('p');
const btn = document.createElement('button');
const outpot = document.getElementsByClassName('showing');

// Text Insert

h2.innerText = 'BMW Car Model b4800'
p.innerText = 'This car is very rear'
h4.innerText = 'Price 10,000$'
btn.innerText = 'Buy Now'




// Insert document

const show = document.createElement('div');

show.appendChild(h2);
show.appendChild(p);
show.appendChild(h4);
show.appendChild(btn);



// Function


function cardShow(){
    outpot[0].appendChild(show);
}

function cardRemove(){
    outpot[0].remove();
}
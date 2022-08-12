/* const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content); */

const container = document.querySelector('#container');

const cont1 = document.createElement('p');
cont1.textContent = "Hey I'm red";
cont1.style.color = "red";

container.appendChild(cont1);

const cont2 = document.createElement('h3');
cont2.textContent = "I'm a blue h3!";
cont2.style.color = "blue";

container.appendChild(cont2);

const content = document.createElement('div');
content.style.backgroundColor = "pink";

const cont3 = document.createElement('h1');
cont3.textContent = "I'm in div";

const cont4 = document.createElement('p');
cont4.textContent = "ME TOO!";

content.appendChild(cont3);
content.appendChild(cont4);
container.appendChild(content);
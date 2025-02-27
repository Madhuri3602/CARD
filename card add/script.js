const urlInput = document.getElementById('url');
const titleInput = document.getElementById('title');
const priceInput = document.getElementById('price');
const button = document.getElementById('btn');

button.addEventListener('click', myFun);

function myFun()
 {
    const myDiv = document.createElement('div');
    myDiv.classList.add('card');

    const image = document.createElement('img');
    image.src = urlInput.value;
    image.alt = titleInput.value;

    const title = document.createElement('h2');
    title.textContent = `Name:${titleInput.value}`;

    const price = document.createElement('h2');
    price.textContent = `Price: ${priceInput.value}`;

    myDiv.append(image, title, price);
    document.getElementById('output').appendChild(myDiv);

    urlInput.value = "";
    titleInput.value ="";
    priceInput.value="";
 }
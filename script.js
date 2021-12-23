var mainDiv = document.createElement('div');
mainDiv.setAttribute('class', 'mainDiv');
var buttonDiv = document.createElement('div');
buttonDiv.setAttribute('class', 'buttonDiv')

var head= document.createElement('h1');
head.innerText="Zoo Animals";
var subHead = document.createElement('h2');
subHead.innerText="Click on the button to get information of various zoo animals";



var contentDiv= document.createElement('div');
contentDiv.setAttribute('class', 'contentDiv');

var button = document.createElement('button');
button.innerText="Display Animal Details";

var animal = document.createElement('p');
var lifespan = document.createElement('p')
var lname=document.createElement('p');

var image = document.createElement('img');
contentDiv.append(button,animal,lifespan);


mainDiv.append(head,subHead,contentDiv);
document.body.appendChild(mainDiv);
document.body.appendChild(buttonDiv);

button.addEventListener('click',()=>{
    fetch("https://zoo-animal-api.herokuapp.com/animals/rand")
    .then((response)=>{
        return response.json();
    })
    .then((result)=>{
        console.log(result);
        animal.innerText=result.name;
        var src=result.image_link;
        
        image.setAttribute('src',src);
        contentDiv.appendChild(image);
        lifespan.innerHTML="Lifespan: "+result.lifespan+" Years";

        buttonDiv.innerHTML="<button id=btn>Get Latin Name</button>";
        document.getElementById("btn").addEventListener("click",()=>{
            
            lname.innerText=result.latin_name;
            buttonDiv.appendChild(lname);
        })
        
    })
    .catch((error)=>{
        console.error(error);
    })
})
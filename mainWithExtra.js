console.log('Loading main.js');


    // making a promise that I will do this when I can
// let fetchPromise = fetch("https://randomuser.me/api/");


// let jsonPromise = fetchPromise.then(function(response){
//     // do something with the response
//     
        // this contains the respones headers
        // extract the json from the response, (unpack the response)
//     return response.json();
        // use .blob() if expecting bianary date
        // use .text() if expecting text
// });


    // this is the actual response you were expecting
// jsonPromise.then(function(json){
//     // do something with the json payload
// })

// shorter version below

// ******************************************************
// this is client side code
// **********************************************************8



fetch("https://randomuser.me/api/?results=3") // ?results=5 - this number represents how many name to process
    .then(function(response){
        // do something with the result
        // extract the json from the response
        console.log('response status: ', response.status)
        return response.json();
    }).then(function(json){
        // do something with the json payload
        // this is unpacking the json so it can be used
        console.log("response payload: ", json)
        processJson(json); // passing the (json) to the addToDom function
})

// *******************************************************************************
// if you want to do this in 'node'
// you will need to use axios node library
// put 'axios' in the place of 'fetch'
// *********************************************************************************


// processJson = function(json){
//     //console.log(json.results[0].name.first) // prints just one first name
//     for(let i = 0; i<json.results.length; i++){
//         console.log(json.results[i].name.first);
//     }
// }

function handleSubmit() {
    //let toggleDisplay = document.getElementsByid("address");
    //toggleDisplay.getElementsByClassName.color = red;

     var toggleDisplay = document.querySelectorAll(".address");
     for(let i = 0; i < toggleDisplay.length; i++){
        if (toggleDisplay[i].style.display === "none") {
             toggleDisplay[i].style.display = "block";
     } else {
          toggleDisplay[i].style.display = "none";
   }
}
}


// *****************  create new elements  *********************

let newLi = document.createElement("li");
let newSpan = document.createElement("span");
let newP = document.createElement("p");
let newDiv = document.createElement("div");
let newImg = document.createElement("Img")
//let addLi = document.getElementById("main-body").getElementsByTagName("ul")[0];
let theUl = document.getElementById("people-list");




const body = document.body
const div = document.createElement('div')
let theName = document.querySelector('#the-name')


let processJson = function(json){
    // loop through the results array , and process one contact at a time
    for(let i = 0; i<json.results.length; i++){
        let contact = json.results[i]; // creates a variable for each individual contact ' person' in this case
        processContact(contact);
        
    }
}

    // process one contact at a time and update the dom with that contact info
let processContact = function(contact){
    let firstName = contact.name.first;
    let lastName = contact.name.last;
    let email = contact.email;
    let city = contact.location.city;
    let state = contact.location.state;
    //let street = `${contact.location.street.number} ${contact.location.street.name}`;
    let street = contact.location.street.number + ' ' + contact.location.street.name;
    let picture = contact.picture.thumbnail;
    
    
    let newLi = document.createElement("li");
    let newSpan = document.createElement("span");
    let newP = document.createElement("p");
    let newA = document.createElement("a");
    let newDiv = document.createElement("div");
    let newImg = document.createElement("img")
    let theUl = document.getElementById("people-list");
    let newHr = document.createElement("hr");
    

    theUl.appendChild(newLi);
    newLi.appendChild(newSpan)
    newSpan.append(firstName,' ',lastName,);
    newLi.appendChild(newDiv)
    newDiv.appendChild(newImg)
    newImg.src = picture 
    newImg.append(picture) 
    newLi.appendChild(newP)
    newP.append('Email: ', email)
    newLi.appendChild(newA);

    newA.append("Address: ",street ,' , ',city, ' , ',state)
    //newA.classList.add("address")
    newA.setAttribute('class','address')

    newLi.appendChild(newHr);
    

}




// *************************************************************************
// let newElement = document.createElement('li')
// newElement.textContent = 'here i there'
// let list = document.getElementById('people-list')
// list.appendChild(newElement)
// or
// list.insertBefore(newElement,list.firstElementChild)
// **********************************************************************************


    //theName.innerHTML = (firstName + ' ' + lastName) // done with creating a variable and passing it in
    //document.querySelector('#e-mail').innerHTML = email // done without creating a variable
    //document.querySelector('.little-pic').src = picture
    //body.append(firstName,' ',lastName) // append is a little more flexable than appendchild



// make the request and then move on

// if using node you need to use
    // axios
    // use axios instead of fetch

// assignment
// list of people in address book in the DOM , nimimum info
// make ul and add people to li
// make a hover make other information show up, add event listner to li to show additional info
// look at todo app week 3
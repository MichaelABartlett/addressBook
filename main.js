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

// below is the function to toggle the display of the 'address' class on and off
function handleSubmit() {
     var toggleDisplay = document.querySelectorAll(".address");
     console.log(toggleDisplay)
     for(let i = 0; i < toggleDisplay.length; i++){ // there must be a for loop to turn each individual 'address'
                                                    // in the node list
        if (toggleDisplay[i].style.display === "block") {
             toggleDisplay[i].style.display = "none";
     } else {
          toggleDisplay[i].style.display = "block";
   }
}
}


// *****************  create new elements  *********************

let newLi = document.createElement("li");
let newSpan = document.createElement("span");
let newP = document.createElement("p");
let newDiv = document.createElement("div");
let newImg = document.createElement("Img")
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
    // this is another way to write the line below
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

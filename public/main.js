const menu = document.querySelector(".fa-bars")
const remove_navbar = document.querySelector(".left-container .fa-remove")
const left_container = document.querySelector(".left-container")
const remove_subscribe = document.querySelector("#subscribe.fa-remove")

let asidediv = document.querySelector(".asidediv")
const dateinput = document.querySelectorAll(".date")
const search_input = document.querySelectorAll(".search-form input")
const contact_input = document.querySelectorAll(".contact-form input")
const search_form = document.querySelector(".search-form")
const contact_form = document.querySelector(".contact-form")
const subscribe_div = document.querySelector("#subscribe")
const search_button = document.querySelector(".search")
const email_input_subscribe = document.querySelector("#subscribe .email-input")
const email_input_contact = document.querySelector("#contact .email-input")

const subscribe_button = document.querySelector(".subscribe-btn")

search_form.addEventListener('submit', search_validation);
contact_form.addEventListener('submit', contact_validation);
subscribe_button.addEventListener('click', emailvalidation)
menu.addEventListener('click', openslidebar)
remove_navbar.addEventListener('click', closeslidebar)


// navbar
function openslidebar() {

   left_container.style.display = "block"
   asidediv.style.display = "block"
   remove_navbar.style.display = "block"


}
function closeslidebar() {
   left_container.style.display = "none"
   asidediv.style.display = "none"
   remove_navbar.style.display = "none"

}


//subscribe 
function subscribe() {
   subscribe_div.style.display = "block"
}
function emailvalidation() {
   let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
   console.log('salam')
   if (email_input_subscribe.value.match(validRegex)) {
      email_input_subscribe.nextElementSibling.innerText = ""
      alert("thanks")

   } else {
      email_input_subscribe.nextElementSibling.innerText = "Email is not valid"

   }

   fetch('/', {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify({
         user: {
            subscribe_email: email_input_subscribe.value
         }

      })
   });


}


function removesubscribe() {
   subscribe_div.style.display = "none"

}





//date validation 
function search_validation(e) {
   dateinput.forEach((item) => {
      let values = item.value
      const myArray = values.split(" ");
      const day = myArray[0]
      const month = myArray[1]
      const year = myArray[2]
      const currentyear = new Date().getFullYear();
      if (myArray.length == 3 & day <= 30 & month <= 12 & year == currentyear) {
         item.nextElementSibling.innerText = ""
      }
      else {
         item.nextElementSibling.innerText = "Format is not valid"
      }
      e.preventDefault()

   })

   // getdata
   function getdata() {
      dateinput.forEach((item) => {
         let values = item.value
         if (values) {
            const apartments = [
               apartment1 = {
                  "max people": 5,
                  "checkin": "After 3pm",
                  "checkout": "12pm",
                  "living1": "./images/apartment1/living1.jpg",
                  "living2": "./images/apartment1/living2.jpg",
                  "bedroom": "./images/apartment1/bedroom.jpg",
                  "dining": "./images/apartment1/dining.jpg",
                  "bathroom": 1,
                  "bathroom": 2,



               },
               apartment2 = {
                  "max people": 8,
                  "checkin": "5pm",
                  "checkout": "9pm",
                  "living1": "./images/apartment2/living1.jpg",
                  "living2": "./images/apartment2/living2.jpg",
                  "bedroom": "./images/apartment2/bedroom.jpeg",
                  "dining": "./images/apartment2/dining.jpg",
                  "bathroom": 2,
                  "bedroom_data": 3,
               },
               apartment3 = {
                  "max people": 13,
                  "checkin": "2pm",
                  "checkout": "10px",
                  "living1": "./images/apartment3/living1.jpg",
                  "living2": "./images/apartment3/living2.jpeg",
                  "bedroom": "./images/apartment3/bedroom.jpg",
                  "dining": "./images/apartment3/dining.jpg",
                  "bathroom": 3,
                  "bedroom_data": 5,
               }
            ]

            let kids = document.querySelector(".kids").value
            let adults = document.querySelector(".adults").value
            let max_people_count = Number(kids) + Number(adults)
            let checkin = document.querySelector(".checkin")
            let checkout = document.querySelector(".checkout")
            let bathroom = document.querySelector(".bathroom")
            let bedroom_data = document.querySelector(".bedroom_data")
            let max_people = document.querySelector(".max_people")


            let living1 = document.querySelector("#apartment .living1")
            let living2 = document.querySelector("#apartment .living2")
            let bedroom = document.querySelector("#apartment .bedroom")
            let dining = document.querySelector("#apartment .dining")


            const items = apartments.find((item) => item["max people"] == max_people_count
            )
            living1.src = items["living1"]
            living2.src = items["living2"]
            bedroom.src = items["bedroom"]
            dining.src = items["dining"]
            bathroom.innerText = items["bathroom"]
            checkin.innerText = items["checkin"]
            checkout.innerText = items["checkout"]
            bedroom_data.innerText = items["bedroom_data"]
            max_people.innerText = items["max people"]


         }


      })
   }

   //required validation 

   search_input.forEach((item) => {
      if (item.value == "") {
         item.nextElementSibling.innerText = "This field is required"
         console.log(item.nextElementSibling);

      }
      else[
         getdata()
      ]
   })

}



//contact-form validation 
function contact_validation(e) {
   contact_input.forEach((item) => {
      if (item.value == "") {
         item.nextElementSibling.innerText = "This field is required"
         console.log(item.nextElementSibling);
      }
      else {
         item.nextElementSibling.innerText = ""

         e.preventDefault()
         const contact_name = document.querySelector(".contact-form .name-input").value;
         const contact_email = document.querySelector(".contact-form .email-input").value;
         const contact_nmessage = document.querySelector(".contact-form .message-input").value
         fetch('/', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify({
               user: {
                  contact_name: contact_name,
                  contact_email: contact_email,
                  contact_nmessage: contact_nmessage
               }
            })
         });

      }
   })
   let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
   if (email_input_contact.value.match(validRegex)) {
      email_input_contact.nextElementSibling.innerText = ""

   } else {
      email_input_contact.nextElementSibling.innerText = "Email is not valid"

   }
   e.preventDefault()
}













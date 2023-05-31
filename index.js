document.title = "User Profile"
const userimg = document.getElementById("userimg")
const title = document.getElementById("title");
const fullname = document.getElementById("fullname");
const phone = document.getElementById("phonenumber");
const email = document.getElementById("email");

const age = document.getElementById("age");
const streetname = document.getElementById("streetname");

let url = "https://randomuser.me/api/"
fetch(url)
.then(response =>{
  return response.json()
})
.then(data =>{
    console.log(data)
    title.textContent += data.results[0].name.title
    fullname.textContent += data.results[0].name.first
    age.textContent += data.results[0].dob.age
    phone.textContent += data.result[0].
    streetname.textContent += data.results[0].location.street.name
    streetname.textContent += data.results[0].location.street.number
    

});



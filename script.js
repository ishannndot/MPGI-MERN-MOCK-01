const form = document.getElementById("studentForm");  
const studentCards = document.getElementById("studentCards");  
const studentCount = document.getElementById("studentCount");  
  
let count = 0;  
  
form.addEventListener("submit", function(event) {  
  event.preventDefault();  
  
  const name = document.getElementById("name").value.trim();  
  const email = document.getElementById("email").value.trim();  
  const phone = document.getElementById("phone").value.trim();  
  const dob = document.getElementById("dob").value;  
  const course = document.getElementById("course").value;  
  const about = document.getElementById("about").value.trim();  
  const photo = document.getElementById("photo").files[0];  
  
  const gender = document.querySelector('input[name="gender"]:checked');  
  const skills = document.querySelectorAll('input[name="skills"]:checked');  
  
  const nameRegex = /^[A-Za-z ]{3,}$/;  
  const phoneRegex = /^[0-9]{10}$/;  
  
  let isValid = true;  
  
  document.getElementById("nameError").textContent = "";  
  document.getElementById("emailError").textContent = "";  
  document.getElementById("phoneError").textContent = "";  
  document.getElementById("dobError").textContent = "";  
  document.getElementById("genderError").textContent = "";  
  document.getElementById("courseError").textContent = "";  
  document.getElementById("skillsError").textContent = "";  
  document.getElementById("aboutError").textContent = "";  
  document.getElementById("photoError").textContent = "";  
  
  if (name === "") {  
    document.getElementById("nameError").textContent =  
      "Student name is required";  
  
    document.getElementById("nameError").style.color = "red";  
  
    isValid = false;  
  }   
  else if (!nameRegex.test(name)) {  
    document.getElementById("nameError").textContent =  
      "Name must be at least 3 characters and contain only letters and spaces";  
  
    document.getElementById("nameError").style.color = "red";  
  
    isValid = false;  
  }  
  
  if (email === "") {  
    document.getElementById("emailError").textContent =  
      "Email is required";  
  
    document.getElementById("emailError").style.color = "red";  
  
    isValid = false;  
  }  
  else if (!email.includes("@") || !email.includes(".")) {  
    document.getElementById("emailError").textContent =  
      "Enter a valid email";  
  
    document.getElementById("emailError").style.color = "red";  
  
    isValid = false;  
  }  
  
  if (phone === "") {  
    document.getElementById("phoneError").textContent =  
      "Phone number is required";  
  
    document.getElementById("phoneError").style.color = "red";  
  
    isValid = false;  
  }   
  else if (!phoneRegex.test(phone)) {  
    document.getElementById("phoneError").textContent =  
      "Phone number must contain exactly 10 digits";  
  
    document.getElementById("phoneError").style.color = "red";  
  
    isValid = false;  
  }  
  
  if (dob === "") {  
    document.getElementById("dobError").textContent =  
      "Date of birth is required";  
  
    document.getElementById("dobError").style.color = "red";  
  
    isValid = false;  
  }   
  else {  
    const selectedDate = new Date(dob);  
    const today = new Date();  
  
    if (selectedDate > today) {  
      document.getElementById("dobError").textContent =  
        "Future date is not allowed";  
  
      document.getElementById("dobError").style.color = "red";  
  
      isValid = false;  
    }  
  }  
  
  if (!gender) {  
    document.getElementById("genderError").textContent =  
      "Please select a gender";  
  
    document.getElementById("genderError").style.color = "red";  
  
    isValid = false;  
  }  
  
  if (course === "") {  
    document.getElementById("courseError").textContent =  
      "Please select a course";  
  
    document.getElementById("courseError").style.color = "red";  
  
    isValid = false;  
  }  
  
  if (skills.length === 0) {  
    document.getElementById("skillsError").textContent =  
      "Please select at least one skill";  
  
    document.getElementById("skillsError").style.color = "red";  
  
    isValid = false;  
  }  
  
  if (about === "") {  
    document.getElementById("aboutError").textContent =  
      "About student is required";  
  
    document.getElementById("aboutError").style.color = "red";  
  
    isValid = false;  
  }  
  
  if (!photo) {  
    document.getElementById("photoError").textContent =  
      "Please select a profile photo";  
  
    document.getElementById("photoError").style.color = "red";  
  
    isValid = false;  
  }  
  
  if (isValid === false) {  
    return;  
  }  
  
  let skillList = "";  
  
  skills.forEach(function(skill) {  
    skillList += skill.value + " ";  
  });  
  
  const card = document.createElement("div");  
  card.className = "student-card";  
  
  card.innerHTML = `  
    <h3>${name}</h3>  
    <p>Email: ${email}</p>  
    <p>Phone: ${phone}</p>  
    <p>Date of Birth: ${dob}</p>  
    <p>Gender: ${gender.value}</p>  
    <p>Course: ${course}</p>  
    <p>Skills: ${skillList}</p>  
    <p>About: ${about}</p>  
  `;  


  const deleteButton = document.createElement("button");

  deleteButton.textContent = "Delete";

  deleteButton.classList.add("delete-btn");


  card.appendChild(deleteButton);
  
  studentCards.appendChild(card);  
  
  count++;  
  studentCount.textContent = count;  
  
  form.reset();  
});


studentCards.addEventListener("click", function(event) {

  if (event.target.classList.contains("delete-btn")) {

    const card = event.target.parentElement;

    card.remove();

    count--;

    studentCount.textContent = count;

  }

});
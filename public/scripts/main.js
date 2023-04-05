// User class 
class User{
    constructor(userName, password, firstName, lastName){
        this.username = userName; 
        this.pass = password; 
        this.firstName = firstName; 
        this.lastName = lastName; 
    }
    getFirstName = () => this.firstName; 
    getLastName = () => this.lastName; 
    getUsername = () => this.username; 
    getPassword = () => this.pass; 

    setFirstName = (fname) => this.firstName = fname; 
    setLastName = (lname) => this.lastName = lname; 
    setUserName = (user) => this.username = user; 
    setPassword = (pswd) => this.password = pswd; 
}

// Create new user when registering 
let registrationForm = document.getElementById("registration");
if(registrationForm){
    registrationForm.addEventListener("submit", createUser); 
}

function createUser(e){
    e.preventDefault(); 
    let username = document.getElementById("username").value;
    let password = document.getElementById("pass").value;
    let firstname = document.getElementById("fName").value;
    let lname = document.getElementById("lname").value; 
    const newUser = new User(username, password, firstname, lname); 
    console.log(newUser.getFirstName() + " " + newUser.getLastName() + " " + newUser.getUsername() + " " + newUser.getPassword()); 
    //Reloads to next page 
    window.location.href = "./login.html";
}

//Reading in login info 
let loginForm = document.getElementById("loginForm");
if(loginForm){
    loginForm.addEventListener("submit", readLogin); 
}

function readLogin(e){
    e.preventDefault(); 
    let username = document.getElementById("loginUser").value; 
    let password = document.getElementById("loginPass").value; 
    console.log("Username: " + username + " Password: " + password); 
    //Reloads to next page 
    window.location.href = "./post.html";
}

//Post info 
let postForm = document.getElementById("post"); 
if(postForm){
    postForm.addEventListener("submit", makePost); 
}

function makePost(e){
    e.preventDefault(); 
    let subjectText = document.getElementById("postSubject").value;
    let content = document.getElementById("textContent").value; 
    console.log("subjectText: " + subjectText + "\nContent: " + content); 
}
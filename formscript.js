

const form = document.querySelector(".form")

const inputs = document.querySelectorAll("input");  //querySelectorAll returnerar en nodelist av allt som är "input". Det blir array-liknande eftersom det finns många "input" och därför förstår javascript "inputs".
                                                    //const inputs = document.querySelectorAll("input"); Gör att: 'inputs' innehåller nu en nodelist av alla input-element.
                                                    

const name = inputs[0];                             //Såhär: "inputs" pga querySelectorAll har använts för att returnera en nodelist av alla "input".
const user = inputs[1];                             //OBS! const inputs = document.querySelectorAll("input"); // Select all input elements
const mail = inputs[2];                             //OBS! const input = inputs[0]; // Reference the first input element in the collection
const passWord = inputs[3];
const passWordConfirm = inputs[4];
//const submit = inputs[5]; Kan ev tas bort


const labels = document.querySelectorAll("label");

const nameLabel = labels[0];
const userLabel = labels[1];
const mailLabel = labels[2];
const passWordLabel = labels[3];
const passWordConfirmLabel = labels[4];
//const submitLabel = labels[5]; Kan ev tas bort


labels.forEach((label, i) => {                      //För att fokusera på inputfältet när man clickar på labels.
  label.addEventListener("click", (event) => {     
    inputs[i].focus();                               
  });
});


//////////////////////////////////////////////////////////////////////////////////////////////////////////////


form.addEventListener("submit", (event) => {
  

  let allFilled = true;                 //
  inputs.forEach(input => {
    
    if(input.type==="submit") {
      return;

    }

    if(input.value.trim()==="") {
        allFilled=false;                //Denna if-check highlightar tomma strängar i inputfälten
        input.style.borderColor="red";

    } else {
      input.style.borderColor="";

    }
    
  })

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

  if(!allFilled) {
    alert("Please complete the form!"); //För att alerta om alla fält inte fyllts i
    event.preventDefault();
  }

  if(passWord.value.length < 8) {    //För att alerta om lösenordet inte är minst 8 tecken
    event.preventDefault();
    alert("Password must be at least 8 characters long");

  }

  if(passWord.value!==passWordConfirm.value) { //För att alerta om lösenorden inte matchar varann
  
    event.preventDefault();
    alert("Passwords do not match");
  
  }



});
  
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

function passWordCheckColor() { //Funktion för att ha röda tecken om mindre än 8 tecken i lösenordet

const passWordValue = passWord.value.length; //Säger att passWords värde ska ha en viss längd, det vill säga värdet är en "length". //passWordValue lever ej utanför funktionens scope. 
const minLength = 8; //minLength tilldelas att värdet på length ska vara "8". 

    if(passWordValue < minLength) { //"om passWordValue (length) är mindre än 8".
      
      passWord.style.color="red";


    } else {

      passWord.style.color="black";

    }

  }
passWord.addEventListener("input", passWordCheckColor); //eventlistenern ska här läsa av "passWord". Eventlistenern kollar varje tangentnedlag (dvs "input") och kör då funktionen passWordCheckColor för varje nedslag.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////


function passWordsMatch() { //Funktion för att kolla att lösenordet matchar lösenordsbekräftelsen

const passWordEntry = passWord.value;                 //Deklarerar två const-variabler som heter "passWordEntry" och "passWordConfirmEntry". 
const passWordConfirmEntry = passWordConfirm.value;   //Tilldelar dem värdet (.value) av det som står i inputfälten som representeras av variablerna "passWord" och passWordConfirm. 
                                                    
                                                    
  
  if(passWordEntry===passWordConfirmEntry) {
  
    passWord.style.color="black";
  
  } else {

    passWord.style.color="red";

    }

}

passWordConfirm.addEventListener("input", passWordsMatch); //eventlistenern ska här lyssna av nedersta password-fältet "passWordConfirm". Eventlistenern kollar varje tangentnedlag (dvs "input") och kör då funktionen passWordsMatch för varje nedslag.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Knappen ska vara inaktiv om lösenordet är mindre än 8 tecken och aktiv om det är mer än 8 tecken 

const enableButton = document.querySelector(".btn");
const minLength = 8; //se kommentar under, samma gäller här för minLength. 

function disabledButton() { //Funktion för att knappen ska vara inaktiverad om lösenordet är mindre än 8 tecken och aktiverad om det är 8 tecken el mer.

  const passWordValue = passWord.value.length; //passWordValue kan här deklareras på nytt även om den tidigare deklarerats i en annan funktion. Detta pga att den ej lever utanför funktioners scope.

  if(passWordValue < minLength) {

    enableButton.disabled=true;


  } else {

enableButton.disabled=false;

  }

};

passWord.addEventListener("input", disabledButton);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

//There must be a submit event in the application. 
//When the form is submitted all of the data should be presented in an object like this:
/*
const registrationData = {
  name: "first name last name",
  username: "username",
  email: "email@email.com",
  password: "password",
};
*/
//This object is to be written to the console or written in an alert. 
//The values should of course be corresponding to the values that the user have typed.


const form1 = document.querySelector(".form");
const fullNameInput = document.querySelector(".real-name-input");
const userNameInput = document.querySelector(".user-name-input");
const eMailInput = document.querySelector(".mail-entry-input");
const passWordInput = document.querySelector(".password-entry-input");

form1.addEventListener("submit", (event) => {
event.preventDefault(); //använder metoden preventDefault() på event. 

const name = fullNameInput.value;
const username = userNameInput.value;
const email = eMailInput.value;
const password = passWordInput.value;

const registrationDataObject = {

name: name,
username: username,
email: email,
password: password,

};

console.log(registrationDataObject);

});


////////////////////////////////////////////////////////////////////////////////////////////////////////////////


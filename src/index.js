let name = prompt("what is your name?"); 
let age = prompt("how old are you?");
let email = prompt("enter email");


if (age < 12){
    alert(`Hi ${name} , you are ${age} years old and you are too young to register. Sorry. 😒😒`);

} else if (age >= 12 &&  age < 18) {
    alert(`Hi ${name} , you are ${age} years old and you have limited options to register for.
        We will keep in touch via your email "${email}" `);

} else (age ==18 && age >18);{
    alert(`Hi ${name} , you are ${age} years old and you can register for any option of your choosing. 
        We will keep in touch via your email "${email}" 👋👋`);
}


// if (age < 12);{
// alert(`hi ${name}, you are ${age} years old and you are too young to register. Sorry😒😒`   )
// } else if ( age >=12  && age < 18)
//     {
//     alert(`hi ${name}, you are ${age} years old and you have limited option to register for. We will keep in touch via your email "${email}"` )
//     }
//     else {`hi ${name}`}


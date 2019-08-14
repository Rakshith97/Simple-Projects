function validateForm() {
    
  
      
    var fnamee = document.forms["myForm"]["FName"].value;
    var lnamee = document.forms["myForm"]["LName"].value;
    var emaile = document.forms["myForm"]["Email"].value;
    var dobe = document.forms["myForm"]["DOB"].value;
    var ipass = document.forms["myForm"]["Ipass"].value;
    var cpass = document.forms["myForm"]["Cpass"].value;


    if (fnamee == "") {
      alert(" First Name must be filled out");
      return false;
    }


    if (lnamee == "") {
        alert(" Last Name must be filled out");
        return false;

    }
    if (emaile == "") {
       alert(" email should be filled "); 
        return false;
    }
    if (emaile.indexOf("@", 0) < 0)                 
    { 
        alert("Please enter a valid e-mail address."); 
        return false; 
    } 
   
    if (emaile.indexOf(".", 0) < 0)                 
    { 
        alert("Please enter a valid e-mail address."); 
        return false; 
    } 
    if (dobe == "") {
        alert(" please fill the date of birth field");
        return false;}

    if (ipass == "") {
        alert(" please enter the password"); 
         return false;
     }
     if (cpass == "") {
        alert(" please  confirm the password "); 
         return false;
     }
     if(ipass!=cpass)
     {
         alert("password does not match");
         return false;
     }
  
  else{
      alert("form successfully submitted");

  }
  document.getElementById('FName').value=123;
}




 
 

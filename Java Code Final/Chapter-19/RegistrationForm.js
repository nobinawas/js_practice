    function formValidation()  
    {  
    var uid = document.RegistrationForm.userid;  
    var passid = document.RegistrationForm.passid;  
    var uname = document.RegistrationForm.username;  
    var userAddress = document.RegistrationForm.address;  
    var userCountry = document.RegistrationForm.country;  
    var uzip = document.RegistrationForm.zip;  
    var userEmail = document.RegistrationForm.email;  
    var umsex = document.RegistrationForm.msex;  
    var ufsex = document.RegistrationForm.fsex; if(userid_validation(uid,5,12))  
    {  
    if(passid_validation(passid,7,12))  
    {  
    if(allLetter(uname))  
    {  
    if(alphanumeric(userAddress))  
    {   
    if(countryselect(userCountry))  
    {  
    if(allnumeric(uzip))  
    {  
    if(ValidateEmail(userEmail))  
    {  
    if(validsex(umsex,ufsex))  
    {  
    }  
    }   
    }  
    }   
    }  
    }  
    }  
    }  
    return false;  
      
    } function userid_validation(uid,mx,my)  
    {  
    var UserIdLength = uid.value.length;  
    if (UserIdLength == 0 || UserIdLength >= my || UserIdLength < mx)  
    {  
    alert("User Id should not be empty / length be between "+mx+" to "+my);  
    uid.focus();  
    return false;  
    }  
    return true;  
    }  
    function passid_validation(passid,mx,my)  
    {  
    var PassLength = passid.value.length;  
    if (PassLength == 0 ||PassLength >= my || PassLength < mx)  
    {  
    alert("Password should not be empty / length be between "+mx+" to "+my);  
    passid.focus();  
    return false;  
    }  
    return true;  
    }  
    function allLetter(uname)  
    {   
    var letters = /^[A-Za-z]+$/;  
    if(uname.value.match(letters))  
    {  
    return true;  
    }  
    else  
    {  
    alert('Username must have alphabet characters only');  
    uname.focus();  
    return false;  
    }  
    }  
    function alphanumeric(userAddress)  
    {   
    var letters = /^[0-9a-zA-Z]+$/;  
    if(userAddress.value.match(letters))  
    {  
    return true;  
    }  
    else  
    {  
    alert('User address must have alphanumeric characters only');  
    userAddress.focus();  
    return false;  
    }  
    }  
    function countryselect(userCountry)  
    {  
    if(userCountry.value == "Default")  
    {  
    alert('Select your country from the list');  
    userCountry.focus();  
    return false;  
    }  
    else  
    {  
    return true;  
    }  
    }  
    function allnumeric(uzip)  
    {   
    var numbers = /^[0-9]+$/;  
    if(uzip.value.match(numbers))  
    {  
    return true;  
    }  
    else  
    {  
    alert('ZIP code must have numeric characters only');  
    uzip.focus();  
    return false;  
    }  
    }  
    function ValidateEmail(userEmail)  
    {  
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
    if(userEmail.value.match(mailformat))  
    {  
    return true;  
    }  
    else  
    {  
    alert("You have entered an invalid email address!");  
    userEmail.focus();  
    return false;  
    }  
    } function validsex(umsex,ufsex)  
    {  
    x=0;  
      
    if(umsex.checked)   
    {  
    x++;  
    } if(ufsex.checked)  
    {  
    x++;   
    }  
    if(x==0)  
    {  
    alert('Select Male/Female');  
    umsex.focus();  
    return false;  
    }  
    else  
    {  
    alert('Form Succesfully Submitted');  
    window.location.reload()  
    return true;  
    }  
}
//variable for time expire
var today = new Date();
var expiry = new Date(today.getTime() + 30 * 24 * 3600 * 1000); // plus 30 days

//sets cookies for firstname
  function setCookie(fname, value)
  {
    document.cookie=fname + "=" + escape(value) + "; path=/; expires=" + expiry.toGMTString();
  }
  //sets cookie for lastname
    function setCookie(lname, value)
  {
    document.cookie=lname + "=" + escape(value) + "; path=/; expires=" + expiry.toGMTString();
  }
  //sets cookie for email address
      function setCookie(email, value)
  {
    document.cookie=email + "=" + escape(value) + "; path=/; expires=" + expiry.toGMTString();
  }
  
  //get value from form 
function putCookie(form)
 //this should set the FirstName, LastName, email cookie to the proper value;
  {
   setCookie("FirstName", form[0].firstname.value);
   setCookie("LastName", form[0].lastname.value);
   setCookie("E-mail", form[0].E-Mail.value);

    return true;
  }
function formValidation() {
  
    var name = document.getElementsByName("UserName")[0].value;
    var familyname = document.getElementsByName("UserFamilyname")[0].value;
    var eng_name = document.getElementsByName("User_Eng_Name_Familyname")[0].value;
    var email = document.getElementsByName("Email")[0].value;
    var phonenumber = document.getElementsByName("PhoneNumber")[0].value;
    /*var pass1 = document.getElementsByName("Password1")[0].value;
    var pass2 = document.getElementsByName("Password2")[0].value;
    var address = document.getElementsByName("Address")[0].value;
    var ssn = document.getElementsByName("Ssn")[0].value;
    

    var s = document.getElementsByName("ُStatus")[0];
    var SelectStatus = s.options[s.selectedIndex].value;
   
   
    var selectedGender = null;
    for(var i =0 ; i < document.getElementsByName("Gender").length ; i++){
        if(document.getElementsByName("Gender")[i].checked)
        {
            selectedGender= document.getElementsByName("Gender")[i].value;
        }
    }
    */
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var errorMessage = "";
    
    if (name==""){
        errorMessage += "- نام را وارد کنید <br/>";}
    else if (name.length < 3){        
        errorMessage += "* نام باید بیش از 3 کاراکتر باشد <br/>";}
    else if (name.length > 50){        
            errorMessage += "* نام باید کم تر از 50 کاراکتر باشد <br/>";}
   

    
        
    if (familyname==""){
        errorMessage += "- نام خانوادگی را وارد کنید <br/>";}
    else if (familyname.length < 3){        
        errorMessage += "* نام خانوادگی باید بیش از 3 کاراکتر باشد <br/>";}
    else if (familyname.length > 100){        
            errorMessage += "* نام خانوادگی باید کم تر از 50 کاراکتر باشد <br/>";}

    if (eng_name.length > 150){        
        errorMessage += "* نام و نام خانوادگی باید کم تر از 150  کاراکتر باشد <br/>";}

    if (email==""){
        errorMessage += "- ایمیل را وارد کنید <br/>";}
    else if(email.match(mailformat)){
        errorMessage +="";
        }
    else
        {
        errorMessage +="ایمیل نا معتبر است!";
        }
    
    if (phonenumber==""){
        errorMessage += "- شماره تلفن را وارد کنید <br/>";}
        


    if (errorMessage != "") {
            document.getElementById("Uimessage").innerHTML = errorMessage;
            return false;
        }
    return true;




}

function ValidateEmail(input)
{

}

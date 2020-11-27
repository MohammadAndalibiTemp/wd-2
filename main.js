function formValidation() {
  
    var name = document.getElementsByName("UserName")[0].value;
    var familyname = document.getElementsByName("UserFamilyname")[0].value;
    var eng_name = document.getElementsByName("User_Eng_Name_Familyname")[0].value;
    var email = document.getElementsByName("Email")[0].value;
    var phonenumber = document.getElementsByName("PhoneNumber")[0].value;
    var ssn = document.getElementsByName("Ssn")[0].value;
    var pass1 = document.getElementsByName("Password1")[0].value;
    var pass2 = document.getElementsByName("Password2")[0].value;
    var address = document.getElementsByName("Address")[0].value;
    var birthday = document.getElementsByName("Birthday")[0].value;
    var s = document.getElementsByName("Status")[0];
    var SelectedCityCode = s.options[s.selectedIndex].value;
    
  
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
        errorMessage += "- ایمیل را وارد کنید(اجباری) <br/>";}
    else if(email.match(mailformat)){
        errorMessage +="";
        }
    else
        {
        errorMessage +="ایمیل نا معتبر است!";
        }
    
    if (phonenumber==""){
        errorMessage += "- شماره تلفن را وارد کنید <br/>";}
    else if (phonenumber.startswith("۰۹")){
        errorMessage += "- شماره تلفن را درست وارد کنید <br/>";
    }
    else if (phonenumber.length!=12){
        errorMessage += "- شماره تلفن را درست وارد کنید <br/>";
    }
    else if(isNaN(phonenumber)){
        errorMessage += "- شماره موبایل را درست وارد کنید";
    }

    //-----------------------------------------------------------------------
    Ssn_reg = /^\d{3}-\d{6}-\d{1}$/
    if (!Ssn_reg.test(ssn)){
        errorMessage += "- کد ملی را درست وارد کنید";

    }
//--------------------------------------------------------------------------
    var Pass_reg = /^[-+!#$*=0-9a-zA-Z]+$/
    if (pass1==""){
        errorMessage += "- رمز را وارد کنید <br/>";
    }
    else if (pass1.length < 8){        
        errorMessage += "* رمز باید بیش از 8 کاراکتر باشد <br/>";}
    else if (pass1.length > 24){        
            errorMessage += "* رمز باید کم تر از 25 کاراکتر باشد <br/>";}
    if(!Pass_reg.test(pass1)){
        errorMessage += "- رمز را با توجه به ساختار گفته شده وارد کنید <br/>";

    }
    if (pass2==""){
        errorMessage += "-تکرار رمز را وارد کنید <br/>";
    }
    if(pass1 != pass2){
        errorMessage += "-تکرار رمز را درست وارد کنید <br/>";
    }
    //-----------------------------------------------------------------------------
    
    if (pass1.length > 150){        
        errorMessage += "* آدرس باید کم تر از 150 کاراکتر باشد <br/>";}
    
    //-----------------------------------------------------------------------------
    var Date_reg = /[1][3](9[0]|[1-8][0-9])\/((0[1-6]\/((3[0-1])|([1-2][0-9])|(0[1-9])))|((1[0-2]|(0[7-9]))\/(30|([1-2][0-9])|(0[1-9]))))$/
    if (!Date_reg.test(birthday)){
        errorMessage += "- تاریخ را با توجه به ساختار گفته شده وارد کنید <br/>";
    }
    //-------------------------------------------------------------------------------
    if (SelectedCityCode == -1){
        errorMessage += "- وضعیت تأهل را وارد کنید <br/>";
    }


    
    
    
    
    
    
    
    if (errorMessage != "") {
            document.getElementById("Uimessage").innerHTML = errorMessage;
            return false;
        }
    return true;




}

/*function ValidateEmail(input)
{

}*/

function Check_P(event){

    var PL = /[\u0600-\u06FF]/;
    errorMessage = "";
    temp = PL.test(event.key);
    if(temp){
        errorMessage += "";
        }
    else{
        errorMessage += "-  فارسی وارد نماید ";
        alert(errorMessage);
        return false;

    }
        //document.getElementById("Uimessage1").innerHTML = errorMessage;}

}

function Check_E(event){

    var PL = /[A-Za-z0-9]/;
    errorMessage = "";
    temp = PL.test(event.key);
    if(temp){
        errorMessage += "";
        }
    else{
        errorMessage += "- انگلیسی وارد کنید";
        alert(errorMessage);
        return false;

        //document.getElementById("Uimessage2").innerHTML = errorMessage;}
    }
}


/*function ChangeNum(){
    [{ eng: '0', pe: '۰' },{ eng: '1', pe: '۱' },{ eng: '2', pe: '۲' },
     { eng: '3', pe: '۳' },{ eng: '4', pe: '۴' },{ eng: '5', pe: '۵' },
    { eng: '6', pe: '۶' },{ eng: '7', pe: '۷' },{ eng: '8', pe: '۸' },
    { eng: '9', pe: '۹' }]
    NumString = PhoneNumber.value;
    num = NumString.split('');
    num.array.forEach(number,index) => {
        findnum = numbers.find(i=> i.eng == number)
        if(findnum){
            num[index] = findedNumber.pe;

        }
    });
    PhoneNumber.value = num.join('')
}*/

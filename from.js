function ayushi(){
    let name=document.getElementById("name").value
    let contact=document.getElementById("contact").value
    let age=document.getElementById("age").value
    let email=document.getElementById("email").value
    let password=document.getElementById("password").value
    let cf=document.getElementById("cnfrmpassword").value

if(name==""){
    alert("plese fill all the detail")
    document.getElementById("name").focus()
    return false;

}
else if(age==""){
    alert("plese fill all the detail")
    document.getElementById("age").focus()
    return false;
}
else if(contact==""){
    alert("plese fill all the detail")
    document.getElementById("contact").focus()
    return false;
}
else if(email==""){
    alert("plese fill all the detail")
    document.getElementById("email").focus()
    return false;
}

else if(password==""){
    alert("plese fill all the detail")
    document.getElementById("password").focus()
    return false;
}
else if(cf==""){
    alert("plese fill all the detail")
    document.getElementById("confrmpassword").focus()
    return false;
}
else if(contact.length<10|| contact.length>10){
    alert("digit check")
return false;}

else if(isNaN(age)){
    alert("enter valid age input")
    document.getElementById('age').focus()
    return flase;

}
else if(isNaN(contact)){
    alert("enter valid contact input")
    document.getElementById("contact").focus()
    return flase;

}
else if(!(email.includes('@'))){
    alert("enter valid email input")
    document.getElementById("email").focus()
    return flase;
}

else if(cf!=password){
    alert("enter same passwrd")
    return flase;
}
else if(!(password.match([/@,#,$/]))){
    alert("enter specific passwrd")
    return flase;
}
} 
$("#loginSuccessAlert").hide();
$("#loginFailAlert").hide();

let requiredEmail = "email@email.com";
let requiredPassword = "password";
let requiredEmailPattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i

$("form").submit(function(event){
    $("#loginFailAlert").html("");
    $("#loginSuccessAlert").hide();
    $("#loginFailAlert").hide();
    event.preventDefault();

    let loginEmail = $("#loginEmail").val();
    let loginPassword = $("#loginPassword").val();
    let loginError = [];

    console.log("Email: " + loginEmail);
    console.log("Password: " + loginPassword);

    if(loginEmail == ""){
        loginError.push("Email must not be blank");
    }
    // only check if something is actually entered into the email field
    if(!requiredEmailPattern.test(loginEmail) && loginEmail != ""){
        loginError.push("Email is not proper format. Must be email@domain.com");
    }
    if(loginPassword == ""){
        loginError.push("Password must not be blank");
    }

    // only check this if there are no other errors with something being blank
    if((loginEmail != requiredEmail || loginPassword != requiredPassword) && loginError.length == 0){
        loginError.push("Login email and password incorrect");
    }

    if(loginError.length != 0){
        loginError.forEach(element => {
            $("#loginFailAlert").append(element + "<br>")
        });
        //$("#loginFailAlert").html(loginError);
        $("#loginFailAlert").show();
        return;
    }else{
        $("#loginSuccessAlert").html("Login success!");
        $("#loginSuccessAlert").show();
    }

});
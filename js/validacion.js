function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

document.getElementById("regBtn").onclick = function(){
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;
    var checkbox = document.getElementById("terminos");

    if(nombre == ""){
        return showAlertError();
    }
        
    else if(apellido == ""){
        return showAlertError();
    }
        
    else if(email == ""){
        return showAlertError();
    }
        
    else if(password1.length < 6){
        return showAlertError();
    }

    else if (password1 != password2){
        return showAlertError();
    }

    else if (!checkbox.checked){
        return showAlertError();
    }

    else{
        return showAlertSuccess();
    }
}

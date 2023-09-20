function validar(num1,num2){
    const num1 = parseInt(document.getElementById("pmrnum").value);
    const num2 = parseInt(document.getElementById("sgnum").value);
    if (num1 == "" || num2 == ""){
        document.getElementById("resultado").value = "Erro:";
        return false;
    }
    return true;

} 
document.getElementById("suma").onclick = function(){
    const num1 = parseInt(document.getElementById("pmrnum").value);
    const num2 = parseInt(document.getElementById("sgnum").value);
    const resultado = num1 + num2;
    document.getElementById("resultado").value = resultado;
    
}

document.getElementById("resta").onclick = function(){
    const num1 = parseInt(document.getElementById("pmrnum").value);
    const num2 = parseInt(document.getElementById("sgnum").value);
    const resultado = num1 - num2;
    document.getElementById("resultado").value = resultado;
}

document.getElementById("multiplicacion").onclick = function(){
    const num1 = parseInt(document.getElementById("pmrnum").value);
    const num2 = parseInt(document.getElementById("sgnum").value);
    const resultado = num1 * num2;
    document.getElementById("resultado").value = resultado;
}

document.getElementById("division").onclick = function(){
    const num1 = parseInt(document.getElementById("pmrnum").value);
    const num2 = parseInt(document.getElementById("sgnum").value);
    const resultado = num1 / num2;
    document.getElementById("resultado").value = resultado;

}

document.getElementById("porsentaje").onclick = function(){
    const num1 = parseInt(document.getElementById("pmrnum").value);
    const num2 = parseInt(document.getElementById("sgnum").value);
    const resultado = num1 % num2;
    document.getElementById("resultado").value = resultado;
}
  
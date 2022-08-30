const p = prompt("Enter the text", "")


const result = p?.split(" ").join("").replaceAll("\t", "").replaceAll(String.fromCharCode(10240),"");


alert("The Number is: " +  result);


location. reload();






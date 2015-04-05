    var xmlhttp = new XMLHttpRequest();
	var url = "http://tec2beta.azurewebsites.net/api/Charge/RetrieveMethods";

xmlhttp.onreadystatechange = function() 
{
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        myFunction(xmlhttp.responseText);
    }
}
xmlhttp.open("GET", url, true);
xmlhttp.setRequestHeader('ocp-apim-subscription-key','2e1a286035c0405183618a0191c19c95');
xmlhttp.send();

function myFunction(arr) {
    document.getElementById("id01").innerHTML = arr;
}
	

const xhr = (url, method= "GET") => 
    new Promise((resolve) => {
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                resolve(this.responseXML);
            }
        };
        xhttp.open("GET", "people.xml", true);
        xhttp.send();
    });

function displayData(xml) {
      
    var xmlDoc = xml.responseXML;
    var table="<tr><th>FirstName</th><th>LastName</th><th>FullName</th></tr>";
    var x = xmlDoc.getElementsByTagName("person");
    for (let i = 0; i <x.length; i++) { 
        table += "<tr><td>" +
        x[i].getElementsByTagName("firstname")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("lasttname")[0].childNodes[0].nodeValue +
        "</td><td>" +
        //displaying fullname
        x[i].getElementsByTagName("firstname")[0].childNodes[0].nodeValue+" "+x[i].getElementsByTagName("lasttname")[0].childNodes[0].nodeValue
        "</td></tr>" ;
    }
    document.getElementById("persons").innerHTML = table;
}

xhr(`module-9/cards.xml`).then(displayData)
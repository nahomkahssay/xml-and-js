function saveToFile(){
    const email = document.getElementById('email'); 
    const date = document.getElementById('date');
    

    let data =  "Email : " + email.value + "\n" + 
                "Date : " + date.value + "\n";

    
    const textToBLOB = new Blob([data], { type: "text/plain" });
            
     const sFileName = "info.txt"; // The file to save the data.

     window.localStorage.getItem('data');

            let newLink = document.createElement("a");
            newLink.download = sFileName;


            if (window.webkitURL != null) {
                newLink.href = window.webkitURL.createObjectURL(textToBLOB);
            } else {
                newLink.href = window.URL.createObjectURL(textToBLOB);
                newLink.style.display = "none";
                document.body.appendChild(newLink);
            }

            newLink.click();

            

            alert('Thank You for submitting! We will contact you shortly!')
            
}
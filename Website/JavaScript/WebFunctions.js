function StoreData(){
	// Get the data from each element on the form.
	const title = document.getElementById('titledropdown');
    const fname = document.getElementById('fname');
	const lname = document.getElementById('lname');
    const email = document.getElementById('email');
    const contactno = document.getElementById('contactno');
	const membership = document.getElementById('membership');
	const date = document.getElementById('arrivaldate');
	const comments = document.getElementById('comments');
        
    // This variable stores all the data.
    let data = 
        '\r Title: ' + title.value + ' \r\n ' + 
        'Name: ' + fname.value + ' ' + lname.value + ' \r\n ' + 
        'Email: ' + email.value + ' \r\n ' + 
        'contact number: ' + contactno.value + ' \r\n ' + 
		'Membership: ' + membership.value + ' \r\n ' + 
		'lesson Date: ' + date.value + ' \r\n ' + 
        'Comments: ' + comments.value;
        
    // Convert the text to BLOB.
    const textToBLOB = new Blob([data], { type: 'text/plain' });
    const sFileName = 'formData.txt';	   // The file to save the data.
    let newLink = document.createElement("a");
    newLink.download = sFileName;

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }
		
	//Event that causes the file to download
    newLink.click();
}
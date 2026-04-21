
// 2. Form Validation (Contact Page) 
function validateForm() {
    
    var nameField = document.getElementById("name");
    var emailField = document.getElementById("email");

    if (nameField.value.trim() === "" || emailField.value.trim() === "") {
        alert("Please fill out all required fields.");
        return false; 
    }
    return true;
}

//  3. DOM Manipulation: Toggle Visibility (Projects Page)
function toggleDescription(button) {
    
    var description = button.nextElementSibling;
    
    if (description.style.display === "none" || description.style.display === "") {
        description.style.display = "block";
        button.textContent = "Hide Description"; 
    } else {
        description.style.display = "none";
        button.textContent = "Show Description";
    }
}

// 4. Quote Interaction (CV Page) 
var quote = document.querySelector("blockquote");
if (quote) {
   
    quote.addEventListener("mouseover", function() {
        this.style.backgroundColor = "#8a6ff7"; 
        this.style.color = "white";
        this.style.fontStyle = "italic";
        this.style.padding = "10px";
        this.style.borderRadius = "5px";
    });

    quote.addEventListener("mouseout", function() {
        this.style.backgroundColor = "transparent";
        this.style.color = "#333333";
        this.style.fontStyle = "normal";
    });
}

//5.  Date & Time (Homepage) 

window.onload = function() {
    var footerElement = document.querySelector("footer");
    
    if (footerElement) {
       
        var newParagraph = document.createElement("p");
        
        var currentDateTime = new Date();
        
        var dateText = document.createTextNode("Page loaded on: " + currentDateTime.toLocaleString());
        
        newParagraph.appendChild(dateText);
        footerElement.appendChild(newParagraph);
    }
};
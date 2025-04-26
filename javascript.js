

 const form = document.getElementById("userForm");
 form.addEventListener("submit", function(event) {
    event.preventDefault();

    
    var formData = {
      id: document.getElementById("id").value,
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      age: document.getElementById("age").value,
      address: document.getElementById("address").value
    };

    
    document.getElementById("result").textContent = 
    "ID: " + formData.id + "\n" +
    "First Name: " + formData.firstName + "\n" +
    "Last Name: " + formData.lastName + "\n" +
    "Email: " + formData.email + "\n" +
    "Phone Number: " + formData.phone + "\n" +
    "Age: " + formData.age + "\n" +
    "Address: " + formData.address;

    
  });

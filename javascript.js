
  let currentIdNumber = 100; // Start from 100

  function generateUniqueId() {
    return "A" + currentIdNumber++;
  }

  const form = document.getElementById("userForm");
  form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Generate a unique ID
    const uniqueId = generateUniqueId();

    var formData = {
      id: uniqueId,
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


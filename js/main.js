console.log("Script Testing")

document.getElementById('coffee_order').addEventListener('submit', function (event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value.trim();
    function sub() {
        if (name==="") {
            alert("Enter A Valid Name");
        }else if (email===""){
            alert("Enter a Valid Email");
        }else{
            alert("Your Message by email: "+ email + " Has Been Submitted Sucesfully");
        }
    }

     sub()

});

const form1 = document.getElementById("form1")

form1.addEventListener("submit", function (event){
    event.preventDefault()
    const id1 = document.getElementById("username").value
    const id2 = document.getElementById("password").value
    if (id1 == "admin@gmail.com" && id2 == "admin123") {
        window.location.assign("adminhomepage.html");
    }
    else {
        alert("Invalid Information")
    }
})


//this function auto-fills the service name/ therapist name if knee service is selected on the schedule page
function KneeServiceSelect() {
}
  
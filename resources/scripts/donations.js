const url = "https://localhost:7060/api/Donations";

function handleAddDonation()
  {
    let donEmail = document.getElementById("email").value
    let donName = document.getElementById("name").value
    let donAmount = document.getElementById("donate-amount").value
    let dateToday = new Date();
    const newDonation =
    {
        email: donEmail,
        name: donName,
        donateAmount: donAmount,
        date: dateToday
    }
    var response = fetch(url, {
        method: "POST",
        body: JSON.stringify(newDonation),
        headers: {
        "Content-type": "application/json; charset=UTF-8"  
        },
    })
    // setTimeout(()=> addRow(response.json),2000)
    // location.reload()
  }
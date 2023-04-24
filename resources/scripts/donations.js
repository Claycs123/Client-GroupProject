const url = "https://localhost:7060/api/Donations";

function handleAddDonation()
{
    console.log("hello")
    let donEmail = document.getElementById("email").value
    let donName = document.getElementById("name").value
    let donAmount = document.getElementById("donate-amount").value
    // let dateToday = new Date();
    let dateToday = new Date().toISOString()
    const newDonation =
    {
        email: donEmail,
        name: donName,
        donateAmount: donAmount,
        date: dateToday
    }
    console.log("2")
    try {
        var response = fetch(url, {
            method: "POST",
            body: JSON.stringify(newDonation),
            headers: {
            "Content-type": "application/json; charset=UTF-8"  
            },
        })
        console.log("4")
    } catch(Exception) {
        console.log("Donation error")
    }
    console.log(newDonation)
    setTimeout(()=> addRow(response.json),2000)
    // location.reload()
}


function addRow(donation) {
    
    let tableBody = document.getElementById("appointmentTableBody");
    let tr = document.createElement("TR");
        tableBody.appendChild(tr);
  
        let td1 = document.createElement("TD");
        td1.width = 200;
        td1.appendChild(document.createTextNode(`${donation.email}`));
        tr.appendChild(td1);
  
        let td2 = document.createElement("TD");
        td2.width = 100;
        td2.appendChild(document.createTextNode(`${donation.donorName}`));
        tr.appendChild(td2);
  
        let td3 = document.createElement("TD");
        td3.width = 50;
        td3.appendChild(document.createTextNode(`${donation.moneyDonated}`));
  
        tr.appendChild(td3);
  
        let td4 = document.createElement("TD");
        td4.width = 100;
        td4.appendChild(document.createTextNode(`${donation.date}`));
        tr.appendChild(td4);
  
        let td5 = document.createElement("TD");
        td5.width = 200;
        td5.appendChild(document.createTextNode(`${appointment.dates}`));
        tr.appendChild(td5);

        let td6 = document.createElement("TD");
        td6.width = 200;
        td6.appendChild(document.createTextNode(`${appointment.timeSlot}`));
        tr.appendChild(td6);
    
  }


// const createSong = async (event) => {
//     event.preventDefault();
//     const target = event.target;
//     const song = {
//         title: target.title.value,
//         artist: target.artist.value,
//         dateAdded: target.dateAdded.value,
//     }
//     await fetch(url, {
//         method: "POST",
//         headers: {
//             accept: "*/*",
//             "content-type": "application/json",
//         },
//         body: JSON.stringify(song),
//     })
//     render();
//     target.title.value = "";
//     target.artist.value = "";
//     target.dateAdded.value = "";
// }
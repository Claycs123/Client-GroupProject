const url = "https://localhost:7060/api/Donations";

function handleAddDonation()
{
    console.log("hello")
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
    console.log("4")
    // setTimeout(()=> addRow(response.json),2000)
    // location.reload()
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
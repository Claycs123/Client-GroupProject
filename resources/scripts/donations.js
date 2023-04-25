


const donationUrl = "https://localhost:7060/api/Donations";


function handleDonationLoad()
{
    getDonationData()
    createDonationTable()
    createDonationChart()
}

async function getDonationData()
{
    let response = await fetch(donationUrl)
    let json = await response.json()
    return json
}
function handleAddDonation()
{
    console.log("hello")
    let donEmail = document.getElementById("email").value
    let donName = document.getElementById("name").value
    let donAmount = document.getElementById("donateamount").value
    let date = new Date();
    let dateToday = date.toISOString().slice(0, 10);
    const newDonation =
    {
        email: donEmail,
        donorName: donName,
        moneyDonated: donAmount,
        date: dateToday
    }
    console.log("2")
    try {
        var response = fetch(donationUrl, {
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
    
    let tableBody = document.getElementById("donationTableBody");
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
  }

  async function createDonationTable() {
    let donations = await getDonationData() || [];
    let table = document.createElement("TABLE");
    table.border = "1";
    console.log("hello")
    table.id = "donationTable";
    let tableBody = document.createElement("TBODY");
    tableBody.id = "donationTableBody";
    table.appendChild(tableBody);
  
    let tr = document.createElement("TR");
    tableBody.appendChild(tr);
  
    let th1 = document.createElement("TH");
    th1.width = 100;
    th1.appendChild(document.createTextNode("Email"));
    tr.appendChild(th1);
  
    let th2 = document.createElement("TH");
    th2.width = 100;
    th2.appendChild(document.createTextNode("Name"));
    tr.appendChild(th2);
  
    let th3 = document.createElement("TH");
    th3.width = 200;
    th3.appendChild(document.createTextNode("Money Donated"));
    tr.appendChild(th3);
  
      let th4 = document.createElement("TH");
      th4.width = 200;
      th4.appendChild(document.createTextNode("Date"));
      tr.appendChild(th4);
  
  ;
  
    donations.forEach((donation) => {
       
        let tr = document.createElement("TR");
        tableBody.appendChild(tr);
  
        let td1 = document.createElement("TD");
        td1.width = 100;
        td1.appendChild(document.createTextNode(`${donation.email}`));
        tr.appendChild(td1);
  
        let td2 = document.createElement("TD");
        td2.width = 100;
        td2.appendChild(document.createTextNode(`${donation.donorName}`));
        tr.appendChild(td2);
  
        let td3 = document.createElement("TD");
        td3.width = 200;
        td3.appendChild(document.createTextNode(`$${donation.moneyDonated}`));
  
        tr.appendChild(td3);
  
        let td4 = document.createElement("TD");
        td4.width = 200;
        td4.appendChild(document.createTextNode(`${donation.date}`));
        tr.appendChild(td4);
      
      }

    );
    console.log(table);
    document.getElementById("appin").appendChild(table);
    console.log(donations)
  }

  



  async function createDonationChart() {
    const donations = await getDonationData() || [];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const data = new Array(12).fill(0);
    
    // Loop through donations and add the donation amount to the corresponding month
    donations.forEach(donation => {
        const date = new Date(donation.date);
        const month = date.getMonth();
        data[month] += parseInt(donation.moneyDonated);
    });

    // Create the chart
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: months,
            datasets: [{
                label: 'Donations',
                data: data,
                borderColor: 'rgb(10, 120, 3000)',
                tension: 0.1
            }]
        }
    });
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
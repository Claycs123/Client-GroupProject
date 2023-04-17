// Appointment Table Javascript
var appointmentUrl = "https://localhost:7060/api/Appointments"
let theApp = document.getElementById("theApp")

function handleAppointLoad()
{
    getAppointmentData()
    createAppointmentTable()

}


async function getAppointmentData()
{
    let response = await fetch(appointmentUrl)
    let json = await response.json()
    return json
}

function addRow(appointment) {
    
    let tableBody = document.getElementById("appointmentTableBody");
    let tr = document.createElement("TR");
        tableBody.appendChild(tr);
  
        let td1 = document.createElement("TD");
        td1.width = 200;
        td1.appendChild(document.createTextNode(`${appointment.apptID}`));
        tr.appendChild(td1);
  
        let td2 = document.createElement("TD");
        td2.width = 100;
        td2.appendChild(document.createTextNode(`${appointment.patientID}`));
        tr.appendChild(td2);
  
        let td3 = document.createElement("TD");
        td3.width = 50;
        td3.appendChild(document.createTextNode(`${appointment.theraName}`));
  
        tr.appendChild(td3);
  
        let td4 = document.createElement("TD");
        td4.width = 100;
        td4.appendChild(document.createTextNode(`${appointment.servName}`));
        tr.appendChild(td4);
  
        let td5 = document.createElement("TD");
        td5.width = 200;
        td5.appendChild(document.createTextNode(`${appointment.dates}`));
        tr.appendChild(td5);

        let td6 = document.createElement("TD");
        td6.width = 200;
        td6.appendChild(document.createTextNode(`${appointment.timeSlot}`));
        tr.appendChild(td6);

    // let editButton = document.createElement("button")
    //     tr.appendChild(editButton)
    //     editButton.innerHTML = "Edit Song"
    //     editButton.addEventListener('click', function(){
    //        // let currentID = song.songID
    //         let curDate = song.dateAdded
    //         let favor = song.favorited
    //         let dele = song.deleted
    //         let updateTitle = prompt("Title?")
    //         let updateArtist = prompt("Artist?")
            

    //         handleEdit(curDate, favor, dele, updateArtist, updateTitle, song.songID)
            
    //     })
    
  }

  async function createAppointmentTable() {
    let appointments = await getAppointmentData() || [];
    let table = document.createElement("TABLE");
    table.border = "1";
    console.log("hello")
    table.id = "appointmentTable";
    let tableBody = document.createElement("TBODY");
    tableBody.id = "appointmentTableBody";
    table.appendChild(tableBody);
  
    let tr = document.createElement("TR");
    tableBody.appendChild(tr);
  
    let th1 = document.createElement("TH");
    th1.width = 100;
    th1.appendChild(document.createTextNode("ApptID"));
    tr.appendChild(th1);
  
    let th2 = document.createElement("TH");
    th2.width = 100;
    th2.appendChild(document.createTextNode("PatientID"));
    tr.appendChild(th2);
  
    let th3 = document.createElement("TH");
    th3.width = 200;
    th3.appendChild(document.createTextNode("Therapist Name"));
    tr.appendChild(th3);
  
      let th4 = document.createElement("TH");
      th4.width = 200;
      th4.appendChild(document.createTextNode("Service Name"));
      tr.appendChild(th4);
  
    let th5 = document.createElement("TH");
    th5.width = 200;
    th5.appendChild(document.createTextNode("Date"));
    tr.appendChild(th5);

    let th6 = document.createElement("TH");
    th6.width = 200;
    th6.appendChild(document.createTextNode("Time Slot"));
    tr.appendChild(th6);
  
    appointments.forEach((appointment) => {
       
        let tr = document.createElement("TR");
        tableBody.appendChild(tr);
  
        let td1 = document.createElement("TD");
        td1.width = 100;
        td1.appendChild(document.createTextNode(`${appointment.apptID}`));
        tr.appendChild(td1);
  
        let td2 = document.createElement("TD");
        td2.width = 100;
        td2.appendChild(document.createTextNode(`${appointment.patientID}`));
        tr.appendChild(td2);
  
        let td3 = document.createElement("TD");
        td3.width = 200;
        td3.appendChild(document.createTextNode(`${appointment.theraName}`));
  
        tr.appendChild(td3);
  
        let td4 = document.createElement("TD");
        td4.width = 200;
        td4.appendChild(document.createTextNode(`${appointment.servName}`));
        tr.appendChild(td4);
  
        let td5 = document.createElement("TD");
        td5.width = 200;
        td5.appendChild(document.createTextNode(`${appointment.dates}`));
        tr.appendChild(td5);

        let td6 = document.createElement("TD");
        td6.width = 200;
        td6.appendChild(document.createTextNode(`${appointment.timeSlot}`));
        tr.appendChild(td6);

        // let editButton = document.createElement("button")
        // tr.appendChild(editButton)
        // editButton.innerHTML = "Edit Patient"
        // console.log(patient)
        // editButton.addEventListener('click', function(){
        //    //let currentID = song.songID
        //     let curDate = song.dateAdded
        //     let favor = song.favorited
        //     let dele = song.deleted
        //     let updateTitle = prompt("Title?")
        //     let updateArtist = prompt("Artist?")
            

        //     handleEdit(curDate, favor, dele, updateArtist, updateTitle, song.songID)
            
        // })
    
        
      }

    );
    console.log(table);
    document.getElementById("theApp").appendChild(table);
    console.log(appointments)
  }

  function handleAppointPost()
  {
    let newDay = document.getElementById("day").value
    let newTimeSlot = document.getElementById("time").value
    let newService = document.getElementById("service").value
    let newTherapist = document.getElementById("therapist").value

    const newAppointment = {
        dates: newDay,
        timeSlot: newTimeSlot,
        servName: newService,
        theraName: newTherapist

    }
    try{
        var response = fetch(appointmentUrl, {
            method: "POST",
    body: JSON.stringify(newAppointment),
    headers: {
    "Content-type": "application/json; charset=UTF-8"
        },
        })
    }catch(Exception){
        console.log("error")
    }
    setTimeout(()=> addRow(response.json),2000) 
    //location.reload()
  }
// Patient Tracking JavaScript
const patientUrl = "https://localhost:7060/api/Patients/5"
let apps = document.getElementById("apps")
function handlePTLoad()
{
    getPatientData()
    createPatientTable()

}

async function getPatientData()
{
    let response = await fetch(patientUrl)
    let json = await response.json()
    return json
}


function addRow(patient) {
    
    let tableBody = document.getElementById("patientTableBody");
    let tr = document.createElement("TR");
        tableBody.appendChild(tr);
  
        let td1 = document.createElement("TD");
        td1.width = 200;
        td1.appendChild(document.createTextNode(`${patient.patientID}`));
        tr.appendChild(td1);
  
        let td2 = document.createElement("TD");
        td2.width = 100;
        td2.appendChild(document.createTextNode(`${patient.email}`));
        tr.appendChild(td2);
  
        let td3 = document.createElement("TD");
        td3.width = 50;
        td3.appendChild(document.createTextNode(`${patient.name}`));
  
        tr.appendChild(td3);
  
          let td4 = document.createElement("TD");
          td4.width = 100;
          td4.appendChild(document.createTextNode(`${patient.phoneNumber}`));
          tr.appendChild(td4);
  
        let td5 = document.createElement("TD");
        td5.width = 200;
        td5.appendChild(document.createTextNode(`${patient.medicalInfo}`));
        tr.appendChild(td5);

        let td6 = document.createElement("TD");
        td6.width = 200;
        td6.appendChild(document.createTextNode(`${patient.address}`));
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


  async function createPatientTable() {
    let patients = await getPatientData() || [];
    let table = document.createElement("TABLE");
    table.border = "1";
    table.id = "patientTable";
    let tableBody = document.createElement("TBODY");
    tableBody.id = "patientTableBody";
    table.appendChild(tableBody);
  
    let tr = document.createElement("TR");
    tableBody.appendChild(tr);
  
    let th1 = document.createElement("TH");
    th1.width = 200;
    th1.appendChild(document.createTextNode("PatientID"));
    tr.appendChild(th1);
  
    let th2 = document.createElement("TH");
    th2.width = 100;
    th2.appendChild(document.createTextNode("Email"));
    tr.appendChild(th2);
  
    let th3 = document.createElement("TH");
    th3.width = 50;
    th3.appendChild(document.createTextNode("Name"));
    tr.appendChild(th3);
  
      let th4 = document.createElement("TH");
      th4.width = 200;
      th4.appendChild(document.createTextNode("PhoneNumber"));
      tr.appendChild(th4);
  
    let th5 = document.createElement("TH");
    th5.width = 200;
    th5.appendChild(document.createTextNode("MedicalInfo"));
    tr.appendChild(th5);

    let th6 = document.createElement("TH");
    th6.width = 200;
    th6.appendChild(document.createTextNode("Address"));
    tr.appendChild(th6);
  
    patients.forEach((patient) => {
      if (!song.deleted) {
        let tr = document.createElement("TR");
        tableBody.appendChild(tr);
  
        let td1 = document.createElement("TD");
        td1.width = 200;
        td1.appendChild(document.createTextNode(`${patient.patientID}`));
        tr.appendChild(td1);
  
        let td2 = document.createElement("TD");
        td2.width = 100;
        td2.appendChild(document.createTextNode(`${patient.email}`));
        tr.appendChild(td2);
  
        let td3 = document.createElement("TD");
        td3.width = 50;
        td3.appendChild(document.createTextNode(`${patient.name}`));
  
        tr.appendChild(td3);
  
          let td4 = document.createElement("TD");
          td4.width = 100;
          td4.appendChild(document.createTextNode(`${patient.phoneNumber}`));
          tr.appendChild(td4);
  
        let td5 = document.createElement("TD");
        td5.width = 200;
        td5.appendChild(document.createTextNode(`${patient.medicalInfo}`));
        tr.appendChild(td5);

        let td6 = document.createElement("TD");
        td6.width = 200;
        td6.appendChild(document.createTextNode(`${patient.address}`));
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

    });
  
    apps.appendChild(table);
  }
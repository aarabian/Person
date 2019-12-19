


function showAddSection() {
    /* let addPerson = document.getElementById('addPerson');
    let aaa = document.getElementsByClassName('add-person-section');
    if (addPerson.className == "add-person-section displayNone") {
        // addPerson.style.display="block";
        addPerson.classList.remove("displayNone");
        addPerson.classList.add("displayBlock");
    } else {
        addPerson.classList.remove("displayBlock");
        addPerson.classList.add("displayNone");
    } */

    var modal = document.getElementById("showAddModal");

    // Get the button that opens the modal
    var btn = document.getElementById("showAdd");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 

    modal.style.display = "block";


    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}



/* -------------- Receive data Json ------------------*/


var xmlhttp = new XMLHttpRequest();
var txt = "";
var i = 0;

function showData() {
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myObj = JSON.parse(this.responseText);
            // console.log(myObj);
            txt += "<table border='1'><tr><th>Name</th><th>Family</th><th>Edit/Delete</th></tr>"
            for (i; i < myObj.data.length; i++) {
                txt += "<tr><td>" + myObj.data[i].first_name + "</td>"
                    + "<td>" + myObj.data[i].last_name + "</td>" + "<td>"
                    + "<button id=" + myObj.data[i].id + " name=" + myObj.data[i].first_name + "," + myObj.data[i].last_name
                    + " onclick='showEditBox(this.id, this.name) ' class='editbtn btn btn-warning'>Edit</button>"
                    + "<button id=" + myObj.data[i].id
                    + " onclick='deleteData(this.id)' class='deletebtn btn btn-danger'>delete</button>"
                    + "</tr>";
                console.log(myObj.data[i].last_name);
            }

            txt += "</table>"
            document.getElementById("loadData").innerHTML = txt;
        }
    };
    xmlhttp.open("GET", "https://reqres.in/api/users?page=2", true);
    xmlhttp.send();


    // Get the modal



}


/* -------------- Send data Json ------------------*/

function createData() {
    var xhr = new XMLHttpRequest();
    var url = "https://reqres.in/api/users";
    var name = document.getElementById('Name').value;
    var family = document.getElementById('Family').value;

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);
            console.log(name + ", " + json.id);
        }
    };
    var data = JSON.stringify({ "first_name": name, "last_name": family });
    xhr.send(data);
}


/* -------------- Delete data Json ------------------*/


function deleteData(dataid) {
    /*     var i = 0;
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                myObj = JSON.parse(this.responseText);
    
                for (i; i < myObj.data.length; i++) {
                    if (myObj.data[i].id == dataid) {
                        delete myObj.data[i];
                    }
                    console.log(myObj.data[i].id);
                }
            }
        };
        xmlhttp.open("GET", "https://reqres.in/api/users/2", true);
        xmlhttp.send(); */

    var xhr = new XMLHttpRequest();
    var url = "https://reqres.in/api/users/2";

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);
        }
    };
    var data = JSON.stringify({ "id": dataid });
    xhr.send(data);

}


/* -------------- Edit data Json ------------------*/

function showEditBox(dataID, name) {


    inputText = name.split(',')
    var fName = inputText[0];
    var lName = inputText[1];
    var i = 0;

    document.getElementById('userId').value = dataID;
    document.getElementById('nameEdit').value = fName;
    document.getElementById('familyEdit').value = lName;

    debugger;


    // xmlhttp.onreadystatechange = function () {
    //     if (this.readyState == 4 && this.status == 200) {
    //         myObj = JSON.parse(this.responseText);
    //         // console.log(myObj);

    //         for (i; i < myObj.data.length; i++) {
    //             if (myObj.data[i].id == dataid) {
    //                 fName = myObj.data[i].first_name;
    //                 lName = myObj.data[i].last_name;
    //             }
    //         }
    //         document.getElementById('nameEdit').value = fName;
    //         document.getElementById('familyEdit').value = lName;
    //     }
    // };
    // xmlhttp.open("GET", "https://reqres.in/api/users?page=2", true);
    // xmlhttp.send();


    var modal = document.getElementById("showEditModal");

    // Get the button that opens the modal
    var btn = document.getElementById("editbtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 

    modal.style.display = "block";


    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }


    // modal.onload = function (idd) {
    //     var idd = userId;
    //     console.log(idd);
    //     debugger;
    //     return userId;

    // }


    // modal.addEventListener('show.bs.modal', function(id) {
    //     var id = userId;
    //     console.log(id);
    //     debugger;
    //   });


}

function editData(userId) {

    var xhr = new XMLHttpRequest();
    var url = "https://reqres.in/api/users/2";
    var userId = document.getElementById('userId').value;
    var name = document.getElementById('nameEdit').value;
    var family = document.getElementById('familyEdit').value;

    debugger;
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);
        }
    };
    var data = JSON.stringify({ "id": userId, "first_name": name, "last_name": family });
    xhr.send(data);
    debugger;

}
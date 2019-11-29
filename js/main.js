function showAddSection(){
    let adp = document.getElementById('adp');
    let aaa=document.getElementsByClassName('add-person-section');
    if(adp.className=="add-person-section displayNone"){
        // adp.style.display="block";
        adp.classList.remove("displayNone");
        adp.classList.add("displayBlock");
    } else{
        adp.classList.remove("displayBlock");
        adp.classList.add("displayNone");
    }
}

function showEditSection(){
    let adp = document.getElementById('adp');
    let aaa=document.getElementsByClassName('edit-person-section');
    if(adp.className=="edit-person-section displayNone"){
        // adp.style.display="block";
        adp.classList.remove("displayNone");
        adp.classList.add("displayBlock");
    } else{
        adp.classList.remove("displayBlock");
        adp.classList.add("displayNone");
    }
}
var xmlhttp = new XMLHttpRequest();
var txt="";
var i=0;

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myObj = JSON.parse(this.responseText);
        console.log(myObj);
        txt += "<table border='1'>"
        for (x in myObj) {
          txt += "<tr><td>" + myObj.data[i].first_name + "</td>" + "<td>" + myObj.data[i].last_name + "</td>"+"</tr>";
          i++;
          console.log(i);
        }
        txt += "</table>"
        document.getElementById("demo").innerHTML = txt;
      }
};
xmlhttp.open("GET", "https://reqres.in/api/users?page=2", true);
xmlhttp.send();



var xhr = new XMLHttpRequest();
var url = "url";
xhr.open("POST", url, true);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var json = JSON.parse(xhr.responseText);
        console.log(json.email + ", " + json.password);
    }
};
var data = JSON.stringify({"email": "hey@mail.com", "password": "101010"});
xhr.send(data);
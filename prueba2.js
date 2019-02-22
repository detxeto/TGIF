//console.log(data);


// https://api.propublica.org/congress/v1/113/senate/members.json
//https://api.propublica.org/congress/v1/113/house/members.json
// API key your key is: VH7he8J2t1qRgJ5jpQsbsipfS71InqlADRpBJ05z

//indicamos que si el path contiene la palabra clave escogera uno u otro url

if (window.location.pathname.includes("senate")) {

    url = 'https://api.propublica.org/congress/v1/113/senate/members.json';
} else if (window.location.pathname.includes("house")) {
    url = 'https://api.propublica.org/congress/v1/113/house/members.json';
}
//variables generals:
//var newInfo;
//var allMembers;


fetch(url, {
        headers: {
            "X-API-KEY": "VH7he8J2t1qRgJ5jpQsbsipfS71InqlADRpBJ05z"
        }
    })

    //       mode:'non-cors', 
    .then(function (response) {
        if (response.ok)
            return response.json();

    })
    .then(function (myTada) {
//        console.log(myTada)
        var data = myTada


        membersWeNeed = data.results[0].members;
        //        console.log(allMembers)
        newInfo = data.results[0].members;
        //crida de functions:
        buildTable(membersWeNeed)
        noElementsShown(membersWeNeed)
        myPartyFilter(membersWeNeed)
        orderedMenu(membersWeNeed)
        //        myStateFilter()
        myFunction()
        showPage()
    })
    .catch(function (error) {
        alert("fatality")
    });



//declaracio de funcions :

//seleccionem l'emplaçament de la taula mitjaçant un id
var createATable = document.getElementById("myBeautyTable");

//variables generals de les funcions:
//var membersWeNeed = data.results[0].members;
//crida de funcions:


//anomenem els listeners

document.getElementById("myCboxD").addEventListener("click", function () {
    myPartyFilter(membersWeNeed)
});
document.getElementById("myCboxR").addEventListener("click", function () {
    myPartyFilter(membersWeNeed)
});
document.getElementById("myCboxI").addEventListener("click", function () {
    myPartyFilter(membersWeNeed)
});


document.getElementById("stateFilterMenu").addEventListener("change", function () {


    myPartyFilter(membersWeNeed)
});




//funcio per crear una taula

function buildTable(membersWeNeed) {

    document.getElementById("myBeautyTable").innerHTML = " ";

  if(membersWeNeed.length === 0 ){
      var row = document.createElement("tr");
      
      row.insertCell().innerHTML = "no matches";
     myBeautyTable.append(row);
  }
    
    for (var i = 0; i < membersWeNeed.length; i++) {
        var fName = membersWeNeed[i].first_name;
        var mName = membersWeNeed[i].middle_name || " ";
        var lName = membersWeNeed[i].last_name;
        var fullName = lName + ", " + fName + " " + mName;



        var webPage = fullName.link(membersWeNeed[i].url);

        var row = document.createElement("tr");

        row.insertCell().innerHTML = webPage;
        row.insertCell().innerHTML = membersWeNeed[i].party;
        row.insertCell().innerHTML = membersWeNeed[i].state;
        row.insertCell().innerHTML = membersWeNeed[i].seniority;
        row.insertCell().innerHTML = membersWeNeed[i].votes_with_party_pct + "%";

        myBeautyTable.append(row);
    }
}

//buildTable(membersWeNeed)
//creem funcio per els filtres de les checkboxes party

function myPartyFilter() {
    var selectedValues = [];
    var valuesChecked = [];
    var selectorCb = document.querySelectorAll("input:checked");

    for (var i = 0; i < selectorCb.length; i++) {
        valuesChecked.push(selectorCb[i].value)
    }
    //    var newInfo = data.results[0].members
    for (var i = 0; i < newInfo.length; i++) {

        if (valuesChecked.includes(newInfo[i].party) || valuesChecked.length == 0) {
            selectedValues.push(newInfo[i])
        }
    }
    myStateFilter(selectedValues)
}









//creem la taula que mostra el les opcion de estats a selccionar,ordenada per nom

//function orderedDropdownState(membersWeNeed) {
//    var memberWeNeed = data.results[0].members

function orderedMenu() {


    var stateValues = [];

    for (var i = 0; i < membersWeNeed.length; i++) {
        if (!stateValues.includes(membersWeNeed[i].state)) {

            stateValues.push(membersWeNeed[i].state);
        }
    }

    //}
    //orderedDropdownState()
    //var orderState = stateValues.sort();
    //opcion de filtre per estat

    //function buildStatesTable(membersWeNeed){

    var orderState = stateValues.sort();

    var nState = document.getElementById("stateFilterMenu");

    for (var i = 0; i < orderState.length; i++) {

        var tableState = document.createElement("option");

        var stateTable = orderState[i];

        tableState.append(stateTable);

        tableState.setAttribute("value", stateTable);

        nState.append(tableState);

    }
}
//buildStatesTable(tableState)
//}
//





//crear funcio de filter per states
function myStateFilter(membersWeNeed) {

    var stateMembers = []; //empty array that stores the values from the loop

    var selectedState = document.getElementById("stateFilterMenu").value;
    //agafem valors clicats en la pagina

    for (var i = 0; i < membersWeNeed.length; i++) {

        if (selectedState == membersWeNeed[i].state || selectedState == "All")

            stateMembers.push(membersWeNeed[i])
        //condicio si var es igual al valor del path, introduir dades al array
    }

    buildTable(stateMembers)

}

//var myVar;

function myFunction() {
    var myVar;
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    //  document.getElementById("myDiv").style.display = "block";
}



//funcio per missatge en cas de no haver elements a la taula


function noElementsShown() {


}
//la crida

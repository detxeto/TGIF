//seante and house//
// https://api.propublica.org/congress/v1/113/senate/members.json
//https://api.propublica.org/congress/v1/113/house/members.json
// API key your key is: VH7he8J2t1qRgJ5jpQsbsipfS71InqlADRpBJ05z





//
//
////var data;
//
//var url = 'https://api.propublica.org/congress/v1/113/senate/members.json'
//fetch(url, {
//
//        method: 'GET',
//        headers: {
//            "X-API-KEY": "VH7he8J2t1qRgJ5jpQsbsipfS71InqlADRpBJ05z"
//        }
//
//    })
//    .then(function (response) {
//        return response.json();
//    })
//    .then(function (myTada) {
//
//      var members = mytada.results[0].members  
//    
//    console.log(myTada);
//    
//    buildTable(members)
// executeListeners(members)
// stateTable()
//     myPartyFilter()
//
//     myStateFilter()
//    
//    
//    
//    
//    })
//    .catch(function (err) {
//        console.error(err);
//    });




console.log(data);

var myFuckingTable = document.getElementById("myBeautyTable");

var membersWeNeed = data.results[0].members;

//for (var i = 0; i < membersWeNeed.length; i++) {

//   var fName = membersWeNeed[i].first_name;
//  var mName = membersWeNeed[i].middle_name;
//  var lName = membersWeNeed[i].last_name;
//   var fullName = lName + ", " + fName + " " + mName;

//   if (mName == null) {
//       fullName = lName + " " + fName
//   };

// var webPage = fullName.link(membersWeNeed[i].url);

//   var row = document.createElement("tr");

//    row.insertCell().innerHTML = webPage;
//   row.insertCell().innerHTML = membersWeNeed[i].party;
//   row.insertCell().innerHTML = membersWeNeed[i].state;
//   row.insertCell().innerHTML = membersWeNeed[i].seniority;
//   row.insertCell().innerHTML = membersWeNeed[i].votes_with_party_pct+"%";


//  myFuckingTable.append(row);

//}


//function to ake a table////docu...es para tabla vacia

function buildTable(membersWeNeed) {

    document.getElementById("myBeautyTable").innerHTML = " ";

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
buildTable(membersWeNeed)

//filtered table "r","d","I"or nothing.
//var democratParty=membersWeNeed[i].party;
//if (party.value=="D"
//)
//indicar que esta clicado y llamar funcion que va a filtrar
document.getElementById("myCboxD").addEventListener("click", function () {
    myPartyFilter(membersWeNeed)
});
document.getElementById("myCboxR").addEventListener("click", function () {
    myPartyFilter(membersWeNeed)
});
document.getElementById("myCboxI").addEventListener("click", function () {
    myPartyFilter(membersWeNeed)
});


//indicar que ha sido seleccionado:
document.getElementById("stateFilterMenu").addEventListener("change", function () {
    myPartyFilter()
}); //llamamos a la funcion filter principal

//prueba//
function myPartyFilter() {
    var selectedValues = [];
    var valuesChecked = [];
    var selectorCb = document.querySelectorAll("input:checked");


    for (var i = 0; i < selectorCb.length; i++) {
        valuesChecked.push(selectorCb[i].value)
    }

    //createMyTable(valuesChecked); _//esto no va pk el parametro que pasamos no contiene la información de los miembros
    console.log(valuesChecked);
    var newInfo = data.results[0].members

    for (var i = 0; i < newInfo.length; i++) {

        if (valuesChecked.includes(newInfo[i].party) || valuesChecked.length == 0) {
            selectedValues.push(newInfo[i])
        }

        /*if (document.getElementById("myCheckboxD").checked && dataThatIWant[i].party == "D") {
            selectedValues.push(dataThatIWant[i])
            console.log(dataThatIWant[i]);
        }

        if (document.getElementById("myCheckboxR").checked && dataThatIWant[i].party == "R") {
            selectedValues.push(dataThatIWant[i])
            console.log(dataThatIWant[i]);
        }

        if (document.getElementById("myCheckboxI").checked && dataThatIWant[i].party == "I") {
            selectedValues.push(dataThatIWant[i])
            console.log(dataThatIWant[i]);
        }

        if (document.getElementById("myCheckboxD").checked == false && document.getElementById("myCheckboxR").checked == false &&
            document.getElementById("myCheckboxI").checked == false) {
            selectedValues.push(dataThatIWant[i])
            console.log(dataThatIWant[i]);
        }*/
    }

    myStateFilter(selectedValues)
}


//fin prueba



/*//creamos un array vacio para guardar los values
function myPartyFilter(membersWeNeed) {
    var selectedMembers = [];
    for (var i = 0; i < membersWeNeed.length; i++) {
        if (document.getElementById("myCboxD").checked && membersWeNeed[i].party == "D") {
            selectedMembers.push(membersWeNeed[i])
            console.log(membersWeNeed[i]);
        }
        if (document.getElementById("myCboxR").checked && membersWeNeed[i].party == "R") {
            selectedMembers.push(membersWeNeed[i])
            console.log(membersWeNeed[i]);

        }
        if (document.getElementById("myCboxI").checked && membersWeNeed[i].party == "I") {
            selectedMembers.push(membersWeNeed[i])
            console.log(membersWeNeed[i]);
        }
        if (document.getElementById("myCboxD").checked == false && document.getElementById("myCboxR").checked == false && document.getElementById("myCboxI").checked == false) {
            selectedMembers = membersWeNeed;
        }
    }
    buildTable(selectedMembers)
}*/
//rawl's form: create a values Valueschecked like empy array to stores the values from the party "object";then var selectorCb to make sure elements had been checked out, then loop it, and add if statement || to know wich value we have to print.

/*function myPartyFilter() {
   var selectedValues = [];
    var valuesChecked = [];
   var selectorCb = document.querySelectorAll("input:checked");

   for(var i = 0; i < selectorCb.length; i++){
       valuesChecked.push(selectorCb[i].value)
   }

   console.log(valuesChecked)
   dataThatIWant = data.results[0].members

   for (var i = 0; i < dataThatIWant.length; i++) {



if(valuesChecked.includes(dataThatIWant[i].party) || valuesChecked.length == 0){
        selectedValues.push(dataThatIWant[i])*/


//crear var per ordenar y mostrar unics.icludes
// Anem a crear select dropdown per estats. Abans ordenem i treiem estat repetits del Array members creant nou array


var stateValues = [];

for (var i = 0; i < membersWeNeed.length; i++) {

    if (!stateValues.includes(membersWeNeed[i].state)) {

        stateValues.push(membersWeNeed[i].state);
    }
}


var orderState = stateValues.sort();

//Treiem els elements repetits del array




//Creem automaticament les opcions del filtre per estat

var nState = document.getElementById("stateFilterMenu");

for (var i = 0; i < orderState.length; i++) {

    var tableState = document.createElement("option");

    var stateTable = orderState[i];

    tableState.append(stateTable);

    tableState.setAttribute("value", stateTable);

    nState.append(tableState);

}
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

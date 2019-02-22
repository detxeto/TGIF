if (window.location.pathname.includes("senate")) {

    url = 'https://api.propublica.org/congress/v1/113/senate/members.json';
} else if (window.location.pathname.includes("house")) {
    url = 'https://api.propublica.org/congress/v1/113/house/members.json';
}
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
        console.log(myTada)
        var data = myTada

        membersWeNeed = data.results[0].members;
        allMembers = data.results[0].members;
        //        console.log(allMembers)
        newInfo = data.results[0].members;
        //crida de functions:
        
    runWhatINeed(allMembers)
//    myFunction()
//        showPage()
//    buildTable(allMembers)
//        myPartyFilter(allMembers)
//        orderedMenu(allMembers)
//runAddListeners()
    
    //        myFunction()
//        showPage()
//
////        //
//        kindOfParty(allMembers)
//        totalPartyMembers(allMembers)
//        averageVotes(allMembers)
//        showTotalAverage(allMembers)
//        buildTables(allMembers)
//        showTotalAverage(allMembers)
//        runFunctions(allMembers)
        
               
    })
    .catch(function (error) {
        alert("fatality")
    });
//statistic-prueba

function runWhatINeed(){
    
    if(window.location.pathname.includes("senate")){
         runAddListeners()
        
    buildTable()
    myPartyFilter()
    orderedMenu()
         myFunction()
        showPage()
   
    }
    else if(window.location.pathname.includes("house")){
         myFunction()
        showPage()
          kindOfParty()
        totalPartyMembers()
        averageVotes()
        showTotalAverage()
        buildTables()
        showTotalAverage()
        runFunctions()
    }
    
    
    
    
}



function runAddListeners(){
var createATable = document.getElementById("myBeautyTable");
document.getElementById("myCboxD").addEventListener("click", function () {
    myPartyFilter(allMembers)
});
document.getElementById("myCboxR").addEventListener("click", function () {
    myPartyFilter(allMembers)
});
document.getElementById("myCboxI").addEventListener("click", function () {
    myPartyFilter(allMembers)
});


document.getElementById("stateFilterMenu").addEventListener("change", function () {


    myPartyFilter(allMembers)
});


}


function runFunctions() {
    var statistics = {


        "number of Democrats": kindOfParty("D"),
        "number of Republicans": kindOfParty("R"),
        "number of Independents": kindOfParty("I"),
        "number Total": totalPartyMembers(),
        "%voted with party for Democrats": averageVotes("D"),
        "%voted with party for Republicans": averageVotes("R"),
        "%voted with party for Independents": averageVotes("I"),
        "% total votes": showTotalAverage(),
        //    "least engaged names": "0",
        //    "least engaged votes": "0",
        //    "least engaged % missed votes": "0",
        //    "most engaged names": "0",
        //    "most engaged votes": "0",
        //    "most engaged % missed votes": "0",
        //    "least loyal names": "0",
        //    "least loyal votes": "0",
        //    "least loyal % missed votes": "0",
        //    "most loyal names": "0",
        //    "most loyal votes": "0",
        //    "most loyal % missed votes": "0",
        //


    }

}

function kindOfParty(party) {
    //    var allMembers = data.results[0].members;
    var allArray = [];

    for (var i = 0; i < allMembers.length; i++) {

        if (allMembers[i].party == party) {

            allArray.push(allMembers[i]);
        }

    }

    var partyNumber = allArray.length;

    //tota la amplitud de l'array

    return partyNumber;
}

function totalPartyMembers(party) {
    //    var allMembers = data.results[0].members;
    var allArrayMembers = [];
    for (var i = 0; i < allMembers.length; i++) {


        allArrayMembers.push(allMembers[i])

    }
    return allMembers.length;
}

function averageVotes(party) {
    var totalMembers = kindOfParty(party)
    //    var allMembers = data.results[0].members;
    var allVotes = [];
    var votesParty = [];
    var suma = 0;

    for (var i = 0; i < allMembers.length; i++) {
        if (allMembers[i].party == party) {

            allVotes.push(allMembers[i])
        }

    }



    for (var i = 0; i < allVotes.length; i++) {
        votesParty.push(allVotes[i].votes_with_party_pct)


        suma = suma + votesParty[i];

    }
    var averagePct = suma / totalMembers;
    var aRound = averagePct.toFixed(); //arrodonir numero

    return aRound;

}

function showTotalAverage() {
    //    var allMembers = data.results[0].members;
    var allPctMembers = [];
    var suma = 0;
    for (var i = 0; i < allMembers.length; i++) {

        allPctMembers.push(allMembers[i].votes_with_party_pct)

        suma = suma + allPctMembers[i];
    }
    var totalAveragePct = suma / allPctMembers.length;
    var aRoundTotal = totalAveragePct.toFixed();
    return aRoundTotal;
}
var senateTable = document.getElementById("senateAttendanceTable")

function buildTables(allMembers) {

    //    document.getElementById("senateAttendanceTable").innerHTML = " ";


    //    var democratsZelda = kindOfParty("D");
    //    var republicansZelda = kindOfParty("R");
    //    var independentsZelda = kindOfParty("I");
    //    var totalPartyZelda = totalPartyMembers();
    //    var averageDemocrats = averageVotes("D");
    //    var averageRepublicans = averageVotes("R");
    //    var averageIndependents = averageVotes("I");
    //    var totalAverage = showTotalAverage();


    var rows = document.createElement("tr");
    var cols = document.createElement("tr");
    var rols = document.createElement("tr");
    var cows = document.createElement("tr");

    rows.insertCell().innerHTML = "Democrats"
    rows.insertCell().innerHTML = kindOfParty("D");
    rows.insertCell().innerHTML = averageVotes("D") + "%";
    cols.insertCell().innerHTML = "Republicans"
    cols.insertCell().innerHTML = kindOfParty("R");
    cols.insertCell().innerHTML = averageVotes("R") + "%";
    rols.insertCell().innerHTML = "Independents";
    rols.insertCell().innerHTML = kindOfParty("I");
    rols.insertCell().innerHTML = averageVotes("I") + "%";
    cows.insertCell().innerHTML = "Total:";
    cows.insertCell().innerHTML = totalPartyMembers();
    cows.insertCell().innerHTML = showTotalAverage() + "%";


    senateAttendanceTable.append(rows, cols, rols, cows);


}

function myFunction() {
    var myVar;
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    //  document.getElementById("myDiv").style.display = "block";
}

//from senate-data


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

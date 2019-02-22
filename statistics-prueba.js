//console.log(data);


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


        allMembers = data.results[0].members;
        //        console.log(allMembers)
        newInfo = data.results[0].members;
        //crida de functions:


        kindOfParty(allMembers)
        totalPartyMembers(allMembers)
        averageVotes(allMembers)
        showTotalAverage(allMembers)
        buildTables(allMembers)
        showTotalAverage(allMembers)
        runFunctions(allMembers)
        myFunction()
        showPage()
        //       
    })
    .catch(function (error) {
        alert("fatality")
    });

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
//call functions
//kindOfParty()


//general vars

//var allMembers = data.results[0].members;


//define functions
//funcio per saber la quantitat de members d'un mateix party
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


//funcio per fer el total de membres del senat

function totalPartyMembers(party) {
    //    var allMembers = data.results[0].members;
    var allArrayMembers = [];
    for (var i = 0; i < allMembers.length; i++) {


        allArrayMembers.push(allMembers[i])

    }
    return allMembers.length;
}
//enllaços per crear elements a HTML     


//funcio per calcular % del vots per partit

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
//funcio per total de average per tots els grups

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
//creant les taules:
//table id-senateAttendanceTable para senate-attendance

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
//buildTables(allMembers)

function myFunction() {
    var myVar;
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    //  document.getElementById("myDiv").style.display = "block";
}

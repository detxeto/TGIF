// https://api.propublica.org/congress/v1/113/senate/members.json
//https://api.propublica.org/congress/v1/113/house/members.json
// API key your key is: VH7he8J2t1qRgJ5jpQsbsipfS71InqlADRpBJ05z



if (window.location.pathname.includes("senate")) {

    url = 'https://api.propublica.org/congress/v1/113/senate/members.json';
} else if (window.location.pathname.includes("house")) {
    url = 'https://api.propublica.org/congress/v1/113/house/members.json';
}



var newInfo;
var allMembers;
//var url = 'https://api.propublica.org/congress/v1/113/senate/members.json'



fetch (url, {
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
        //console.log(myTada)



        allMembers = myTada.results[0].members;
        //console.log(allMembers)

                newInfo = myTada.results[0].members;



        buildTable(allMembers);

        filterForMenuState(allMembers);
       
                myStateFilter(allMembers);
             myPartyFilter(allMembers);
// stateTable(allMembers);

    })
    .catch(function (error) {
        alert("fatality")
    });






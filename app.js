function druidLoad() {
    $('#accordionExample').css('border', 'solid 20px #FF7D0A');
    let data;
    var ourRequest = new XMLHttpRequest();
    ourRequest.open("GET", "druid.json");
    ourRequest.onload = function() {
        data = JSON.parse(ourRequest.responseText);
        // console.log(data.length)
        populateDungeons(data);
        $('#accordionExample').show();
        $('#newsTitle').hide();
        $('#newsBox').hide();

    };

    ourRequest.send();

}

function hunterLoad() {
    $('#accordionExample').css('border', 'solid 20px #ABD473');
    let data;
    var ourRequest = new XMLHttpRequest();
    ourRequest.open("GET", "hunter.json");
    ourRequest.onload = function() {
        data = JSON.parse(ourRequest.responseText);
        // console.log(data.length)
        populateDungeons(data);
        $('#accordionExample').show();
        $('#newsTitle').hide();
        $('#newsBox').hide();

    };

    ourRequest.send();


}

function mageLoad() {
    $('#accordionExample').css('border', 'solid 20px #69CCF0');
    let data;
    var ourRequest = new XMLHttpRequest();
    ourRequest.open("GET", "mage.json");
    ourRequest.onload = function() {
        data = JSON.parse(ourRequest.responseText);
        // console.log(data.length)
        populateDungeons(data);
        $('#accordionExample').show();
        $('#newsTitle').hide();
        $('#newsBox').hide();

    };

    ourRequest.send();


}

function paladinLoad() {
    $('#accordionExample').css('border', 'solid 20px #F58CBA');
    let data;
    var ourRequest = new XMLHttpRequest();
    ourRequest.open("GET", "paladin.json");
    ourRequest.onload = function() {
        data = JSON.parse(ourRequest.responseText);
        // console.log(data.length)
        populateDungeons(data);
        $('#accordionExample').show();
        $('#newsTitle').hide();
        $('#newsBox').hide();

    };

    ourRequest.send();

}

function priestLoad() {
    $('#accordionExample').css('border', 'solid 20px lightgray');
    let data;
    var ourRequest = new XMLHttpRequest();
    ourRequest.open("GET", "priest.json");
    ourRequest.onload = function() {
        data = JSON.parse(ourRequest.responseText);
        // console.log(data.length)
        populateDungeons(data);
        $('#accordionExample').show();
        $('#newsTitle').hide();
        $('#newsBox').hide();

    };

    ourRequest.send();


}

function rogueLoad() {
    $('#accordionExample').css('border', 'solid 20px #FFF569');
    let data;
    var ourRequest = new XMLHttpRequest();
    ourRequest.open("GET", "rogue.json");
    ourRequest.onload = function() {
        data = JSON.parse(ourRequest.responseText);
        // console.log(data.length)
        populateDungeons(data);
        $('#accordionExample').show();
        $('#newsTitle').hide();
        $('#newsBox').hide();

    };

    ourRequest.send();

}



function shamanLoad() {
    $('#accordionExample').css('border', 'solid 20px #F58CBA');
    let data;
    var ourRequest = new XMLHttpRequest();
    ourRequest.open("GET", "shaman.json");
    ourRequest.onload = function() {
        data = JSON.parse(ourRequest.responseText);
        // console.log(data.length)
        populateDungeons(data);
        $('#accordionExample').show();
        $('#newsTitle').hide();
        $('#newsBox').hide();

    };

    ourRequest.send();

}



function warlockLoad() {
    $('#accordionExample').css('border', 'solid 20px #9482C9');
    let data;
    var ourRequest = new XMLHttpRequest();
    ourRequest.open("GET", "warlock.json");
    ourRequest.onload = function() {
        data = JSON.parse(ourRequest.responseText);
        // console.log(data.length)
        populateDungeons(data);
        $('#accordionExample').show();
        $('#newsTitle').hide();
        $('#newsBox').hide();

    };

    ourRequest.send();


}

function warriorLoad() {
    $('#accordionExample').css('border', 'solid 20px #C79C6E');
    let data;
    var ourRequest = new XMLHttpRequest();
    ourRequest.open("GET", "warrior.json");
    ourRequest.onload = function() {
        data = JSON.parse(ourRequest.responseText);
        // console.log(data.length)
        populateDungeons(data);
        $('#accordionExample').show();
        $('#newsTitle').hide();
        $('#newsBox').hide();

    };

    ourRequest.send();

}


$(function() {
    $('[data-toggle="tooltip"]').tooltip();
});



function populateDungeons(data) {
    //POPULATES THE LIST OF DUNGEONS
    $('#accordionExample').empty();
    for (let i = 0; i < data.length; i++) {
        // console.log(data[i])
        // console.log(data[i].dungeonName);
        let card = document.createElement('div');
        let cardHeader = document.createElement('div');
        cardHeader.classList += 'card-header';
        cardHeader.id = "heading" + i;
        let h2 = document.createElement('h1');
        h2.classList += 'mb-0';
        let button = document.createElement('button');
        button.classList += 'btn btn-link';
        button.classList += ' sourceHeader';
        button.style.width = "100%";
        button.style.height = "100%";
        button.style.textDecoration = "none";
        button.setAttribute('type', 'button');
        button.setAttribute('data-toggle', 'collapse')
        button.setAttribute('data-target', '#collapse' + i);
        button.setAttribute('aria-expanded', 'false');
        button.setAttribute('aria-controls', 'collapse' + i);
        button.innerText = data[i].dungeonName;

        h2.appendChild(button);
        cardHeader.appendChild(h2);
        card.appendChild(cardHeader);

        let secondDiv = document.createElement('div');
        secondDiv.id = 'collapse' + i;
        secondDiv.classList += 'collapse';
        secondDiv.setAttribute('aria-labelledby', 'heading' + i);
        secondDiv.setAttribute('data-parent', '#accordionExample');

        let cardBody = document.createElement('div');
        cardBody.classList += 'card-body';


        // Run a loot that gives source names
        //MAKES A NEW SOURCE TABLE ROW
        let sources = data[i].sourceList;
        for (let index = 0; index < sources.length; index++) {
            let sourceDiv = document.createElement("div");
            sourceDiv.classList += 'sourceBar';
            let sourceDivTitle = document.createElement('div');
            sourceDivTitle.innerHTML = data[i].sourceList[index].sourceName;
            sourceDivTitle.classList += 'sourceTitle';
            sourceDiv.appendChild(sourceDivTitle)

            for (let j = 0; j < data[i].sourceList[index].itemList.length; j++) {
                let newDiv = document.createElement("div");
                newDiv.style.fontWeight = '600'
                newDiv.setAttribute("data-toggle", "tooltip");
                newDiv.setAttribute("data-placement", "bottom");
                newDiv.setAttribute("data-html", "true");
                let itemID = data[i].sourceList[index].itemList[j].itemID;


                itemID = itemID.substring(itemID.indexOf("=") + 1);

                newDiv.setAttribute("title",
                    "<img src='https://items.classicmaps.xyz/" + itemID + ".png'></img></a>"
                )


                newDiv.innerText += data[i].sourceList[index].itemList[j].itemName;
                newDiv.style.cursor = 'pointer';

                if (data[i].sourceList[index].itemList[j].class === "wowgreen") {
                    newDiv.style.color = "#1E9D25";
                }
                if (data[i].sourceList[index].itemList[j].class === "wowblue") {
                    newDiv.style.color = "#2d2de1";
                }
                if (data[i].sourceList[index].itemList[j].class === "wowpurple") {
                    newDiv.style.color = "#8c02cd";
                }
                newDiv.style.textAlign = 'center';


                var isTouch = ('ontouchstart' in window);
                let newDivWrap = document.createElement("a");
                if (isTouch === false) {
                    newDivWrap.setAttribute("href", 'https://classic.wowhead.com/item=' + itemID);
                }
                newDivWrap.appendChild(newDiv);
                sourceDiv.appendChild(newDivWrap);
            }




            cardBody.appendChild(sourceDiv);
        }

        secondDiv.appendChild(cardBody);
        card.appendChild(secondDiv);

        //MASTER APPEND
        document.getElementById('accordionExample').appendChild(card);
    }
}





























$(document).ready(function() {
    $("body").tooltip({ selector: "[data-toggle=tooltip]" });
});
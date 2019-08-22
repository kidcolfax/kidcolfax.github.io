function findDungeons() {
    var dungeons = document.getElementsByClassName("wowinstance");
    for (var i = 0; i < dungeons.length; i++) {
        let str = "Instance Guide";
        str.replace("Instance Guide", "");
        console.log(dungeons[i].innerText.replace(" Instance Guide", ""));
    }
}

function findSources() {
    var rowdata = document.getElementsByClassName("wowrowtitle");
    for (var i = 0; i < rowdata.length; i++) {
        if (
            rowdata[i].innerText.charAt(0) === "\u2022" &&
            rowdata[i].innerText.endsWith(")")
        ) {
            console.log(rowdata[i]);
        }
    }
}

function findItems() {
    var rowdata = document.getElementsByClassName("wowblue");
    for (var i = 0; i < rowdata.length; i++) {
        console.log(rowdata[i].innerText);
    }
}

function getAllData() {
    var rows = document.getElementsByTagName("tr");
    for (var i = 0; i < rows.length; i++) {
        console.log(rows[i]);
    }
}

let object = {
    dungeonName: "",
    sourceList: [{
        sourceName: "",
        itemList: []
    }]
};


function gen() {
    masterArr = [];
    let sourceList2 = [];
    newSource = {
        sourceName: "",
        itemList: []
    };

    var tableRows = document.getElementsByTagName("td");
    for (var i = tableRows.length - 1; i > 0; i--) {
        //////////////////////////////////////////////////////////////////////////////
        if (tableRows[i].classList.contains("wowinstance")) {
            let object = {
                dungeonName: "",
                sourceList: [{
                    sourceName: "",
                    itemList: []
                }]
            };

            object.sourceList = sourceList2;
            object.dungeonName = tableRows[i].innerText.replace(
                " Instance Guide",
                ""
            );
            masterArr.unshift(object);
            //AFTER ARRAY PUSH - RESET ALL VALUES
            sourceList2 = [];
        }

        //////////////////////////////////////////////////////////////////////////////
        // Gets Sources and Items

        //Sources
        if (tableRows[i].classList.contains("wowrowtitle")) {
            if (tableRows[i].innerText.charAt(0) === "\u2022") {
                newSource.sourceName = tableRows[i].innerHTML.replace("\u2022 ", "");
                sourceList2.unshift(newSource);
                newSource = {
                    sourceName: "",
                    itemList: []
                };
            }

            //ITEMS
            if (tableRows[i].innerText.charAt(0) !== "\u2022") {
                var list = tableRows[i].getElementsByTagName("a");
                for (let item of list) {
                    let itemObj = {
                        itemName: item.innerText,
                        itemID: item.search,
                        class: item.className
                    };
                    newSource.itemList.unshift(itemObj);
                }
            }
        }
    }

    console.log(JSON.stringify(masterArr));
}

function master() {
    console.log("c");
    var tableRows = document.getElementsByTagName("td");
    for (var i = 0; i < tableRows.length; i++) {
        if (tableRows[i].classList.contains("wowinstance")) {
            console.error(tableRows[i].innerText.replace(" Instance Guide", ""));
        }
        if (tableRows[i].classList.contains("wowrowtitle")) {
            if (
                tableRows[i].innerText.charAt(0) === "\u2022" &&
                tableRows[i].innerText.endsWith(")")
            ) {
                console.log(tableRows[i]);
            }
        }
    }
}

















function gen() {
    masterArr = [];
    let sourceList2 = [];
    newSource = {
        sourceName: "",
        itemList: []
    };

    var tableRows = document.getElementsByTagName("td");
    for (var i = tableRows.length - 1; i > 0; i--) {
        //////////////////////////////////////////////////////////////////////////////
        if (tableRows[i].classList.contains("wowinstance")) {
            let object = {
                dungeonName: "",
                sourceList: [{
                    sourceName: "",
                    itemList: []
                }]
            };

            object.sourceList = sourceList2;
            object.dungeonName = tableRows[i].innerText.replace(
                " Instance Guide",
                ""
            );

            masterArr.unshift(object);
            //AFTER ARRAY PUSH - RESET ALL VALUES
            sourceList2 = [];
        }

        if (tableRows[i].classList.contains("wowheader")) {
            let object = {
                dungeonName: "",
                sourceList: [{
                    sourceName: "",
                    itemList: []
                }]
            };

            object.sourceList = sourceList2;
            object.dungeonName = tableRows[i].innerText;

            masterArr.unshift(object);
            //AFTER ARRAY PUSH - RESET ALL VALUES
            sourceList2 = [];
        }

        //////////////////////////////////////////////////////////////////////////////
        // Gets Sources and Items

        //Sources
        if (tableRows[i].classList.contains("wowrowtitle") || tableRows[i].classList.contains("wowrowtitle")) {
            if (tableRows[i].innerText.charAt(0) === "\u2022") {
                newSource.sourceName = tableRows[i].innerHTML.replace("\u2022 ", "");
                sourceList2.unshift(newSource);
                newSource = {
                    sourceName: "",
                    itemList: []
                };
            }

            //ITEMS
            if (tableRows[i].innerText.charAt(0) !== "\u2022") {
                var list = tableRows[i].getElementsByTagName("a");
                for (let item of list) {
                    let itemObj = {
                        itemName: item.innerText,
                        itemID: item.search.replace('?witem=', ''),
                        class: item.className
                    };
                    newSource.itemList.unshift(itemObj);
                }
            }
        }
    }
    console.log(masterArr);
};
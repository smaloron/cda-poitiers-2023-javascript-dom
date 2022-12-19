/**
 * 
 * @returns Conversion d'une liste de noeuds HTML
 * en un tableau ordinal de texte
 */
function getCountryListAsArray () {
    const countryNodeList = document.querySelectorAll("#countries li");


    // conversion en tableau méthode classique
    const countryArray = [];
    for (item of countryNodeList) {
        countryArray.push(item.innerText);
    }

    // conversion en tableau méthode courte
    const countryArray2 = Array
        .from(countryNodeList)
        .map((item) => item.innerText);

    console.log(countryArray2);

    return countryArray;
}

function emphasizeElementsStartingWith (text) {
    const itemList = document.querySelectorAll("li");
    for (item of itemList) {
        if (item.innerText.startsWith(text)) {
            item.innerHTML = "<em>" + item.innerText + "</em>";
        }
    }
    console.log(itemList)
}

function nuke () {
    document.body.innerHTML = "";
}

function duplicate (listSelector) {
    const parentElement = document.querySelector(listSelector);
    return parentElement.outerHTML;
}

function sortLanguageList () {
    const itemList = document.querySelectorAll("#languages li");
    const parent = itemList[0].parentElement;

    // conversion du nodeList en Array
    const itemArray = Array.from(itemList);
    // Tri des élements du tableau
    itemArray.sort((a, b) => a.innerText < b.innerText ? -1 : 1);

    // Réinjection dans le parent
    parent.innerHTML = itemArray.map((item) => item.outerHTML).join("");
}
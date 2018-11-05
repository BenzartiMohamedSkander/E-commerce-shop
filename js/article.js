function AjoutProduit() {
    var myinput2 = document.getElementById("myDesignation").value;
    var myinput3 = document.getElementById("myPrix").value;
    var myinput4 = document.getElementById("myCouleur").value;
    var myinput5 = document.getElementById("myTaille").value;
    var myinput6 = document.getElementById("myCategorie").value;
    var fullPath = document.getElementById('myphoto').value;
    if (fullPath) {
        var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
        var filename = fullPath.substring(startIndex);

        if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
            filename = filename.substring(1);
        }
    }
    var produit = {
        id: generateId(),
        designation: myinput2,
        couleur: myinput4,
        taille: myinput5,
        categorie: myinput6,
        prix: myinput3,
        photoprod: filename
    }
    var users = JSON.parse(localStorage.getItem("tabProd")) || [];
    users.push(produit);
    localStorage.setItem("tabProd", JSON.stringify(users));
}
function generateId() {
    var id = Date.now();
    return id;
}

function afficherTab() {
    var Prods = JSON.parse(localStorage.getItem("tabProd"));
    var tache = "";

    for (i = 0; i < Prods.length; i++) {

        tache += '<tr  class="madivisioni"  ><td>' + Prods[i].id + '</td>';
        tache += '<td  class="madivisioni" >' + Prods[i].designation + '</td>';
        tache += '<td  class="madivisioni">' + Prods[i].couleur + '</td>';
        tache += '<td  class="madivisioni">' + Prods[i].taille + '</td>';
        tache += '<td  class="class="tdmodify"">' + Prods[i].categorie + '</td>';
        tache += '<td  class="class="tdmodify"">' + Prods[i].prix + "DT" + '</td>';
        tache += '<td  class="madivisioni"><img width= 100px height=100px src="img/product/feature-product/' + Prods[i].photoprod + '" alt=""></td>';
        tache += '<td  class="tdmodify" ><table class="table"><tr><td  class="tdmodify"><button class="main_btnp" onclick="modifTab(' + Prods[i].id + ')">Modifier</button></td><td class="tdmodify"><button class="main_btnp" onclick="supprimerTab(' + Prods[i].id + ')">Supprimer</button></td></tr></table>';
    }
    //<p><a href="#frm">cliqez ici </a></p>

    document.getElementById('tab').innerHTML = tache;
}
function supprimerTab(idProd) {
    var prods = JSON.parse(localStorage.getItem("tabProd"));
    for (i = 0; i < Prods.length; i++) {
        if (idProd === prods[i].id) {
            prods.splice(i, 1)
        }
    }
    localStorage.setItem("tabProd", JSON.stringify(prods));
    window.location.reload();
}
function supprimerTab(idProd) {
    var prods = JSON.parse(localStorage.getItem("tabProd"));
    for (i = 0; i < prods.length; i++) {
        if (idProd == prods[i].id) {
            prods.splice(i, 1)
        }
    }
    localStorage.setItem("tabProd", JSON.stringify(prods));
    window.location.reload();
}
function modifTab(idProd) {

    var prods = JSON.parse(localStorage.getItem("tabProd"));
    var elementi = "";
    var elementio = "";
    for (i = 0; i < prods.length; i++) {

        if (idProd == prods[i].id) {  

            elementi += '<table class="table"><tr text-align="right"><td class="tdcol1"><label>Réference:</label></td><td class="tdcol2"><input id="myId" type="text" disabled="" value="' + prods[i].id + '"></td></tr></table>';
            elementi += '<table class="table"><tr text-align="right"><td class="tdcol1"><label>Designation:</label></td><td class="tdcol2"><input id="myDesignation" type="text"  value="' + prods[i].designation + '"></td></tr></table>';
            elementi += '<table class="table"><tr><td class="tdcol1"><label>Couleur:</label></td><td class="tdcol2"><input id="myCouleur" type="text" value="' + prods[i].couleur + '"></td></tr></table>';
            elementi += '<table class="table"><tr><td class="tdcol1"><label>Taille:</label></td><td class="tdcol2"><input id="myTaille" type="text" value="' + prods[i].taille + '"></td></tr></table>';
            elementi += '<table class="table"><tr><td class="tdcol1"><label>Categorie:</label></td><td class="tdcol2"><input id="myCategorie" type="text" value="' + prods[i].categorie + '"></td></tr></table>';
            elementi += '<table class="table"><tr><td class="tdcol1"><label>Prix:</label></td><td class="tdcol2"><input id="myPrix" type="text" value="' + prods[i].prix + '"></td></tr></table>';
            elementio += '<table class="table"><tr><td class="tdcol1"><label>Photo Produit:</label></td><td class="tdcol2"><input id="myPhoto" type="text" value="' + prods[i].photoprod + '"></td></tr></table>';
            elementi += '<table><tr><td ><img src="img/product/feature-product/'+prods[i].photoprod + '" alt=" " id="uneImage"></td></tr></td>';
elementi += '<table class="table"><tr><td class="tdmodify"><button onclick="mettreAjour(' + i + ')">Modifier</button></td></tr></table>'; 

        }
        localStorage.setItem("tabProd", JSON.stringify(prods));
    }
    document.getElementById('frm').innerHTML = elementi;
    document.getElementById('frmmo').innerHTML = elementio;
}
function mettreAjour(indiceligne) {

    var prods = JSON.parse(localStorage.getItem("tabProd"));

    var myinput1 = document.getElementById("myId").value;
    var myinput2 = document.getElementById("myDesignation").value;
    var myinput3 = document.getElementById("myCouleur").value;
    var myinput4 = document.getElementById("myTaille").value;
    var myinput5 = document.getElementById("myCategorie").value;
    var myinput6 = document.getElementById("myPrix").value;
    // var myinput7 = document.getElementById("myPhotoprod").value;
    prods[indiceligne].id = myinput1;
    prods[indiceligne].designation = myinput2;
    prods[indiceligne].couleur = myinput3;
    prods[indiceligne].taille = myinput4;
    prods[indiceligne].categorie = myinput5;
    prods[indiceligne].prix = myinput6;
    // prods[indiceligne].photoprod = myinput7;
    localStorage.setItem("tabProd", JSON.stringify(prods));
    window.location.reload();
}
function ScrollTo(name) {
    ScrollToResolver(document.getElementById(name));
  }
  
  function ScrollToResolver(elem) {
    var jump = parseInt(elem.getBoundingClientRect().top * .2);
    document.body.scrollTop += jump;
    document.documentElement.scrollTop += jump;
    if (!elem.lastjump || elem.lastjump > Math.abs(jump)) {
      elem.lastjump = Math.abs(jump);
      setTimeout(function() { ScrollToResolver(elem);}, "100");
    } else {
      elem.lastjump = null;
    }
  }
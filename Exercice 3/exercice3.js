
        var tab = ["Andy", "Mathieu", "Paul", "Dominique", "Benjamin", "Logan", "Valentin", "Mohamed"];
        var prenom = prompt("Veuillez écrire un prénom");
    
    for (let i = 0; i < tab.length; i++) {  
        tab[i] = tab[i].toUpperCase();
    };
    prenomMaj = prenom.toUpperCase();
    
    var check = tab.includes(prenomMaj);  
    
    if (check)
    {
        tab.splice(tab.indexOf(prenomMaj), 1);
        tab.push("")
    
    }
    alert(tab);
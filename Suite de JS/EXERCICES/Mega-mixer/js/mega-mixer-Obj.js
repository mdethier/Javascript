class Carte {
    constructor(prenom, nom) {
        this.prenom = prenom;
        this.nom = nom;
        this.html = document.createElement('div');

    }
    get getHtml() {
        this.html.classList.add("flipcard", "h");
        this.html.innerHTML = `
        <div class="front interrogation">
                 ?
             </div>
             <div class="back smiley">
                 <div class="prenom">${this.prenom}</div>
                 <div class="nom">${this.nom}</div>
             </div>
     `;
    
        return this.html;
    }
    set setNom(newNom) {
        this.nom = newNom;
        this.html.querySelector(".nom").textContent = this.nom;
        
    }
    set setPrenom(newPrenom) {
        this.prenom = newPrenom;
        this.html.querySelector(".prenom").textContent = this.prenom
    }
}
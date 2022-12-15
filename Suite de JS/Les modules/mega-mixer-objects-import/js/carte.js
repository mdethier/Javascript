class Carte { // déclaration d'une classe d'objet
    /* Le constructeur, c'est lui qui construit l'objet à sa déclaration avec
    new Carte(paramètres);
    */
    constructor(nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
        this.html = document.createElement("div");
    }

    /* ceci est une méthode, c'est en fait une fonction mais à l'intérieur d'un objet, cela s'appelle une méthode.
    On appelera une méthode de la manière suivante :
    objet.flipBack();
     */
    flipBack() {
        this.html.classList.add("flip");
    }
    flipFront() {
        this.html.classList.remove("flip");
    }

    /* ceci est une fonction statique, attention rien à voir avec l'objet, c'est un utilitaire
    On l'utilise directement avec le nom de class
     Carte.melangeur("param")  */
    static melangeur(liste) {
        return _.shuffle(liste);
    }

        /* ceci est un getter, son rôle est d'aller chercher des informations dans l'objet
     objet.getHtml
        */
    get getHtml() {
        this.html.setAttribute('class', 'flipcard h');
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
    // https://jsdoc.app/about-getting-started.html
    /**
     * @param {string} nom
     */
         /* ceci est un setter, son rôle est de modifier une information dans l'objet.
     objet.setNom = "nouvelle valeur"
         */
    set setNom(nom) {
        this.nom = nom;
        this.html.querySelector(".nom").textContent = nom;
    }
    /**
     * @param {string} prenom
     */
    set setPrenom(prenom) {
        this.prenom = prenom;
        this.html.querySelector(".prenom").textContent = prenom;
    }
}
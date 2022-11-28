class Legume {
    constructor(nom, prix) {
        this.nom = nom;
        this.prix = prix;
        this.promo = 0;
        this.html = document.createElement("div");
    }

    get getHtml() {
        this.html.innerHTML = `<h1>${this.nom} ${this.prix} €</h1>`;
        return this.html;
    }

    set setPromo(reduc) {
        this.promo = reduc;
        this.calcReduc();
    }

    sayHello() {
        alert("hello !!");
    }

    calcReduc() {
        if (this.promo == 0) {
            this.html.innerHTML = `<h1>${this.nom} ${this.prix} €</h1>`;
            alert("désolé, pas de réduction en ce moment");
        } else {
            let prixPromo = this.prix - (this.prix * this.promo);
            this.html.innerHTML = `<h1>PROMO ${this.nom} ${prixPromo} €</h1>`;
        }
    }
    static sayGoodbye() {
        alert("Good bye");
    }
}
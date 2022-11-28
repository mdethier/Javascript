class Ordinateur {
    constructor(marque,modele,prix) {
        this.marque = marque;
        this.modele = modele;
        this.prix = prix;

    }
    methodePrixTTC() {
        let prixTTC = this.prix + (this.prix * 0.20);
        return prixTTC;

        
        
    }
    get getPrix () {
        return this.prix;
    }
    set setPrix (nouveauPrix) {
        this.prix = nouveauPrix
    }

}
"use strict"
function InsurancePolicy(typeInsurance, numberPolicy, nameInsurer, dateSale, premium, discount) {
    if (numberPolicy == "" || nameInsurer == "" || dateSale == "") {
        throw ("Data aren't fully introduced!");
    }
    this.typeInsurance = typeInsurance;
    this.numberPolicy = numberPolicy;
    this.nameInsurer = nameInsurer;
    this.dateSale = dateSale;
    this.premium = premium;
    this.discount = discount;
}
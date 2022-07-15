import Builder from "../Builder/Builder";
import IBuilder from "../Builder/IBuilder";
import { Bread } from "../Components/Bread";
import Protein from "../Components/Protein";
import Salad from "../Components/Salad";
import { SanduicheType } from "../Components/SanduicheType";
import Sauces from "../Components/Sauces";

export default class Director{
    constructor(private builder : IBuilder){

    }
    constructorHOTDOG(){
        this.builder.reset()
        this.builder.setBread(Bread.COMUM)
        this.builder.setProtein(new Protein('CARNE'))
        this.builder.setSanduicheType(SanduicheType.HOTDOG)
        this.builder.addSalad(new Salad('Alface'))
        this.builder.addSalad(new Salad('Tomate'))
        this.builder.addSalad(new Salad('Cebola'))
        this.builder.addSauces(new Sauces('BBQ'))
    }
    constructorXSalada(){
        this.builder.reset()
        this.builder.setBread(Bread.INTEGRAL)
        this.builder.setProtein(new Protein(''))
        this.builder.setSanduicheType(SanduicheType.XSALADA)
        this.builder.addSalad(new Salad('Alface'))
        this.builder.addSalad(new Salad('Tomate'))
        this.builder.addSalad(new Salad('Cebola'))
        this.builder.addSalad(new Salad('Rucula'))
        this.builder.addSauces(new Sauces('KETCHUP'))
    }
    
}
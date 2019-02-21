import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  personnes = [
    { nom :'Einstein', prenom :'Albert', decouverte :'La Relativité',description : "Albert Einstein né le 14 mars 1879 à Ulm, dans le Wurtemberg, et mort le 18 avril 1955 à Princeton, dans le New Jersey, est un physicien théoricien. Il fut successivement allemand, apatride, suisse et de double nationalité helvético-américaine. Il épousa son ancienne camarade d'études Mileva Marić, puis sa cousine Elsa Einstein."},
    { nom :'Faraday', prenom :'Mickael', decouverte :'Champs Magnétique'},
    { nom :'Curie', prenom :'Marie', decouverte :'Radioactivité'},
    { nom :'Curie', prenom :'Pierre', decouverte :'Radioactivité'}];
  personne = {
    nom : "Einstein",
    prenom : "Albert",
    decouverte : "E=MC2",
    description : "Einstein présente un parcours scolaire relativement atypique par rapport aux éminents scientifiques qui furent plus tard ses contemporains..."
  }

  selectionner(personne_cliquee){
    this.personne = personne_cliquee;
  }
}

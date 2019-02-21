import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nouvelle-app2';
  personnes = [{ nom  :'Einstein', prenom  :'Albert', decouverte  :'La Relativité',description : "Albert Einstein né le 14 mars 1879 à Ulm, dans le Wurtemberg, et mort le 18 avril 1955 à Princeton, dans le New Jersey, est un physicien théoricien. Il fut successivement allemand, apatride, suisse et de double nationalité helvético-américaine. Il épousa son ancienne camarade d'études Mileva Marić, puis sa cousine Elsa Einstein."},
			   { nom  :'Faraday', prenom  :'Mickael', decouverte  :'Champs Magnétique',description : "Albert Einstein né le 14 mars 1879 à Ulm, dans le Wurtemberg, et mort le 18 avril 1955 à Princeton, dans le New Jersey, est un physicien théoricien. Il fut successivement allemand, apatride, suisse et de double nationalité helvético-américaine. Il épousa son ancienne camarade d'études Mileva Marić, puis sa cousine Elsa Einstein."},
			   { nom  :'Curie', prenom  :'Marie', decouverte  :'Radioactivité',description : "Albert Einstein né le 14 mars 1879 à Ulm, dans le Wurtemberg, et mort le 18 avril 1955 à Princeton, dans le New Jersey, est un physicien théoricien. Il fut successivement allemand, apatride, suisse et de double nationalité helvético-américaine. Il épousa son ancienne camarade d'études Mileva Marić, puis sa cousine Elsa Einstein."},
			   { nom  :'Curie', prenom  :'Pierre', decouverte  :'Radioactivité',description : "Albert Einstein né le 14 mars 1879 à Ulm, dans le Wurtemberg, et mort le 18 avril 1955 à Princeton, dans le New Jersey, est un physicien théoricien. Il fut successivement allemand, apatride, suisse et de double nationalité helvético-américaine. Il épousa son ancienne camarade d'études Mileva Marić, puis sa cousine Elsa Einstein."}];
  
    personne = this.personnes[0];

			   
	monClick(pers){
		this.personne = pers;
	}
	
}

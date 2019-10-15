import { Component, Type } from '@angular/core';
import { Project} from '../app/models/project';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string;
  public projects: Array <Project>;
  
  public address: string;

  

  constructor(){
    this.title = 'Mes Projets';
    this.projects = [

new Project('Condo', '4982 Lafond', '514.321.6902', '29 fev 2020', '29000'),
new Project('Duplex', '666 rue Carter', '514.321.3333', '29 fev 2020', '75000')
    ];
    
  
    
  }
}

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'doc-beam';

  constructor(private http: HttpClient){}
  
  apiValues: string[] = [];

  ngOnInit(){
    this.http.get<string[]>('/api/values').subscribe(values => {
      this.apiValues = values;
    });
  }
}

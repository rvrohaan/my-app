import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  name: any;
  email: any;
  address: any;

  constructor(private http: HttpClient){ }

  onSubmit(Form: NgForm){
    this.name = Form.value.name;
    this.email = Form.value.email;
    this.address = Form.value.address;
    let params: any ={};
    params = {
      name: this.name,
      email: this.email,
      address: this.address
    }
    this.http.post('http://localhost:8000/', params).subscribe((result: any) => {
      console.log(result);
    })
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.css']
})
export class CollegeComponent {

  @Input() public parentData:any;
  @Output() public childEvent = new EventEmitter();
  public College = [
      {collegeName:"Saranathan College of Engineering", city:"Trichy"},
      {collegeName:"Anna University", city:"Chennai"},
      {collegeName:"Sastra University", city:"Thanjavur"},
      {collegeName:"IIM Madra", city:"Chennai"},
      {collegeName:"IIM Bangalore", city:"Bangalore"},
      {collegeName:"Bharathidasan University", city:"Trichy"},
      {collegeName:"Periyar University", city:"Salem"},
      {collegeName:"Loyola College", city:"Chennai"},
      {collegeName:"Stella Maris College", city:"Chennai"},
      {collegeName:"Madurai Kamaraj University", city:"Madurai"}
  ]
  public i:any;
  public j:any = 0;
  public Colleges:any[] = [];

  fireEvent(city: any){
    for(this.i=0;this.i<10;this.i++){
      if(this.College[this.i].city == city){
        this.Colleges[this.j] = this.College[this.i].collegeName;
        this.j++;
      }
    }
    this.childEvent.emit(this.Colleges);
  }
  refresh(){
    location.reload();
  }
}

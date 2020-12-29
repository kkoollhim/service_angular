import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { user } from '../user';
import { UserServiceService } from '../user-service.service';


@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {

  @ViewChild('name') name: ElementRef;
  users:user;
  selectedUser:user;

  constructor(private userService: UserServiceService) {
    this.userService.subject.subscribe((element)=>{
      this.selectedUser = element;
    });
   }

  onSubmit(){
    let el:any;
    this.userService.getUsers().subscribe(element=>{
      el = element;

      this.selectedUser =  el.filter(data=>data.name == this.name.nativeElement.value)[0];
      console.log(this.selectedUser);

    })
  }

  ngOnInit() {  }

}

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../core/services';

@Component({
  selector: 'app-create-member',
  templateUrl: './create-member.component.html',
  styleUrls: ['./create-member.component.scss']
})
export class CreateMemberComponent implements OnInit {

  constructor(private apiservice:ApiService) { }

  ngOnInit() {
  }

  getData(){
    this.apiservice.get('/employees').subscribe((data)=>{
      console.log(data);
    });
  }

}

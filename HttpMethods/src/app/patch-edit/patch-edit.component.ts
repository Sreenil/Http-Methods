import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { DetailsService } from '../Service/details.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-patch-edit',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterOutlet],
  templateUrl: './patch-edit.component.html',
  styleUrl: './patch-edit.component.css'
})
export class PatchEditComponent implements OnInit {
  users:any;

  constructor(private Service: DetailsService, private route: ActivatedRoute,private router:Router) { }
  ngOnInit(): void {
    const userId = +(this.route.snapshot.paramMap.get('id') ?? '0');
    this.Service.getUserById(userId).subscribe(
      (data: any) => {
        this.users = data;
        console.log(this.users);
        
      },
      (error: any) => {
        console.error('Error:', error);
      }
    );
  }
  
  Updatename(){
    this.Service.updateUserName(this.users.id,{
      name: this.users.name,
    })
    .subscribe((response) => {
      alert('User details updated successfully. New name: ' + this.users.name);
      console.log('User Name updated successfully:', response);
      this.router.navigate(['view']);

    }, (error) => {
      console.error('Error updating user details:', error);
    });


  }

}

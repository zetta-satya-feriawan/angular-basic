import { Component, OnInit } from '@angular/core';
import { MentorService } from '../mentor.service';

@Component({
  selector: 'app-mentor-list',
  templateUrl: './mentor-list.component.html',
  styleUrls: ['./mentor-list.component.css']
})
export class MentorListComponent implements OnInit {
mentors!:any[];
filterValue:string='';
statusFilter:string='All';
displayedColumns =['number','name','userType','email','status'];
filteredMentors: any[] = [];

  statusOptions = ['All', 'Active', 'Pending'];
constructor(private mentorService: MentorService){}

ngOnInit(): void {
    this.mentorService.getMentors().subscribe((mentors)=>{
      this.mentors = mentors
      this.applyFilter()
    })
}



applyFilter(): void {
  
  const value = this.filterValue.toLowerCase().trim();
  const status = this.statusFilter.toLowerCase().trim();

  
  this.filteredMentors = this.mentors.filter((mentor) => {
    const name = `${mentor.civility} ${mentor.last_name} ${mentor.first_name}`.toLowerCase();
    const email = mentor.email.toLowerCase();
    const userType = mentor.company.user_type.toLowerCase();
    const mentorStatus = mentor.user_status.toLowerCase();


    return (
      (value === '' || name.includes(value) || email.includes(value) || userType.includes(value)) &&
      (status === 'all' || mentorStatus === status)
    );
  });
}


}

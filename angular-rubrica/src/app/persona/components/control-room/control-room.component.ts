import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-controlRoom',
  templateUrl: './control-room.component.html',
  styleUrls: ['./control-room.component.css']
})
export class ControlRoomComponent implements OnInit {

  @Input() lengthPersona: number;
  showLoad = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("Counter of users: " + changes.lengthPersona.currentValue);
  }

  form(){this.router.navigate(['persona/form']);}

}

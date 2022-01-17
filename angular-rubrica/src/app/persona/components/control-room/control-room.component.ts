import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-controlRoom',
  templateUrl: './control-room.component.html',
  styleUrls: ['./control-room.component.css']
})
export class ControlRoomComponent implements OnInit {

  private _lengthPersona: number;
  showLoad = true;

  @Input() set lunghezza(lengthPersona:number) {
    this._lengthPersona = lengthPersona;
    console.log(this._lengthPersona);
  }

  get lunghezza(): number {
    return this._lengthPersona;
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  //ngOnChanges(changes: SimpleChanges) {
  //  console.log("Counter of users: " + changes.lengthPersona.currentValue);
  //}

  form(){this.router.navigate(['persona/form']);}

}

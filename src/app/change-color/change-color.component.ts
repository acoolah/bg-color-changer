import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-color',
  templateUrl: './change-color.component.html',
  styleUrls: ['./change-color.component.scss'],
})
export class ChangeColorComponent implements OnInit {
  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {}

  body = this.elRef.nativeElement.parentElement.parentElement;

  color: string = '';

  changeColor(): void {
    this.color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    this.body.style.backgroundColor = this.color;
  }
}

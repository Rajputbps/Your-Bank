import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  isShow = true;
  constructor(private router: Router, private rout: ActivatedRoute) { }

  ngOnInit() {
    

  }

  loneForm() {
    this.isShow= false
    this.router.navigate(['/applyforlone'])
  }

}

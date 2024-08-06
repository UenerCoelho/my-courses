import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private parametrizador: ActivatedRoute) {

    //http://localhost:4200/portfolio/{1}
    this.parametrizador.params.subscribe(
      res => console.log(res)
    )

    //http://localhost:4200/portfolio/1?{name=uener&token=2624}
    this.parametrizador.queryParams.subscribe(
      res => console.log(res)
    )

   }

  ngOnInit(): void {
  }

}

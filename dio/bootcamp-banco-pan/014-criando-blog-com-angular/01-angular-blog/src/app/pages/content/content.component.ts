import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input()
  contentCover:string = '../../../assets/img/placeholder-img.png'
  @Input()
  contentTitle:string = 'Título da notícia'
  @Input()
  contentDescription:string = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae voluptatibus quis sint esse consectetur rem inventore iusto ullam ab commodi quod, eum consequatur natus quo deleniti nulla ipsam, amet blanditiis.'

  constructor(private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      console.log(value.get("id"))
    )
  }

}

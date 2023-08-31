import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from '../../data/data';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit{
  @Input()
  photoCover!:string;
  @Input()
  title!:string;
  @Input()
  description!:string;
  @Input()
  id!:string | null;
  constructor(private route:ActivatedRoute) {

  }

  ngOnInit(): void{
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = data.filter(article => article.id == id)[0]
    this.description = result.description
    this.title = result.title
    this.photoCover = result.photo

  }
}

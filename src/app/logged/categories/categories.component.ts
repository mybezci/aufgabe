import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  template : `
  <div>
    <button (click)='category1()'>Category - 1 </button>
    <button (click)='category2()'>Category - 2 </button>
    <button (click)='category3()'>Category - 3 </button>
    <p>
    <router-outlet></router-outlet>
    </p>
  </div>
`,
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    }
  category1(){
      this.router.navigate(['category1'], {relativeTo:this.route});
    }
  category2(){
      this.router.navigate(['category2'], {relativeTo:this.route});
    }
  category3(){
      this.router.navigate(['category3'], {relativeTo:this.route});
    }

}

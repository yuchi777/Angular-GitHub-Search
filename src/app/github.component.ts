import { Component } from '@angular/core';
import { GitHubService } from './github.service';
import { FormControl } from '@angular/forms';
import { filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';
@Component({
  selector: 'github',
  styles:[`
    .img{
      position:relative;
      float:left;
      width:100px;
      height:100px;
      background-position: 50% 50%;
      background-repeat: no-repeat;
      background-size:cover;
    }
  `],
  template: `
  <h3>GitHub User Search</h3>
  <input class="w-50 form-control" type="search" [formControl]="searchControl">
  <div *ngIf="isLoading"><i class="fa fa-spinner fa-spin fa-3x"></i>Getting Data...</div>

  <div *ngFor="let user of users"  class="media">
    <a href="{{user['html_url']}}">
      <img src="{{user['avatar_url']}}" class="img align-self-start mr-3" alt="...">
    </a>
    <a [routerLink]="['user',user['login'],user['score']]">
      <h5>URL params</h5>
    </a>
    <div class="media-body">
      <h5 class="mt-0">{{user['login']}}</h5>
      Score:{{user['score']}}
    </div>
  </div>
  `,
  providers:[GitHubService]
})
export class GitHubComponent {
  title = 'myGitHubSearch';

  searchControl = new FormControl();
  isLoading = false;
  users = [] ;

  constructor(private _gitHubService:GitHubService){
    
  }

  //constructor執行完執行ngOninit Hook
  ngOnInit(){

    //formcontrol 值改變時
    this.searchControl.valueChanges
    .pipe(filter(text=>text.length>=3), debounceTime(400), distinctUntilChanged())
    .subscribe((value)=>{
      this.isLoading = true;
      //api撈取資料
      this._gitHubService.getGitHubData(value).subscribe((data)=>{
        //加載中
        this.isLoading = false;
        this.users = data.items;
        console.log(data.items);
      })
    })


    

  }
}

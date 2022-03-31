import { HttpClient } from '@angular/common/http';
import { Observable } from  'rxjs';
import { Injectable } from '@angular/core';

//interface 
export interface GitHubUser{
    items: any;
    
    //需要從api取出的資料
    html_url:string;
    avatar_url:string;
    login:string;
    score:string;

}


@Injectable()
export class GitHubService{
    
    //取得httpClient instance實例
    constructor(private _http: HttpClient){

    }

    //getGitHubData()方法回傳type是Observable<數據資料從interface GitHubUser>
    getGitHubData(_searchTerm:any):Observable<GitHubUser>{
        return this._http.get<GitHubUser>("https://api.github.com/search/users?q="+_searchTerm);
    }
}
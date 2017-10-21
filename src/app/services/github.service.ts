import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { User } from '../models/user';

@Injectable()
export class GitHubService {
    private userAPI = 'https://api.github.com/users?&per_page=';
    private singleUserAPI = 'https://api.github.com/users/';

    constructor (private http: Http) {}

    /**
     * Get Users from Github API
     * @param {Number} val
     * @return {Observable<User[]>}
     */
    getUsers(val = 20): Observable<User[]> {
        return this.http.get(this.userAPI + val)
        .map(res => res.json());
    }

    /**
     * Get single User from Github API
     * @param {String} user
     * @return {Observable<User[]>}
     */
    getSingleUser(user): Observable<User> {
      return this.http.get(this.singleUserAPI + user)
      .map(res => res.json());
    }
}

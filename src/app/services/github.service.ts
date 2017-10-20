import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { User } from '../models/user';

@Injectable()
export class GitHubService {
    private userAPI = 'https://api.github.com/users?since=135';

    constructor (private http: Http) {}

    /**
     * Get Users from Github API
     * @return {Observable<User[]>}
     */
    getUsers(): Observable<User[]> {
        return this.http.get(this.userAPI)
        .map(res => res.json());
    }
}

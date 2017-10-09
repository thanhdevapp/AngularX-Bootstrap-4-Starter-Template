import { Injectable } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Global } from '../../class/Global';

@Injectable()
export class FooterService {

    constructor(private http: HttpService) { }

    public sentEmail(data) {
        let url = `${Global.url}/api/emailSubscribes`;
        return this.http.postApiAsync(url, data)
    }

}
import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse, HttpInterceptor } from "@angular/common/http";
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Subject }    from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Episode } from './episode';

/**
 * EPISODE SERVICE
 *
 * Class that contains all service calls used by the Episodes Component.
 *
 */
@Injectable()
export class EpisodeService {
	
	/*---------------------------------------------------
	/	C'TOR
	/-------------------------------------------------- */
  	constructor (private http: Http) { }

	private _episodesUrl = '/api/episodes';  // URL to web api
	private _episodeUrl = '/api/episode/';  // URL to web api
	private _deleteUrl = this._episodeUrl + 'delete/';  // URL to web api

  	getEpisodes(): Observable<HttpEvent<any>> {
    	return this.http.get(this._episodesUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }
   
	saveEpisode(postVars: Episode, mode: string): Observable<HttpEvent<any>> { 
		let body = JSON.stringify(postVars);
	    let headers = new Headers({ 'Content-Type': 'application/json' });
	    let options = new RequestOptions({ headers: headers });

	    if (typeof postVars._id === "undefined") postVars._id = -1;

		if (mode === "add") {
			return this.http.post(this._episodesUrl, body, options)
                .map(this.extractData)
                .catch(this.handleError);
		} else {
			return this.http.put(this._episodeUrl + postVars._id, body, options)
	            .map(this.extractData)
	            .catch(this.handleError);
		}
	}

	deleteEpisode(id: number): Observable<HttpEvent<any>> {
    	return this.http.get(this._deleteUrl + id)
            .map(this.extractData)
            .catch(this.handleError);
    }
	/*--------------------------------------------------
	/	PRIVATE FUNCTIONS
	/-------------------------------------------------*/
	private extractData(res: Response) {
		if (res.status < 200 || res.status >= 300) {
			this.handleError(res.statusText);
		}
		let body = res.json();
		return body || { };
	}
	private handleError (errors: any) {
		let errMsg = errors.statusText || 'Server error';
		console.error("An error occured! " + errMsg); // log to console instead
		return Observable.throw(errMsg);
	}  
}
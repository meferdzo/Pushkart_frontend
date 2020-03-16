import {Injectable} from '@angular/core';
import {Observable, Subject, throwError} from 'rxjs';
import {catchError, map, retry} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

/*const API_URL = environment.apiUrl;

@Injectable({
	providedIn: 'root'
})
export class DbService {

	refreshDb = new Subject<boolean>();

	constructor(private http: HttpClient) {
	}

	getIp_tx(): Observable<IpTx[]> {
		return this.http.get<IpTx[]>(API_URL + '/db/ip_tx', {withCredentials: true})
			.pipe(
				retry(1),
				catchError(DbService.handleError)
			);
	}

	static handleError(error) {
		let errorMessage = '';
		if (error.error instanceof ErrorEvent) {
			// Get client-side error
			errorMessage = error.error.message;
		} else {
			// Get server-side error
			errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
		}
		return throwError(errorMessage);
	}
}
*/

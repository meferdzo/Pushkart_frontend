import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {environment} from '../../../environments/environment';

const API_URL = environment.apiUrl;

@Injectable({
	providedIn: 'root'
})
export class LoginService {

	constructor(private http: HttpClient) {
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


	// getUser(): Observable<string> {
	// 	return this.http.get<string>(API_URL + '/login', {withCredentials: true})
	// 		.pipe(
	// 			retry(1),
	// 			catchError(LoginService.handleError)
	// 		);
	// }
}

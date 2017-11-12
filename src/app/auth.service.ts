import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from '../environments/environment';

@Injectable()
export class AuthService {
    messages = []
    path = environment.SERVER_URL + '/auth'

    TOKEN_KEY = 'token'

    constructor( private http: HttpClient) {}

    get token() {
        return localStorage.getItem(this.TOKEN_KEY)
    }

    get isAuthenticated() {
        return !!localStorage.getItem(this.TOKEN_KEY)
    }

    logout() {
        localStorage.removeItem(this.TOKEN_KEY)
    }

    registerUser(registerData) {
        this.http.post<any>(this.path + '/register', registerData).subscribe(res => {
            this.saveToken(res.token)
        })
    }    
    
    async loginUser(loginData):Promise<string> {
        try{
            let response = await this.http.post<any>(this.path + '/login', loginData).toPromise();
            
            this.saveToken(response.token)
            return null
        }
        catch (errorResponse){
            console.log('Login failed: ' + errorResponse.error.message)
            return errorResponse.error.message
        }
    }

    saveToken(token) {
        localStorage.setItem(this.TOKEN_KEY, token)
    }
}

import { Injectable, Injector } from '@angular/core'
import { HttpInterceptor } from '@angular/common/http'
import { AuthService } from './auth.service'

@Injectable()
export class AuthInterceptorService implements HttpInterceptor{
    
    constructor(private injector: Injector) {}

    intercept(req, next) {
        // TODO: Remove this once everything is 
        //       runnig from a single server that
        //       supports the authorization
        if (req.url.indexOf('amazonaws') != -1){
            return next.handle(req)
        }
        
        var auth = this.injector.get(AuthService)
        var authRequest = req.clone({
            headers: req.headers.set('Authorization', 'token ' + auth.token)
        })
        return next.handle(authRequest)
    }
}
import {Benutzer, LoginModel} from './Benutzer';


export class Globales {



    public static setinKlasse(inClass) {
        localStorage.setItem('klasse', inClass);
    }

    public static getinKlasse(): any {
        return localStorage.getItem('klasse');
    }



    public static geBenutzer(): LoginModel {
        return <LoginModel>JSON.parse(localStorage.getItem('jwt'));
    }

    public static setLoggedBenutzer(token: LoginModel) {
        localStorage.setItem('jwt', JSON.stringify(token));
    }

    public static loggout() {
        localStorage.removeItem('jwt');
    }

}
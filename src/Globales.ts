import {Benutzer, LoginModel} from './Benutzer';


export class Globales {


    public static geBenutzer(): LoginModel {
        return <LoginModel>JSON.parse(localStorage.getItem('jwt'));
    }

    public static setLoggedBenutzer(token: LoginModel) {
        localStorage.setItem('jwt', JSON.stringify(token));
    }

}
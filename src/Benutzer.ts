export class Benutzer {
    constructor(
        public bn_id?: number,
        public bn_anmeldename?: string,
        public bn_vorname?: string,
        public bn_nachname?: string,
        public bn_passwort?: string,
        public bn_klassen_id?: number,
        public isLehrer?: number

    ) {
    }
}

export class LoginModel {
    constructor(
        public bn_id?: number,
        public bn_vorname?: string,
        public bn_nachname?: string,
        public bn_klassen_id?: number,
        public isLehrer?: number

    ) {
    }
}
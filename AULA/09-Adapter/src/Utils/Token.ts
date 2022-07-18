export default class Token{
    private _token : string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21lIjoiRXJpYyBQYXRyaWNrIiwidHVybWEiOiJBIiwiY3BmIjoxNTE2MjM5MDIyfQ.u32e7v_bUCZfudzdHZsCOk3nMOrI7s77ajgQaTHVnY8";
    
    get token() : string{
        return this._token;
    }
}
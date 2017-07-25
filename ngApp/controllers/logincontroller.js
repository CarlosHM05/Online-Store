class Login {
    constructor($state){
        this.message= "Login before purchasing!";
        this.state = $state;
        this.email = "";
        this.password = "";
    }
    login(){
        this.state.go("Home");
    }
}
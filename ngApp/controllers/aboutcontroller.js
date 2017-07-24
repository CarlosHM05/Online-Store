class About{
    constructor($stateParams){
        this.message="hello from about!!";
        this.cave = cave.filter((c)=> c.id == $stateParams["id"])[0];
    }
}
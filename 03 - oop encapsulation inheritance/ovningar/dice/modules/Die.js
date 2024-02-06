export default class Die{
    constructor(){
        this.current = 1;
        this.isFrosen = false;
    }
    roll(){
        if(!this.isFrosen) this.current = Math.ceil(Math.random()*6);
    }
    freeze(){
        this.isFrosen = true;
    }
    unFreeze(){
        this.isFrosen = false;
    }
}

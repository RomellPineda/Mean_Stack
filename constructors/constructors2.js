function Ninja(name){
    var speed = 3;
    var strength = 3;
    this.name = name;
    this.health = 100;
    this.sayName = function(){
        console.log('My ninja name is ' +this.name+ '!');
    }
    this.showStats = function(){
        console.log('Name: ' +this.name+ 'Strength:' +strength+ 'Speed:' +speed+ 'Health: ' +this.health+ '!');
    }
    this.drinkSake = function(){
        this.health += 10;
        console.log('Sake good!');
    }
    this.punch = function(target){
        // if(this is instance of ninja){}
        target.health -= 5;
        console.log(target.name + 'just got whooped and lost 5 health');
    }
    this.kick = function(target){
        // if(this is instance of ninja){}
        target.health -= 15;
        console.log(target.name + 'just got whooped and lost 15 health');
    }
}

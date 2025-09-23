// Has-A(Weak Ownership) - A Relationship where one class has another class as a part of it


class Player {
    constructor(name) {
        this.name = name;
    }    

    displayName() {
        console.log(`Player name is ${this.name}`);
    }
}

class Team {
    constructor(name, players)  {
        this.name = name;
        this.players = players;  // Team has Players
    }

    addPlayer(player) {
        this.players.push(player);
    }
    
    displayTeam() { 
        console.log(`Team name is ${this.name}`);
        console.log('Players:');
        this.players.forEach(player => player.displayName());
    }
}


const player1 = new Player('Alice');
const player2 = new Player('Bob');
const player3 = new Player('Charlie');

const team = new Team('Warriors', [player1, player2]);
team.addPlayer(player3);

team.displayTeam();



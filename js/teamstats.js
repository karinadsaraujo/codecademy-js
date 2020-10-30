const team = {
    _players: [
      {
        firstName: 'Pablo',
        lastName: 'Sanchez',
        age: 11
      }
    ],
    _games: [
      {
        opponent: 'Broncos',
        teamPoints: 42,
        opponentPoints: 27 
      }
    ],
  
    get games(){
      return this._games;
    },
  
    get players(){
      return this._players
    },
  
    addPlayer(firstName,lastName,age){
      let player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      };
  
      this.players.push(player);
    },
    addGame(opponentName,teamPoints,opponentPoints){
      const game = {
      name: opponentName,
      teampoints: teamPoints,
      oponpoints: opponentPoints
      };
  
      this.games.push(game);
    },
  };
  
  team.addPlayer('Steph','Curry',28);
  team.addPlayer('Bugs','Bunny',76);
  team.addPlayer('Lisa','Leslie',44);
  
  const players = team.players;
  console.log(players);
  
  team.addGame('cori',9,0);
  team.addGame('nina',4,5);
  
  const games = team.games;
  console.log(games);
  
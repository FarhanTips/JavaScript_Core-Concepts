

function matchWinner(teamAGoals, teamBGoals) {
  if ( typeof teamAGoals !== "number" || typeof teamBGoals !== "number"){
    return "Invalid";
  }

  if (teamAGoals > teamBGoals){
    return "Team A Won";
  }

  else if (teamBGoals > teamAGoals){
    return "Team B Won";
  }
  else {
    return "Draw";
  }
}

console.log(matchWinner(2,2));
console.log(matchWinner("3",2));
console.log(matchWinner(7,2));
console.log(matchWinner(1,4));
console.log(matchWinner(1,true));


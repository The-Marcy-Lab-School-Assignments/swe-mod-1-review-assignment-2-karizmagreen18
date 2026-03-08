const team1 = {
  name: "Warriors",
  wins: 45,
  losses: 20,
};

const team2 = { ...team1 };
team2.wins = 50;
team2.losses = 15;

console.log(team1.wins);
console.log(team1.losses);
console.log(team2.wins);
console.log(team2.losses);
/* 
Part A: What will team1.wins and team1.losses be after this code runs? Write your prediction as a comment below:

- Prediction: team 1 and team 2 reference the same object in memory so since team2 is equal to team 1 and the wins and losses is then changed to 50 and 15 for team 2 it will then be the same for team1
Part B: Fix the code so that team2 is a TRUE COPY of team1. After making your fix, changing team2 should NOT affect team1.
Part C: Verify your fix by logging both team1.wins (should still be 45) and team2.wins (should be 50)
*/

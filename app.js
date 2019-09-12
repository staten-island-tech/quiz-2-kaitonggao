/*John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)
*/

/*
let Johnscores = [89,120,103]
let Mike scores = [116,94,123];
let averageJohn = (teamJohn[0] + teamJohn[1] + teamJohn[2]) / 3;
let averageMike = (teamMike[0] + teamMike[1] + teamMike[2]) / 3;*/

let Johngame1 = 89;
let Johngame2 = 120;
let Johngame3 = 103;

let Mikegame1 = 116;
let Mikegame2 = 94;
let Mikegame3 = 123;
//let Mikegame3 = 100//

let Johnaverage = (Johngame1 + Johngame2 + Johngame3) / 3
    console.log(Johnaverage);

let Mikeaverage = (Mikegame1 + Mikegame2 + Mikegame3) / 3
    console.log(Mikeaverage);


if (Mikeaverage === Johnaverage) { 
    console.log(`Mike and John's average are the same, ${Mikeaverage}, and there is no winner.`);
}
else if (Mikeaverage > Johnaverage){
    console.log(`Mike has a greater average, ${Mikeaverage}, than John.`);
}
else {
    console.log (`John has a greater average, ${Johnaverage}, than Mike.`);
}


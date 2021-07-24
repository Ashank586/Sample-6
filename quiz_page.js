player_1_name = localStorage.getItem("player_1_name");
player_2_name = localStorage.getItem("player_2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player_1_name + ": ";
document.getElementById("player2_name").innerHTML = player_2_name + ": ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("question_turn").innerHTML = "Question turn: " + player_1_name;
document.getElementById("answer_turn").innerHTML = "Answer turn: " + player_2_name;
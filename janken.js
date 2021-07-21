var v=0; l=0;
var opt = ["グー", "チョキ", "パー"];
var img = ["gu.jpeg", "cyoki.jpeg", "bad.jpeg"];

function game(a){
    var c_in = Math.floor(Math.random() * 3);
    const msg = document.querySelector(".msg");
    const ritsu = document.querySelector(".ritsu");
    const score = document.querySelector(".score");
    let u_in = a;
    
    console.log("User:" + opt[u_in]);
	document.getElementById("uHand").innerHTML = "<img src='" + img[u_in] + "' width='200' height='200'>";
	document.getElementById("res_uHand").innerHTML = "ユーザー「 " +opt[u_in]+ " 」";
    console.log("Computer:" + opt[c_in]);
	document.getElementById("cHand").innerHTML = "<img src='" + img[c_in] + "' width='200' height='200'>";
	document.getElementById("res_cHand").innerHTML = "パソコン「 " +opt[c_in]+ " 」";

    var result = check(u_in, c_in);

    if(result == 1){
        v++;
        document.getElementById("res").innerHTML = "<img src='win.jpeg' width='200' height='200'>";
        document.getElementById("res_gm").innerHTML = "結果「 勝ち 」";
        console.log("WIN");
        
    }
    else if(result == 0){
        document.getElementById("res").innerHTML = "<img src='draw.jpeg' width='200' height='200'>";
        document.getElementById("res_gm").innerHTML = "結果「 引き分け 」";
        console.log("DRAW");
    }
    else{
        l++;
        
        document.getElementById("res").innerHTML = "<img src='lose.jpeg' width='200' height='200'>";
        document.getElementById("res_gm").innerHTML = "結果「 負け 」";
        console.log("LOSE");
    }
    
    var u_r = (v/(v+l))*100;
    var c_r = 100 - (v/(v+l))*100;
    
    score.innerHTML = "SCORE｜　ユーザー：「 " +v+"回 」　　　パソコン：「 " +l+ "回 」";
    ritsu.innerHTML = "勝利率｜　ユーザー：「 " +u_r.toFixed(0)+"% 」　　　パソコン：「 " +c_r.toFixed(0)+ "% 」";

}

function check(u_in, c_in){
    if (u_in <= c_in){
        if (u_in == c_in) return 0;
        if (u_in == 0 && c_in == 2) return -1;
        return 1;
    }
    else if (u_in == 2 && c_in == 0) return 1;
    return -1;
    
    
}
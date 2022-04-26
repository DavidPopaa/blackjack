let heightscore = document.getElementById("height-score");
let fst_player_card_txt = document.getElementById("nr-card3");
let scd_player_card_txt = document.getElementById("nr-card4");
let probabil_scd_card_player = document.getElementById("primul-nr-card2-dupa");
let fstsum = false ;
let probabl_scd_player_txt = document.getElementById("doilea-nr-dupacard4");
player_cards = [];
let fst_posible_player_card_txt = document.getElementById("pr-nr-dupacard4");
const bet = document.getElementById("bet");
let total_txt = document.getElementById("total");
let total = 500;
let suma_player = 0;
let win_message = document.getElementById("WinLosemessage");
let ok = true;
let maxscore = 0;
let prob_fst_card_player = 0;
suma_dealer = 0;
let fst_dealer_card_txt = document.getElementById("nr-card1");
let scd_dealer_card_txt = document.getElementById("nr-card2");
let fst_posi_dealear_txt = document.getElementById("primul-nr-card2-dupa");
let scd_posi_dealer_txt = document.getElementById("doilea-nr-card2-dupa");




function randnumber() {
   let rand = Math.floor( Math.random()*13 )+1;
   if(rand>=10){
       return 10;
   } else if(rand === 1){
       return 11;
   }else{
       return rand;
   }

}

function restart(){
    bet.textContent = "BET:";
    total_txt.textContent = "TOTAL:";
    heightscore.textContent = "HeightScore:";
    fst_dealer_card_txt.textContent = "";
    scd_dealer_card_txt.textContent = "";
    fst_player_card_txt.textContent = "";
    scd_player_card_txt.textContent = "";
    fst_posible_player_card_txt.textContent = "";
    win_message.textContent = "";
    suma_dealer = 0;
     contor = 0;
     fst_player_card = 30;
     scd_player_card = 40;
     probabl_scd_player_txt.textContent = "";
    fst_posi_dealear_txt = "";
    scd_posi_dealer_txt = "";
    card1_dealer = "";
    count = 0;

}
let contor = 0;
 let fst_player_card = 30;
let scd_player_card = 40;
let cop_scd_card_deal;
let copie_fst_suma_player;
function startgame() {
    bet.textContent = "BET:" + " " + "$100";
    total_txt.textContent = "TOTAL" + " " + "$" + total;
    heightscore.textContent ="HeightScore" +" " + "$" + maxscore;
    if(contor === 0){
        if(fst_player_card>11){
        if(scd_player_card >11){
            contor = contor + 1;
    let scd_dealer_card = randnumber();
    scd_dealer_card_txt.textContent = scd_dealer_card;
    cop_scd_card_deal = scd_dealer_card;
    
    let fst_player_card = randnumber();
    fst_player_card_txt.textContent = fst_player_card;
    let scd_player_card = randnumber();
    scd_player_card_txt.textContent = scd_player_card;
    copie_fst_suma_player = fst_player_card + scd_player_card;
    suma_player = 0;
    
     

     if(fst_player_card + scd_player_card < 21){
        fstsum = true;
        suma_player += fst_player_card + scd_player_card;
        console.log(suma_player);
        if(total > maxscore){
            maxscore = total;
        }
        
    }else if(fst_player_card + scd_player_card > 21){
        fstsum = false;
        win_message.textContent = "You lost";
        total -= 100;
        if(total > maxscore){
            maxscore = total;
        }
        restart();  
    }else if(fst_player_card + scd_player_card === 21){
        win_message.textContent = "You won";
        if(total > maxscore){
            maxscore = total;
        }
        total += 100;
    }
     return scd_dealer_card;
     }
   }
   
 }
   
    
   
    return suma_player , fstsum ;
    
}

let bebee = 0;

function hitclicked(){
   
             if(fstsum === true && prob_fst_card_player === 0){
        let prob_fst_card_player = randnumber();
        fst_posible_player_card_txt.textContent = prob_fst_card_player;
        suma_player += prob_fst_card_player;
        console.log(suma_player);


        if(suma_player>21){
        win_message.textContent = "You lost";
        total -= 100;
        if(total > maxscore){
            maxscore = total;
        }
    }else if(suma_player<21){
        win_message.textContent = "You are alive";
        if(total > maxscore){
            maxscore = total;
        }
    

    }else if(suma_player === 21){
        win_message.textContent = "You won";
        total += 100;
        if(total > maxscore){
            maxscore = total;
        }

        

    }
    fstsum = false;

   

}else if(bebee === 0){
          let  probable_scd_player_card = randnumber();
        probabl_scd_player_txt.textContent = probable_scd_player_card; 
        suma_player += probable_scd_player_card;
        if(suma_player>21){
            win_message.textContent = "You lost";
            total -= 100;
        if(total > maxscore){
            maxscore = total;
        }
        }else if(suma_player === 21){
            win_message.textContent = "You won";
            if(total > maxscore){
            maxscore = total;
        }
        total += 100;
        }else{
            win_message.textContent = "You are alive";
        }
    }
    console.log("acac" + " " + copie_fst_suma_player);
}
let count = 0;
function holdclicked() {
    let card1_dealer = randnumber();
    fst_dealer_card_txt.textContent = card1_dealer;
    suma_dealer += card1_dealer + cop_scd_card_deal;
    
    if(count === 0){
        if(suma_dealer > copie_fst_suma_player){
            win_message.textContent = "Dealer wins";
            total -= 100;
        if(total > maxscore){
            maxscore = total;
        }
            count += 1;
        }else{
            win_message.textContent = "You won";
            if(total > maxscore){
            maxscore = total;
        }
        total += 100;
            count += 1;
        }
    }
    if(count === 1){
        if(suma_dealer > suma_player){
            win_message.textContent = "Delear wins";
            count += 2;
        }else if(suma_player < suma_player){
            win_message.textContent = "You won";
            if(total > maxscore){
            maxscore = total;
        }
        total += 100;
            count += 2;
        }
    }
     
}

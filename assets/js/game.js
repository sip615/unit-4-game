
$(document).ready(function() {
    var random_number;
    var losses = 0;
    var wins = 0;
    var numbers = [];
    var previous = 0;

    //check all the things
    console.log(random_number);
    console.log(losses);
    console.log(wins);

    //start the random score number from 30, but no greater than 99
    random_number = Math.floor(Math.random() * 69) +30 ;
    $("#scoreNumber").html(random_number);

    //create random numbers to add to the numbers array
    for(var i = 0; i < 4; i++){
        var random = Math.floor(Math.random() * 21)+1;
        numbers.push(random);
    };
    
    
    //check numbers array
    console.log(numbers);

    //assign random numbers from number array to the different crystals
    $("#pink").attr({"data-random" : numbers[0]});
    $("#green").attr({"data-random" : numbers[1]});
    $("#blue").attr({"data-random" : numbers[2]});
    $("#red").attr({"data-random" : numbers[3]});

    $(".crystal").on("click", function(){
        var value = parseInt($(this).attr("data-random"));
        previous += value;
        $("#runningScoreNumber").html(previous);
        console.log(previous);
        if(previous > random_number){
            console.log("You Lost");
            losses++;
            $("#losses").html(losses);
            previous = 0;
            random_number = Math.floor(Math.random() *69) + 30;
            $("#scoreNumber").html(random_number);
            $("#runningScoreNumber").html(previous);
            
        }else if (previous === random_number){
            console.log("You Win!");
            wins++;
            $("#wins").html(wins);
            previous = 0;
            random_number = Math.floor(Math.random() *69) + 30;
            $("#scoreNumber").html(random_number);
            $("#runningScoreNumber").html(previous);
        }else{/*Not sure here*/};
    });

    $("#reset").on("click", function(){
        random_number = Math.floor(Math.random() *69) + 30;
        $("#scoreNumber").html(random_number);
        $("#runningScoreNumber").html(previous);
        previous = 0;
        wins = 0;
        losses = 0;
        $("#wins").html(wins);
        $("#losses").html(losses);
    });
    
});

//So, I know the doe is not very DRY, but I was really excited to get it working the way I wanted it to. 



//a game with 4 crystals 1-12
//Every crystal needs to have a random number
//A new random number should be generated every single time we win or lose, for each crystal.
//when clicking any crystal, it should be adding that value onto the previous result until is equals the total score.
//if it is greater than random result, then we start over, increment a loss
//if it is equal then we increment a win

 
window.onload = function(){
    reset();
}
const questions = ["Question1","Question2","Question3","Question4","Question5","Question6"];
const answers1 = ["answers11","answers12","answers13","answers14"];
const answers2 = ["answers21","answers22","answers23","answers24"];
const answers3 = ["answers31","answers32","answers33","answers34"];
const answers4 = ["answers41","answers42","answers43","answers44"];
const answers5 = ["answers41","answers42","answers43","answers44"];
const answers6 = ["answers41","answers42","answers43","answers44"];
const ans = [1,2,3,4,1,3];
const marks = [];
var results = 0;

function submit(){

    var current = parseInt(document.getElementById('qnumber').value);
    var ans1 = document.getElementById('answer1').checked;
    var ans2 = document.getElementById('answer2').checked;
    var ans3 = document.getElementById('answer3').checked;
    var ans4 = document.getElementById('answer4').checked;
    
    if(ans1){
        if(ans[current-1]==1){
            document.getElementById('correct').innerHTML = "Correct";
            results++;
        }else{
            document.getElementById('correct').innerHTML = "Wrong";
        }
    }else if(ans2){
        if(ans[current-1]==2){
            document.getElementById('correct').innerHTML = "Correct";
            results++;
        }else{
            document.getElementById('correct').innerHTML = "Wrong";
        }

    }else if(ans3){
        if(ans[current-1]==3){
            document.getElementById('correct').innerHTML = "Correct";
            results++;
        }else{
            document.getElementById('correct').innerHTML = "Wrong";
        }
        
    }else if(ans4){
        if(ans[current-1]==4){
            document.getElementById('correct').innerHTML = "Correct";
            results++;
        }else{
            document.getElementById('correct').innerHTML = "Wrong";
        }
        
    }

    if(current == (questions.length)){
        document.getElementById('marks').innerHTML = "Marks" + results+"/"+ questions.length;

    }

    console.log(ans1);
    console.log(document.getElementById('qnumber').value);
  

}

function next(){
    var current = parseInt(document.getElementById('qnumber').value);
    console.log(questions[current]);
    document.getElementById('question').innerHTML = questions[current];
    document.getElementById('text_1').innerHTML = answers1[current];
    document.getElementById('text_2').innerHTML = answers2[current];
    document.getElementById('text_3').innerHTML = answers3[current];
    document.getElementById('text_4').innerHTML = answers4[current];
    document.getElementById('answer1').checked = false;
    document.getElementById('answer2').checked = false;
    document.getElementById('answer3').checked = false;
    document.getElementById('answer4').checked = false;
    document.getElementById('correct').innerHTML = "";
    document.getElementById('qnumber').value = (current+1);
    console.log(document.getElementById('qnumber').value);

    if(current == (questions.length-1)){
        document.getElementById('next').disabled = true;

    }

}

function reset(){
    var current = parseInt(document.getElementById('qnumber').value);
    console.log(questions[current]);
    document.getElementById('question').innerHTML = questions[0];
    document.getElementById('text_1').innerHTML = answers1[0];
    document.getElementById('text_2').innerHTML = answers2[0];
    document.getElementById('text_3').innerHTML = answers3[0];
    document.getElementById('text_4').innerHTML = answers4[0];
    document.getElementById('answer1').checked = false;
    document.getElementById('answer2').checked = false;
    document.getElementById('answer3').checked = false;
    document.getElementById('answer4').checked = false;
    document.getElementById('correct').innerHTML = "";
    document.getElementById('qnumber').value = 1;
    document.getElementById('marks').innerHTML = "";
    results = 0;
    document.getElementById('next').disabled = false;

}
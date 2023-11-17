// console.log('hi');
let butCnt=0;
console.log(butCnt);

let calc='';

function clearcalc(){
    calc='';
    document.getElementById("ans").textContent='';
}
function answer(){
    try{calc=eval(calc);
    document.getElementById("ans").textContent=calc;
    } catch (error) {
        document.getElementById('ans').textContent = 'Error';
    }
}

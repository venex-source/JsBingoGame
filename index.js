let arr = []
let newArr = []
let newArr2 = []
const card1 = document.querySelectorAll('#card-1-number');
const card2 = document.querySelectorAll('#card-2-number');
const cardTab1 = document.querySelectorAll('.tab-1');
const cardTab2 = document.querySelectorAll('.tab-2');
var e = document.getElementById('goal');
var selected = e.options[e.selectedIndex].text;
let guess = document.querySelector('.guess');
let playing = true;

function rand(value){
    for(let i=0; i<value.length; i++){
        let num = value[i].innerHTML = Math.floor(Math.random()*100+1);
        while(arr.includes(num)){
            num = value[i].innerHTML = Math.floor(Math.random()*100+1); 
        }
        arr.push(num);
    }
}

random_value();
rand(card1);
rand(card2);


for (let i=0; i<cardTab1.length; i++){
     cardTab1[i].addEventListener('click', function(){
        if(cardTab1[i].textContent == guess.textContent){
            cardTab1[i].classList.add('red');
        }
    })
}

function checkBoxPlayer(value){
    for(let i=0; i<value.length; i++){
        if(value[i].classList.contains('red')){
            newArr.push(i)
        }
    }
}

function checkBoxComputer(value){
    for(let i=0; i<value.length; i++){
        if(value[i].classList.contains('red')){
            newArr2.push(i)
        }
    }
}

 const result = function (){
    checkBoxPlayer(cardTab1);
    if (selected === 'Vertical'){
        if((newArr.includes(0)&&newArr.includes(4)&&newArr.includes(8)&&newArr.includes(12)) ||
            (newArr.includes(1)&&newArr.includes(5)&&newArr.includes(9)&&newArr.includes(13)) ||
            (newArr.includes(2)&&newArr.includes(6)&&newArr.includes(10)&&newArr.includes(14)) ||
            (newArr.includes(3)&&newArr.includes(7)&&newArr.includes(11)&&newArr.includes(15)) ){
    	    document.querySelector('.result').textContent = 'You Won 💃🎉';
            document.querySelector('select').classList.add('hidden'); 
            playing = false;
        }
    else if (selected === 'Horizontal'){
            if((newArr2.includes(0)&&newArr2.includes(1)&&newArr2.includes(2)&&newArr2.includes(3)) ||
                (newArr2.includes(4)&&newArr2.includes(5)&&newArr2.includes(6)&&newArr2.includes(7)) ||
                (newArr2.includes(8)&&newArr2.includes(9)&&newArr2.includes(10)&&newArr2.includes(11)) ||
                (newArr2.includes(12)&&newArr2.includes(13)&&newArr2.includes(14)&&newArr2.includes(15)) ){
                document.querySelector('.result').textContent = 'You Won 💃🎉';
                document.querySelector('select').classList.add('hidden'); 
                playing = false;    
                } 
            }
    else if(selected === 'Diagonal'){
                if((newArr2.includes(0)&&newArr2.includes(5)&&newArr2.includes(10)&&newArr2.includes(15)) ||
                    (newArr2.includes(3)&&newArr2.includes(6)&&newArr2.includes(9)&&newArr2.includes(12))){
                    document.querySelector('.result').textContent = 'You Won 💃🎉';
                    document.querySelector('select').classList.add('hidden'); 
                    playing = false;    
                    } 
    }
    else if(selected === '4-Corners'){
        if((newArr2.includes(0)&&newArr2.includes(1)&&newArr2.includes(2)&&newArr2.includes(3)) ||
            (newArr2.includes(3)&&newArr2.includes(7)&&newArr2.includes(11)&&newArr2.includes(15)) ||
            (newArr2.includes(0)&&newArr2.includes(4)&&newArr2.includes(8)&&newArr2.includes(12)) ||
            (newArr2.includes(12)&&newArr2.includes(13)&&newArr2.includes(14)&&newArr2.includes(15)) ){
            document.querySelector('.result').textContent = 'You Won 💃🎉';
            document.querySelector('select').classList.add('hidden'); 
            playing = false;    
            } 
        }
    else if(selected === 'Full Corners'){
            if((newArr2.includes(0)&&newArr2.includes(1)&&newArr2.includes(2)&&newArr2.includes(3)) ||
                (newArr2.includes(3)&&newArr2.includes(7)&&newArr2.includes(11)&&newArr2.includes(15)) ||
                (newArr2.includes(0)&&newArr2.includes(4)&&newArr2.includes(8)&&newArr2.includes(12)) ||
                (newArr2.includes(12)&&newArr2.includes(13)&&newArr2.includes(14)&&newArr2.includes(15)) ||

                (newArr2.includes(0)&&newArr2.includes(5)&&newArr2.includes(10)&&newArr2.includes(15)) ||
                (newArr2.includes(3)&&newArr2.includes(6)&&newArr2.includes(9)&&newArr2.includes(12)) ||

                (newArr.includes(1)&&newArr.includes(5)&&newArr.includes(9)&&newArr.includes(13)) ||
                (newArr.includes(2)&&newArr.includes(6)&&newArr.includes(10)&&newArr.includes(14)) ||
                
                (newArr2.includes(4)&&newArr2.includes(5)&&newArr2.includes(6)&&newArr2.includes(7)) ||
                (newArr2.includes(8)&&newArr2.includes(9)&&newArr2.includes(10)&&newArr2.includes(11))
                
                ) {
                document.querySelector('select').classList.add('hidden'); 
                document.querySelector('.result').textContent = 'You Won 💃🎉';
                playing = false;    
                } 
    }

        else{
            document.querySelector('.result').textContent = 'You Haven\'t Bingo Yet 🙄😑';
            }  
        }
    }


document.getElementById('bingo').addEventListener('click', function(){
    if(playing){result()};
})

function random_value() {
    if(playing){
   const rand_number = guess.textContent = Math.floor(Math.random()*100+1);
   const cbox2 = document.querySelectorAll('.tab-2');
    for (let i=0; i<cbox2.length; i++){
            if(cbox2[i].textContent == rand_number){
                cbox2[i].classList.add('red');
        }
    }
    
    checkBoxComputer(cardTab2);
    var e = document.getElementById('goal');
    var selected = e.options[e.selectedIndex].text;
    if (selected === 'Vertical'){
        if((newArr2.includes(0)&&newArr2.includes(4)&&newArr2.includes(8)&&newArr2.includes(12)) ||
            (newArr2.includes(1)&&newArr2.includes(5)&&newArr2.includes(9)&&newArr2.includes(13)) ||
            (newArr2.includes(2)&&newArr2.includes(6)&&newArr2.includes(10)&&newArr2.includes(14)) ||
            (newArr2.includes(3)&&newArr2.includes(7)&&newArr2.includes(11)&&newArr2.includes(15)) ){
    	    document.querySelector('.result').textContent = 'Computer Won 👾💻';
            document.querySelector('select').classList.add('hidden'); 
            playing = false;    
            } 
        }

        
    else if (selected === 'Horizontal'){
            if((newArr2.includes(0)&&newArr2.includes(1)&&newArr2.includes(2)&&newArr2.includes(3)) ||
                (newArr2.includes(4)&&newArr2.includes(5)&&newArr2.includes(6)&&newArr2.includes(7)) ||
                (newArr2.includes(8)&&newArr2.includes(9)&&newArr2.includes(10)&&newArr2.includes(11)) ||
                (newArr2.includes(12)&&newArr2.includes(13)&&newArr2.includes(14)&&newArr2.includes(15)) ){
                document.querySelector('.result').textContent = 'Computer Won 👾💻';
                playing = false; 
                document.querySelector('select').classList.add('hidden');   
                } 
            }
    else if(selected === 'Diagonal'){
                if((newArr2.includes(0)&&newArr2.includes(5)&&newArr2.includes(10)&&newArr2.includes(15)) ||
                    (newArr2.includes(3)&&newArr2.includes(6)&&newArr2.includes(9)&&newArr2.includes(12))){
                    document.querySelector('.result').textContent = 'Computer Won 👾💻';
                    document.querySelector('select').classList.add('hidden'); 
                    playing = false;    
                    } 
    }
    else if(selected === '4-Corners'){
        if((newArr2.includes(0)&&newArr2.includes(1)&&newArr2.includes(2)&&newArr2.includes(3)) ||
            (newArr2.includes(3)&&newArr2.includes(7)&&newArr2.includes(11)&&newArr2.includes(15)) ||
            (newArr2.includes(0)&&newArr2.includes(4)&&newArr2.includes(8)&&newArr2.includes(12)) ||
            (newArr2.includes(12)&&newArr2.includes(13)&&newArr2.includes(14)&&newArr2.includes(15)) ){
            document.querySelector('.result').textContent = 'Computer Won 👾💻';
            document.querySelector('select').classList.add('hidden'); 
            playing = false;    
            } 
    }
    else if(selected === 'Full Corners'){
        if((newArr2.includes(0)&&newArr2.includes(1)&&newArr2.includes(2)&&newArr2.includes(3)) ||
            (newArr2.includes(3)&&newArr2.includes(7)&&newArr2.includes(11)&&newArr2.includes(15)) ||
            (newArr2.includes(0)&&newArr2.includes(4)&&newArr2.includes(8)&&newArr2.includes(12)) ||
            (newArr2.includes(12)&&newArr2.includes(13)&&newArr2.includes(14)&&newArr2.includes(15)) ||

            (newArr2.includes(0)&&newArr2.includes(5)&&newArr2.includes(10)&&newArr2.includes(15)) ||
            (newArr2.includes(3)&&newArr2.includes(6)&&newArr2.includes(9)&&newArr2.includes(12)) ||

            (newArr.includes(1)&&newArr.includes(5)&&newArr.includes(9)&&newArr.includes(13)) ||
            (newArr.includes(2)&&newArr.includes(6)&&newArr.includes(10)&&newArr.includes(14)) ||
            
            (newArr2.includes(4)&&newArr2.includes(5)&&newArr2.includes(6)&&newArr2.includes(7)) ||
            (newArr2.includes(8)&&newArr2.includes(9)&&newArr2.includes(10)&&newArr2.includes(11))
            
            ) {
            document.querySelector('select').classList.add('hidden'); 
            document.querySelector('.result').textContent = 'Computer Won 👾💻';
            playing = false;    
            } 
}

    }
}
document.getElementById('shuffle').addEventListener('click', function (){
    arr = []
    newArr = []
    newArr2 = []
    rand(card1);
    rand(card2); 
    guess.textContent = Math.floor(Math.random()*100)+1;
    playing = true;
    document.querySelector('select').classList.remove('hidden'); 
    document.querySelector('.result').textContent = 'Let\'s Play';
    const cbox3 = document.querySelectorAll('td');
    for (let i=0; i<cbox3.length; i++){
        cbox3[i].classList.remove('red');
    };
});
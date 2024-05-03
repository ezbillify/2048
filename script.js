function moveDown() {
    for (let j = 0; j < 4; j++) {
        for (let x = 3; x > 0; x--) {
            if (!document.getElementById(`j${x}${j}`)){
                for (let index = x-1; index >= 0; index--) {
                    if (document.getElementById(`j${index}${j}`)){
                        document.getElementById(`j${index}${j}`).style.top = `${(100*(x))+(20*(x+1))}px`;
                        document.getElementById(`j${index}${j}`).setAttribute('id',`j${x}${j}`);
                        colorChanger(document.getElementById(`j${x}${j}`));
                        count++;
                        x--;
                    }
                }
            }   
        }
        for (let x = 3; x > 0 ; x--) {
            if (document.getElementById(`j${x}${j}`) && document.getElementById(`j${x-1}${j}`)){
                if (document.getElementById(`j${x}${j}`).textContent == document.getElementById(`j${x-1}${j}`).textContent){
                    section.removeChild(document.getElementById(`j${x}${j}`));
                    document.getElementById(`j${x-1}${j}`).style.top = `${(100*(x))+(20*(x+1))}px`;
                    document.getElementById(`j${x-1}${j}`).setAttribute('id',`j${x}${j}`);
                    document.getElementById(`j${x}${j}`).textContent*=2;
                    currentScore+=Number(document.getElementById(`j${x}${j}`).textContent);
                    colorChanger(document.getElementById(`j${x}${j}`));
                    count++;
                    for (let y = x; y > 0; y--) {
                        if (!document.getElementById(`j${y}${j}`)){
                            for (let index = y-1; index >= 0; index--) {
                                if (document.getElementById(`j${index}${j}`)){
                                    document.getElementById(`j${index}${j}`).style.top = `${(100*(y))+(20*(y+1))}px`;
                                    document.getElementById(`j${index}${j}`).setAttribute('id',`j${y}${j}`);
                                    colorChanger(document.getElementById(`j${y}${j}`));
                                    count++;
                                    y--;
                                }
                            }
                        }   
                    }
                }
            }
            
        }
        
    }
}

function moveRight() {
    for (let i = 0; i < 4; i++) {
        for (let y = 3; y > 0; y--) {
            if (!document.getElementById(`j${i}${y}`)){
                for (let index = y-1; index >= 0; index--) {
                    if (document.getElementById(`j${i}${index}`)){
                        document.getElementById(`j${i}${index}`).style.left = `${(100*(y))+(20*(y+1))}px`;
                        document.getElementById(`j${i}${index}`).setAttribute('id',`j${i}${y}`);
                        colorChanger(document.getElementById(`j${i}${y}`));
                        count++;
                        y--;
                    }
                }
            }   
        }
        
        for (let y = 3; y > 0 ; y--) {
            if (document.getElementById(`j${i}${y}`) && document.getElementById(`j${i}${y-1}`)){
                if (document.getElementById(`j${i}${y}`).textContent == document.getElementById(`j${i}${y-1}`).textContent){
                    section.removeChild(document.getElementById(`j${i}${y}`));
                    document.getElementById(`j${i}${y-1}`).style.left = `${(100*(y))+(20*(y+1))}px`;
                    document.getElementById(`j${i}${y-1}`).setAttribute('id',`j${i}${y}`);
                    document.getElementById(`j${i}${y}`).textContent*=2;
                    currentScore+=Number(document.getElementById(`j${i}${y}`).textContent);
                    colorChanger(document.getElementById(`j${i}${y}`));
                    count++;
                    for (let x = y; x > 0; x--) {
                        if (!document.getElementById(`j${i}${x}`)){
                            for (let index = x-1; index >= 0; index--) {
                                if (document.getElementById(`j${i}${index}`)){
                                    document.getElementById(`j${i}${index}`).style.left = `${(100*(x))+(20*(x+1))}px`;
                                    document.getElementById(`j${i}${index}`).setAttribute('id',`j${i}${x}`);
                                    colorChanger(document.getElementById(`j${i}${x}`));
                                    count++;
                                    x--;
                                }
                            }
                        }   
                    }
                }
            }
            
        }
    }
}

function moveUp() {
    for (let j = 0; j < 4; j++) {
        for (let x = 0; x < 3; x++) {
            if (!document.getElementById(`j${x}${j}`)){
                for (let index = x+1; index <= 3; index++) {
                    if (document.getElementById(`j${index}${j}`)){
                        document.getElementById(`j${index}${j}`).style.top = `${(100*(x))+(20*(x+1))}px`;
                        document.getElementById(`j${index}${j}`).setAttribute('id',`j${x}${j}`);
                        colorChanger(document.getElementById(`j${x}${j}`));
                        count++;
                        x++;
                    }
                }
            }   
        }
        for (let x = 0; x < 3 ; x++) {
            if (document.getElementById(`j${x}${j}`) && document.getElementById(`j${x+1}${j}`)){
                if (document.getElementById(`j${x}${j}`).textContent == document.getElementById(`j${x+1}${j}`).textContent){
                    section.removeChild(document.getElementById(`j${x}${j}`));
                    document.getElementById(`j${x+1}${j}`).style.top = `${(100*(x))+(20*(x+1))}px`;
                    document.getElementById(`j${x+1}${j}`).setAttribute('id',`j${x}${j}`);
                    document.getElementById(`j${x}${j}`).textContent*=2;
                    currentScore+=Number(document.getElementById(`j${x}${j}`).textContent);
                    colorChanger(document.getElementById(`j${x}${j}`));
                    count++;
                    for (let y = x; y < 3; y++) {
                        if (!document.getElementById(`j${y}${j}`)){
                            for (let index = y+1; index <= 3; index++) {
                                if (document.getElementById(`j${index}${j}`)){
                                    document.getElementById(`j${index}${j}`).style.top = `${(100*(y))+(20*(y+1))}px`;
                                    document.getElementById(`j${index}${j}`).setAttribute('id',`j${y}${j}`);
                                    colorChanger(document.getElementById(`j${y}${j}`));
                                    count++;
                                    y++;
                                }
                            }
                        }   
                    }
                }
            }
            
        }
        
    }
}


function moveLeft() {
    for (let i = 0; i < 4; i++) {
        for (let y = 0; y < 3; y++) {
            if (!document.getElementById(`j${i}${y}`)){
                for (let index = y+1; index <= 3; index++) {
                    if (document.getElementById(`j${i}${index}`)){
                        document.getElementById(`j${i}${index}`).style.left = `${(100*(y))+(20*(y+1))}px`;
                        document.getElementById(`j${i}${index}`).setAttribute('id',`j${i}${y}`);
                        colorChanger(document.getElementById(`j${i}${y}`));
                        count++;
                        y++;
                    }
                }
            }  
            
        }
        for (let y = 0; y < 3 ; y++) {
            if (document.getElementById(`j${i}${y}`) && document.getElementById(`j${i}${y+1}`)){
                if (document.getElementById(`j${i}${y}`).textContent == document.getElementById(`j${i}${y+1}`).textContent){
                    section.removeChild(document.getElementById(`j${i}${y}`));
                    document.getElementById(`j${i}${y+1}`).style.left = `${(100*(y))+(20*(y+1))}px`;
                    document.getElementById(`j${i}${y+1}`).setAttribute('id',`j${i}${y}`);
                    document.getElementById(`j${i}${y}`).textContent*=2;
                    currentScore+=Number(document.getElementById(`j${i}${y}`).textContent);
                    colorChanger(document.getElementById(`j${i}${y}`));
                    count++;
                    for (let j = y; j < 3; j++) {
                        if (!document.getElementById(`j${i}${j}`)){
                            for (let index = j+1; index <= 3; index++) {
                                if (document.getElementById(`j${i}${index}`)){
                                    document.getElementById(`j${i}${index}`).style.left = `${(100*(j))+(20*(j+1))}px`;
                                    document.getElementById(`j${i}${index}`).setAttribute('id',`j${i}${j}`);
                                    colorChanger(document.getElementById(`j${i}${j}`));
                                    count++;
                                    j++;
                                }
                            }
                        }  
                        
                    }
                }
            }
            
        }
    }
}



let count = 0;

const main = document.querySelector('.main');
const section = document.querySelector('section');
const score = document.getElementById('score');
const best = document.getElementById('best');
const newGame = document.getElementById('newGame');
const endGame = document.querySelector('article');
const colors = {
    0:'#CCC0B4',
    2:'#EEE4DA',
    4:'#EDE0C8',
    8:'#F2B179',
    16:'#F59563',
    32:'#F67C60',
    64:'#F65E3B',
    128:'#EDCF73',
    256:'#EDCC62',
    512:'#EDC850',
    1024:'#EDC53F',
    2048:'#EDC22D',
}
let currentScore = 0;
let empty = [];
let bestScore = 0;
if (!localStorage.getItem('best')){
    localStorage.setItem('best',0);
}
function startGame() {
    window.addEventListener('keyup',moveSelector);
    endGame.style.display = 'none';
    empty = [];
    currentScore = 0;
    score.textContent=0;
    best.textContent=localStorage.getItem('best');
    bestScore = localStorage.getItem('best');
    main.innerHTML = '';
    section.innerHTML = '';
    for (let i = 0; i < 4; i++) {
        let row = document.createElement('div');
        row.classList.add('rows');
        for (let j = 0; j < 4; j++) {
            let cell = document.createElement('div');
            cell.setAttribute('id',`i${i}${j}`);
            cell.classList.add('cells');
            empty.push(`j${i}${j}`);
            row.append(cell);
        }
        main.append(row);
    }
    startingNum();
}
function startingNum() {
    let l = [[2,2],[2,2],[2,2],[2,4]];
    let r = Math.floor(Math.random()*4);
    for (let i = 0; i < l[r].length; i++) {
        createNumber(l[r][i]);
    }
}
function createNumber(num) {
    if (empty.length>0){
        let x = Math.floor(Math.random()*empty.length);;
        let mCell = document.createElement('div');
        mCell.id = empty[x];
        mCell.style.top = `${(100*Number(empty[x][1]))+(20*(Number(empty[x][1])+1))}px`;
        mCell.style.left = `${(100*Number(empty[x][2]))+(20*(Number(empty[x][2])+1))}px`;
        mCell.textContent = num;
        colorChanger(mCell);
        mCell.style.scale = '0.8';
        setTimeout(() => {
            mCell.style.scale = '1';
        }, 100);
        section.append(mCell);
        empty.splice(x, 1);
    }
}
window.addEventListener('keyup',moveSelector);
function moveSelector(e) {
    if (String(e.key).startsWith('Arrow')){
        l=[2,2,2,4]
        count = 0;
        if (e.key=='ArrowDown'){
            moveDown();
        }else if(e.key=='ArrowUp'){
            moveUp();
        }else if(e.key=='ArrowRight'){
            moveRight();
        }else if(e.key=='ArrowLeft'){
            moveLeft();
        }
        empty=[];
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (!document.getElementById(`j${i}${j}`)){
                    empty.push(`j${i}${j}`);
                }
            }
        }
        score.textContent = currentScore;
        if (currentScore>bestScore){
            best.textContent = currentScore;
            localStorage.setItem('best',currentScore);
        }
        if (count>0) {
            createNumber(l[Math.floor(Math.random()*4)]);
        }else{
            count=0;
        }
        if (empty.length==0){
            if (gameOver()){
                endGame.style.display = 'flex';
                window.removeEventListener('keyup',moveSelector);
            }
            document.querySelectorAll('section>div').forEach(element => {
                element.style.scale = 1;
            });
        }
    }
}


function colorChanger(e) {
    e.style.backgroundColor = colors[Number(e.textContent)];
}
function gameOver() {
    let start = JSON.stringify(section.innerHTML);
    moveLeft();
    let left = JSON.stringify(section.innerHTML);
    if (left!==start){
        section.innerHTML = JSON.parse(start);
        return false;
    }
    moveRight();
    let right = JSON.stringify(section.innerHTML);
    if (right!==start){
        section.innerHTML = JSON.parse(start);
        return false;
    }
    moveUp();
    let up = JSON.stringify(section.innerHTML);
    if (up!=start) {
        section.innerHTML = JSON.parse(start);
        return false;
    }
    moveDown();
    let down = JSON.stringify(section.innerHTML);
    if (down!=start) {
        section.innerHTML = JSON.parse(start);
        return false;
    }
    return true;
}
startGame();

newGame.onclick=startGame;
document.getElementById('tryAgain').onclick = startGame;
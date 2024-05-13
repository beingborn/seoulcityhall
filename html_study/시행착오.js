function moveRight() {
    var currentView = 0;
    var slideInterval;

    function transitionSlide() {
        if (currentView >= 0) { // 기존 슬라이드 1번 도달 시 위치 변경
            slideBox.style.transform = 'translateX(-' + (690 * (currentView + 1)) + 'px)';
            slideBox.style.transition = '0.3s';
            currentView++;
        }

        if (currentView === (slideImg.length + 1)) { // 클론 이미지까지 도달 시 기존 슬라이드 위치 초기화
            slideBox.style.transition = '0s';
            slideBox.style.transform = 'translateX(0px)';
            currentView = 0;
        }
    }

    slideInterval = setInterval(transitionSlide, 3000);
}


function moveRight() {

var currentView = 0;

setInterval(function(){

    if (currentView >= 0) { // 기존 슬라이드 1번 도달 시 위치 변경
    slideBox.style.transform = 'translateX(-' + (690 * (currentView + 1)) +'px)';
        slideBox.style.transition = '0.3s'
        currentView++; 
    }

setTimeout(function(){ // 클론 이미지까지 도달 시 기존 슬라이드 위치 초기화

    if (currentView === (slideImg.length + 1)) {
        slideBox.style.transition = '0s'
        slideBox.style.transform = 'translateX(0px)'
       
        currentView = 0
    }

},3000);

}, 3000);

}

moveRight();


내 생각 : 지금 코드가 아니라.. 그 setInterval 하나만 이용해도 충분히 if문과 반복문을 합칠 수 있지 않을까?

var currentView = 0;

setInterval(function(){
    slideBox.style.transform = 'translateX(-' + (690 * (currentView + 1)) +'px)';
    slideBox.style.transition = '0.3s'
    currentView++; 

    if (currentView === (slideImg.length + 1)) {
        slideBox.style.transition = '0s'
        slideBox.style.transform = 'translateX(0px)'
        currentView = 0
    }

}, 3000);


function moveRight() {

    var currentView = 0;
    
    setInterval(function(){
    
        if (currentView >= 0) { // 기존 슬라이드 1번 도달 시 위치 변경
      
        }
    
    setTimeout(function(){ // 클론 이미지까지 도달 시 기존 슬라이드 위치 초기화
    
        if (currentView === (slideImg.length + 1)) {
            slideBox.style.transition = '0s'
            slideBox.style.transform = 'translateX(0px)'
           
            currentView = 0
        }
    
    },3000);
    
    }, 3000);
    
    }



















function stopSlide(){
    setTimeout(function(){
        if (currentView === (slideImg.length + 2)) {
            slideBox.style.transform = 'translateX(-690px)'
            slideBox.style.transition = '0s'
            currentView = 0
        }
    }, 3000)
    
    }
}
moveRight();


moveRight();


실제 코드 (이전, 다음 버튼 슬라이드)

document.querySelector('.next').addEventListener('click', function () {
    if (currentView === 0) {
        slideBox.style.transform = 'translateX(-690px)'
        currentView = currentView + 1;
        console.log(currentView);

    } else if (currentView === 1) {
        slideBox.style.transform = 'translateX(-1380px)';
        currentView = currentView + 1;
        console.log(currentView);
    }
});

// 

document.querySelector('.prev').addEventListener('click', function () {
    if (currentView === 2) {
        slideBox.style.transform = 'translateX(-690px)'
        currentView = currentView - 1;
        console.log(currentView);

    } else if (currentView === 1) {
        slideBox.style.transform = 'translateX(0px)';
        currentView = currentView - 1;
        console.log(currentView);

    }
});



// slideBox.prepend(cloneLast); 



// function makeClone() {
//         for (let j = 0 ; j < slideImg.length; j++) {
//             let slideClone = slideImg[j].cloneNode(true);
//             slideClone.classList.add("clone");
//             slideBox.appendChild(slideClone);
//         }
//     };
    




// function makeClone() {
//     for (let j = 0 ; j < slideImg.length; j++) {
//         let slideClone = slideImg[j].cloneNode(true);
//         slideClone.classList.add("clone");
//         slideBox.appendChild(slideClone);
//     }
// };


//클론 함수

// makeClone();



// function moveRight(){

//     var currentView = 0;

// sliderClone 추가 함수

    

    
//     setInterval(function(){

//         slideBox.style.transform = 'translateX(-' + (690 * (currentView + 1)) +'px)';
//         slideBox.style.transition = '0.3s'
//         currentView++; 
//     },3500);
    
//         if(currentView === (slideImg.length + 2)) {
           
//             slideBox.style.transform = 'translateX(-690px)'
//             slideBox.style.transition = '0s'
//             currentView = 0;

//         }

    
// }
// list 글자별 색상 변경 기능

$(".news-tit").each(function () {
  $(this).html(
    $(this).html().replace(/환경/g, '<span style="color:green">환경</span>')
  );
});

$(".news-tit").each(function () {
  $(this).html(
    $(this).html().replace(/경제/g, '<span style="color:green">경제</span>')
  );
});

$(".news-tit").each(function () {
  $(this).html(
    $(this).html().replace(/문화/g, '<span style="color:purple">문화</span>')
  );
});

$(".news-tit").each(function () {
  $(this).html(
    $(this).html().replace(/교통/g, '<span style="color:blue">교통</span>')
  );
});

// list background 인식 + style 적용 기능

$(document).ready(function () {
  $("span.img-badge:contains('환경')").addClass("purple-bg");
});

$(document).ready(function () {
  $("span.img-badge:contains('복지')").addClass("orange-bg");
});

$(document).ready(function () {
  $("span.img-badge:contains('교통')").addClass("blue-bg");
});

$(document).ready(function () {
  $("span.img-badge:contains('행정')").addClass("green-bg");
});

$(document).ready(function () {
  $("span.img-badge:contains('안전')").addClass("red-bg");
});


// 변수 선언

var slideBox = document.querySelector(".slider-wrap");

var slideImg = document.querySelectorAll(".left-carousel");

var currentView = 1;

var prevBtn = document.querySelector(".prev");
var nextBtn = document.querySelector(".next");

var slideCount = slideImg.length;
var slideWidth = 690;

var slideFirstClone = slideBox.firstElementChild;
var slideLastClone = slideBox.lastElementChild;

var cloneFirst = slideFirstClone.cloneNode(true);

var slidePosition = 1;
var slideWidth = 690;

var topBtn = document.querySelector(".top-btn");

slideBox.appendChild(cloneFirst);

var auto = true;



// 자동 슬라이드 

var slideInterval;

function moveAuto(auto) {
  slideInterval = setInterval(transitionSlide, 3000);

  function transitionSlide() {
    if (currentView >= 1) {
      slideBox.style.transition = "0.3s";
      slideBox.style.transform = "translateX(-" + 690 * currentView + "px)";
      currentView++;
      document.querySelector('#con-counter').innerHTML = currentView + "/3"

      // console.log(currentView);

      if (currentView === slideImg.length + 1) {
        document.querySelector('#con-counter').innerHTML = (currentView - 3) + "/3"
        setTimeout(function () {
          slideBox.style.transition = "0s";
          slideBox.style.transform = "translateX(0px)";
          currentView = 1;
        }, 300);

        return slideInterval;
      }
    }
  }
}

moveAuto();

// 메인 슬라이드 이동 버튼

nextBtn.addEventListener("click", function () {
  if (currentView >= 1 && currentView != slideImg.length) {
    clearInterval(slideInterval);

    slidePosition = currentView * slideWidth;

    slideBox.style.transition = "0.3s";
    slideBox.style.transform = `translateX(-${slidePosition}px)`;
    currentView += 1;
    document.querySelector('#con-counter').innerHTML = currentView + "/3"

    moveAuto(auto);
  }
});

// - 1 하는 이유 -> 총 슬라이드 개수가 똑같지 않음 + 시작 위치 (0)에 슬라이드 왼쪽 끝이 다달아야 보이기 때문에

prevBtn.addEventListener("click", function () {
  if (currentView > 1) {
    clearInterval(slideInterval);
    currentView -= 1;
    document.querySelector('#con-counter').innerHTML = currentView + "/3"
    slidePosition = (currentView - 1) * slideWidth;
    slideBox.style.transform = `translateX(-${slidePosition}px)`;
    document.querySelector('#con-counter').innerHTML = currentView + "/3"

    moveAuto(auto);
  }
});


// 메인 슬라이드 정지 버튼

var mainPausePlayBtn = document.querySelector('#main-pauseBtn');

var mainPauseCount = 0

mainPausePlayBtn.addEventListener('click', function(){
  mainPauseCount += 1
  if (mainPauseCount % 2 == 1) {
    mainPausePlayBtn.classList.remove("fa-pause");
    mainPausePlayBtn.classList.add("fa-play");
    clearInterval(slideInterval);
  }
  if(mainPauseCount % 2 == 0) {
    mainPausePlayBtn.classList.remove("fa-play");
    mainPausePlayBtn.classList.add("fa-pause");
    moveAuto();
  }
})

// 3에서 -1 을 한 값을 currentView에 저장함
// currentView * slideWidth를 통해 이전 페이지 위치 계산 후 Position에 담음
// translate X 로 그 위치로 이동

// 궁금한 점 -> 실질적으로 currentView 숫자에 영향을 주는 건 currentView -= 1; 인 것은 알겠다.
// 근데 이미 currentview가 1이 줄어든 시점에서 왜? currentView - 1 을 해줘야 이전 위치 값으로 제대로 이동하는 것인가?

// Top-btn scroll event

$(".top-btn").css({ transition: "1s", opacity: 0, bottom: 120 });

$(window).scroll(function () {
  var h = $(document).scrollTop();

  if (h > 800) {
    $(".top-btn").css({ opacity: 1, bottom: 100 });
  }

  if (h < 800) {
    $(".top-btn").css({ opacity: 0, bottom: 120 });
  }
});

// 배너 오늘 하루 보지 않기 기능

document.querySelector('.closeA').addEventListener('click',function(){
  document.querySelector('.top-banner').style.top = "-100px"
  document.querySelector('.top-banner').style.height = "0px"
})

// 1. 버튼 별로 인덱스 값을 가진 배열 생성
// 2. 클릭할 때마다 인덱스 값 + 1 씩 추가
// 3. ex) [?]번 인덱스 값이 { (1,3,5) == 홀수 값 } 될 시 다른 인덱스 값을 무조건 0 초기화하는 함수 생성



// 0인 이유 인덱스 값은 1번째는 0, 1, 2, 3, 4 이런식 이니까 < children's length 로 실행 children은 5개 임으로 0,1,2,3,4 총 5개를 토글 리스트에 넣겠다는 소리
// 현재 토글리스트 toggleList [li:1, li:2 li:3]











// 변수 선언

var parentToggle = document.querySelector('.gray-cont');
var children = parentToggle.children
let buttonToggles = [];

for (var i = 0; i < children.length; i++) {
  buttonToggles.push(children[i]);
}



 buttonToggles[0] = 1; //1:닫힌상태, 0:열린상태
 buttonToggles[1] = 1;
 buttonToggles[2] = 1;
 buttonToggles[3] = 1;
 buttonToggles[4] = 1;


// []번 인덱스 해당 버튼 클릭 시 다른 값 배열 안 값을 변경(비활성화)해주는 함수

function resetToggles(currentButton) {

  for (let i = 0; i < 5; i++) {
    if (i !== currentButton) {
      buttonToggles[i] = 1;
  } 
        
  }
}


document.querySelector('.toggle1').addEventListener('click',function(){

  resetToggles(0);

  // 비활성화 2,3,5 (5아직 안함)

  // 비활성화 2
    document.querySelector('.foot-gnb2').style.bottom = "55px"
    document.querySelector('.foot-gnb2').style.height = "0px"
    document.querySelector('.toggle2').style.backgroundColor = "#f7f7f7"
    document.querySelector('.local-arrow3').style.transform = "rotate(-90deg)"

  // 비활성화 3
    document.querySelector('.foot-gnb3').style.bottom = "55px"
    document.querySelector('.foot-gnb3').style.height = "0px"
    document.querySelector('.toggle3').style.backgroundColor = "#f7f7f7"
    document.querySelector('.local-arrow4').style.transform = "rotate(-90deg)"
  
    // 비활성화 5 
    document.querySelector('.foot-gnb5').style.bottom = "55px"
    document.querySelector('.foot-gnb5').style.height = "0px"
    document.querySelector('.toggle5').style.backgroundColor = "#f7f7f7"
    document.querySelector('.local-arrow5').style.transform = "rotate(-90deg)"


  if (buttonToggles[0] === 1){
    // 이게 활성화
    document.querySelector('.foot-gnb1').style.bottom = "95px"
    document.querySelector('.foot-gnb1').style.height = "265px"
    document.querySelector('.toggle1').style.backgroundColor = "#e2e2e2"
    document.querySelector('.local-arrow2').style.transform = "rotate(-270deg)"
     buttonToggles[0] = 0;

  } else {
    document.querySelector('.foot-gnb1').style.bottom = "55px"
    document.querySelector('.foot-gnb1').style.height = "0px"
    document.querySelector('.toggle1').style.backgroundColor = "#f7f7f7"
    document.querySelector('.local-arrow2').style.transform = "rotate(-90deg)"

	buttonToggles[0] = 1;
  }
  console.log(buttonToggles);
});


document.querySelector('.toggle2').addEventListener('click',function(){

// 비활성화 1,3,5
  resetToggles(1);
  // gnb-1 비활성
    document.querySelector('.foot-gnb1').style.bottom = "55px"
    document.querySelector('.foot-gnb1').style.height = "0px"
    document.querySelector('.toggle1').style.backgroundColor = "#f7f7f7"
    document.querySelector('.local-arrow2').style.transform = "rotate(-90deg)"

  // gnb-3 비활성 
    document.querySelector('.foot-gnb3').style.bottom = "55px"
    document.querySelector('.foot-gnb3').style.height = "0px"
    document.querySelector('.toggle3').style.backgroundColor = "#f7f7f7"
    document.querySelector('.local-arrow4').style.transform = "rotate(-90deg)"

  // 비활성화 5 
    document.querySelector('.foot-gnb5').style.bottom = "55px"
    document.querySelector('.foot-gnb5').style.height = "0px"
    document.querySelector('.toggle5').style.backgroundColor = "#f7f7f7"
    document.querySelector('.local-arrow5').style.transform = "rotate(-90deg)"


  if (buttonToggles[1] === 1){
    document.querySelector('.foot-gnb2').style.bottom = "95px"
    document.querySelector('.foot-gnb2').style.height = "265px"
    document.querySelector('.toggle2').style.backgroundColor = "#e2e2e2"
    document.querySelector('.local-arrow3').style.transform = "rotate(-270deg)"
	buttonToggles[1] = 0;



  } else {

    document.querySelector('.foot-gnb2').style.bottom = "55px"
    document.querySelector('.foot-gnb2').style.height = "0px"
    document.querySelector('.toggle2').style.backgroundColor = "#f7f7f7"
    document.querySelector('.local-arrow3').style.transform = "rotate(-90deg)"

	buttonToggles[1] = 1;
  }

  console.log(buttonToggles);

});


document.querySelector('.toggle3').addEventListener('click',function(){

  resetToggles(2);

  // 비활성화 1,2,5

  // 비활성화 1 
  document.querySelector('.foot-gnb1').style.bottom = "55px"
  document.querySelector('.foot-gnb1').style.height = "0px"
  document.querySelector('.toggle1').style.backgroundColor = "#f7f7f7"
  document.querySelector('.local-arrow2').style.transform = "rotate(-90deg)"

  // 비활성화 2
    document.querySelector('.foot-gnb2').style.bottom = "55px"
    document.querySelector('.foot-gnb2').style.height = "0px"
    document.querySelector('.toggle2').style.backgroundColor = "#f7f7f7"
    document.querySelector('.local-arrow3').style.transform = "rotate(-90deg)"

  // 비활성화 5 
    document.querySelector('.foot-gnb5').style.bottom = "55px"
    document.querySelector('.foot-gnb5').style.height = "0px"
    document.querySelector('.toggle5').style.backgroundColor = "#f7f7f7"
    document.querySelector('.local-arrow5').style.transform = "rotate(-90deg)"


  if (buttonToggles[2] === 1){
    // 활성화 3 (자신)
    document.querySelector('.foot-gnb3').style.bottom = "95px"
    document.querySelector('.foot-gnb3').style.height = "265px"
    document.querySelector('.toggle3').style.backgroundColor = "#e2e2e2"
    document.querySelector('.local-arrow4').style.transform = "rotate(-270deg)"
	buttonToggles[2] = 0;



  } else {
    // 비활성화 3 (자신)
    document.querySelector('.foot-gnb3').style.bottom = "55px"
    document.querySelector('.foot-gnb3').style.height = "0px"
    document.querySelector('.toggle3').style.backgroundColor = "#f7f7f7"
    document.querySelector('.local-arrow4').style.transform = "rotate(-90deg)"

	buttonToggles[2] = 1;
  }

  console.log(buttonToggles);

});

document.querySelector('.toggle5').addEventListener('click',function(){

  resetToggles(4);

  // 비활성화 1,2,3

  // 비활성화 1 
  document.querySelector('.foot-gnb1').style.bottom = "55px"
  document.querySelector('.foot-gnb1').style.height = "0px"
  document.querySelector('.toggle1').style.backgroundColor = "#f7f7f7"
  document.querySelector('.local-arrow2').style.transform = "rotate(-90deg)"

  // 비활성화 2
    document.querySelector('.foot-gnb2').style.bottom = "55px"
    document.querySelector('.foot-gnb2').style.height = "0px"
    document.querySelector('.toggle2').style.backgroundColor = "#f7f7f7"
    document.querySelector('.local-arrow3').style.transform = "rotate(-90deg)"

  // 비활성화 3 
    document.querySelector('.foot-gnb3').style.bottom = "55px"
    document.querySelector('.foot-gnb3').style.height = "0px"
    document.querySelector('.toggle3').style.backgroundColor = "#f7f7f7"
    document.querySelector('.local-arrow4').style.transform = "rotate(-90deg)"

  if (buttonToggles[4] === 1){
    // 활성화 5 (자신)
    document.querySelector('.foot-gnb5').style.bottom = "95px"
    document.querySelector('.foot-gnb5').style.height = "265px"
    document.querySelector('.toggle5').style.backgroundColor = "#e2e2e2"
    document.querySelector('.local-arrow5').style.transform = "rotate(-270deg)"
	buttonToggles[4] = 0;



  } else {
    // 비활성화 5 (자신)
    document.querySelector('.foot-gnb5').style.bottom = "55px"
    document.querySelector('.foot-gnb5').style.height = "0px"
    document.querySelector('.toggle5').style.backgroundColor = "#f7f7f7"
    document.querySelector('.local-arrow5').style.transform = "rotate(-90deg)"

	buttonToggles[4] = 1;
  }

  console.log(buttonToggles);

});










































// document.querySelector('.toggle2').addEventListener('click',function(){

//   if (buttonToggles[1] === 1) {
//     buttonToggles[1] = 0;
//     document.querySelector('.foot-gnb2').style.bottom = "95px"
//     document.querySelector('.foot-gnb2').style.height = "265px"
//     document.querySelector('.toggle2').style.backgroundColor = "#e2e2e2"
//     document.querySelector('.local-arrow3').style.transform = "rotate(-270deg)"
//     resetToggles(1);
//     console.log(buttonToggles)

//      // 2번 버튼 외에 버튼 값 1 (비활성화)
  
//   } else {
//     buttonToggles[1] = 1

//     document.querySelector('.foot-gnb2').style.bottom = "55px"
//     document.querySelector('.foot-gnb2').style.height = "0px"
//     document.querySelector('.toggle2').style.backgroundColor = "#f7f7f7"
//     document.querySelector('.local-arrow3').style.transform = "rotate(-90deg)"
//     console.log(buttonToggles)

//   }
// });






  
  // if(buttonToggles1 == 0) {
  //   document.querySelector('.foot-gnb1').style.bottom = "95px"
  //   document.querySelector('.foot-gnb1').style.height = "265px"
  //   document.querySelector('.toggle1').style.backgroundColor = "#e2e2e2"
  //   document.querySelector('.local-arrow2').style.transform = "rotate(-270deg)"

  //   resetToggles(0);
  //   console.log(buttonToggles2);
  //   } 
    // else if (buttonToggles1 == 1) {
    //   document.querySelector('.foot-gnb1').style.bottom = "55px"
    //   document.querySelector('.foot-gnb1').style.height = "0px"
    //   document.querySelector('.toggle1').style.backgroundColor = "#f7f7f7"
    //   document.querySelector('.local-arrow2').style.transform = "rotate(-90deg)"
    // }



// document.querySelector('.toggle2').addEventListener('click', function(){

//   if (buttonToggles2 === 1) {
//     buttonToggles2 = 0;
//   } else {
//     buttonToggles2 = 1
//   }

  
//   if(buttonToggles2 == 0) {
//     document.querySelector('.foot-gnb2').style.bottom = "95px"
//     document.querySelector('.foot-gnb2').style.height = "265px"
//     document.querySelector('.toggle2').style.backgroundColor = "#e2e2e2"
//     document.querySelector('.local-arrow3').style.transform = "rotate(-270deg)"

//     resetToggles(1);
//     console.log(buttonToggles1);

//     } else if (buttonToggles2 == 1) {
//       document.querySelector('.foot-gnb2').style.bottom = "55px"
//       document.querySelector('.foot-gnb2').style.height = "0px"
//       document.querySelector('.toggle2').style.backgroundColor = "#f7f7f7"
//       document.querySelector('.local-arrow3').style.transform = "rotate(-90deg)"
//     }
// });





// buttonToggle.addEventListener('click', function(){
  
//   buttonToggle1 = 1;

//   if(buttonToggle1 == 1) {
//     document.querySelector('.foot-gnb1').style.bottom = "95px"
//     document.querySelector('.foot-gnb1').style.height = "265px"
//     document.querySelector('.business-btn').style.backgroundColor = "#e2e2e2"
//     document.querySelector('.local-arrow2').style.transform = "rotate(-270deg)"
  
//   resetToggles(buttonToggle1);
// }
// });

//     document.querySelector('.foot-gnb2').style.bottom = "55px"
//     document.querySelector('.foot-gnb2').style.height = "0px"
//     document.querySelector('.danger-btn').style.backgroundColor = "#f7f7f7"
//     document.querySelector('.local-arrow3').style.transform = "rotate(-90deg)"
      

//     document.querySelector('.foot-gnb3').style.bottom = "55px"
//     document.querySelector('.foot-gnb3').style.height = "0px"
//     document.querySelector('.borough-btn').style.backgroundColor = "#f7f7f7"
//     document.querySelector('.local-arrow4').style.transform = "rotate(-90deg)"

//     document.querySelector('.foot-gnb').style.bottom = "55px"
//     document.querySelector('.foot-gnb').style.height = "0px"
//     document.querySelector('.local-btn').style.backgroundColor = "#f7f7f7"
//     document.querySelector('.local-arrow5').style.transform = "rotate(-90deg)"

    // buttonToggle1=1;
//   } 
//   else {
//     document.querySelector('.foot-gnb1').style.bottom = "55px"
//     document.querySelector('.foot-gnb1').style.height = "0px"
//     document.querySelector('.business-btn').style.backgroundColor = "#f7f7f7"
//     document.querySelector('.local-arrow2').style.transform = "rotate(-90deg)"

//     // buttonToggle1=0;
//   }


// });

//gnb-2

// document.querySelector('.danger-btn').addEventListener('click', function(){

 // buttonToggle += 1

  // buttonToggle1=0;


//   if(buttonToggle2 == 0) {
//   document.querySelector('.foot-gnb2').style.bottom = "95px"
//   document.querySelector('.foot-gnb2').style.height = "265px"
//   document.querySelector('.danger-btn').style.backgroundColor = "#e2e2e2"
//   document.querySelector('.local-arrow3').style.transform = "rotate(-270deg)"
//   console.log(buttonToggle);

//   document.querySelector('.foot-gnb1').style.bottom = "55px"
//   document.querySelector('.foot-gnb1').style.height = "0px"
//   document.querySelector('.business-btn').style.backgroundColor = "#f7f7f7"
//   document.querySelector('.local-arrow2').style.transform = "rotate(-90deg)"

//   document.querySelector('.foot-gnb3').style.bottom = "55px"
//   document.querySelector('.foot-gnb3').style.height = "0px"
//   document.querySelector('.borough-btn').style.backgroundColor = "#f7f7f7"
//   document.querySelector('.local-arrow4').style.transform = "rotate(-90deg)"

//   document.querySelector('.foot-gnb').style.bottom = "55px"
//   document.querySelector('.foot-gnb').style.height = "0px"
//   document.querySelector('.local-btn').style.backgroundColor = "#f7f7f7"
//   document.querySelector('.local-arrow5').style.transform = "rotate(-90deg)"
//   buttonToggle2=1;
// } // 짝수 번 누르면
//   else {


//     document.querySelector('.foot-gnb2').style.bottom = "55px"
//     document.querySelector('.foot-gnb2').style.height = "0px"
//     document.querySelector('.danger-btn').style.backgroundColor = "#f7f7f7"
//     document.querySelector('.local-arrow3').style.transform = "rotate(-90deg)"
//     console.log(buttonToggle);   

//     buttonToggle2=0;
//   }


// });


/*
// gnb 3

document.querySelector('.borough-btn').addEventListener('click', function(){
  buttonToggle += 1
  console.log(buttonToggle);

  if(buttonToggle % 2 == 1) {
  document.querySelector('.foot-gnb3').style.bottom = "95px"
  document.querySelector('.foot-gnb3').style.height = "265px"
  document.querySelector('.borough-btn').style.backgroundColor = "#e2e2e2"
  document.querySelector('.local-arrow4').style.transform = "rotate(-270deg)"



  } // 짝수 번 누르면
  else if (buttonToggle % 2 == 0) {
    document.querySelector('.foot-gnb1').style.bottom = "55px"
    document.querySelector('.foot-gnb1').style.height = "0px"
    document.querySelector('.business-btn').style.backgroundColor = "#f7f7f7"
    document.querySelector('.local-arrow2').style.transform = "rotate(-90deg)"

    document.querySelector('.foot-gnb2').style.bottom = "55px"
    document.querySelector('.foot-gnb2').style.height = "0px"
    document.querySelector('.danger-btn').style.backgroundColor = "#f7f7f7"
    document.querySelector('.local-arrow3').style.transform = "rotate(-90deg)"
    console.log(buttonToggle);   

    document.querySelector('.foot-gnb3').style.bottom = "55px"
    document.querySelector('.foot-gnb3').style.height = "0px"
    document.querySelector('.borough-btn').style.backgroundColor = "#f7f7f7"
    document.querySelector('.local-arrow4').style.transform = "rotate(-90deg)"

    document.querySelector('.foot-gnb').style.bottom = "55px"
    document.querySelector('.foot-gnb').style.height = "0px"
    document.querySelector('.local-btn').style.backgroundColor = "#f7f7f7"
    document.querySelector('.local-arrow5').style.transform = "rotate(-90deg)"
  }


});

// 구현 = > 해당 접기 펴기 버튼이 홀수번 (활성화 될 시) 해당 버튼 값 제외 다른 버튼들 0 혹은 짝수로 만들어 비활성화 만들기



// gnb 5

document.querySelector('.local').addEventListener('click', function(){
    buttonToggle += 1
    console.log(buttonToggle);

    if(buttonToggle % 2 == 1) {
    document.querySelector('.foot-gnb').style.bottom = "95px"
    document.querySelector('.foot-gnb').style.height = "166px"
    document.querySelector('.local-btn').style.backgroundColor = "#e2e2e2"
    document.querySelector('.local-arrow5').style.transform = "rotate(-270deg)"
    } // 짝수 번 누르면
    else if (buttonToggle % 2 == 0) {
      document.querySelector('.foot-gnb1').style.bottom = "55px"
      document.querySelector('.foot-gnb1').style.height = "0px"
      document.querySelector('.business-btn').style.backgroundColor = "#f7f7f7"
      document.querySelector('.local-arrow2').style.transform = "rotate(-90deg)"
  
      document.querySelector('.foot-gnb2').style.bottom = "55px"
      document.querySelector('.foot-gnb2').style.height = "0px"
      document.querySelector('.danger-btn').style.backgroundColor = "#f7f7f7"
      document.querySelector('.local-arrow3').style.transform = "rotate(-90deg)"
      console.log(buttonToggle);   
  
      document.querySelector('.foot-gnb3').style.bottom = "55px"
      document.querySelector('.foot-gnb3').style.height = "0px"
      document.querySelector('.borough-btn').style.backgroundColor = "#f7f7f7"
      document.querySelector('.local-arrow4').style.transform = "rotate(-90deg)"
  
      document.querySelector('.foot-gnb').style.bottom = "55px"
      document.querySelector('.foot-gnb').style.height = "0px"
      document.querySelector('.local-btn').style.backgroundColor = "#f7f7f7"
      document.querySelector('.local-arrow5').style.transform = "rotate(-90deg)"
    }


    // document.querySelector('.foot-gnb').style.display = "block";
});

*/

// 밑 슬라이드

var footSlideBox = document.querySelector(".advert-wrap");

var footSlideImg = document.querySelectorAll(".slidead");

var footCurrentView = 1;

var footPrevBtn = document.querySelector(".foot-prev");
var footNextBtn = document.querySelector(".foot-next");
var footPauseBtn = document.querySelector('.foot-pause');

var footSlideCount = footSlideImg.length;
var footSlideWidth = 398;

// footSlideBox 1번째 요소 복사 및 클래스 추가

var footSlideFirstClone = footSlideBox.firstElementChild;
var footCloneFirst = footSlideFirstClone.cloneNode(true);

footSlideBox.appendChild(footCloneFirst);

// footSlideBox 2번째 요소 복사 및 클래스 추가
var footSlideSecondClone = footSlideBox.children[1].cloneNode(true);
var footCloneSecond = footSlideSecondClone.cloneNode(true);
footSlideBox.appendChild(footCloneSecond);

// footSlideBox 3번쨰 요소 복사 및 클래스 추가
var footSlideThirdClone = footSlideBox.children[2].cloneNode(true);
var footCloneThird = footSlideThirdClone.cloneNode(true);
footSlideBox.appendChild(footCloneThird);




// footer 부분 슬라이드 기능 구현


var footSlidePosition = 1;

var footSlideInterval;

function footMoveAuto(auto) {
  
  footSlideInterval = setInterval(footTransitionSlide, 3000);

  function footTransitionSlide() {

    if (footCurrentView >= 1) {
      footSlideBox.style.transition = "0.3s";
      footSlideBox.style.transform = "translateX(-" + 398 * footCurrentView + "px)";
      footCurrentView++;
      document.querySelector('#foot-control').innerHTML = footCurrentView + "/6"

 
    if (footCurrentView === footSlideImg.length + 1) {
        document.querySelector('#foot-control').innerHTML = (footCurrentView - 6) + "/6"
        setTimeout(function () {
          footSlideBox.style.transition = "0s";
          footSlideBox.style.transform = "translateX(0px)";
          footCurrentView = 1;
        }, 300);

        return footSlideInterval;
      }
    }
  }
}

footMoveAuto();



// 문제 사항: 바꾸는 거까지 됌 ㅇㅇ but 중간에 clone 3개들이 새롭게 이동하는 시간과 겹쳐진 기존 슬라이드 박스가 생성되고 이동하는 시간이 같아야 하는데 
//오차가 발생해서  중간에 버벅거리는 듯함.

// footer next, prev button //


footNextBtn.addEventListener("click", function () {
  if (footCurrentView >= 1 && footCurrentView != footSlideImg.length - 2) {
    clearInterval(footSlideInterval);

    footSlidePosition = footCurrentView * footSlideWidth;

    footSlideBox.style.transition = "0.3s";
    footSlideBox.style.transform = `translateX(-${footSlidePosition}px)`;
    footCurrentView += 1;
    document.querySelector('#foot-control').innerHTML = footCurrentView + "/6"

    footMoveAuto(auto);
  }
});

footPrevBtn.addEventListener("click", function () {
  if (footCurrentView > 1) {

    clearInterval(footSlideInterval);
    footCurrentView -= 1;
    footSlidePosition = (footCurrentView - 1) * footSlideWidth;
    footSlideBox.style.transition = "0.3s";
    footSlideBox.style.transform = `translateX(-${footSlidePosition}px)`;
    document.querySelector('#foot-control').innerHTML = footCurrentView + "/6"

    footMoveAuto(auto);
  }
});

// footer 정지 기능

var pausePlayBtn = document.querySelector('#pause-play');

var footPauseCount = 0

footPauseBtn.addEventListener('click', function(){

  footPauseCount += 1

  if (footPauseCount % 2 == 1) {
    pausePlayBtn.classList.remove("fa-pause");
    pausePlayBtn.classList.add("fa-play");
    clearInterval(footSlideInterval);
  }

  if(footPauseCount % 2 == 0) {
    pausePlayBtn.classList.remove("fa-play");
    pausePlayBtn.classList.add("fa-pause");
    footMoveAuto();
  }

})



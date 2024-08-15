// view 함수 정의
function view() {
    // screen 요소의 스타일 변경: 투명도를 0으로 설정하여 화면에서 사라지게 함
    document.querySelector('#screen').style.opacity = '0';
    // screen 요소의 스타일 변경: 너비를 0px로 설정하여 화면에서 사라지게 함(너비를 그대로 할 시 닫기 버튼이 안눌러짐)
    document.querySelector('#screen').style.width = '0px';
    // more 요소의 스타일 변경: 투명도를 1로 설정하여 화면에 나타나게 함
    document.querySelector('#more').style.opacity = '1';
}

// hide 함수 정의
function hide() {
    // screen 요소의 스타일 변경: 투명도를 1로 설정하여 화면에 나타나게 함
    document.querySelector('#screen').style.opacity = '1';
    // screen 요소의 스타일 변경: 너비를 380px로 설정하여 화면에 나타나게 함
    document.querySelector('#screen').style.width = '360px';
    // more 요소의 스타일 변경: 투명도를 0으로 설정하여 화면에서 사라지게 함
    document.querySelector('#more').style.opacity = '0';
}
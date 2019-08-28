// piece object
const piece = (function () {
  let el = null;
 
  const init = function (el) {
    this.el = el;
  };
  
  const moveDelta = function (dx, dy) {
    const pos = this.el.getBoundingClientRect();
    if (isValidWidth(pos.left + dx)) {
      this.el.style.left = `${pos.left + dx}px`;
    }
    if (isValidHeight(pos.top + dy)) {
      this.el.style.top = `${pos.top + dy}px`;
    }
  };
  return {
    init,
    moveDelta
  };
})();

function isValidWidth(pos) {
  return pos > 0 && pos < screen.width - 90;

}

function isValidHeight(pos) {
  return pos > -1 && pos < screen.height - 190;

}

function handleClick(ev) {
  piece.moveDelta(parseInt(this.dataset.dx), parseInt(this.dataset.dy));
}

function dataSetX(btn, newPosition) {
  btn.dataset.dx = newPosition;

}

function dataSetY(btn, newPosition) {
  btn.dataset.dy = newPosition;

}
function addclickEventListener(btn) {
  const CLICK_EVENT = "click";
  btn.addEventListener(CLICK_EVENT, handleClick);
}

function setTop(newPosition) {
  
  document.getElementById("piece").style.top = newPosition;
}

function setLeft(newPosition) {
  document.getElementById("piece").style.left = newPosition;

}

function changePieceColor(color) {

  document.getElementById("piece").style.background = color;
}

function checkTemperature(temperature) {
  switch (true) {
    case temperature < 10:
      changePieceColor("blue");
      break;
    case temperature > 11 && temperature < 20:
      changePieceColor("Green");
      break;
    case temperature > 21 && temperature < 30:
      changePieceColor("Yellow");
      break;
    default:
      changePieceColor("Red");
      break;
  }
}

function getTodaysTempInTelAviv() {
   const KEY=`dda6e762ae4f41efb7e173552192204`;
   const CITY=`tel%20aviv`;  
  const URL=`http://api.apixu.com/v1/current.json?key=${KEY}&q=${CITY}`;
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      console.log(JSON.stringify(myJson.current.temp_c));
      checkTemperature(JSON.stringify(myJson.current.temp_c))
    });
}

function Randomize() {
  const MAX_RANDOM_NUMBER = 100;
  let randomTop=Math.floor(Math.random() * MAX_RANDOM_NUMBER) + 1 ; // returns a random integer from 1 to 100
  let randomLeft=Math.floor(Math.random() * MAX_RANDOM_NUMBER) + 1; // returns a random integer from 1 to 100
  
  if(isValidHeight(randomTop))
  {
    setTop(randomTop+ "px"); 
  }
  if(isValidHeight(randomTop))
  {
    setLeft( randomLeft+ "%");
  }
}

function reset() {
  const TOP_SIZE = "100px";
  const LEFT_SIZE = "50%";
  
  setTop(TOP_SIZE);
  setLeft(LEFT_SIZE);
}

function setBtn(id,xPosition,yPosition)
{
   const $btn = document.getElementById(id);
  dataSetX($btn, xPosition);
  dataSetY($btn, yPosition);
  addclickEventListener($btn); 
  
}

function init() {
  setBtn("btn-up",0,-100);
  setBtn("btn-right", 100,0);
  setBtn("btn-down",0,100);
  setBtn("btn-left",-100,0);

}

window.addEventListener("DOMContentLoaded", event => {
  piece.init(document.getElementById("piece"));
  init();
  getTodaysTempInTelAviv();
});


//Create a Web Worker File
let i = 0;

function timedCount() {
  i ++;
  postMessage(i);
  setTimeout("timedCount()",500);
}

timedCount();

//Create a Web Worker Object
// if (typeof(w) == "undefined") {
//     w = new Worker("web_worker.js");
//   }
//   w.onmessage = function(event){
//     document.getElementById("result").innerHTML = event.data;
//   };
//   //Terminate a Web Worker
//   w.terminate();
//   //Reuse the Web Worker
//   w = undefined;

  


let count = 0;

document.getElementById("incbdt").onclick = function () {
  count++;
  document.getElementById("countlabel").textContent = count;
};

document.getElementById("decbdt").onclick = function () {
  count--;
  document.getElementById("countlabel").textContent = count;
};

document.getElementById("resbdt").onclick = function () {
  count = 0;
  document.getElementById("countlabel").textContent = count;
};

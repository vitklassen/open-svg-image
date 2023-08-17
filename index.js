function main() {
  d3.xml("grf_195.svg").then((data) => {
    d3.select("#svg-container").node().append(data.documentElement);
    setZoom();
    setInterval(changeText, 1000);
  });
}
function setZoom() {
  let svgFile = getSVG();
  let gFile = svgFile.querySelector("g");
  let zoom = d3.zoom().on("zoom", handleZoom);
  d3.select(svgFile).call(zoom);
  function handleZoom(e) {
    d3.select(gFile).attr("transform", e.transform);
  }
}
function changeText() {
  let svgFile = getSVG();
  let textBlock = svgFile.getElementById("text9");
  let val = Math.floor(Math.random() * 1000);
  textBlock.textContent = val;
}
function getSVG() {
  return document.querySelector("svg");
}
const buttonElement = document.querySelector("button");
buttonElement.addEventListener("click", main);

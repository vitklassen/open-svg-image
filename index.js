function main() {
  d3.xml("grf_195.svg").then((data) => {
    d3.select("#svg-container").node().append(data.documentElement);
    setZoom();
    setInterval(changeText, 1000);
  });
}
function setZoom() {
  const svgFile = getSVG();
  const zoom = d3.zoom().on("zoom", handleZoom);
  d3.select(svgFile).call(zoom);
}
function changeText() {
  const svgFile = getSVG();
  const textBlock = svgFile.getElementById("text9");
  const val = Math.floor(Math.random() * 1000);
  textBlock.textContent = val;
}
function getSVG() {
  return document.querySelector("svg");
}
function handleZoom(e) {
  const gFile = getSVG().querySelector("g");
  d3.select(gFile).attr("transform", e.transform);
}
function disableButton(button) {
  button.setAttribute("disabled", "");
}
const buttonElement = document.querySelector("button");
buttonElement.addEventListener("click", function () {
  main();
  disableButton(buttonElement);
});

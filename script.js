function getSVG() {
  let svgObject = document.querySelector('iframe');
  return svgObject.contentWindow.frameElement.contentDocument.querySelector('svg');
}
function setZoom () {
  let svgFile = getSVG();
  let gFile = svgFile.querySelector('g');
  let zoom = d3.zoom().on('zoom', handleZoom);
  d3.select(svgFile).call(zoom);
  function handleZoom(e) {
    d3.select(gFile).attr('transform', e.transform);
  }
}
function changeText() {
  let svgFile = getSVG();
  let textBlock = svgFile.getElementById('text9');
  let val = Math.floor(Math.random() * 1000);
  textBlock.textContent = val;
}
setTimeout(setZoom, 500);
setTimeout(setInterval(changeText, 1000), 500);
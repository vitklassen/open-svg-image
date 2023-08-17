function a () {
  let svgObject = document.querySelector('iframe');
  let svgFile = svgObject.contentWindow.frameElement.contentDocument.querySelector('svg');
  let gFile = svgFile.querySelector('g');
  let zoom = d3.zoom().on('zoom', handleZoom);
  d3.select(svgFile).call(zoom);
  function handleZoom(e) {
    d3.select(gFile).attr('transform', e.transform);
  }
}
setTimeout(a, 500);
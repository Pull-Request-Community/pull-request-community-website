import html2canvas from 'html2canvas';

// take canvas and download it as .png
// I took from https://instructobit.com/tutorial/109/Downloading-and-saving-an-HTML-canvas-as-an-image-using-Javascript
export function downloadCanvas(canvas) {
  // get canvas data
  const image = canvas.toDataURL();

  // create temporary link
  const tmpLink = document.createElement('a');
  tmpLink.download = 'image.png'; // set the name of the download file
  tmpLink.href = image;

  // temporarily add link to body and initiate the download
  document.body.appendChild(tmpLink);
  tmpLink.click();
  document.body.removeChild(tmpLink);
}

// renders html elements to canvas
export function renderCanvas(inputRef) {
  html2canvas(inputRef.current, { scale: 2 }).then((canvas) => {
    downloadCanvas(canvas);
  });
}

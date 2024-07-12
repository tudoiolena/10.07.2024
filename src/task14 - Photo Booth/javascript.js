const video = document.getElementById("video");
const captureButton = document.getElementById("capture-button");
const capturedImageCanvas = document.getElementById("captured-image");
const capturedImageContext = capturedImageCanvas.getContext("2d");

let mediaStream;

function startLivePreview() {
  window.navigator.mediaDevices
    .getUserMedia({ video: true })
    .then((stream) => {
      mediaStream = stream;
      video.srcObject = stream;
      video.play();
    })
    .catch((error) => console.error("Error accessing camera:", error));
}

async function captureImage() {
  const track = mediaStream.getVideoTracks()[0];
  const imageCapture = new ImageCapture(track);
  const imageSnapshot = await imageCapture.grabFrame();

  capturedImageCanvas.width = imageSnapshot.width;
  capturedImageCanvas.height = imageSnapshot.height;
  capturedImageContext.drawImage(imageSnapshot, 0, 0);
  captureButton.textContent = "Retake";
  capturedImageCanvas.style.setProperty("display", "block");
}

captureButton.addEventListener("click", captureImage);

//Resize Observer for responsive
function handleResize(entries) {
  for (let entry of entries) {
    const { width, height } = entry.contentRect;
    video.style.setProperty("width", `${width}px`);
    video.style.setProperty("height", `${height}px`);
    capturedImageCanvas.width = width;
    capturedImageCanvas.height = height;
  }
}

const resizeObserver = new ResizeObserver(handleResize);
resizeObserver.observe(video);

// Page Visibility API to stop stream when hidden - ?!?!
function stopVideoStream() {
  if (mediaStream) {
    mediaStream.getTracks().forEach((track) => track.stop());
    video.srcObject = null;
  }
}

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    console.log("Page is hidden. Stopping video stream.");
    stopVideoStream();
  } else {
    console.log("Page is visible. Starting video stream.");
    startLivePreview();
  }
});

startLivePreview();

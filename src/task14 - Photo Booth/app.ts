const video = document.getElementById("video") as HTMLVideoElement;
const captureButton = document.getElementById(
  "capture-button"
) as HTMLButtonElement;
const capturedImageCanvas = document.getElementById(
  "captured-image"
) as HTMLCanvasElement;
const capturedImageContext: CanvasRenderingContext2D =
  capturedImageCanvas.getContext("2d");

let mediaStream: MediaStream;

function startLivePreview(): void {
  window.navigator.mediaDevices
    .getUserMedia({ video: true })
    .then((stream) => {
      mediaStream = stream;
      video.srcObject = stream;
      video.play();
    })
    .catch((error) => console.error("Error accessing camera:", error));
}

async function captureImage(): Promise<void> {
  const track = mediaStream.getVideoTracks()[0];
  const imageCapture = new (window as any).ImageCapture(track);
  const imageSnapshot = await imageCapture.grabFrame();

  capturedImageCanvas.width = imageSnapshot.width;
  capturedImageCanvas.height = imageSnapshot.height;
  capturedImageContext.drawImage(imageSnapshot, 0, 0);
  captureButton.textContent = "Retake";
  capturedImageCanvas.style.setProperty("display", "block");
}

captureButton.addEventListener("click", captureImage);

//Resize Observer for responsive
function handleResize2(entries: ResizeObserverEntry[]): void {
  for (let entry of entries) {
    const { width, height } = entry.contentRect;
    video.style.setProperty("width", `${width}px`);
    video.style.setProperty("height", `${height}px`);
    capturedImageCanvas.width = width;
    capturedImageCanvas.height = height;
  }
}

const resizeObserv = new ResizeObserver(handleResize2);
resizeObserv.observe(video);

// Page Visibility API to stop stream when hidden - ?!?!
function stopVideoStream(): void {
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

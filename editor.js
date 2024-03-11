

const fileInput = document.querySelector("#imageFileInput");
const canvas = document.querySelector("#canvas");
const canvasCtx = canvas.getContext("2d");
const brightnessInput = document.querySelector("#brightness");
const saturationInput = document.querySelector("#saturation");
const blurInput = document.querySelector("#blur");
const inversionInput = document.querySelector("#inversion");
const contrastInput = document.querySelector("#contrast");
const hueInput = document.querySelector("#hue");
const resetInput = document.querySelector("#reset");
const sharpenInput = document.querySelector("#sharpen");
const vibranceInput = document.querySelector("#vibrance");
const pixelateInput = document.querySelector("#pixelate");
const noiseInput = document.querySelector("#noise")

//  sharpen, vibrance, pixelate, noise

const settings = {};
let image = null;

function resetSettings() {
  settings.brightness = "100";
  settings.saturation = "100";
  settings.blur = "0";
  settings.inversion = "0";
  settings.sharpen = "10";
  settings.vibrance = "50";
  settings.pixelate = "10";
  settings.noise = "0";

  brightnessInput.value = settings.brightness;
  saturationInput.value = settings.saturation;
  blurInput.value = settings.blur;
  inversionInput.value = settings.inversion;
  contrastInput.value = settings.contrast;
  hueInput.value = settings.hue;
  sharpenInput.value = settings.sharpen;
  vibranceInput.value = settings.vibrance;
  pixelateInput.value = settings.pixelate;
  noiseInput.value = settings.noise;
  console.log("setting have been reset!")
// add more setting things here ^
}

function updateSetting(key, value) {
if (!image) return;

settings[key] = value;
renderImage();
}

function generateFilter() {
const { brightness, saturation, blur, inversion, contrast, hue, sharpen, vibrance, pixelate, noise } = settings;

return `brightness(${brightness}%) saturate(${saturation}%) blur(${blur}px) invert(${inversion}%) contrast(${contrast}%) hue(${hue}%) sharpen(${sharpen}%) vibrance(${vibrance}%) pixelate(${pixelate}%) noise(${noise}%)`;
}
// make sure to add settings in here too ^

function renderImage() {
canvas.width = image.width;
canvas.height = image.height;

canvasCtx.filter = generateFilter();
canvasCtx.drawImage(image, 0, 0);
}

brightnessInput.addEventListener("change", () =>
updateSetting("brightness", brightnessInput.value),
console.log(brightnessInput.value)
);
saturationInput.addEventListener("change", () =>
updateSetting("saturation", saturationInput.value)
);
blurInput.addEventListener("change", () =>
updateSetting("blur", blurInput.value)
);
inversionInput.addEventListener("change", () =>
updateSetting("inversion", inversionInput.value)
);
contrastInput.addEventListener("change", () =>
updateSetting("contrast", contrastInput.value)
);
hueInput.addEventListener("change", () =>
updateSetting("hue", hueInput.value),
// console.log(hueInput.value)
);
sharpenInput.addEventListener("change", () =>
updateSetting("sharpen", sharpenInput.value)
);
vibranceInput.addEventListener("change", () =>
updateSetting("vibrance", vibranceInput.value)
);
pixelateInput.addEventListener("change", () =>
updateSetting("pixelate", pixelateInput.value)
);
noiseInput.addEventListener("change", () =>
updateSetting("noise", noiseInput.value)
);

// resetInput.addEventListener("change", () => {
//     {console.log("reset button was clicked!")}
//     resetSettings();
// });
// add event listeners for settings here ^

fileInput.addEventListener("change", () => {
// {console.log(this.value)}
image = new Image();

image.addEventListener("load", () => {
    resetSettings();
    renderImage();
});

image.src = URL.createObjectURL(fileInput.files[0]);
});

resetSettings();


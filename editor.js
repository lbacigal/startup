

const fileInput = document.querySelector("#imageFileInput");
const canvas = document.querySelector("#canvas");
const canvasCtx = canvas.getContext("2d");
const brightnessInput = document.querySelector("#brightness");
const saturationInput = document.querySelector("#saturation");
const blurInput = document.querySelector("#blur");
const inversionInput = document.querySelector("#inversion");
const contrastInput = document.querySelector("#contrast");
const hueInput = document.querySelector("#hue");

const settings = {};
let image = null;

function resetSettings() {
  settings.brightness = "100";
  settings.saturation = "100";
  settings.blur = "0";
  settings.inversion = "0";

  brightnessInput.value = settings.brightness;
  saturationInput.value = settings.saturation;
  blurInput.value = settings.blur;
  inversionInput.value = settings.inversion;
  contrastInput.value = settings.contrast;
  hueInput.value = settings.hue;

// add more settings thing here ^
}

function updateSetting(key, value) {
if (!image) return;

settings[key] = value;
renderImage();
}

function generateFilter() {
const { brightness, saturation, blur, inversion, contrast } = settings;

return `brightness(${brightness}%) saturate(${saturation}%) blur(${blur}px) invert(${inversion}%) contrast(${contrast}%) hue(${hue}%)`;
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
console.log(hueInput.value)
);

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



//  picture editing js stuff


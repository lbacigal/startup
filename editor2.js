
// Prerequisite: Simon JavaScript deployed to your production environment
// Prerequisite: A link to your GitHub startup repository prominently displayed on your application's home page
// Prerequisite: Notes in your startup Git repository README.md file documenting what you modified and added with this deliverable. The TAs will only grade things that have been clearly described as being completed. Review the voter app as an example.
// Prerequisite: At least 10 git commits spread consistently throughout the assignment period.
// Significant use of JavaScript to create a viable working application
// 20% JavaScript support for future login.
// 20% JavaScript support for future database data.
// 20% JavaScript support for future WebSocket.
// 40% JavaScript support for your application's interaction logic.

// * = working (I think)
// ! = not working

// ! --------------- display username -----------
// username doesn't carry over when switching from another tab when I use the local server from VSCode
let username = localStorage.getItem("username");
document.getElementById("username-placeholder").textContent = username;






// * --------------- create a canvas ------------
const canvas = new fabric.Canvas("c");

init()
async function init() {

  // Set the canvas size
  try {
    canvas.setWidth( 1000 );
    canvas.setHeight( 700 );
    canvas.calcOffset();
    console.log('canvas created!')
  }
  catch {console.log('error creating canvas :/')}
};


// * ------------ load image from computer --------
document.getElementById('imageFileInput').addEventListener('change', function(e) {
  const file = e.target.files[0];
  const reader = new FileReader();

  reader.onload = function(event) {
      const img = new Image();
      img.onload = function() {
          const fabricImg = new fabric.Image(img, {
              left: 0,
              top: 0,

          });
          canvas.add(fabricImg);
          object = fabricImg;
      };
      img.src = event.target.result;
  };

  if (file) {
      reader.readAsDataURL(file);
  }
});


// * ------------ Create filters ---------------------
const filters = {
  brightness: new fabric.Image.filters.Brightness(),
  saturation: new fabric.Image.filters.Saturation(),
  contrast: new fabric.Image.filters.Contrast(),
  hue: new fabric.Image.filters.HueRotation(),
  blur: new fabric.Image.filters.Blur(),
  vibrance: new fabric.Image.filters.Vibrance(),
  noise: new fabric.Image.filters.Noise(),
  pixelate: new fabric.Image.filters.Pixelate(),
  invert: new fabric.Image.filters.Invert(),
  remove_color: new fabric.Image.filters.RemoveColor(),
  gamma: new fabric.Image.filters.Gamma(),
  // sharpen: new fabric.Image.filters.sharpen()
// emboss?
}


// * -------- apply filter values ---------------------

// ! This is currently broken, some of the sliders work but they change things they aren't supposed to
function handleFilterInput(filterType, inputElement) {
  const value = parseFloat(inputElement.value);
  // Edit the filter value based on filter type
  switch (filterType) {
    case 'brightness':
      filters.brightness.brightness = value;
      break;
    case 'saturation':
      filters.saturation.saturation = value;
      break;
    case 'contrast':
      filters.contrast.contrast = value;
      break;
    case 'hue':
      filters.hue.rotation = value;
      break;
    case 'blur':
      filters.blur.blur = value;
      break;
    case 'vibrance':
      filters.vibrance.vibrance = value;
      break;
    case 'pixelate':
    filters.pixelate.pixelate = value;
      break;
    case 'invert':
      filters.invert.invert = value;
      break;
    case 'gamma':
      filters.gamma.gamma = value;
      break;
    // case 'sharpen':
    // filters.sharpen.sharpen = value;
    // break;
    case 'noise':
      filters.noise.noise = value;
      break;
    // case 'remove_color':
    //   filters.remove_color.remove_color = value;
    //   break;
    default:
      break;
  }
  if (object) {
    object.filters = [filters.brightness,
                      filters.blur,
                      filters.contrast,
                      filters.saturation,
                      filters.hue,
                      filters.vibrance,
                      filters.pixelate,
                      filters.invert,
                      filters.sharpen,
                      filters.gamma,
                      filters.remove_color,
                      filters.noise // I might need to remove this
                      ];
    object.applyFilters();
    canvas.renderAll();
  }
}

// Attach input event listeners for all filters
document.querySelectorAll('.slider').forEach(inputElement => {
  const filterType = inputElement.id.replace('-value', '');
  inputElement.oninput = () => handleFilterInput(filterType, inputElement);
});


// * -------- Update Displayed Filter Value ---------------
// event listener that updates the filter value next to the slider
document.addEventListener('input', function(event) {
  if (event.target.classList.contains('slider')) {
    updateSliderValue(event.target.value, event.target.nextElementSibling);
  }
});

function updateSliderValue(value, displayElement) {
  if (displayElement && displayElement.classList.contains('slider-value')) {
    displayElement.innerText = value;
  }
};





// 1st attempt at smashing things together that didn't work
// (function() {
//     // manually initialize 2 filter backend to give ability to switch:
//     var webglBackend;
//     try {
//       webglBackend = new fabric.WebglFilterBackend();
//     } catch (e) {
//       console.log(e)
//     }})
// var canvas2dBackend = new fabric.Canvas2dFilterBackend()

// fabric.filterBackend = fabric.initFilterBackend();
// fabric.Object.prototype.transparentCorners = false;
// var $ = function(id){return document.getElementById(id)};


// function applyFilter(index, filter) {
//     var obj = canvas.getActiveObject();
//     obj.filters[index] = filter;
//     var timeStart = +new Date();
//     obj.applyFilters();
//     var timeEnd = +new Date();
//     var dimString = canvas.getActiveObject().width + ' x ' +
//       canvas.getActiveObject().height;
//     $('bench').innerHTML = dimString + 'px ' +
//       parseFloat(timeEnd-timeStart) + 'ms';
//     canvas.renderAll();
// }

// function getFilter(index) {
// var obj = canvas.getActiveObject();
// return obj.filters[index];
// }

// function getActiveObject() {
//   return this._activeObject;
// }

// function applyFilterValue(index, prop, value) {
// var obj = canvas.getActiveObject();
// if (obj.filters[index]) {
//     obj.filters[index][prop] = value;
//     var timeStart = +new Date();
//     obj.applyFilters();
//     var timeEnd = +new Date();
//     var dimString = canvas.getActiveObject().width + ' x ' +
//     canvas.getActiveObject().height;
//     $('bench').innerHTML = dimString + 'px ' +
//     parseFloat(timeEnd-timeStart) + 'ms';
//     canvas.renderAll();
//     }
// }

// fabric.Object.prototype.padding = 5;
// fabric.Object.prototype.transparentCorners = false;

// var canvas = this.__canvas = new fabric.Canvas('c'),
//     f = fabric.Image.filters;

// canvas.on({
// 'selection:created': function() {
//     fabric.util.toArray(document.getElementsByTagName('input'))
//                         .forEach(function(el){ el.disabled = false; })

//     var filters = ['grayscale', 'invert', 'remove-color', 'sepia',            'brightness', 'contrast', 'saturation', 'vibrance', 'noise', 'pixelate', 'blur', 'sharpen', 'emboss', 'blend-color', 'gamma', 'blend-image', 'hue', 'resize'];

//     for (var i = 0; i < filters.length; i++) {
//     $(filters[i]) && (
//     $(filters[i]).checked = !!canvas.getActiveObject().filters[i]);
//         }
//     },
// 'selection:cleared': function() {
//     fabric.util.toArray(document.getElementsByTagName('input'))
//                         .forEach(function(el){ el.disabled = true; })
//     }
// });

// var indexF;
// $('webgl').onclick = function() {
//     if (this.checked) {
//         fabric.filterBackend = webglBackend;
//     } else {
//         fabric.filterBackend = canvas2dBackend;
//     }
// };




//  ----------------- old editor controls -----------------------------------------------------------




  //   $('remove-color').onclick = function () {
  //     applyFilter(2, this.checked && new f.RemoveColor({
  //       distance: $('remove-color-distance').value,
  //       color: $('remove-color-color').value,
  //     }));
  //   };
  //   $('remove-color-color').onchange = function() {
  //     applyFilterValue(2, 'color', this.value);
  //   };
  //   $('remove-color-distance').oninput = function() {
  //     applyFilterValue(2, 'distance', this.value);

  //   $('brightness').onclick = function () {
  //     applyFilter(5, this.checked && new f.Brightness({
  //       brightness: parseFloat($('brightness-value').value)
  //     }));
  //   };
  //   $('brightness-value').oninput = function() {
  //     applyFilterValue(5, 'brightness', parseFloat(this.value));
  //   };

  //   $('contrast').onclick = function () {
  //     applyFilter(6, this.checked && new f.Contrast({
  //       contrast: parseFloat($('contrast-value').value)
  //     }));
  //   };
  //   $('contrast-value').oninput = function() {
  //     applyFilterValue(6, 'contrast', parseFloat(this.value));
  //   };
  //   $('saturation').onclick = function () {
  //     applyFilter(7, this.checked && new f.Saturation({
  //       saturation: parseFloat($('saturation-value').value)
  //     }));
  //   };
  //   $('saturation-value').oninput = function() {
  //     applyFilterValue(7, 'saturation', parseFloat(this.value));
  //   };
  //   $('vibrance').onclick = function () {
  //     applyFilter(8, this.checked && new f.Vibrance({
  //       vibrance: parseFloat($('vibrance-value').value)
  //     }));
  //   };
  //   $('vibrance-value').oninput = function() {
  //     applyFilterValue(8, 'vibrance', parseFloat(this.value));
  //   };
  //   $('noise').onclick = function () {
  //     applyFilter(9, this.checked && new f.Noise({
  //       noise: parseInt($('noise-value').value, 10)
  //     }));
  //   };
  //   $('noise-value').oninput = function() {
  //     applyFilterValue(9, 'noise', parseInt(this.value, 10));
  //   };
  //   $('pixelate').onclick = function() {
  //     applyFilter(10, this.checked && new f.Pixelate({
  //       blocksize: parseInt($('pixelate-value').value, 10)
  //     }));
  //   };
  //   $('pixelate-value').oninput = function() {
  //     applyFilterValue(10, 'blocksize', parseInt(this.value, 10));
  //   };
  //   $('blur').onclick = function() {
  //     applyFilter(11, this.checked && new f.Blur({
  //       value: parseFloat($('blur-value').value)
  //     }));
  //   };
  //   $('blur-value').oninput = function() {
  //     applyFilterValue(11, 'blur', parseFloat(this.value, 10));
  //   };
  //   $('sharpen').onclick = function() {
  //     applyFilter(12, this.checked && new f.Convolute({
  //       matrix: [  0, -1,  0,
  //                 -1,  5, -1,
  //                  0, -1,  0 ]
  //     }));
  //   };
  //   $('emboss').onclick = function() {
  //     applyFilter(13, this.checked && new f.Convolute({
  //       matrix: [ 1,   1,  1,
  //                 1, 0.7, -1,
  //                -1,  -1, -1 ]
  //     }));
  //   };
  //   $('hue-value').oninput = function() {
  //     applyFilterValue(21, 'rotation', this.value);
  //   };
  // };



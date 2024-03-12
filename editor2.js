
// Prerequisite: Simon JavaScript deployed to your production environment
// Prerequisite: A link to your GitHub startup repository prominently displayed on your application's home page
// Prerequisite: Notes in your startup Git repository README.md file documenting what you modified and added with this deliverable. The TAs will only grade things that have been clearly described as being completed. Review the voter app as an example.
// Prerequisite: At least 10 git commits spread consistently throughout the assignment period.
// Significant use of JavaScript to create a viable working application
// 20% JavaScript support for future login.
// 20% JavaScript support for future database data.
// 20% JavaScript support for future WebSocket.
// 40% JavaScript support for your application's interaction logic.


(function() {
    // manually initialize 2 filter backend to give ability to switch:
    var webglBackend;
    try {
      webglBackend = new fabric.WebglFilterBackend();
    } catch (e) {
      console.log(e)
    }})
var canvas2dBackend = new fabric.Canvas2dFilterBackend()

fabric.filterBackend = fabric.initFilterBackend();
fabric.Object.prototype.transparentCorners = false;
var $ = function(id){return document.getElementById(id)};


function applyFilter(index, filter) {
    var obj = canvas.getActiveObject();
    obj.filters[index] = filter;
    var timeStart = +new Date();
    obj.applyFilters();
    var timeEnd = +new Date();
    var dimString = canvas.getActiveObject().width + ' x ' +
      canvas.getActiveObject().height;
    $('bench').innerHTML = dimString + 'px ' +
      parseFloat(timeEnd-timeStart) + 'ms';
    canvas.renderAll();
}

function getFilter(index) {
var obj = canvas.getActiveObject();
return obj.filters[index];
}

function applyFilterValue(index, prop, value) {
var obj = canvas.getActiveObject();
if (obj.filters[index]) {
    obj.filters[index][prop] = value;
    var timeStart = +new Date();
    obj.applyFilters();
    var timeEnd = +new Date();
    var dimString = canvas.getActiveObject().width + ' x ' +
    canvas.getActiveObject().height;
    $('bench').innerHTML = dimString + 'px ' +
    parseFloat(timeEnd-timeStart) + 'ms';
    canvas.renderAll();
    }
}

fabric.Object.prototype.padding = 5;
fabric.Object.prototype.transparentCorners = false;

var canvas = this.__canvas = new fabric.Canvas('c'),
    f = fabric.Image.filters;

canvas.on({
'selection:created': function() {
    fabric.util.toArray(document.getElementsByTagName('input'))
                        .forEach(function(el){ el.disabled = false; })

    var filters = ['grayscale', 'invert', 'remove-color', 'sepia',            'brightness', 'contrast', 'saturation', 'vibrance', 'noise', 'pixelate', 'blur', 'sharpen', 'emboss', 'blend-color', 'gamma', 'blend-image', 'hue', 'resize'];

    for (var i = 0; i < filters.length; i++) {
    $(filters[i]) && (
    $(filters[i]).checked = !!canvas.getActiveObject().filters[i]);
        }
    },
'selection:cleared': function() {
    fabric.util.toArray(document.getElementsByTagName('input'))
                        .forEach(function(el){ el.disabled = true; })
    }
});

var indexF;
$('webgl').onclick = function() {
    if (this.checked) {
        fabric.filterBackend = webglBackend;
    } else {
        fabric.filterBackend = canvas2dBackend;
    }
};

// ---------- this updates the displayed toolbar value next to the slider -----------------------
document.addEventListener('input', function(event) {
    if (event.target.classList.contains('slider')) {
      updateSliderValue(event.target.value, event.target.nextElementSibling);
    }
  });

  function updateSliderValue(value, displayElement) {
    if (displayElement && displayElement.classList.contains('slider-value')) {
      displayElement.innerText = value;
    }
  }

//  ----------------- editor controls -----------------------------------------------------------
  $('grayscale').onclick = function() {
    applyFilter(0, this.checked && new f.Grayscale());
  };
  $('average').onclick = function() {
    applyFilterValue(0, 'mode', 'average');
  };
  $('luminosity').onclick = function() {
    applyFilterValue(0, 'mode', 'luminosity');
  };
  $('lightness').onclick = function() {
    applyFilterValue(0, 'mode', 'lightness');
  };
  $('invert').onclick = function() {
    applyFilter(1, this.checked && new f.Invert());
  };
  $('remove-color').onclick = function () {
    applyFilter(2, this.checked && new f.RemoveColor({
      distance: $('remove-color-distance').value,
      color: $('remove-color-color').value,
    }));
  };
  $('remove-color-color').onchange = function() {
    applyFilterValue(2, 'color', this.value);
  };
  $('remove-color-distance').oninput = function() {
    applyFilterValue(2, 'distance', this.value);

  $('brightness').onclick = function () {
    applyFilter(5, this.checked && new f.Brightness({
      brightness: parseFloat($('brightness-value').value)
    }));
  };
  $('brightness-value').oninput = function() {
    applyFilterValue(5, 'brightness', parseFloat(this.value));
  };

  $('contrast').onclick = function () {
    applyFilter(6, this.checked && new f.Contrast({
      contrast: parseFloat($('contrast-value').value)
    }));
  };
  $('contrast-value').oninput = function() {
    applyFilterValue(6, 'contrast', parseFloat(this.value));
  };
  $('saturation').onclick = function () {
    applyFilter(7, this.checked && new f.Saturation({
      saturation: parseFloat($('saturation-value').value)
    }));
  };
  $('saturation-value').oninput = function() {
    applyFilterValue(7, 'saturation', parseFloat(this.value));
  };
  $('vibrance').onclick = function () {
    applyFilter(8, this.checked && new f.Vibrance({
      vibrance: parseFloat($('vibrance-value').value)
    }));
  };
  $('vibrance-value').oninput = function() {
    applyFilterValue(8, 'vibrance', parseFloat(this.value));
  };
  $('noise').onclick = function () {
    applyFilter(9, this.checked && new f.Noise({
      noise: parseInt($('noise-value').value, 10)
    }));
  };
  $('noise-value').oninput = function() {
    applyFilterValue(9, 'noise', parseInt(this.value, 10));
  };
  $('pixelate').onclick = function() {
    applyFilter(10, this.checked && new f.Pixelate({
      blocksize: parseInt($('pixelate-value').value, 10)
    }));
  };
  $('pixelate-value').oninput = function() {
    applyFilterValue(10, 'blocksize', parseInt(this.value, 10));
  };
  $('blur').onclick = function() {
    applyFilter(11, this.checked && new f.Blur({
      value: parseFloat($('blur-value').value)
    }));
  };
  $('blur-value').oninput = function() {
    applyFilterValue(11, 'blur', parseFloat(this.value, 10));
  };
  $('sharpen').onclick = function() {
    applyFilter(12, this.checked && new f.Convolute({
      matrix: [  0, -1,  0,
                -1,  5, -1,
                 0, -1,  0 ]
    }));
  };
  $('emboss').onclick = function() {
    applyFilter(13, this.checked && new f.Convolute({
      matrix: [ 1,   1,  1,
                1, 0.7, -1,
               -1,  -1, -1 ]
    }));
  };
  $('hue-value').oninput = function() {
    applyFilterValue(21, 'rotation', this.value);
  };
};





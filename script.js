"use strict";
//***********************************************************
//PERLIN NOISE TITLE EFFECT
// CREDIT: https://processing.org/examples/noisewave.html
//***********************************************************
var yoff;

function setup() {
  initializeFields();
  createCanvas(500, 300);
}

function draw() {
  background(255);

  fill(0);
  noStroke();

  beginShape();

  var xoff = 0;
  // Iterate over horizontal pixels
  for (var x = 0; x <= width; x += 10) {
    // Calculate a y value according to noise.

    var y = map(noise(xoff, yoff), 0, 1, 200, 300);
    // float y = map(noise(xoff), 0, 1, 200,300);
    // Set the vertex
    vertex(x, y);
    // Increment x dimension for noise
    xoff += 0.04;
  }
  // increment y dimension for noise
  yoff += 0.005;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
}

function initializeFields() {
  yoff = 0.0;
}

//***********************************************************
//Portfolio Item Selecter: Smartphone Version
//***********************************************************

if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  let checkIfOpen = [];

  $(".webpage--item").click(function () {
    var id = this.id;
    console.log(id);

    if (!checkIfOpen.includes(id)) {
      checkIfOpen.push(id);
      // Changing the clicked div's width and height
      $(`#${id}`).animate({ height: `$+=100px` }, 400);
      $(`${id}--text`).fadeIn("slow");

      document.getElementById(`${id}--text`).style.display = "inline";
      document.getElementById(`${id}--link`).style.display = "inline";

      return;
    } else if (checkIfOpen.includes(id)) {
      console.log("closing");
      checkIfOpen.splice(checkIfOpen.indexOf(id), 1);

      // @formatter:off
      $(`#${id}`).animate({ height: "-=14vh" }, 400);
      // @formatter:on

      setTimeout(function () {
        document.getElementById(`${id}--text`).style.display = "none";
        document.getElementById(`${id}--link`).style.display = "none";
      }, 300);
    }
  });
} else {
  //***********************************************************
  //Portfolio Item Selecter: Desktop Version
  //***********************************************************

  let checkIfOpen = [];
  let dynamicHeightClosed;
  let dynamicHeightOpen;
  let differenceHeight;

  $(".webpage--item").click(function () {
    var id = this.id;

    console.log(id);

    if (!checkIfOpen.includes(id)) {
      console.log("opening");
      checkIfOpen.push(id);
      dynamicHeightClosed = document.getElementById(`${id}`).clientHeight;
      // console.log("closed heigth", dynamicHeightClosed);
      // console.log(typeof dynamicHeightClosed);
      // Changing the clicked div's width and height

      $(`#${id}`).animate({ height: `-=100px` }, 400);
      setTimeout(function () {
        dynamicHeightOpen = document.getElementById(`${id}`).offsetHeight;
        console.log("open heigth", dynamicHeightOpen);
      }, 400);

      document.getElementById(`${id}--text`).style.display = "inline";
      document.getElementById(`${id}--link`).style.display = "inline";
      $(`${id}--text`).fadeIn("slow");

      return;
    } else if (checkIfOpen.includes(id)) {
      console.log("closing");

      // let dynamicHeightOpen = document.getElementById(`${id}`).clientHeight;
      differenceHeight = dynamicHeightOpen - dynamicHeightClosed;
      console.log("difference heigth", differenceHeight);

      checkIfOpen.splice(checkIfOpen.indexOf(id), 1);

      // @formatter:off
      $(`#${id}`).animate({ height: `-=${differenceHeight}px` }, 400);

      // @formatter:on

      setTimeout(function () {
        document.getElementById(`${id}--text`).style.display = "none";
        document.getElementById(`${id}--link`).style.display = "none";
      }, 300);
    }
  });
}

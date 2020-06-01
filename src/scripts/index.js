var canvas = $('canvas.dots');
var dots = {
  dotsArray: [],
  el: {
    context: canvas[0].getContext('2d'),
    h1: $('.page-2 h1'),
    canvasWidth: window.innerWidth,
    canvasHeight: window.innerHeight, // this one is new
  },
  config : {
    
    dotSize: 5,
    numOfDots:  200,
    directions: ['+', '-'],
    speeds: [0.5, 1, 1.5, 2, 2.5],
    stage: 0
  },
  init: function(){
   
    dots.layout();
    dots.moveDot();
    setTimeout(function(){
      dots.config.stage = 1;
      $('.page-1').addClass('hidden');
      $('.page-2').removeClass('hidden');
    }, 5000);
  },
  shrinkBox: function(){
    var i = 0;
      // canvas.attr({height: dots.el.canvasHeight - i, width: dots.el.canvasWidth - i});
    
  },
  stage3: function() {
    $('.page-1').addClass('hidden');
    $('.page-2').removeClass('hidden');
    // dots.el.context.font = "30px Arial";
    // dots.el.context.fillText("Hello World", 10, 50);
  },
  moveDot: function(){
    const {canvasWidth, canvasHeight} = dots.el;
    // if(dots.config.stage == 1){
    //   dots.el.canvasWidth--;
    //   dots.el.canvasHeight--;
    //   canvas.attr({height: dots.el.canvasHeight, width: dots.el.canvasWidth});
    // }
    
    dots.el.context.clearRect(0, 0, canvasWidth, canvasHeight);
    // var dots = dots.dotsArray;
    var i = 0;
    var d = dots.dotsArray;
    for( i = 0; i < d.length; i++ ) {

      var random = Math.floor(Math.random() * Math.floor(500));

      if(random == 1){
        d[i].xMove = '-';
      }
      if(random == 2){
        d[i].xMove = '+';
      }
      if(random == 3){
        d[i].yMove = '-';
      }
      if(random == 4){
        d[i].yMove = '+';
      }


      if( d[i].xMove == '+' ) {
        d[i].x += d[i].xspeed;
      } else {
        d[i].x -= d[i].xspeed;
      }
      if( d[i].yMove == '+' ) {
        d[i].y += d[i].yspeed;
      } else {
        d[i].y -= d[i].yspeed;
      }
      
      
  
      dots.drawDot(d[i]);
  
      if( (d[i].x + d[i].radius) >= canvasWidth ) {
        d[i].xMove = '-';
      }
      if( (d[i].x - d[i].radius) <= 0 ) {
        d[i].xMove = '+';
      }
      if( (d[i].y + d[i].radius) >= canvasHeight ) {
        d[i].yMove = '-';
      }
      if( (d[i].y - d[i].radius) <= 0 ) {
        d[i].yMove = '+';
      }
      if (dots.config.stage == 1){

        if( d[i].x > dots.el.h1.position().left && d[i].y > (dots.el.h1.position().top) &&  d[i].y < dots.el.h1.position().top + dots.el.h1.height() && d[i].x < dots.el.h1.position().left + dots.el.h1.width()){
          dots.dotsArray[i].color = '#F55151';
          if(d[i].x < (canvasWidth / 2)){
            d[i].xMove = '-';
  
          } else {
            d[i].xMove = '+';
          }
          if(d[i].y < (canvasHeight / 2)){
            d[i].yMove = '-';
  
          } else {
            d[i].yMove = '+';
          }
        }
      }
    }
  
    window.requestAnimationFrame(dots.moveDot);
  },
  layout: function(){
    canvas.attr({height: dots.el.canvasHeight, width: dots.el.canvasWidth});
    
    dots.dotsArray = [];
    for(var i = 0; i < dots.config.numOfDots; i++) {
      var x = Math.random() * dots.el.canvasWidth;
      var y = Math.random() * dots.el.canvasHeight;
      // Get random color, direction and speed.
      var xMove = dots.config.directions[Math.floor(Math.random() * dots.config.directions.length)];
      var yMove = dots.config.directions[Math.floor(Math.random() * dots.config.directions.length)];
      var speed = dots.config.speeds[Math.floor(Math.random() * dots.config.speeds.length)];
      var dot = {
        x: x,
        y: y,
        radius: Math.floor(Math.random() * 4),
        xMove: xMove,
        yMove: yMove,
        color: 'rgba(255,255,255,0.4)',
        xspeed: dots.config.speeds[Math.floor(Math.random() * dots.config.speeds.length)],
        yspeed: dots.config.speeds[Math.floor(Math.random() * dots.config.speeds.length)]
      };
      // Save it to the dots array.
      dots.dotsArray.push(dot);
      // console.log(dotsArray);
      dots.drawDot(dot);
    }
  },
  drawDot: function(dot) {
    //     // Set transparency on the dots.
        dots.el.context.globalAlpha = 0.9;
        dots.el.context.beginPath();
        dots.el.context.arc(dot.x, dot.y, dot.radius, 0, 2 * Math.PI, false);
        dots.el.context.fillStyle = dot.color;
        dots.el.context.fill();
      }
};

dots.init();
  
  // Start with an empty array of dots.
  
  
  
  
  // Draw each dot in the dots array.
  
//   setTimeout(function(){
//     window.requestAnimationFrame(moveDot);
//   }, 2500);
  
  
//   function moveDot() {
//     context.clearRect(0, 0, canvasWidth, canvasHeight);
  
//     for( i = 0; i < dots.length; i++ ) {
  
//       if( dots[i].xMove == '+' ) {
//         dots[i].x += dots[i].speed;
//       } else {
//         dots[i].x -= dots[i].speed;
//       }
//       if( dots[i].yMove == '+' ) {
//         dots[i].y += dots[i].speed;
//       } else {
//         dots[i].y -= dots[i].speed;
//       }
  
//       drawDot(dots[i]);
  
//       if( (dots[i].x + dots[i].radius) >= canvasWidth ) {
//         dots[i].xMove = '-';
//       }
//       if( (dots[i].x - dots[i].radius) <= 0 ) {
//         dots[i].xMove = '+';
//       }
//       if( (dots[i].y + dots[i].radius) >= canvasHeight ) {
//         dots[i].yMove = '-';
//       }
//       if( (dots[i].y - dots[i].radius) <= 0 ) {
//         dots[i].yMove = '+';
//       }
  
//       if(bump){
//         dots[i].yMove = '+';
//       }
//     }
  
//     window.requestAnimationFrame(moveDot);
//   }
  
//   function drawDot(dot) {
//     // Set transparency on the dots.
//     context.globalAlpha = 0.9;
//     context.beginPath();
//     context.arc(dot.x, dot.y, dot.radius, 0, 2 * Math.PI, false);
//     context.fillStyle = dot.color;
//     context.fill();
//   }
// }


// import * as d3 from "d3";
// import _ from "lodash";
// /**
//  * Given a set of points, lay them out in a phyllotaxis layout.
//  * Mutates the `points` passed in by updating the x and y values.
//  *
//  * @param {Object[]} points The array of points to update. Will get `x` and `y` set.
//  * @param {Number} pointWidth The size in pixels of the point's width. Should also include margin.
//  * @param {Number} xOffset The x offset to apply to all points
//  * @param {Number} yOffset The y offset to apply to all points
//  *
//  * @return {Object[]} points with modified x and y
//  */
// function phyllotaxisLayout(points, pointWidth, xOffset = 0, yOffset = 0, iOffset = 0) {
//   // theta determines the spiral of the layout
//   const theta = Math.PI * (3 - Math.sqrt(5));

//   const pointRadius = pointWidth / 2;

//   points.forEach((point, i) => {
//     const index = (i + iOffset) % points.length;
//     const phylloX = pointRadius * Math.sqrt(index) * Math.cos(index * theta);
//     const phylloY = pointRadius * Math.sqrt(index) * Math.sin(index * theta);

//     point.x = xOffset + phylloX - pointRadius;
//     point.y = yOffset + phylloY - pointRadius;
//   });

//   return points;
// }

// /**
//  * Given a set of points, lay them out in a grid.
//  * Mutates the `points` passed in by updating the x and y values.
//  *
//  * @param {Object[]} points The array of points to update. Will get `x` and `y` set.
//  * @param {Number} pointWidth The size in pixels of the point's width. Should also include margin.
//  * @param {Number} gridWidth The width of the grid of points
//  *
//  * @return {Object[]} points with modified x and y
//  */
// function gridLayout(points, pointWidth, gridWidth) {
//   const pointHeight = pointWidth;
//   const pointsPerRow = Math.floor(gridWidth / pointWidth);
//   const numRows = points.length / pointsPerRow;

//   points.forEach((point, i) => {
//     point.x = pointWidth * (i % pointsPerRow);
//     point.y = pointHeight * Math.floor(i / pointsPerRow);
//   });

//   return points;
// }

// /**
//  * Given a set of points, lay them out randomly.
//  * Mutates the `points` passed in by updating the x and y values.
//  *
//  * @param {Object[]} points The array of points to update. Will get `x` and `y` set.
//  * @param {Number} pointWidth The size in pixels of the point's width. Should also include margin.
//  * @param {Number} width The width of the area to place them in
//  * @param {Number} height The height of the area to place them in
//  *
//  * @return {Object[]} points with modified x and y
//  */
// function randomLayout(points, pointWidth, width, height) {
//   points.forEach((point, i) => {
//     point.x = Math.random() * (width - pointWidth);
//     point.y = Math.random() * (height - pointWidth);
//   });

//   return points;
// }

// function bottomLayout(points, pointWidth, width, height) {
//   var min = Math.ceil(0.5);
//   var max = Math.floor(1);
//   points.forEach((point, i) => {
//     point.x = Math.random() * (width - pointWidth);
//     point.y = ((Math.random() / 2) + 0.5) * (height - pointWidth);
//   });

//   return points;
// }

// /**
//  * Given a set of points, lay them out in a sine wave.
//  * Mutates the `points` passed in by updating the x and y values.
//  *
//  * @param {Object[]} points The array of points to update. Will get `x` and `y` set.
//  * @param {Number} pointWidth The size in pixels of the point's width. Should also include margin.
//  * @param {Number} width The width of the area to place them in
//  * @param {Number} height The height of the area to place them in
//  *
//  * @return {Object[]} points with modified x and y
//  */
// function sineLayout(points, pointWidth, width, height) {
//   const amplitude = 0.3 * (height / 2);
//   const yOffset = height / 2;
//   const periods = 3;
//   const yScale = d3.scaleLinear()
//     .domain([0, points.length - 1])
//     .range([0, periods * 2 * Math.PI]);

//   points.forEach((point, i) => {
//     point.x = (i / points.length) * (width - pointWidth);
//     point.y = amplitude * Math.sin(yScale(i)) + yOffset;
//   });

//   return points;
// }

// /**
//  * Given a set of points, lay them out in a spiral.
//  * Mutates the `points` passed in by updating the x and y values.
//  *
//  * @param {Object[]} points The array of points to update. Will get `x` and `y` set.
//  * @param {Number} pointWidth The size in pixels of the point's width. Should also include margin.
//  * @param {Number} width The width of the area to place them in
//  * @param {Number} height The height of the area to place them in
//  *
//  * @return {Object[]} points with modified x and y
//  */
// function spiralLayout(points, pointWidth, width, height) {
//   const amplitude = 0.3 * (height / 2);
//   const xOffset = width / 2;
//   const yOffset = height / 2;
//   const periods = 20;

//   const rScale = d3.scaleLinear()
//     .domain([0, points.length -1])
//     .range([0, Math.min(width / 2, height / 2) - pointWidth]);

//   const thetaScale = d3.scaleLinear()
//     .domain([0, points.length - 1])
//     .range([0, periods * 2 * Math.PI]);

//   points.forEach((point, i) => {
//     point.x = rScale(i) * Math.cos(thetaScale(i)) + xOffset;
//     point.y = rScale(i) * Math.sin(thetaScale(i)) + yOffset;
//   });

//   return points;
// }




// /**
//  * Generate an object array of `numPoints` length with unique IDs
//  * and assigned colors
//  */
// function createPoints(numPoints, pointWidth, width, height) {
//   const colorScale = d3.scaleSequential(d3.interpolateViridis)
//     .domain([numPoints - 1, 0]);

//   const points = d3.range(numPoints).map(id => ({
//     id,
//     color: colorScale(id),
//   }));

//   return randomLayout(points, pointWidth, width, height);
// }

// // canvas settings
// const width = 600;
// const height = 600;

// // point settings
// const numPoints = 7000;
// const pointWidth = 2;
// const pointMargin = 3;

// // animation settings
// const duration = 1500;
// const ease = d3.easeCubic;
// let timer;
// let currLayout = 0;

// // create set of points
// const points = createPoints(numPoints, pointWidth, width, height);

// // wrap layout helpers so they only take points as an argument
// const toGrid = (points) => gridLayout(points,
//   pointWidth + pointMargin, width);
// const toSine = (points) => sineLayout(points,
//   pointWidth + pointMargin, width, height);
// const toSpiral = (points) => spiralLayout(points,
//   pointWidth + pointMargin, width, height);
// const toPhyllotaxis = (points) => phyllotaxisLayout(points,
//   pointWidth + pointMargin, width / 2, height / 2);
// const toRandom = (points) => randomLayout(points,
//     pointWidth + pointMargin, width, height);

// const toBottom = (points) => bottomLayout(points,
//       pointWidth + pointMargin, width, height);

      
// // store the layouts in an array to sequence through
// const layouts = [toRandom, toBottom];

// // draw the points based on their current layout
// function draw() {
//   const ctx = canvas.node().getContext('2d');
//   ctx.save();

//   // erase what is on the canvas currently
//   ctx.clearRect(0, 0, width, height);

//   // draw each point as a rectangle
//   for (let i = 0; i < points.length; ++i) {
//     const point = points[i];
//     ctx.fillStyle = point.color;
//     ctx.beginPath();
//     ctx.arc(point.x, point.y, pointWidth, 0, 2 * Math.PI, true);
//     ctx.closePath();
//     ctx.fill();

//   }

//   ctx.restore();
// }

// // animate the points to a given layout
// function animate(layout) {
//   // store the source position
//   points.forEach(point => {
//     point.sx = point.x;
//     point.sy = point.y;
//   });

//   // get destination x and y position on each point
//   layout(points);

//   // store the destination position
//   points.forEach(point => {
//     point.tx = point.x;
//     point.ty = point.y;
//   });

  

//   d3.timer((elapsed) => {
//     // console.log(elapsed);
//     // console.log(points);
//   });

//   timer = d3.timer((elapsed) => {
//     // compute how far through the animation we are (0 to 1)
//     const t = Math.min(1, ease(elapsed / duration));

//     // update point positions (interpolate between source and target)
//     points.forEach((point, key) => {
//       if (key){
//         point.x = point.sx * (1 - t) + point.tx * t;
//         point.y = point.sy * (1 - t) + point.ty * t;
//       }
//     });

//     // update what is drawn on screen
//     draw();

//     // if this animation is over
//     if (t === 1) {
//       // stop this timer for this layout and start a new one
//       timer.stop();

//       // update to use next layout
//       currLayout = (currLayout + 1) % layouts.length;

//       // start animation for next layout
//       animate(layouts[currLayout]);
//     }
//   });
// }

// // create the canvas
// const screenScale = window.devicePixelRatio || 1;
// const canvas = d3.select('body').append('canvas')
//   .attr('width', width * screenScale)
//   .attr('height', height * screenScale)
//   .style('width', `${width}px`)
//   .style('height', `${height}px`);
// canvas.node().getContext('2d').scale(screenScale, screenScale);

// // start off as a grid
// toRandom(points);
// draw();


// d3.select('body').append('div');

//   // start the animation
// animate(layouts[currLayout]);


// // var data = require("../data.json"); //(with path)

// // const COS = Math.cos;
// // const SIN = Math.sin;
// // const PI = Math.PI;

// // var config = {
// //   logo: {
// //     width: 510,
// //     height: 64,
// //     ratio: 1.1,
// //     position: "Center",
// //     presets: ["Center", "Bottom", "Right"],
// //   },
// //   users: {
// //     selected: "All",
// //     presets: [],
// //   },
// //   nodeSize: 1.5,
// //   edgeSize: 0.9,
// //   innerRadius: 106,
// //   outterRadius: 248,
// //   rotation: 0,
// //   animated: true,
// //   animation: {
// //     innerRadius: 106,
// //     outterRadius: 248,
// //   },
// //   color: {
// //     start: "#052349",
// //     end: "#fd575f",
// //     nodes: "#FFFFFF",
// //   },
// //   iterate: COS(PI / 2),
// //   speed: 1,
// // };

// // var getAll = function (data, attr) {
// //   var item, _i, _len, _results;
// //   _results = [];
// //   for (_i = 0, _len = data.length; _i < _len; _i++) {
// //     item = data[_i];
// //     _results.push(item[attr]);
// //   }
// //   return _results;
// // };

// // var context = {
// //   start: _.min(data, function (d) {
// //     return d.start;
// //   }).start,
// //   end: _.max(data, function (d) {
// //     return d.start;
// //   }).start,
// //   users: getAll(
// //     _.uniq(data, function (d) {
// //       return d.user;
// //     }),
// //     "user"
// //   ).sort(),
// // };


// // const line = d3
// //   .line()
// //   .x(function (d) {
// //     return d.x;
// //   })
// //   .y(function (d) {
// //     return d.y;
// //   });

// // const dots = {
// //   el: {
// //     svg: d3.select("#dots").selectAll("svg").data([{}]).enter().append("svg"),
// //     button: document.getElementById("demo")
// //   },

// //   params: {
// //     width: window.innerWidth,
// //     height: window.innerHeight,
// //     position: "Center",
// //     center: {
// //       x: window.innerWidth / 2,
// //       y: window.innerHeight / 2,
// //     },
// //   },
// //   controls: {
// //     overlapsTask: true,
// //     followingTask: true,
// //     followingLimit: 48,
// //   },
// //   timeScale: d3
// //     .scaleLinear()
// //     .domain([context.start, context.end])
// //     .range([0, PI * 2]),
// //   userScale: d3
// //     .scaleLinear()
// //     .domain([0, context.users.length - 1])
// //     .range([config.innerRadius, config.outterRadius]),
// //   init: function () {
// //     dots.loadSVG();
// //     dots.defineTimeScale();
// //     dots.resize();
// //     dots.circularSVG();
// //     dots.bindUIActions();
// //     dots.animate();
// //     dots.updateGradient();
// //   },
// //   bindUIActions: function(){
// //     dots.el.button.addEventListener("click", function(){
// //         config.rotation = 10;
// //         dots.circularSVG();
// //       });
// //   },

// //   loadSVG: function () {
// //     let svg = dots.el.svg;
// //     svg.defs = svg.selectAll("defs").data([{}]);
// //     svg.defs = svg.defs.enter().append("defs");
// //     svg.defs
// //       .append("radialGradient")
// //       .attr("gradientUnits", "userSpaceOnUse")
// //       .attr("cx", "0%")
// //       .attr("cy", "0%")
// //       .attr("fx", "0%")
// //       .attr("fy", "0%")
// //       .attr("r", "" + config.outterRadius + "px")
// //       .attr("spreadMethod", "pad")
// //       .attr("id", "radial-gradient");

// //     svg.defs
// //       .select("#radial-gradient")
// //       .append("stop")
// //       .attr("stop-color", "#f4c31e")
// //       .attr("stop-opacity", "1")
// //       .attr("offset", "30%");

// //     svg.defs
// //       .select("#radial-gradient")
// //       .append("stop")
// //       .attr("stop-color", "#00bdcc")
// //       .attr("stop-opacity", "1")
// //       .attr("offset", "100%");

// //     svg.background = svg.selectAll("rect.background").data([{}]);
// //     svg.background
// //       .enter()
// //       .append("rect")
// //       .classed("background", true)
// //       .style("fill", "#191e28")
// //       .attr("width", dots.params.width)
// //       .attr("height", dots.params.height);

// //     svg.graph = svg.selectAll("g.graph").data([{}]);
// //     svg.graph = svg.graph.enter().append("g").classed("graph", true);
// //     svg.edges = svg.graph.selectAll("g.edges").data([{}]);
// //     svg.edges = svg.edges.enter().append("g").classed("edges", true);
// //     svg.nodes = svg.graph.selectAll("g.nodes").data([{}]);
// //     svg.nodes = svg.nodes.enter().append("g").classed("nodes", true);
// //   },

// //   defineTimeScale: function () {
// //     var angles, day, dayScope, i, key, projectsGroups, step, _i, _ref;
// //     projectsGroups = _.groupBy(data, function (d) {
// //       return (
// //         Math.round(new Date(d.start).getMinutes() / 10) +
// //         "-" +
// //         new Date(d.start).getHours() +
// //         "-" +
// //         new Date(d.start).getDate() +
// //         "-" +
// //         new Date(d.start).getMonth()
// //       );
// //     });
// //     dayScope = [];
// //     angles = [];
// //     for (key in projectsGroups) {
// //       day = projectsGroups[key];
// //       dayScope = dayScope.concat(
// //         d3.extent(day, function (d) {
// //           return new Date(d.start);
// //         })
// //       );
// //     }
// //     step = 360 / (dayScope.length - 1);
// //     for (
// //       i = _i = 0, _ref = 360 / step;
// //       0 <= _ref ? _i <= _ref : _i >= _ref;
// //       i = 0 <= _ref ? ++_i : --_i
// //     ) {
// //       angles = angles.concat([i * step * 0.0174532925]);
// //     }

// //     dots.timeScale = d3.scaleLinear().domain(dayScope).range(angles);
// //   },

// //   circularPosition: function (d, center) {
// //     d.x =
// //       COS(dots.timeScale(new Date(d.start))) *
// //       dots.userScale(context.users.indexOf(d.user));
// //     d.y =
// //       SIN(dots.timeScale(new Date(d.start))) *
// //       dots.userScale(context.users.indexOf(d.user));
// //     return d;
// //   },
// //   circularSVG: function () {
// //     let svg = dots.el.svg;

// //     var circles, edges;
// //     var center = dots.params.center;
// //     if (config.animated) {
// //         dots.userScale.range([config.animation.innerRadius, config.animation.outterRadius]);
// //       } else {
// //         dots.userScale.range([config.innerRadius, config.outterRadius]);
// //       }
// //     svg.graph.attr(
// //       "transform",
// //       "translate(" +
// //         center.x +
// //         " " +
// //         center.y +
// //         ")rotate(" +
// //         config.rotation +
// //         ")"
// //     );
// //     circles = svg.nodes.selectAll("circle").data(data);
// //     circles = circles
// //       .enter()
// //       .append("circle")
// //       .style("fill", config.color.nodes);
// //     circles.each(function (d, i) {
// //       var elem, selected;
// //       elem = d3.select(this);
// //       selected = false;
// //       dots.circularPosition(d, center);
// //       return elem.attr("cx", d.x).attr("cy", d.y).attr("r", config.nodeSize);
// //     });
// //     circles.exit().remove();

// //     if (dots.links == null) {
// //       dots.createLinks();
// //     }
// //     edges = svg.edges.selectAll("path").data(dots.links);
// //     edges = edges.enter().append("path");
// //     edges
// //       .style("fill", "none")
// //       .style("stroke", "green")
// //       .style("stroke", "url(#radial-gradient)");
// //     edges.attr("d", line)
// //       .style("stroke-width", config.edgeSize)
// //       .style("stroke-linecap", "round")
// //       .style("stroke-linejoin", "round");
// //     edges.exit().remove();
// //   },
// //   resize: function () {
// //     let svg = dots.el.svg;
// //     dots.params.width = window.innerWidth;
// //     dots.params.height = window.innerHeight;
// //     // defineCenter(dots.params.position);
// //     svg.attr("width", window.innerWidth).attr("height", window.innerHeight);
// //     svg.background
// //       .attr("width", dots.params.width)
// //       .attr("height", dots.params.height);
// //     if (dots.circularSVG != null) {
// //       dots.circularSVG();
// //     }
// //   },
// //   createLinks: function () {
// //     dots.links = dots.getLinks(data, dots.controls);
// //     dots.links = dots.buildLinks(data, dots.links);
// //   },
// //   getLinks: function (data, controls) {
// //     var item, link, links, _i, _j, _len, _len1;
// //     links = linksTool(data, controls);
// //     for (_i = 0, _len = links.length; _i < _len; _i++) {
// //       link = links[_i];
// //       for (_j = 0, _len1 = data.length; _j < _len1; _j++) {
// //         item = data[_j];
// //         if (item.id === link.source) {
// //           link.source = item;
// //         }
// //         if (item.id === link.target) {
// //           link.target = item;
// //         }
// //       }
// //     }
// //     return links;
// //   },
// //   buildLinks: function (data, links) {
// //     var count,
// //       group,
// //       index,
// //       last,
// //       link,
// //       paths,
// //       result,
// //       singles,
// //       _i,
// //       _len,
// //       _links,
// //       _ref;
// //     result = [];
// //     singles = [];
// //     _ref = _.groupBy(links, function (d) {
// //       return d.index;
// //     });
// //     for (index in _ref) {
// //       group = _ref[index];
// //       if (eval(index) != null) {
// //         _links = [];
// //         last = null;
// //         for (_i = 0, _len = group.length; _i < _len; _i++) {
// //           link = group[_i];
// //           _links.push(link.source);
// //         }
// //         _links.push(group[group.length - 1].target);
// //         result = result.concat([_links]);
// //       } else {
// //         singles = singles.concat(group);
// //       }
// //     }
// //     paths = [];
// //     singles.sort(function (a, b) {
// //       return a.start - b.start;
// //     });
// //     count = 0;
// //     while (count < singles.length - 1) {
// //       paths.push(dots.definePath(singles[count], singles));
// //       ++count;
// //     }
// //     result = result.concat(paths);
// //     return result;
// //   },
// //   definePath: function (single, data) {
// //     var count, last, list, recurse, _data;
// //     _data = data;
// //     count = 0;
// //     last = null;
// //     list = [];
// //     list.push(single.source);
// //     recurse = function (obj, datum) {
// //       var finded, opposite;
// //       finded = false;
// //       while (!finded) {
// //         if (count < datum.length) {
// //           opposite = datum[count];
// //           if (obj.target.id === opposite.source.id) {
// //             finded = true;
// //             last = opposite;
// //             list.push(opposite.source);
// //             datum.splice(count, 1);
// //             recurse(last, datum);
// //           }
// //         } else {
// //           finded = true;
// //         }
// //         ++count;
// //       }
// //     };
// //     recurse(single, _data);
// //     if (last != null) {
// //       list.push(last.target);
// //     } else {
// //       list.push(single.target);
// //     }
// //     return list;
// //   },

// //   animate: function(){
// //     setInterval(function(){
// //         // config.rotation = config.rotation + 1;
// //         console.log(config.innerRadius);
// //         config.animation.innerRadius = config.animation.innerRadius + COS(config.iterate) * 50;
// //         config.animation.outterRadius = config.animation.outterRadius - SIN(config.iterate - PI) * 80;
// //           config.iterate += config.speed / 100;
// //           dots.updateGradient();
// //            dots.circularSVG();
// //     }, 500);
// //   },

// //   updateGradient: function() {
// //     var inner, outter;
// //     let svg = dots.el.svg;
// //     if (config.animated) {
// //       inner = config.animation.innerRadius;
// //       outter = config.animation.outterRadius;
// //     } else {
// //       inner = config.innerRadius;
// //       outter = config.outterRadius;
// //     }
// //     if (inner < outter) {
// //       svg.defs.select('#radial-gradient').attr("r", "" + config.outterRadius + "px");
// //       svg.defs.select('#radial-gradient').selectAll("stop").each(function(d, i) {
// //         var elem, percent;
// //         elem = d3.select(this);
// //         percent = 100;
// //         if (i === 0) {
// //           percent = (inner / outter) * 100;
// //         }
// //         return elem.attr("offset", "" + percent + "%");
// //       });
// //     } else {
// //       svg.defs.select('#radial-gradient').attr("r", "" + inner + "px");
// //       svg.defs.select('#radial-gradient').selectAll("stop").each(function(d, i) {
// //         var elem, percent;
// //         elem = d3.select(this);
// //         percent = 100;
// //         if (i === 0) {
// //           percent = (outter / inner) * 100;
// //         }
// //         return elem.attr("offset", "" + percent + "%");
// //       });
// //     }
// //   }
// // };


// // (function () {
// //   var links, msToHour;

// //   msToHour = function (ms) {
// //     return Math.round(ms / 1000 / 60 / 60);
// //   };

// //   links = function (data, controls) {
// //     var count,
// //       currentTime,
// //       delta,
// //       exist,
// //       hash,
// //       index,
// //       inverseHash,
// //       key,
// //       last,
// //       lastObj,
// //       lastTime,
// //       link,
// //       opposite,
// //       oppositeHash,
// //       oppositeInverseHash,
// //       oppositeScope,
// //       project,
// //       scope,
// //       task,
// //       _i,
// //       _j,
// //       _k,
// //       _l,
// //       _len,
// //       _len1,
// //       _len2,
// //       _len3,
// //       _len4,
// //       _links,
// //       _m,
// //       _ref,
// //       _ref1;
// //     links = [];
// //     data.sort(function (a, b) {
// //       return new Date(a.start) - new Date(b.start);
// //     });
// //     if (controls.overlapsTask) {
// //       _ref = _.groupBy(data, "project");
// //       for (key in _ref) {
// //         project = _ref[key];
// //         project.sort(function (a, b) {
// //           return new Date(a.start) - new Date(b.start);
// //         });
// //         for (_i = 0, _len = project.length; _i < _len; _i++) {
// //           task = project[_i];
// //           scope = [new Date(task.start), new Date(task.end)];
// //           for (_j = 0, _len1 = project.length; _j < _len1; _j++) {
// //             opposite = project[_j];
// //             if (task.id !== opposite.id) {
// //               oppositeScope = [
// //                 new Date(opposite.start),
// //                 new Date(opposite.end),
// //               ];
// //               if (
// //                 scope[0] <= oppositeScope[0] &&
// //                 oppositeScope[0] <= scope[1]
// //               ) {
// //                 links.push({
// //                   source: task.id,
// //                   target: opposite.id,
// //                   index: null,
// //                 });
// //               }
// //             }
// //           }
// //         }
// //       }
// //     }
// //     if (controls.followingTask) {
// //       count = 0;
// //       _ref1 = _.groupBy(data, "project");
// //       for (key in _ref1) {
// //         project = _ref1[key];
// //         project.sort(function (a, b) {
// //           return new Date(a.start) - new Date(b.start);
// //         });
// //         last = null;
// //         lastObj = null;
// //         for (_k = 0, _len2 = project.length; _k < _len2; _k++) {
// //           task = project[_k];
// //           if (last != null) {
// //             lastTime = new Date(lastObj.start).getTime();
// //             currentTime = new Date(task.start).getTime();
// //             delta = currentTime - lastTime;
// //             if (msToHour(delta) < controls.followingLimit) {
// //               link = {
// //                 source: last,
// //                 target: task.id,
// //                 index: count,
// //               };
// //               index = links.indexOf(link);
// //               if (index < 0) {
// //                 links.push(link);
// //               }
// //             } else {
// //               count += 1;
// //             }
// //           }
// //           last = task.id;
// //           lastObj = task;
// //         }
// //         count += 1;
// //       }
// //     }
// //     _links = [];
// //     for (_l = 0, _len3 = links.length; _l < _len3; _l++) {
// //       link = links[_l];
// //       exist = false;
// //       hash = link.source + "-" + link.target;
// //       inverseHash = link.target + "-" + link.source;
// //       for (_m = 0, _len4 = _links.length; _m < _len4; _m++) {
// //         opposite = _links[_m];
// //         oppositeHash = opposite.source + "-" + opposite.target;
// //         oppositeInverseHash = opposite.target + "-" + opposite.source;
// //         if (
// //           hash === oppositeHash ||
// //           hash === oppositeInverseHash ||
// //           inverseHash === oppositeHash ||
// //           inverseHash === oppositeInverseHash
// //         ) {
// //           exist = true;
// //         }
// //       }
// //       if (!exist) {
// //         _links.push(link);
// //       }
// //     }
// //     return _links;
// //   };

// //   if (typeof window !== "undefined" && window !== null) {
// //     window.linksTool = links;
// //   } else {
// //     module.exports = links;
// //   }
// // }.call(this));

// // dots.init();

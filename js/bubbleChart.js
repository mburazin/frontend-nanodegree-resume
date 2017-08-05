$(document).ready(function () {
  var bubbleChart = new d3.svg.BubbleChart({
    supportResponsive: true,
    //container: => use @default
    size: 600,
    //viewBoxSize: => use @default
    innerRadius: 600 / 3.5,
    //outerRadius: => use @default
    radiusMin: 50,
    //radiusMax: use @default
    //intersectDelta: use @default
    //intersectInc: use @default
    //circleColor: use @default
    data: {
      items: [
        {text: "HTML", count: "250", desc: "Projects at Udacity Frontend Nanodegree"},
        {text: "CSS", count: "250", desc: "Projects at Udacity Frontend Nanodegree"},
        {text: "JavaScript", count: "100", desc: "Projects at Udacity Frontend Nanodegree"},
        {text: "Erlang", count: "450", desc: "Software developer at Ericsson"},
        {text: "PHP", count: "170", desc: "Web developer at the Rudjer Boskovic Science Institute"},
        {text: "C", count: "650", desc: "Software Developer at Ericsson"},
        {text: "GIT", count: "600", desc: "Daily use - Udacity, Ericsson, Github"}
      ],
      eval: function (item) {return item.count;},
      classed: function (item) {return item.text.split(" ").join("");}
    },
    plugins: [
      {
        name: "central-click",
        options: {
          text: "(See more detail)",
          style: {
            "font-size": "12px",
            "font-style": "italic",
            "font-family": "Source Sans Pro, sans-serif",
            "font-weight": "700",
            "text-anchor": "middle",
            "fill": "#484848"
          },
          attr: {dy: "40px"},
          // centralClick: function() {
          //   alert("Here is more details!!");
          // }
        }
      },
      {
        name: "lines",
        options: {
          format: [
            {// Line #0
              textField: "text",
              classed: {count: true},
              style: {
                "font-size": "20px",
                "font-family": "Source Sans Pro, sans-serif",
                "text-anchor": "middle",
                fill: "white"
              },
              attr: {
                dy: "0px",
                x: function (d) {return d.cx;},
                y: function (d) {return d.cy;}
              }
            },
            // {// Line #1
            //   textField: "text",
            //   classed: {text: true},
            //   style: {
            //     "font-size": "14px",
            //     "font-family": "Source Sans Pro, sans-serif",
            //     "text-anchor": "middle",
            //     fill: "white"
            //   },
            //   attr: {
            //     dy: "20px",
            //     x: function (d) {return d.cx;},
            //     y: function (d) {return d.cy;}
            //   }
            // }
          ],
          centralFormat: [
            {// Line #0
              style: {"font-size": "50px"},
              attr: {}
            },
            // {// Line #1
            //   style: {"font-size": "30px"},
            //   attr: {dy: "40px"}
            // }
          ]
        }
      }]
  });
});

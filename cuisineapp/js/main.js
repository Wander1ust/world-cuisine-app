require.config({
    paths: {
        d3: 'https://d3js.org/d3.v3.min.js',
        geo: 'http://d3js.org/d3.geo.projection.v0.js',
        topojson: 'http://d3js.org/topojson.v1.min.js',
        datamaps: 'http://datamaps.github.io/scripts/datamaps.world.min.js?v=1'     
    },
    shim: {
        'd3':{
            exports: "d3"  
        },
        'geo':{
            deps: ["d3"]
        },
        'topojson':{
            deps: ["d3"],
            exports: "topojson"  
        },
        'datamaps':{
            deps: ["d3","topojson"],
            exports: "datamaps"  
        }
      }
    }); 
    d3 = require('d3');
    define( [
      'jquery',
      'd3',
      'geo',
      'topojson',
      'datamaps',
      'text!./map.css'
    ],
        function($, d3, geo, topojson, Datamap, cssContent) {  
           'use strict';  
            $("<style>").html(cssContent).appendTo("head"); 
    
            return {            
                paint: function ( $element,layout) {
                    try{    
                        $element.empty();
                        $('<div id="map">').appendTo($element);
                        var map = new Datamap({
                            scope: 'india',
                            element: document.getElementById('map'),
                            borderColor: '#DEDEDE',
                            highlightBorderColor: '#B7B7B7',
                            highlightBorderWidth: '100'
                            
                        })
                    }catch(err){
                        alert(err.message);
                    }               
                }
            };
        } );
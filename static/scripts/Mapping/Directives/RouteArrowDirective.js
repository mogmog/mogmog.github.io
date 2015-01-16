Application.Directives.directive('routearrow', function ($state, $stateParams, $filter, $location, $q) {

    var styles = [{
        stylers:[{ color: "#ffffff"}, {saturation: -75}, {lightness: -50}]
    }
    ];

    return {
        restrict: 'A',

        link : function($scope) {

            $scope.data = [
                {x : 0, y: 0, geo : {longitude : 0,  latitude : 11},    name : "Place 1"},
                {x : 0, y: 0, geo : {longitude : 20, latitude : 21},    name : "Place 2"},
                {x : 0, y: 0, geo : {longitude : 56, latitude : -21},   name : "Place 3"},
                {x : 0, y: 0, geo : {longitude : 56, latitude : -31},   name : "Place 5"},
                {x : 0, y: 0, geo : {longitude : 46, latitude : -34},   name : "Place 4"}

            ];

            function Route(layer) {

                function transition(path) {
                    $scope.path = path;
                    path.transition().duration(10000).attrTween("stroke-dasharray", tweenDash).each("end", function() {
                        path.attr('stroke-dasharray', null); //leaving the line as dash-array was causing glitches
                    });
                }

                //thanks to http://zevross.com/blog/2014/09/30/use-the-amazing-d3-library-to-animate-a-path-on-a-leaflet-map/
                function tweenDash() {
                    return function(t) {
                        var l = $scope.path.node().getTotalLength();
                        var interpolate = d3.interpolateString("0," + l, l + "," + l);
                        return interpolate(t);
                    }
                }

                $scope.line = d3.svg.line()
                    .interpolate("cardinal")
                    .x(function(d) {return d.x + 4000})
                    .y(function(d) {return d.y + 4000});

                this.addShapes = function() {
                    layer.append("path").style("stroke", "#000").call(transition);
                    layer.append("circle").style("stroke", "#000")

                    layer
                        .selectAll('.marker')
                        .data($scope.data)
                        .enter()
                        .append('circle')
                        .attr("stroke", "black")
                        .attr("stroke-width","3px")
                        .attr("class", "marker")

                }
            }

            $scope.$on('draw', function() {

                alert("overlay1");



            });

        }
    }

});
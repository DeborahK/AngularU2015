(function () {
    "use strict";

    angular
        .module("movieHunter")
        .controller("MovieDetailCtrl",
                    ["$routeParams",
                     MovieDetailCtrl]);

    function MovieDetailCtrl($routeParams) {
        var vm = this;

        vm.movieId = $routeParams.movieId;
        vm.movie = "";

    }
}());
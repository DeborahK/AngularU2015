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
        vm.movie = {
            movieId: 1,
            title: 'The Fellowship of the Ring',
            director: 'Jackson',
            releaseDate: '2001-12-19',
            imageurl: 'http://www.coverwhiz.com/content/The-Lord-Of-The-Rings-The-Fellowship-Of-The-Ring_small.jpg',
            mpaa: 'pg-13'
        };

    }
}());
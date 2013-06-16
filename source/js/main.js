/*
*	Samuel Chalmers
*	Author Samuel Chalmers
*   Copyright 2012
*   All rights reserved.
*/

main = {
    init: function () {

        $(document).ready(function () {

            //main.logogrid.ie();
          
            main.logogrid.init();

            main.skillset.init();


        });
    },

    //fallback for ie 7,8
    // ie: {
    //     init: function () {
    //         //load selectivizr of nth-child selector is not available
    //         Modernizr.load({
    //             test: Modernizr.nthChild,
    //             nope: '/js/libs/selectivizr-min.js'
    //         }
    //     }
    // },


    //fallback for ie 7,8
    logogrid: {
        init: function () {
            var list = $(".logo-grid li").toArray();
			var elemlength = list.length;

			setInterval(function(){
				$(".logo-grid li").removeClass("flip");
				var randomnum = Math.floor(Math.random()*elemlength);
				var randomitem = list[randomnum];
				$(randomitem).addClass("flip")},3000);

        }
    },

     //fallback for ie 7,8
    skillset: {
        init: function () {
			setInterval(function(){$('.skill-set').addClass("active")},2000);
        }
    }



};

main.init();


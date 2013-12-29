/*
Copyright 2014 Felipe Theodoro Goncalves

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
(function($) {

    $.fn.jmodal = function(opt) {
        var settings = $.extend({
            'background-color' : '#000',
            'class' : 'modal',
            'outsideClickable' : true
        }, opt);

        $(this).click(function(e) {
            e.preventDefault();

            var maskHeight = $(document).height();
            var maskWidth = $(window).width();

            div = $("<div>").css({
                'width': maskWidth,
                'height': maskHeight,
                'position': 'absolute',
                'left': 0,
                'top': 0,
                'z-index': 9000,
                'background-color': settings['background-color']
            });
            $("body").append(div);

            $(div).addClass(settings['class']).fadeIn(1000).fadeTo("slow", 0.8);

            var win = $(window);
            var id = $(this).attr('href');
            $(id).css({
                'top':  win.height() / 2 - $(id).height() / 2,
                'left': win.width() / 2 - $(id).width() / 2,
                'position': 'absolute',
                'z-index': 9999
            }).fadeIn(200);

            if (settings['outsideClickable']) {
                $(div).click(function() {
                    $(this).hide();
                    $(id).hide();
                });
            }
        });
    };

}(jQuery));

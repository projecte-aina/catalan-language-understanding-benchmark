!function(n,i,t){function e(i){var t=n(i).find(".question").text().replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g,"").removeStopWords();a.apply(t,!1)}function o(i){a.apply(n(i).text(),!0,c)}function r(i){n(i).css("background-color",c)}function s(i){n(i).css("background-color","")}var a,c="rgba(10, 230, 100, 0.7)";n(".qa-wrap").mouseenter(function(){var i=this;a=new t(n(this).closest(".para-wrap").find("pre")[0]),e(this);var c=n(this).find(".answer").first();o(c),r(c),n(this).find(".answer, .prediction").mouseenter(function(){s(c),o(this),r(this)}).mouseleave(function(){a&&a.remove(),e(i),s(this)})}).mouseleave(function(){var i=n(this).find(".answer").first();a&&a.remove(),s(i)})}(window.$,window.TextHighlighter,window.Hilitor);
// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require materialize-sprockets
//= require jquery.countdown.min.js
//= require_tree .

$( document ).ready(function (){
	$('#clock').countdown('2015/10/15').on('update.countdown', function(event) {
   	var $this = $(this).html(event.strftime(''
	     + '<span>%-w</span> week%!w '
	     + '<span>%-d</span> day%!d '
	     + '<span>%H</span> hr '
	     + '<span>%M</span> min '
	     + '<span>%S</span> sec'));
	});
});

$(document).ready(function(){
	$('.collapsible').collapsible({
	  accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
	});
});

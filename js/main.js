jQuery(document).ready(function($) {

	// Init Foundation scripts
	$(document).foundation();


	/*
		Property Slider Big and Thumbnails
		https://github.com/sachinchoolur/lightslider/
	*/
	// Init Slider without thumbnails
	if( $(".js-property-slider").length ) {
		$(".js-property-slider").lightSlider({
			item: 1,
			gallery: false,
			useCSS: true,
			cssEasing: 'ease',
			easing: 'linear',
			speed: 400,
			auto: false,
			keyPress: true,
			pager: false,
			controls: true,
			prevHtml: '',
			nextHtml: ''
		});
	};


	// Slider with thumbnails
	if( $('.js-property-slider-thumbnails-parent').length ) {
		var slidersContainer = $('.js-property-slider-thumbnails-parent');

		// Slider Main (without thumbnails)
		// Init 
		var sliderMain = slidersContainer.find(".js-property-slider").lightSlider({
			item: 1,
			gallery: false,
			useCSS: true,
			cssEasing: 'ease',
			easing: 'linear',
			speed: 400,
			auto: false,
			keyPress: true,
			pager: false,
			controls: true,
			prevHtml: '',
			nextHtml: '',

			// Navigation of thumbnails by big slider
			onAfterSlide: function() {
				navigationOfThumbnailsByMainSLider();
			}

		});
		// variables
		var arrowsSliderMain = slidersContainer.find('.js-property-slider-container .lSNext, .js-property-slider-container .lSPrev')


		// Slider Thumbnails
		// Init
		var sliderThumbnails = slidersContainer.find('.js-property-slider-thumbnails').lightSlider({
			autoWidth: true,
			gallery: false,
			slideMargin: 28,
			pager: false
		});
		// variables
		var thumbnailClass = '.js-property-slider-thumbnails-item';
		var thumbnail = sliderThumbnails.find(thumbnailClass);
		var arrowsSliderThumbnails = slidersContainer.find('.js-property-slider-thumbnails-container .lSNext, .js-property-slider-thumbnails-container .lSPrev');



		// Navigation of big slider by clicking thumbnails 
		thumbnail.click(function(){
			// get index
			var number = $(this).index();

			setTimeout(function() {

				// go to slide
				sliderMain.goToSlide(number);
			}, 400);
			

		});    


		// Navigation of thumbnails by big slider
		function navigationOfThumbnailsByMainSLider() {

			setTimeout(function() {
				// get index
				var number = sliderMain.find(".js-property-slider-item.active").index();
				
				// go to slide
				// sliderMain.goToSlide(number);

				// change active thumbnail
				// sliderThumbnails.find(".js-property-slider-thumbnails-item").eq(number).addClass("active").siblings().removeClass("active");

				// go to slide
				sliderThumbnails.goToSlide(number);
				
			}, 400);
		};


		// Navigation of thumbnails by big slider
		arrowsSliderMain.click(function(){
			navigationOfThumbnailsByMainSLider();
		});


	};







	/*
		Chart
		https://github.com/chartjs/Chart.js
	*/
	if( $('#financial-overview-chart').length ) {

		var ctx = document.getElementById('financial-overview-chart').getContext('2d');

		var data = {
			// yLabels: ['', 'Request Added', 'Request Viewed', 'Request Accepted', 'Request Solved', 'Solving Confirmed'],
			xLabels: ["Jan ‘17", "Feb ’17", "Mar ‘17 ", "Apr ‘17", "May ‘17"],
			datasets: [{
				label: "",
				backgroundColor: 'rgba(40, 201, 77, 0.05)',
				borderColor: 'rgb(40, 201, 77)',
				data: [3, 25, 21, 30, 50],
				pointRadius: 7,
			}]
		}
		
		var chart = new Chart.Line(ctx, {
			// The type of chart we want to create
			// The data for our dataset
			data,
		
			// Configuration options go here
			options: {
				responsive: true,
				scaleOverride: true,
				scaleSteps: 10,
				// scaleStepWidth: 100,
				scaleStartValue: 0,
				scales: {
					xAxes: [{
						gridLines: {
							color: "#e9ebf1",
							color: "transparent",
						},
						ticks: {
							fontSize: 15
						}
					}],
					yAxes:[{
						// type: 'category',
						gridLines: {
							color: "#e9ebf1",
						},
						ticks: {
							min: 0,
							beginAtZero: false,
							stepSize: 10,
							fontSize: 15
						},
                        scaleLabel: {
                            display: true,
                            labelString: 'Thousands, $'
                        }
					}]
				},
				layout: {
					padding: {
						left: 0,
						right: 0,
						top: 0,
						bottom: 0
					}
				},
				legend: {
					display: false
				},
				
			}
		});

	};

	// data-toggler-itself - toggle class on element itself click
	$('[data-toggler-itself]').click(function() {
		var className = $(this).data('toggler-itself');
		$(this).toggleClass(className);
	});










});
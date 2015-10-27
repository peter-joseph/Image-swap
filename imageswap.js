var background_images = ['image1.png','image2.png','image3.png','image4.png']; //An Array containing all the images to be rotated
var declared_element = 'body'; //The HTML element that the background-images will be assigned too
var image_location = 'images/'; //The folder that includes the background-images
	
// Calculates the number of images to distribute across the month
var image_count = background_images.length;
	
// Calculates the number of days in the month
function Days_In_Month() {
	var currentDate = new Date();
	var month = currentDate.getMonth() + 1;
	var year = currentDate.getFullYear();
	var days = new Date(year, month, 0).getDate();
	return days;
}
	
// Calculates the number of seconds passed since start of month to current time
function Time_Passed() {
	var x = new Date();
	var y = (x.getUTCDate() * 86400);
	var a = new Date();
	var b = new Date();
	var seconds_left_day = 86400 - (Math.floor((b - a.setHours(0,0,0,0)) / 1000));
	var seconds_passed_month = y - seconds_left_day;
	return seconds_passed_month;
}

// Assigns a set number of seconds to each image and stores them in an array
var Assigned_Times = new Array();
var SPI = ((Days_In_Month() * 86400) / image_count);
var SPT = ((Days_In_Month() * 86400) / image_count);
	for (i=0; i<image_count; i++) {
		Assigned_Times[i] = SPI;
		var SPI = SPT + SPI;
	};
	
// Selects the image in the array that is closest to the current time
for (i=0; i<= image_count; i++) {
	if (Time_Passed() <= Assigned_Times[i]) {
		var selected_image = background_images[i];
		break;
	}
}

// Stores the image in a CSS <style> at the bottom of <body>
var style = document.createElement('style')
	style.innerHTML = declared_element + " {" + "background-image: url(" + image_location + selected_image + ");}";
document.body.appendChild(style);

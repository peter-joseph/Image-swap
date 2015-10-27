#Image-Swap
Image-Swap is a javascript utility that pushes out the contents of an array (In this case our image files) into a css 'background-image' property depending on the time of the month.

Example:
1) The array contains 3 images and the current month has 30 days.
2) The script will output each image to the 'background-image' property for 10 days.

You can apply this script to your own project by modifying the array 'background_images' to suit your own image names. 'declared_element' is a variable that stores the css element the changes will be applied. Modify the variable 'image_location' to set the folder location of the images.

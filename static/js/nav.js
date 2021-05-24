$("#myNavbar").append(`<a href="index.html" class="w3-bar-item w3-button w3-wide">LOGO</a>
<!-- Right-sided navbar links -->
<div class="w3-right w3-hide-small">
    <a href="aboutJCU.html" class="w3-bar-item w3-button">ABOUT JCU</a>
    <a href="admissionJCU.html" class="w3-bar-item w3-button"><i class="fa fa-user"></i> Admissions</a>
    <a href="pickupServices.html" class="w3-bar-item w3-button"><i class="fa fa-plane"></i> Pick Up Service</a>
    <a href="hotel.html" class="w3-bar-item w3-button"><i class="fa fa-hotel"></i> Hotel Resevertion</a>
    <a href="certSample.html" class="w3-bar-item w3-button"><i class="fa fa-graduation-cap"></i> Certification Sample</a>
    <a href="lesson.html" class="w3-bar-item w3-button"><i class="fa fa-envelope"></i> Subject Enrollments</a>

</div>
<!-- Hide right-floated links on small screens and replace them with a menu icon -->

<a href="javascript:void(0)" class="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium" onclick="w3_open()">
    <i class="fa fa-bars"></i>
</a>`)

// Mobile size
$("#mySidebar").append(`<a href="javascript:void(0)" onclick="w3_close()" class="w3-bar-item w3-button w3-large w3-padding-16">Close ×</a>
<a href="aboutJCU.html" class="w3-bar-item w3-button">ABOUT JCU</a>
    <a href="admissionJCU.html" class="w3-bar-item w3-button"><i class="fa fa-user"></i> Admissions</a>
    <a href="pickupServices.html" class="w3-bar-item w3-button"><i class="fa fa-plane"></i> Pick Up Service</a>
    <a href="hotel.html" class="w3-bar-item w3-button"><i class="fa fa-hotel"></i> Hotel Resevertion</a>
    <a href="certSample.html" class="w3-bar-item w3-button"><i class="fa fa-graduation-cap"></i> Certification Sample</a>
    <a href="lesson.html" class="w3-bar-item w3-button"><i class="fa fa-envelope"></i> Subject Enrollments</a>`)
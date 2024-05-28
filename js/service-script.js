
$(function() {
    'use strict';

/*--------------------------------------------------------------
    about-victoria section animation
--------------------------------------------------------------*/
    $('#facial-style').css({
        'opacity': '0'
    });

    $('#facial-style').each(function () {
        var $this = $(this);
        var myVal = $(this).data("value");

        $this.appear(function() {
            $('#facial-style').addClass('animated fadeInUp');
        });
    });




/*--------------------------------------------------------------
    Jquery date picker
--------------------------------------------------------------*/
    $('#arrive-time').timepicker({ 'timeFormat': 'g:ia' });
    $('#arrive-date').datepicker({
        minDate: '0',
        maxDate: "+5m"
    });
    $('#arrive-time').timepicker('option', { 'minTime': '09:00am', 'maxTime': '09:00pm', 'step': '60' });


/*--------------------------------------------------------------
    Advantages section animation
--------------------------------------------------------------*/
     $('.advantages #first-advantage, .advantages #second-advantage, .advantages #third-advantage, .advantages #fourth-advantage').css({
        'opacity': 0
     });

    $('.advantages #first-advantage').each(function () {
        var $this = $(this);

        $this.appear(function() {
            $('.advantages #first-advantage').addClass('animated fadeInUp');
        });
    });

    $('.advantages #second-advantage').each(function () {
        var $this = $(this);

        $this.appear(function() {
            $('.advantages #second-advantage').addClass('animated fadeInUp');
        });
    });

    $('.advantages #third-advantage').each(function () {
        var $this = $(this);

        $this.appear(function() {
            $('.advantages #third-advantage').addClass('animated fadeInUp');
        });
    });

    $('.advantages #fourth-advantage').each(function () {
        var $this = $(this);

        $this.appear(function() {
            $('.advantages #fourth-advantage').addClass('animated fadeInUp');
        });
    });



/*--------------------------------------------------------------
    Facial massage silder
--------------------------------------------------------------*/
    $('.facial-slider').owlCarousel({
        items : 3,
        itemsDesktop: [1199,3],    
        autoPlay: true,
        navigation: true,
        navigationText:  ["<i class='flaticon-arrows-3'></i>","<i class='flaticon-arrows-1'></i>"],
        pagination: false,
        mouseDrag: false
    });



/*--------------------------------------------------------------
    Service shop slider
--------------------------------------------------------------*/
    $('.service-shop-slider').owlCarousel({
        items : 3,
        itemsDesktop: [1199,3],    
        autoPlay: true,
        navigation: true,
        navigationText:  ["<i class='flaticon-arrows-3'></i>","<i class='flaticon-arrows-1'></i>"],
        pagination: false,
        mouseDrag: false
    });


/*--------------------------------------------------------------
    Appoinment Popup box
--------------------------------------------------------------*/
    (function() {
        var makeAppoinmentBtn = $('.make-appointment-btn'),
            appoinmentPopUpBox = $('.appoinment-popup-box'),
            closeBtn = $('.appoinment-popup-box .close');

        makeAppoinmentBtn.on('click', function(e) {
            e.preventDefault();
            appoinmentPopUpBox.css({
                'visibility': 'visible',
                'opacity': 1
            });
            var status = document.getElementById("status");
            var appoinment = document.getElementById('form-inline');
            appoinment.addEventListener('submit', function(event) {
            event.preventDefault();
            $('#btn').attr('value', 'Booking ...');
            $("#btn").prop('disabled', true);
            var username = document.getElementById("name").value;
            emailjs.sendForm('gmail', 'appointment', this)
            .then(() => {
                status.innerHTML = "Thank you "+username+", Let's unwind the knots!";
                appoinment.reset();
                $('#btn').attr('value', 'Booked');
                $("#btn").prop('disabled', true);
                setTimeout(function() {status.innerHTML="";}, 5000);
                //console.log('SUCCESS!');
            }, (error) => {
                //console.log('FAILED...', error);
                status.innerHTML = "Oops! There was a problem, please try again later";
                $('#btn').attr('value', 'Book Now');
                $("#btn").prop('disabled', false);
                setTimeout(function() {status.innerHTML="";}, 5000);
            });
            });

            closeBtn.on('click', function() {
                appoinmentPopUpBox.css({
                    'visibility': 'hidden',
                    'opacity': 0
                });
                return false;
            });
            return false;
        });
    }());

}) // end of document.ready
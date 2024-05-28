
$(function() {
    'use strict';

/*--------------------------------------------------------------
    Partner slider
--------------------------------------------------------------*/
    $('.partner-slider').owlCarousel({
        items : 4,
        itemsDesktop: [1199,4],    
        autoPlay: true,
        pagination: true,
        navigation: true,
        navigationText:  ["<i class='flaticon-arrows-3'></i>","<i class='flaticon-arrows-1'></i>"],
        mouseDrag: false
    });



/*--------------------------------------------------------------
    Fun fact section animate numbers
--------------------------------------------------------------*/
    $('.fun-fact .container .row').each(function () {
        var $this = $(this);

        $this.appear(function() {
            $('#happy-clients').animateNumber({ number: 145 }, 2000);
            $('#awards').animateNumber({ number: 3 }, 2000);
            $('#coffee').animateNumber({ number: 26 }, 2000);
            $('#works').animateNumber({ number: 200 }, 2000);
        });
    });



/*--------------------------------------------------------------
    Expart section animation
--------------------------------------------------------------*/
    $('.exparts .content').each(function () {
        var $this = $(this);
        var myVal = $(this).data("value");

        $this.appear(function() {
            $('.exparts #left-member').addClass('fadeInLeft');
            $('.exparts #right-member').addClass('fadeInRight');
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
                setTimeout(function() {status.innerHTML="";}, 6000);
                //console.log('SUCCESS!');
            }, (error) => {
                //console.log('FAILED...', error);
                status.innerHTML = "Oops! There was a problem, please try again later";
                $('#btn').attr('value', 'Book Now');
                $("#btn").prop('disabled', false);
                setTimeout(function() {status.innerHTML="";}, 6000);
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


}); //end of document.ready

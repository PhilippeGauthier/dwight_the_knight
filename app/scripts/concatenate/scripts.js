$(document).ready(function() {

	/***************** Waypoints ******************/

	$('.wp1').waypoint(function() {
		$('.wp1').addClass('animated fadeInLeft');
	}, {
		offset: '75%'
	});
	$('.wp2').waypoint(function() {
		$('.wp2').addClass('animated fadeInDown');
	}, {
		offset: '100%'
	});
	$('.wp3').waypoint(function() {
		$('.wp3').addClass('animated bounceInDown');
	}, {
		offset: '75%'
	});
	$('.wp4').waypoint(function() {
		$('.wp4').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});

	/***************** Flickity ******************/

	// $('#featuresSlider').flickity({
	// 	cellAlign: 'left',
	// 	contain: true,
	// 	prevNextButtons: false
	// });

	// $('#showcaseSlider').flickity({
	// 	cellAlign: 'left',
	// 	contain: true,
	// 	prevNextButtons: false,
	// 	imagesLoaded: true
	// });

	/***************** Fancybox ******************/

	$(".youtube-media").on("click", function(e) {
		var jWindow = $(window).width();
		if (jWindow <= 768) {
			return;
		}
		$.fancybox({
			href: this.href,
			padding: 4,
			type: "iframe",
			'href': this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
		});
		return false;
	});

});

$(document).ready(function() {
	$("a.single_image").fancybox({
		padding: 4,
	});
});

/***************** Nav Transformicon ******************/

/* When user clicks the Icon */
$(".nav-toggle").click(function() {
	$(this).toggleClass("active");
	$("#main").toggleClass("open");
});

/* When user clicks a link */
$("#main ul li a").click(function() {
	$(".nav-toggle").toggleClass("active");
	$("#main").toggleClass("open");
});

/* When user clicks outside */
$("#main").click(function() {
	$(".nav-toggle").toggleClass("active");
	$("#main").toggleClass("open");
});


/***************** Insurance Transformicon ******************/

/* When user clicks the Icon */
$(".insurance-toggle").click(function() {
    $(this).toggleClass("active");
	event.preventDefault();
	$("#insurance").toggleClass("open");
});

/* When user clicks a link */
$("#insurance ul li a").click(function() {
	$("#insurance").toggleClass("open");
});

/* When user clicks outside */
$("#insurance").click(function() {
	$("#insurance").toggleClass("open");
});


/***************** Smooth Scrolling ******************/

$('a[href*=#]:not([href=#])').click(function() {
	if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		if (target.length) {
			$('html,body').animate({
				scrollTop: target.offset().top
			}, 2000);
			return false;
		}
	}
});

/***************** Modal Options ******************/
// $('#privacyPolicy').modal({
//   backdrop: true
// })



/***************** Form Validation ******************/

$(document).ready(function() {
    $('#tax_debt').formValidation({
        framework: 'bootstrap',
        icon: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        live: 'disabled',
        fields: {
            First_Name: {
                trigger: 'blur',
                validators: {
                    notEmpty: {
                        message: 'The first name is required'
                    }
                }
            },
            Last_Name: {
                trigger: 'blur',
                validators: {
                    notEmpty: {
                        message: 'The last name is required'
                    }
                }
            },
            Email_Address: {
                trigger: 'blur',
                validators: {
                    notEmpty: {
                        message: 'The email address is required'
                    },
                    emailAddress: {
                        message: 'The input is not a valid email address'
                    }
                }
            },
            Zip_Code: {
                trigger: 'blur',
                validators: {
                    notEmpty: {
                        message: 'The Zip Code is Required'
                    },
                    numeric: {
                        message: 'Can only contain numbers'
                    }
                }
            },
            Phone_Number: {
                trigger: 'blur',
                validators: {
                    notEmpty: {
                        message: 'The Phone Number is Required'
                    }
                }
            },
            Tax_Debt_Amount: {
                trigger: 'blur',
                validators: {
                    stringLength: {
                        min: 2,
                        message: 'Please select a Tax Debt Amount'
                    }
                }
            },
            button: {
                // The submit buttons selector
                selector: '[type="submit"]',

                // The disabled class
                disabled: 'disabled'
            }
        },
    })
    .on('success.field.fv', function(e, data) {
        if (data.fv.getInvalidFields().length > 0) {    // There is invalid field
            data.fv.disableSubmitButtons(true);
        }
    });
});

$(document).ready(function() {
    $('#mortgage').formValidation({
        framework: 'bootstrap',
        icon: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        live: 'disabled',
        fields: {
            First_Name: {
                trigger: 'blur',
                validators: {
                    notEmpty: {
                        message: 'First name is required'
                    }
                }
            },
            Last_Name: {
                trigger: 'blur',
                validators: {
                    notEmpty: {
                        message: 'Last name is required'
                    }
                }
            },
            Email_Address: {
                trigger: 'blur',
                validators: {
                    notEmpty: {
                        message: 'Email address is required'
                    },
                    emailAddress: {
                        message: 'The input is not a valid email address'
                    }
                }
            },
            Phone_Number: {
                trigger: 'blur',
                validators: {
                    notEmpty: {
                        message: 'Phone Number is Required'
                    }
                }
            },
            Estimated_Property_Value: {
                trigger: 'blur',
                validators: {
                    notEmpty: {
                        message: 'Property value is Required'
                    }
                }
            },
            Loan_Amount: {
                trigger: 'blur',
                validators: {
                    notEmpty: {
                        message: 'Property value is Required'
                    }
                }
            },
            Property_Street: {
                trigger: 'blur',
                validators: {
                    notEmpty: {
                        message: 'Your Street Name is Required'
                    }
                }
            },
            Property_City: {
                trigger: 'blur',
                validators: {
                    notEmpty: {
                        message: 'City Name is Required'
                    }
                }
            },
            Property_State: {
                trigger: 'blur',
                validators: {
                    stringLength: {
                        min: 2,
                        message: 'Please select a state'
                    }
                }
            },
            Zip_Code: {
                trigger: 'blur',
                validators: {
                    notEmpty: {
                        message: 'Zip Code is Required'
                    },
                    numeric: {
                        message: 'Zip Code can only contain numbers'
                    }
                }
            },
            Type_Of_Home: {
                trigger: 'blur',
                validators: {
                    stringLength: {
                        min: 2,
                        message: 'Please select a type of home'
                    }
                }
            },
            FHA_Status: {
                trigger: 'blur',
                validators: {
                    stringLength: {
                        min: 2,
                        message: 'Please select a FHA status'
                    }
                }
            },
            Credit_Status: {
                trigger: 'blur',
                validators: {
                    stringLength: {
                        min: 2,
                        message: 'Please select your credit status'
                    }
                }
            },
            Additional_Cash: {
                trigger: 'blur',
                validators: {
                    notEmpty: {
                        message: 'Please answer "No" or the amount you would like to borrow'
                    }
                }
            },
            Military_Status: {
                trigger: 'blur',
                validators: {
                    stringLength: {
                        min: 2,
                        message: 'Please select your military status'
                    }
                }
            },
            Employment_Status: {
                trigger: 'blur',
                validators: {
                    stringLength: {
                        min: 2,
                        message: 'Please select your employment status'
                    }
                }
            },
            Verifiable_Income: {
                trigger: 'blur',
                validators: {
                    stringLength: {
                        min: 2,
                        message: 'Please select your whether your income is verifiable'
                    }
                }
            },
            Bankruptcy_Or_Foreclosure: {
                trigger: 'blur',
                validators: {
                    stringLength: {
                        min: 2,
                        message: 'Please select your whether you have filed for bankruptcy or foreclosure in the last three years'
                    }
                }
            },
            button: {
                // The submit buttons selector
                selector: '[type="submit"]',

                // The disabled class
                disabled: 'disabled'
            }
        },
    })
    .on('success.field.fv', function(e, data) {
        if (data.fv.getInvalidFields().length > 0) {    // There is invalid field
            data.fv.disableSubmitButtons(true);
        }
    });
});

$(document).ready(function() {
    $('#insurance_auto').formValidation({
        framework: 'bootstrap',
        icon: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        live: 'disabled',
        fields: {
            First_Name: {
                trigger: 'blur',
                validators: {
                    notEmpty: {
                        message: 'First name is required'
                    }
                }
            },
            Last_Name: {
                trigger: 'blur',
                validators: {
                    notEmpty: {
                        message: 'Last name is required'
                    }
                }
            },
            Gender: {
                trigger: 'blur',
                validators: {
                    stringLength: {
                        min: 2,
                        message: 'Please select a gender'
                    }
                }
            },
            Age: {
                trigger: 'blur',
                validators: {
                    notEmpty: {
                        message: 'Age is required'
                    },
                    numeric: {
                        message: 'Age can only contain numbers'
                    }
                }
            },
            Height: {
                trigger: 'blur',
                validators: {
                    notEmpty: {
                        message: 'Height is required'
                    }
                }
            },
            Weight: {
                trigger: 'blur',
                validators: {
                    notEmpty: {
                        message: 'Weight is required'
                    }
                }
            },
            Marital_Status: {
                trigger: 'blur',
                validators: {
                    stringLength: {
                        min: 2,
                        message: 'Please select a marrital Status'
                    }
                }
            },
            Email_Address: {
                trigger: 'blur',
                validators: {
                    notEmpty: {
                        message: 'Email address is required'
                    },
                    emailAddress: {
                        message: 'The input is not a valid email address'
                    }
                }
            },
            Phone_Number: {
                trigger: 'blur',
                validators: {
                    notEmpty: {
                        message: 'Phone Number is Required'
                    }
                }
            },
            Zip_Code: {
                trigger: 'blur',
                validators: {
                    notEmpty: {
                        message: 'Zip Code is Required'
                    },
                    numeric: {
                        message: 'Zip Code can only contain numbers'
                    }
                }
            },
            Car_Year: {
                trigger: 'blur',
                validators: {
                    notEmpty: {
                        message: 'Car Year is Required'
                    }
                }
            },
            Car_Make: {
                trigger: 'blur',
                validators: {
                    notEmpty: {
                        message: 'Car Make is Required'
                    }
                }
            },
            Car_Model: {
                trigger: 'blur',
                validators: {
                    notEmpty: {
                        message: 'Car Model is Required'
                    }
                }
            },
            Ownership_Status: {
                trigger: 'blur',
                validators: {
                    stringLength: {
                        min: 2,
                        message: 'Please select an ownership status'
                    }
                }
            },
            Primary_Use: {
                trigger: 'blur',
                validators: {
                    stringLength: {
                        min: 2,
                        message: 'Please select a primary use'
                    }
                }
            },
            Estimated_Annual_Mileage: {
                trigger: 'blur',
                validators: {
                    notEmpty: {
                        message: 'Estiamted Annual Mileage is required'
                    }
                }
            },
            button: {
                // The submit buttons selector
                selector: '[type="submit"]',

                // The disabled class
                disabled: 'disabled'
            }
        },
    })
    .on('success.field.fv', function(e, data) {
        if (data.fv.getInvalidFields().length > 0) {    // There is invalid field
            data.fv.disableSubmitButtons(true);
        }
    });
});

$(document).ready(function() {
    $('#insurance_life').formValidation({
        framework: 'bootstrap',
        icon: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        live: 'disabled',
        fields: {
            First_Name: {
                trigger: 'blur',
                validators: {
                    notEmpty: {
                        message: 'First name is required'
                    }
                }
            },
            Last_Name: {
                trigger: 'blur',
                validators: {
                    notEmpty: {
                        message: 'Last name is required'
                    }
                }
            },
            Gender: {
                trigger: 'blur',
                validators: {
                    stringLength: {
                        min: 2,
                        message: 'Please select a gender'
                    }
                }
            },
            Age: {
                trigger: 'blur',
                validators: {
                    notEmpty: {
                        message: 'Age is required'
                    },
                    numeric: {
                        message: 'Age can only contain numbers'
                    }
                }
            },
            Height: {
                trigger: 'blur',
                validators: {
                    notEmpty: {
                        message: 'Height is required'
                    }
                }
            },
            Weight: {
                trigger: 'blur',
                validators: {
                    notEmpty: {
                        message: 'Weight is required'
                    }
                }
            },
            Email_Address: {
                trigger: 'blur',
                validators: {
                    notEmpty: {
                        message: 'Email address is required'
                    },
                    emailAddress: {
                        message: 'The input is not a valid email address'
                    }
                }
            },
            Phone_Number: {
                trigger: 'blur',
                validators: {
                    notEmpty: {
                        message: 'Phone Number is Required'
                    }
                }
            },
            Zip_Code: {
                trigger: 'blur',
                validators: {
                    notEmpty: {
                        message: 'Zip Code is Required'
                    },
                    numeric: {
                        message: 'Zip Code can only contain numbers'
                    }
                }
            },
            Current_Life_Insurance_Policy: {
                trigger: 'blur',
                validators: {
                    stringLength: {
                        min: 2,
                        message: 'Please select a whether you have a current life insurance policy'
                    }
                }
            },
            Amount: {
                trigger: 'blur',
                validators: {
                    stringLength: {
                        min: 2,
                        message: 'Please select the amount of coverage you are seeking'
                    }
                }
            },
            Duration: {
                trigger: 'blur',
                validators: {
                    stringLength: {
                        min: 2,
                        message: 'Please select the duration of your coverage'
                    }
                }
            },
            Tobacco_Use: {
                trigger: 'blur',
                validators: {
                    stringLength: {
                        min: 2,
                        message: 'Please select if you have a history of tobacco use'
                    }
                }
            },
            Cancer_Heart_Stroke_Diabetes: {
                trigger: 'blur',
                validators: {
                    stringLength: {
                        min: 2,
                        message: 'Please select if you have a history of the stated health issues'
                    }
                }
            },
            Overall_Health: {
                trigger: 'blur',
                validators: {
                    stringLength: {
                        min: 2,
                        message: 'Please select your current health condition'
                    }
                }
            },
            button: {
                // The submit buttons selector
                selector: '[type="submit"]',

                // The disabled class
                disabled: 'disabled'
            }
        },
    })
    .on('success.field.fv', function(e, data) {
        if (data.fv.getInvalidFields().length > 0) {    // There is invalid field
            data.fv.disableSubmitButtons(true);
        }
    });
});

$(document).ready(function() {
    $('#insurance_health').formValidation({
        framework: 'bootstrap',
        icon: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        live: 'disabled',
        fields: {
            First_Name: {
                trigger: 'blur',
                validators: {
                    notEmpty: {
                        message: 'First name is required'
                    }
                }
            },
            Last_Name: {
                trigger: 'blur',
                validators: {
                    notEmpty: {
                        message: 'Last name is required'
                    }
                }
            },
            Gender: {
                trigger: 'blur',
                validators: {
                    stringLength: {
                        min: 2,
                        message: 'Please select a gender'
                    }
                }
            },
            Age: {
                trigger: 'blur',
                validators: {
                    notEmpty: {
                        message: 'Age is required'
                    },
                    numeric: {
                        message: 'Age can only contain numbers'
                    }
                }
            },
            Tobacco_Use: {
                trigger: 'blur',
                validators: {
                    stringLength: {
                        min: 2,
                        message: 'Please select if you have a history of tobacco use'
                    }
                }
            },
            College: {
                trigger: 'blur',
                validators: {
                    stringLength: {
                        min: 2,
                        message: 'Please select if you are a college student'
                    }
                }
            },
            Address: {
                trigger: 'blur',
                validators: {
                    notEmpty: {
                        message: 'Your Street Name is Required'
                    }
                }
            },
            City: {
                trigger: 'blur',
                validators: {
                    notEmpty: {
                        message: 'City Name is Required'
                    }
                }
            },
            State: {
                trigger: 'blur',
                validators: {
                    stringLength: {
                        min: 2,
                        message: 'Please select your state'
                    }
                }
            },
            Zip_Code: {
                trigger: 'blur',
                validators: {
                    notEmpty: {
                        message: 'Zip Code is Required'
                    },
                    numeric: {
                        message: 'Zip Code can only contain numbers'
                    }
                }
            },
            Email_Address: {
                trigger: 'blur',
                validators: {
                    notEmpty: {
                        message: 'Email address is required'
                    },
                    emailAddress: {
                        message: 'The input is not a valid email address'
                    }
                }
            },
            Phone_Number: {
                trigger: 'blur',
                validators: {
                    notEmpty: {
                        message: 'Phone Number is Required'
                    }
                }
            },
            button: {
                // The submit buttons selector
                selector: '[type="submit"]',

                // The disabled class
                disabled: 'disabled'
            }
        },
    })
    .on('success.field.fv', function(e, data) {
        if (data.fv.getInvalidFields().length > 0) {    // There is invalid field
            data.fv.disableSubmitButtons(true);
        }
    });
});

$(document).ready(function() {
    $('#insurance_final').formValidation({
        framework: 'bootstrap',
        icon: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        live: 'disabled',
        fields: {
            First_Name: {
                trigger: 'blur',
                validators: {
                    notEmpty: {
                        message: 'First name is required'
                    }
                }
            },
            Last_Name: {
                trigger: 'blur',
                validators: {
                    notEmpty: {
                        message: 'Last name is required'
                    }
                }
            },
            Gender: {
                trigger: 'blur',
                validators: {
                    stringLength: {
                        min: 2,
                        message: 'Please select a gender'
                    }
                }
            },
            Age: {
                trigger: 'blur',
                validators: {
                    notEmpty: {
                        message: 'Age is required'
                    },
                    numeric: {
                        message: 'Age can only contain numbers'
                    }
                }
            },
            Height: {
                trigger: 'blur',
                validators: {
                    notEmpty: {
                        message: 'Height is required'
                    }
                }
            },
            Weight: {
                trigger: 'blur',
                validators: {
                    notEmpty: {
                        message: 'Weight is required'
                    }
                }
            },
            Email_Address: {
                trigger: 'blur',
                validators: {
                    notEmpty: {
                        message: 'Email address is required'
                    },
                    emailAddress: {
                        message: 'The input is not a valid email address'
                    }
                }
            },
            Phone_Number: {
                trigger: 'blur',
                validators: {
                    notEmpty: {
                        message: 'Phone Number is Required'
                    }
                }
            },
            Zip_Code: {
                trigger: 'blur',
                validators: {
                    notEmpty: {
                        message: 'Zip Code is Required'
                    },
                    numeric: {
                        message: 'Zip Code can only contain numbers'
                    }
                }
            },
            Amount: {
                trigger: 'blur',
                validators: {
                    stringLength: {
                        min: 2,
                        message: 'Please select the amount of coverage you are seeking'
                    }
                }
            },
            Duration: {
                trigger: 'blur',
                validators: {
                    stringLength: {
                        min: 2,
                        message: 'Please select the duration of your coverage'
                    }
                }
            },
            Tobacco_Use: {
                trigger: 'blur',
                validators: {
                    stringLength: {
                        min: 2,
                        message: 'Please select if you have a history of tobacco use'
                    }
                }
            },
            Cancer_Heart_Stroke_Diabetes: {
                trigger: 'blur',
                validators: {
                    stringLength: {
                        min: 2,
                        message: 'Please select if you have a history of the stated health issues'
                    }
                }
            },
            Overall_Health: {
                trigger: 'blur',
                validators: {
                    stringLength: {
                        min: 2,
                        message: 'Please select your current health condition'
                    }
                }
            },
            button: {
                // The submit buttons selector
                selector: '[type="submit"]',

                // The disabled class
                disabled: 'disabled'
            }
        },
    })
    .on('success.field.fv', function(e, data) {
        if (data.fv.getInvalidFields().length > 0) {    // There is invalid field
            data.fv.disableSubmitButtons(true);
        }
    });
});



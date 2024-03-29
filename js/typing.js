"use strict";
var courseForm, stepperForm;
(function() {
    if ($(".dropdown-menu a.dropdown-toggle").length && $(".dropdown-menu a.dropdown-toggle").on("click", (function(e) {
            return $(this).next().hasClass("show") || $(this).parents(".dropdown-menu").first().find(".show").removeClass("show"), $(this).next(".dropdown-menu").toggleClass("show"), $(this).parents("li.nav-item.dropdown.show").on("hidden.bs.dropdown", (function(e) {
                $(".dropdown-submenu .show").removeClass("show")
            })), !1
        })), $('[data-bs-toggle="tooltip"]').length)[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map((function(e) {
        return new bootstrap.Tooltip(e)
    }));
    if ($('[data-bs-toggle="popover"]').length)[].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]')).map((function(e) {
        return new bootstrap.Popover(e)
    }));
    if ($("#cardRadioone , #cardRadioTwo").length && ($("#internetpayment").hide(), $("#cardRadioone").on("change", (function() {
            this.checked && ($("#cardpayment").show(), $("#internetpayment").hide())
        })), $("#cardRadioTwo").on("change", (function() {
            this.checked && ($("#internetpayment").show(), $("#cardpayment").hide())
        }))), $(".popup-youtube").length && $(".popup-youtube").magnificPopup({
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: !1,
            fixedContentPos: !0
        }), $(".flatpickr").length && flatpickr(".flatpickr", {
            disableMobile: !0
        }), $(".password-field input").length) {
        function e(e) {
            var t = 0;
            return e.length >= 6 && (t += 1), e.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/) && (t += 1), e.match(/([a-zA-Z])/) && e.match(/([0-9])/) && (t += 1), t
        }
        $(".password-field input").on("keyup", (function() {
            var t = e($(this).val()),
                o = $(this).parent(".password-field");
            o.removeClass((function(e, t) {
                return (t.match(/\level\S+/g) || []).join(" ")
            })), o.addClass("level" + t)
        }))
    }
    if ($("input").length && Inputmask().mask(document.querySelectorAll("input")), $("#editor").length) new Quill("#editor", {
        modules: {
            toolbar: [
                [{
                    header: [1, 2, !1]
                }],
                [{
                    font: []
                }],
                ["bold", "italic", "underline", "strike"],
                [{
                    size: ["small", !1, "large", "huge"]
                }],
                [{
                    list: "ordered"
                }, {
                    list: "bullet"
                }],
                [{
                    color: []
                }, {
                    background: []
                }, {
                    align: []
                }],
                ["link", "image", "code-block", "video"]
            ]
        },
        theme: "snow"
    });
    if ($('[data-upload-id="courseImage"]').length) {
        new FileUploadWithPreview.FileUploadWithPreview("courseImage")
    }
    if ($("#nav-toggle").length && $("#nav-toggle").on("click", (function(e) {
            e.preventDefault(), $("#db-wrapper").toggleClass("toggled")
        })), $("#invoice").length && $("#invoice").find(".print-link").on("click", (function() {
            $.print("#invoice")
        })), $(".sidebar-nav-fixed a").length && $(".sidebar-nav-fixed a").on("click", (function(e) {
            if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                var t = $(this.hash);
                (t = t.length ? t : $("[name=" + this.hash.slice(1) + "]")).length && (e.preventDefault(), $("html, body").animate({
                    scrollTop: t.offset().top - 90
                }, 1e3, (function() {
                    var e = $(t);
                    if (e.focus(), e.is(":focus")) return !1;
                    e.attr("tabindex", "-1"), e.focus()
                })))
            }
            $(".sidebar-nav-fixed a").each((function() {
                $(this).removeClass("active")
            })), $(this).addClass("active")
        })), $("#checkAll").length && $("#checkAll").on("click", (function() {
            $("input:checkbox").not(this).prop("checked", this.checked)
        })), $("#btn-icon").length && $(".btn-icon").on("click", (function() {
            $(this).parent().addClass("active").siblings().removeClass("active")
        })), $(".stopevent").length && $(document).on("click.bs.dropdown.data-api", ".stopevent", (function(e) {
            e.stopPropagation()
        })), $("input[name=tags]").length) {
        var e = document.querySelector("input[name=tags]");
        new Tagify(e)
    }
    if ($(".typed").length) new Typed(".typed", {
        strings: ["Привет!", "Salam əleyküm!", "Ola!", "Dia dhuit!", "Oi!", "Hola!", "Halló!", "Aloha!",
    "侬好!", "Bonjour!"],
        typeSpeed: 40,
        backSpeed: 40,
        backDelay: 1e3,
        loop: !0
    });
    if ($(".needs-validation").length) {
        var t = document.querySelectorAll(".needs-validation");
        Array.prototype.slice.call(t).forEach((function(e) {
            e.addEventListener("submit", (function(t) {
                e.checkValidity() || (t.preventDefault(), t.stopPropagation()), e.classList.add("was-validated")
            }), !1)
        }))
    }
    if ($(".toast").length)[].slice.call(document.querySelectorAll(".toast")).map((function(e) {
        return new bootstrap.Toast(e)
    }));
    if ($(".offcanvas").length)[].slice.call(document.querySelectorAll(".offcanvas")).map((function(e) {
        return new bootstrap.Offcanvas(e)
    }));
    if ($(".dropdown-toggle").length)[].slice.call(document.querySelectorAll(".dropdown-toggle")).map((function(e) {
        return new bootstrap.Dropdown(e)
    }));
    if ($("#dataTableBasic").length && $(document).ready((function() {
            $("#dataTableBasic").DataTable({
                responsive: !0
            })
        })), $("#liveAlertPlaceholder").length) {
        var o = document.getElementById("liveAlertPlaceholder"),
            a = document.getElementById("liveAlertBtn");
        a && a.addEventListener("click", (function() {
            var e, t, a;
            e = "Nice, you triggered this alert message!", t = "success", (a = document.createElement("div")).innerHTML = '<div class="alert alert-' + t + ' alert-dismissible" role="alert">' + e + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>', o.append(a)
        }))
    }
  
    if ($("#slider").length) {
        var r = document.getElementById("slider");
        noUiSlider.create(r, {
            start: [32],
            connect: [!0, !1],
            range: {
                min: 0,
                max: 60
            },
            tooltips: [wNumb({
                decimals: 0
            })]
        })
    }
    if ($(".glightboxGallery").length) GLightbox({
        selector: ".glightboxGallery"
    })
}(), function() {
    var e = $("#pricing-switch input");
    $(e).on("change", (function() {
        !0 === $(e).is(":checked") ? $(".toggle-price-content").each((function() {
            $(this).html($(this).data("price-yearly"))
        })) : $(".toggle-price-content").each((function() {
            $(this).html($(this).data("price-monthly"))
        }))
    }))
}(), function() {
    var e = $("#pricing-switch-second input");
    $(e).on("change", (function() {
        !0 === $(e).is(":checked") ? $(".toggle-price-content-second").each((function() {
            $(this).html($(this).data("price-yearly"))
        })) : $(".toggle-price-content-second").each((function() {
            $(this).html($(this).data("price-monthly"))
        }))
    }))
}(), dragula([document.querySelector("#courseOne"), document.querySelector("#courseTwo")]), dragula([document.querySelector("#do"), document.querySelector("#progress"), document.querySelector("#review"), document.querySelector("#done")]), $("#courseForm").length) && document.addEventListener("DOMContentLoaded", (function() {
    courseForm = new Stepper(document.querySelector("#courseForm"), {
        linear: !1,
        animation: !0
    })
}));
$("#stepperForm").length && document.addEventListener("DOMContentLoaded", (function() {
    stepperForm = new Stepper(document.querySelector("#stepperForm"), {
        linear: !1,
        animation: !0
    })
}));
! function() {
    var e = window.location + "",
        t = e.replace(window.location.protocol + "//" + window.location.host + "/", "");
    $("ul#sidebarnav a").filter((function() {
        return this.href === e || this.href === t
    })).parentsUntil(".sidebar-nav").each((function(e) {
        $(this).is("li") && 0 !== $(this).children("a").length ? ($(this).children("a").addClass("active"), $(this).parent("ul#sidebarnav").length, $(this).addClass("active")) : $(this).is("ul") || 0 !== $(this).children("a").length ? $(this).is("ul") && $(this).addClass("in") : $(this).addClass("active")
    }))
}(),
function() {
    if ($(".sliderFirst").length) tns({
        container: ".sliderFirst",
        loop: !0,
        startIndex: 1,
        items: 1,
        nav: !1,
        autoplay: !0,
        swipeAngle: !1,
        speed: 400,
        autoplayButtonOutput: !1,
        mouseDrag: !0,
        lazyload: !0,
        gutter: 20,
        controlsContainer: "#sliderFirstControls",
        responsive: {
            768: {
                items: 2
            },
            990: {
                items: 4
            }
        }
    });
    if ($(".sliderSecond").length) tns({
        container: ".sliderSecond",
        loop: !0,
        startIndex: 1,
        items: 1,
        nav: !1,
        autoplay: !0,
        swipeAngle: !1,
        speed: 400,
        autoplayButtonOutput: !1,
        mouseDrag: !0,
        lazyload: !0,
        gutter: 20,
        controlsContainer: "#sliderSecondControls",
        responsive: {
            768: {
                items: 2
            },
            990: {
                items: 4
            }
        }
    });
    if ($(".sliderThird").length) tns({
        container: ".sliderThird",
        loop: !0,
        startIndex: 1,
        items: 1,
        nav: !1,
        autoplay: !0,
        swipeAngle: !1,
        speed: 400,
        autoplayButtonOutput: !1,
        mouseDrag: !0,
        lazyload: !0,
        gutter: 20,
        controlsContainer: "#sliderThirdControls",
        responsive: {
            768: {
                items: 2
            },
            990: {
                items: 4
            }
        }
    });
    if ($(".sliderFourth").length) tns({
        container: ".sliderFourth",
        loop: !0,
        startIndex: 1,
        items: 1,
        nav: !1,
        autoplay: !0,
        swipeAngle: !1,
        speed: 400,
        autoplayButtonOutput: !1,
        mouseDrag: !0,
        lazyload: !0,
        gutter: 20,
        controlsContainer: "#sliderFourthControls",
        responsive: {
            768: {
                items: 2
            },
            990: {
                items: 4
            }
        }
    });
    if ($(".sliderTestimonial").length) tns({
        container: ".sliderTestimonial",
        loop: !0,
        startIndex: 1,
        items: 1,
        nav: !1,
        autoplay: !0,
        swipeAngle: !1,
        speed: 400,
        autoplayButtonOutput: !1,
        mouseDrag: !0,
        lazyload: !0,
        gutter: 20,
        controlsContainer: "#sliderTestimonialControls",
        responsive: {
            768: {
                items: 2
            },
            990: {
                items: 3
            }
        }
    });
    if ($(".sliderTestimonialSecond").length) tns({
        container: ".sliderTestimonialSecond",
        loop: !0,
        startIndex: 1,
        items: 1,
        nav: !1,
        autoplay: !0,
        swipeAngle: !1,
        speed: 400,
        autoplayButtonOutput: !1,
        mouseDrag: !0,
        lazyload: !0,
        gutter: 20,
        controlsContainer: "#sliderTestimonialSecondControls",
        responsive: {
            768: {
                items: 1
            },
            990: {
                items: 1
            }
        }
    });
    if ($(".product").length) tns({
        container: "#product",
        items: 1,
        startIndex: 1,
        navContainer: "#product-thumbnails",
        navAsThumbnails: !0,
        autoplay: !1,
        autoplayTimeout: 1e3,
        swipeAngle: !1,
        speed: 400,
        controls: !1
    });
    if ($(".sliderTestimonialThird").length) tns({
        container: ".sliderTestimonialThird",
        loop: !0,
        startIndex: 1,
        items: 1,
        nav: !1,
        autoplay: !0,
        swipeAngle: !1,
        speed: 400,
        autoplayButtonOutput: !1,
        mouseDrag: !0,
        lazyload: !0,
        gutter: 20,
        controlsContainer: "#sliderTestimonialThirdControls",
        responsive: {
            768: {
                items: 2
            },
            990: {
                items: 3
            }
        }
    })
}(), tippy(".imgtooltip", {
        content(e) {
            const t = e.getAttribute("data-template");
            return document.getElementById(t).innerHTML
        },
        allowHTML: !0,
        theme: "light",
        animation: "scale"
    }), tippy(".bookmark", {
        content: "Add to Bookmarks",
        animation: "scale"
    }), tippy(".removeBookmark", {
        content: "Remove Bookmarks",
        animation: "scale"
    }), tippy(".texttooltip", {
        content(e) {
            const t = e.getAttribute("data-template");
            return document.getElementById(t).innerHTML
        },
        allowHTML: !0,
        animation: "scale"
    }), tippy(".dropdownTooltip", {
        content(e) {
            const t = e.getAttribute("data-template");
            return document.getElementById(t).innerHTML
        },
        allowHTML: !0,
        animation: "scale",
        placement: "right",
        theme: "lightPurple"
    }), $(".contacts-list .contacts-link").on("click", (function() {
        $(".chat-body").addClass("chat-body-visible")
    })), $("[data-close]").on("click", (function(e) {
        e.preventDefault(), $(".chat-body").removeClass("chat-body-visible")
    })),
    function(e) {
        e.fn.downCount = function(t, o) {
            var a = e.extend({
                date: null,
                offset: null
            }, t);
            a.date || e.error("Date is not defined."), Date.parse(a.date) || e.error("Incorrect date format, it should look like this, 12/24/2012 12:00:00.");
            var r = this,
                i = function() {
                    var e = new Date,
                        t = e.getTime() + 6e4 * e.getTimezoneOffset();
                    return new Date(t + 36e5 * a.offset)
                },
                n = setInterval((function() {
                    var e = new Date(a.date) - i();
                    if (0 > e) return clearInterval(n), void(o && "function" == typeof o && o());
                    var t = 6e4,
                        s = 60 * t,
                        l = 24 * s,
                        d = Math.floor(e / l),
                        h = Math.floor(e % l / s),
                        c = Math.floor(e % s / t),
                        p = Math.floor(e % t / 1e3),
                        m = 1 === (d = String(d).length >= 2 ? d : "0" + d) ? "day" : "days",
                        u = 1 === (h = String(h).length >= 2 ? h : "0" + h) ? "hour" : "hours",
                        f = 1 === (c = String(c).length >= 2 ? c : "0" + c) ? "minute" : "minutes",
                        g = 1 === (p = String(p).length >= 2 ? p : "0" + p) ? "second" : "seconds";
                    r.find(".days").text(d), r.find(".hours").text(h), r.find(".minutes").text(c), r.find(".seconds").text(p), r.find(".days_ref").text(m), r.find(".hours_ref").text(u), r.find(".minutes_ref").text(f), r.find(".seconds_ref").text(g)
                }), 1e3)
        }
    }(jQuery), $(".countdown").downCount({
        date: function() {
            var e = new Date;
            e.setDate(e.getDate() + 99);
            var t = e.getDate();
            return e.getMonth() + 1 + "/" + t + "/" + e.getFullYear() + " 12:00:00"
        }(),
        offset: 0
    });
const theme = {
    primary: "var(--bs-primary)",
    secondary: "var(--bs-secondary)",
    success: "var(--bs-success)",
    info: "var(--bs-info)",
    warning: "var(--bs-warning)",
    danger: "var(--bs-danger)",
    dark: "var(--bs-dark)",
    light: "var(--bs-light)",
    white: "var(--bs-white)",
    gray100: "var(--bs-gray-100)",
    gray200: "var(--bs-gray-200)",
    gray300: "var(--bs-gray-300)",
    gray400: "var(--bs-gray-400)",
    gray500: "var(--bs-gray-500)",
    gray600: "var(--bs-gray-600)",
    gray700: "var(--bs-gray-700)",
    gray800: "var(--bs-gray-800)",
    gray900: "var(--bs-gray-900)",
    black: "var(--bs-black)",
    lightPrimary: "var(--bs-light-primary)",
    lightSecondary: "var(--bs-light-secondary)",
    lightSuccess: "var(--bs-light-success)",
    lightDanger: "var(--bs-light-danger)",
    lightWarning: "var(--bs-light-warning)",
    lightInfo: "var(--bs-light-info)",
    darkPrimary: "var(--bs-dark-primary)",
    darkSecondary: "var(--bs-dark-secondary)",
    darkSuccess: "var(--bs-dark-success)",
    darkDanger: "var(--bs-dark-danger)",
    darkWarning: "var(--bs-dark-warning)",
    darkInfo: "var(--bs-dark-info)"
};
window.theme = theme,
    function() {
        if ($("#earning").length) {
            var e = {
                series: [{
                    name: "Current Month",
                    data: [10, 20, 15, 25, 18, 28, 22, 32, 24, 34, 26, 38]
                }],
                labels: ["Jan", "Feb", "March", "April", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                chart: {
                    fontFamily: "$font-family-base",
                    height: "280px",
                    type: "line",
                    toolbar: {
                        show: !1
                    }
                },
                colors: [window.theme.primary],
                stroke: {
                    width: 4,
                    curve: "smooth",
                    colors: "#754ffe"
                },
                xaxis: {
                    axisBorder: {
                        show: !1
                    },
                    axisTicks: {
                        show: !1
                    },
                    crosshairs: {
                        show: !0
                    },
                    labels: {
                        offsetX: 0,
                        offsetY: 5,
                        style: {
                            fontSize: "13px",
                            fontWeight: 400,
                            cssClass: "apexcharts-xaxis-label"
                        }
                    }
                },
                yaxis: {
                    labels: {
                        formatter: function(e) {
                            return e + "k"
                        },
                        style: {
                            fontSize: "13px",
                            fontWeight: 400,
                            cssClass: "apexcharts-xaxis-label"
                        },
                        offsetX: -15
                    },
                    tickAmount: 3,
                    min: 10,
                    max: 40
                },
                grid: {
                    borderColor: "#e0e6ed",
                    strokeDashArray: 5,
                    xaxis: {
                        lines: {
                            show: !1
                        }
                    },
                    yaxis: {
                        lines: {
                            show: !0
                        }
                    },
                    padding: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }
                },
                legend: {
                    position: "top",
                    horizontalAlign: "right",
                    offsetY: -50,
                    fontSize: "16px",
                    markers: {
                        width: 10,
                        height: 10,
                        strokeWidth: 0,
                        strokeColor: "#ffffff",
                        fillColors: void 0,
                        radius: 12,
                        onClick: void 0,
                        offsetX: 0,
                        offsetY: 0
                    },
                    itemMargin: {
                        horizontal: 0,
                        vertical: 20
                    }
                },
                tooltip: {
                    theme: "light",
                    marker: {
                        show: !0
                    },
                    x: {
                        show: !1
                    }
                },
                responsive: [{
                    breakpoint: 575,
                    options: {
                        legend: {
                            offsetY: -30
                        }
                    }
                }]
            };
            new ApexCharts(document.querySelector("#earning"), e).render()
        }
        if ($("#earningTwo").length) {
            e = {
                series: [{
                    name: "Current Month",
                    data: [10, 20, 15, 25, 18, 28, 22, 32, 24, 34, 26, 38]
                }],
                labels: ["Jan", "Feb", "March", "April", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                chart: {
                    fontFamily: "$font-family-base",
                    height: "280px",
                    type: "line",
                    toolbar: {
                        show: !1
                    }
                },
                colors: [window.theme.primary],
                stroke: {
                    width: 4,
                    curve: "smooth",
                    colors: "#754ffe"
                },
                xaxis: {
                    axisBorder: {
                        show: !1
                    },
                    axisTicks: {
                        show: !1
                    },
                    crosshairs: {
                        show: !0
                    },
                    labels: {
                        offsetX: 0,
                        offsetY: 5,
                        style: {
                            fontSize: "13px",
                            fontWeight: 400,
                            cssClass: "apexcharts-xaxis-label"
                        }
                    }
                },
                yaxis: {
                    labels: {
                        formatter: function(e) {
                            return e + "k"
                        },
                        style: {
                            fontSize: "13px",
                            fontWeight: 400,
                            colors: [window.theme.primary]
                        },
                        offsetX: -15
                    },
                    tickAmount: 3,
                    min: 10,
                    max: 40
                },
                grid: {
                    borderColor: "#e0e6ed",
                    strokeDashArray: 5,
                    xaxis: {
                        lines: {
                            show: !1
                        }
                    },
                    yaxis: {
                        lines: {
                            show: !0
                        }
                    },
                    padding: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }
                },
                legend: {
                    position: "top",
                    horizontalAlign: "right",
                    offsetY: -50,
                    fontSize: "16px",
                    markers: {
                        width: 10,
                        height: 10,
                        strokeWidth: 0,
                        strokeColor: "#ffffff",
                        fillColors: void 0,
                        radius: 12,
                        onClick: void 0,
                        offsetX: 0,
                        offsetY: 0
                    },
                    itemMargin: {
                        horizontal: 0,
                        vertical: 20
                    }
                },
                tooltip: {
                    theme: "light",
                    marker: {
                        show: !0
                    },
                    x: {
                        show: !1
                    }
                },
                responsive: [{
                    breakpoint: 575,
                    options: {
                        legend: {
                            offsetY: -30
                        }
                    }
                }]
            };
            new ApexCharts(document.querySelector("#earningTwo"), e).render()
        }
        if ($("#order").length) {
            e = {
                series: [{
                    name: "Days",
                    data: [0, 3, .5, 3.5, 1, 2.5, .5, 4, 1.4, 4.5, 2.5, 4.8]
                }],
                labels: ["12 Jan", "14 Jan", "16 Jan", "18 Jan", "20 Jan", "22 Jan", "24 Jan", "26 Jan", "27 Jan", "28 Jan", "29 Jan", "30 Jan"],
                chart: {
                    fontFamily: "$font-family-base",
                    height: "280px",
                    type: "line",
                    toolbar: {
                        show: !1
                    }
                },
                colors: [window.theme.primary],
                stroke: {
                    width: 4,
                    curve: "smooth",
                    colors: "#754ffe"
                },
                xaxis: {
                    axisBorder: {
                        show: !1
                    },
                    axisTicks: {
                        show: !1
                    },
                    crosshairs: {
                        show: !0
                    },
                    labels: {
                        offsetX: 0,
                        offsetY: 5,
                        style: {
                            fontSize: "13px",
                            fontWeight: 400,
                            cssClass: "apexcharts-xaxis-label"
                        }
                    }
                },
                yaxis: {
                    labels: {
                        formatter: function(e, t) {
                            return e.toFixed(0)
                        },
                        style: {
                            fontSize: "13px",
                            fontWeight: 400,
                            colors: [window.theme.gray500]
                        },
                        offsetX: -20
                    },
                    tickAmount: 3,
                    min: 0,
                    max: 5
                },
                grid: {
                    borderColor: "#e0e6ed",
                    strokeDashArray: 5,
                    xaxis: {
                        lines: {
                            show: !1
                        }
                    },
                    yaxis: {
                        lines: {
                            show: !0
                        }
                    },
                    padding: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: -10
                    }
                },
                legend: {
                    position: "top",
                    horizontalAlign: "right",
                    offsetY: -50,
                    fontSize: "16px",
                    markers: {
                        width: 10,
                        height: 10,
                        strokeWidth: 0,
                        strokeColor: "#ffffff",
                        fillColors: void 0,
                        radius: 12,
                        onClick: void 0,
                        offsetX: 0,
                        offsetY: 0
                    },
                    itemMargin: {
                        horizontal: 0,
                        vertical: 20
                    }
                },
                tooltip: {
                    theme: "light",
                    marker: {
                        show: !0
                    },
                    x: {
                        show: !1
                    }
                },
                responsive: [{
                    breakpoint: 575,
                    options: {
                        legend: {
                            offsetY: -30
                        }
                    }
                }]
            };
            new ApexCharts(document.querySelector("#order"), e).render()
        }
        if ($("#traffic").length) {
            e = {
                dataLabels: {
                    enabled: !1
                },
                series: [44, 55, 41],
                labels: ["Direct", "Referral", "Organic"],
                colors: [window.theme.darkPrimary, window.theme.primary, window.theme.lightPrimary],
                chart: {
                    width: 392,
                    type: "donut"
                },
                plotOptions: {
                    pie: {
                        expandOnClick: !1,
                        donut: {
                            size: "78%"
                        }
                    }
                },
                legend: {
                    position: "bottom",
                    fontFamily: "inter",
                    fontWeight: 500,
                    fontSize: "14px",
                    markers: {
                        width: 8,
                        height: 8,
                        strokeWidth: 0,
                        strokeColor: "#ffffff",
                        fillColors: void 0,
                        radius: 12,
                        customHTML: void 0,
                        onClick: void 0,
                        offsetX: 0,
                        offsetY: 0
                    },
                    itemMargin: {
                        horizontal: 8,
                        vertical: 0
                    }
                },
                tooltip: {
                    theme: "light",
                    marker: {
                        show: !0
                    },
                    x: {
                        show: !1
                    }
                },
                states: {
                    hover: {
                        filter: {
                            type: "none"
                        }
                    }
                }
            };
            new ApexCharts(document.querySelector("#traffic"), e).render()
        }
        if ($("#orderColumn").length) {
            e = {
                series: [{
                    data: [4, 6, 5, 3, 5, 6, 8, 9]
                }],
                chart: {
                    toolbar: {
                        show: !1
                    },
                    type: "bar",
                    height: 272
                },
                colors: window.theme.primary,
                plotOptions: {
                    bar: {
                        horizontal: !1,
                        columnWidth: "12%",
                        endingShape: "rounded"
                    }
                },
                dataLabels: {
                    enabled: !1
                },
                stroke: {
                    show: !0,
                    width: 1,
                    colors: ["transparent"]
                },
                grid: {
                    borderColor: "#e0e6ed",
                    strokeDashArray: 5,
                    xaxis: {
                        lines: {
                            show: !1
                        }
                    }
                },
                xaxis: {
                    categories: ["1 Jun", "9 Jun", "16 jun", "18 Jun", "19 Jun", "22 jun", "24 Jun", "26 Jun"],
                    axisBorder: {
                        show: !1
                    },
                    labels: {
                        offsetX: 0,
                        offsetY: 5,
                        style: {
                            fontSize: "13px",
                            fontWeight: 400,
                            colors: window.theme.gray500
                        }
                    }
                },
                grid: {
                    borderColor: "#e0e6ed",
                    strokeDashArray: 5,
                    xaxis: {
                        lines: {
                            show: !1
                        }
                    },
                    yaxis: {
                        lines: {
                            show: !0
                        }
                    },
                    padding: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: -10
                    }
                },
                yaxis: {
                    title: {
                        text: void 0
                    },
                    plotOptions: {
                        bar: {
                            horizontal: !1,
                            endingShape: "rounded",
                            columnWidth: "80%"
                        }
                    },
                    labels: {
                        style: {
                            fontSize: "13px",
                            fontWeight: 400,
                            colors: "#a8a3b9"
                        },
                        offsetX: -10
                    }
                },
                fill: {
                    opacity: 1
                },
                tooltip: {
                    y: {
                        formatter: function(e) {
                            return e + " sales "
                        }
                    },
                    marker: {
                        show: !0
                    }
                }
            };
            new ApexCharts(document.querySelector("#orderColumn"), e).render()
        }
        if ($("#totalEarning").length) {
            e = {
                series: [{
                    data: [50, 80, 5, 90, 12, 150, 12, 80, 150]
                }],
                chart: {
                    width: 130,
                    type: "line",
                    toolbar: {
                        show: !1
                    }
                },
                tooltip: {
                    enabled: !1
                },
                stroke: {
                    show: !0,
                    curve: "smooth",
                    lineCap: "butt",
                    colors: [window.theme.success],
                    width: 2,
                    dashArray: 0
                },
                grid: {
                    show: !1
                },
                yaxis: {
                    labels: {
                        show: !1
                    }
                },
                xaxis: {
                    axisBorder: {
                        show: !1
                    },
                    labels: {
                        show: !1
                    },
                    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]
                }
            };
            new ApexCharts(document.querySelector("#totalEarning"), e).render()
        }
        if ($("#payoutChart").length) {
            e = {
                series: [{
                    name: "Inflation",
                    data: [40, 20, 50, 80, 65]
                }],
                chart: {
                    height: 150,
                    type: "bar",
                    toolbar: {
                        show: !1
                    }
                },
                colors: [window.theme.lightPrimary],
                grid: {
                    show: !1
                },
                tooltip: {
                    enabled: !1
                },
                plotOptions: {
                    bar: {
                        endingShape: "flat",
                        columnWidth: "65%"
                    }
                },
                dataLabels: {
                    enabled: !1
                },
                xaxis: {
                    labels: {
                        show: !1
                    },
                    categories: [],
                    position: "top",
                    axisBorder: {
                        show: !1
                    },
                    axisTicks: {
                        show: !1
                    },
                    tooltip: {
                        enabled: !0
                    }
                },
                yaxis: {
                    show: !1
                }
            };
            new ApexCharts(document.querySelector("#payoutChart"), e).render()
        }
        if ($("#userChart").length) {
            e = {
                chart: {
                    height: 60,
                    type: "area",
                    toolbar: {
                        show: !1
                    },
                    sparkline: {
                        enabled: !0
                    },
                    grid: {
                        show: !1,
                        padding: {
                            left: 0,
                            right: 0
                        }
                    }
                },
                dataLabels: {
                    enabled: !1
                },
                stroke: {
                    curve: "smooth",
                    width: 2
                },
                colors: [window.theme.primary],
                fill: {
                    type: "gradient",
                    gradient: {
                        gradientToColors: [window.theme.primary],
                        shadeIntensity: .9,
                        opacityFrom: .5,
                        opacityTo: .04,
                        stops: [0, 80, 100]
                    }
                },
                series: [{
                    name: "User",
                    data: [28, 40, 36, 52, 38, 60, 55]
                }],
                xaxis: {
                    labels: {
                        show: !1
                    },
                    axisBorder: {
                        show: !1
                    }
                },
                yaxis: [{
                    y: 0,
                    offsetX: 0,
                    offsetY: 0,
                    padding: {
                        left: 0,
                        right: 0
                    }
                }],
                tooltip: {
                    x: {
                        show: !1
                    }
                }
            };
            new ApexCharts(document.querySelector("#userChart"), e).render()
        }
        if ($("#userChartExample").length) {
            e = {
                chart: {
                    height: 60,
                    type: "area",
                    toolbar: {
                        show: !1
                    },
                    sparkline: {
                        enabled: !0
                    },
                    grid: {
                        show: !1,
                        padding: {
                            left: 0,
                            right: 0
                        }
                    }
                },
                colors: [window.theme.danger],
                dataLabels: {
                    enabled: !1
                },
                stroke: {
                    curve: "smooth",
                    width: 2
                },
                fill: {
                    type: "gradient",
                    gradient: {
                        gradientToColors: [window.theme.danger],
                        shadeIntensity: .7,
                        opacityFrom: .5,
                        opacityTo: .04,
                        stops: [0, 80, 100]
                    }
                },
                series: [{
                    name: "User",
                    data: [28, 40, 36, 52, 38, 60, 55]
                }],
                xaxis: {
                    labels: {
                        show: !1
                    },
                    axisBorder: {
                        show: !1
                    }
                },
                yaxis: [{
                    y: 0,
                    offsetX: 0,
                    offsetY: 0,
                    padding: {
                        left: 0,
                        right: 0
                    }
                }],
                tooltip: {
                    x: {
                        show: !1
                    }
                }
            };
            new ApexCharts(document.querySelector("#userChartExample"), e).render()
        }
        if ($("#userChart").length) {
            e = {
                chart: {
                    height: 60,
                    type: "area",
                    toolbar: {
                        show: !1
                    },
                    sparkline: {
                        enabled: !0
                    },
                    grid: {
                        show: !1,
                        padding: {
                            left: 0,
                            right: 0
                        }
                    }
                },
                colors: [window.theme.success],
                dataLabels: {
                    enabled: !1
                },
                stroke: {
                    curve: "smooth",
                    width: 2
                },
                fill: {
                    colors: [window.theme.success],
                    type: "gradient",
                    gradient: {
                        type: "vertical",
                        gradientToColors: [window.theme.success],
                        shadeIntensity: .7,
                        opacityFrom: .5,
                        opacityTo: .04,
                        stops: [0, 80, 100]
                    }
                },
                series: [{
                    name: "User",
                    data: [28, 40, 36, 52, 38, 60, 55]
                }],
                xaxis: {
                    labels: {
                        show: !1
                    },
                    axisBorder: {
                        show: !1
                    }
                },
                yaxis: [{
                    y: 0,
                    offsetX: 0,
                    offsetY: 0,
                    padding: {
                        left: 0,
                        right: 0
                    }
                }],
                tooltip: {
                    x: {
                        show: !1
                    }
                }
            };
            new ApexCharts(document.querySelector("#visitorChart"), e).render()
        }
        if ($("#bounceChart").length) {
            e = {
                chart: {
                    height: 60,
                    type: "line",
                    toolbar: {
                        show: !1
                    },
                    sparkline: {
                        enabled: !0
                    },
                    grid: {
                        show: !1,
                        padding: {
                            left: 0,
                            right: 0
                        }
                    }
                },
                colors: [window.theme.darkWarning],
                dataLabels: {
                    enabled: !1
                },
                stroke: {
                    curve: "straight",
                    width: 4
                },
                markers: {
                    size: 4,
                    hover: {
                        size: 6,
                        sizeOffset: 3
                    }
                },
                series: [{
                    name: "Bonus Rate",
                    data: [28, 40, 36, 52, 38, 60, 55]
                }],
                xaxis: {
                    labels: {
                        show: !1
                    },
                    axisBorder: {
                        show: !1
                    }
                },
                yaxis: [{
                    y: 0,
                    offsetX: 0,
                    offsetY: 0,
                    padding: {
                        left: 0,
                        right: 0
                    }
                }],
                tooltip: {
                    x: {
                        show: !1
                    }
                }
            };
            new ApexCharts(document.querySelector("#bounceChart"), e).render()
        }
        if ($("#sessionChart").length) {
            e = {
                series: [{
                    name: "Session Duration",
                    data: [600, 1e3, 400, 2e3, 500, 900, 2500, 1800, 3800],
                    colors: [window.theme.primary]
                }, {
                    name: "Page Views",
                    data: [1e3, 2e3, 800, 1200, 300, 1900, 1600, 2e3, 1e3]
                }, {
                    name: "Total Visits",
                    data: [2200, 1e3, 3400, 900, 500, 2500, 3e3, 1e3, 2500]
                }],
                chart: {
                    toolbar: {
                        show: !1
                    },
                    height: 400,
                    type: "line",
                    zoom: {
                        enabled: !1
                    }
                },
                dataLabels: {
                    enabled: !1
                },
                stroke: {
                    width: [4, 3, 3],
                    curve: "smooth",
                    dashArray: [0, 5, 4]
                },
                legend: {
                    show: !1
                },
                colors: [window.theme.primary, window.theme.success, window.theme.warning],
                markers: {
                    size: 0,
                    hover: {
                        sizeOffset: 6
                    }
                },
                xaxis: {
                    categories: ["01 Jan", "02 Jan", "03 Jan", "04 Jan", "05 Jan", "06 Jan", "07 Jan", "08 Jan", "09 Jan", "10 Jan", "11 Jan", "12 Jan"],
                    labels: {
                        style: {
                            fontSize: "12px",
                            fontFamily: "Inter",
                            cssClass: "apexcharts-xaxis-label",
                            colors: window.theme.gray500
                        }
                    }
                },
                yaxis: {
                    labels: {
                        style: {
                            fontSize: "12px",
                            fontFamily: "Inter",
                            cssClass: "apexcharts-xaxis-label"
                        },
                        offsetX: -12,
                        offsetY: 0
                    }
                },
                tooltip: {
                    y: [{
                        title: {
                            formatter: function(e) {
                                return e + " (mins)"
                            }
                        }
                    }, {
                        title: {
                            formatter: function(e) {
                                return e + " per session"
                            }
                        }
                    }, {
                        title: {
                            formatter: function(e) {
                                return e
                            }
                        }
                    }]
                },
                grid: {
                    borderColor: "#e0e6ed"
                }
            };
            new ApexCharts(document.querySelector("#sessionChart"), e).render()
        }
        if ($("#support-chart1").length) {
            e = {
                chart: {
                    type: "bar",
                    height: 302,
                    sparkline: {
                        enabled: !0
                    }
                },
                states: {
                    normal: {
                        filter: {
                            type: "none",
                            value: 0
                        }
                    },
                    hover: {
                        filter: {
                            type: "darken",
                            value: .55
                        }
                    },
                    active: {
                        allowMultipleDataPointsSelection: !1,
                        filter: {
                            type: "darken",
                            value: .55
                        }
                    }
                },
                colors: [window.theme.primary],
                plotOptions: {
                    bar: {
                        borderRadius: 4,
                        columnWidth: "50%"
                    }
                },
                series: [{
                    data: [25, 66, 41, 70, 63, 25, 44, 22, 36, 19, 54, 44, 32, 36, 29, 54, 25, 66, 41, 65, 63, 25, 44, 12, 36, 39, 25, 44, 42, 36, 54]
                }],
                xaxis: {
                    crosshairs: {
                        width: 1
                    }
                },
                tooltip: {
                    fixed: {
                        enabled: !1
                    },
                    x: {
                        show: !1
                    },
                    y: {
                        title: {
                            formatter: function(e) {
                                return "Active User"
                            }
                        }
                    },
                    marker: {
                        show: !1
                    }
                }
            };
            new ApexCharts(document.querySelector("#support-chart1"), e).render()
        }
        if ($("#locationmap").length) {
            new jsVectorMap({
                map: "world",
                selector: "#locationmap",
                zoomOnScroll: !0,
                zoomButtons: !0,
                markersSelectable: !0,
                markers: [{
                    name: "United Kingdom",
                    coords: [53.613, -11.6368]
                }, {
                    name: "India",
                    coords: [20.7504374, 73.7276105]
                }, {
                    name: "United States",
                    coords: [37.2580397, -104.657039]
                }, {
                    name: "Australia",
                    coords: [-25.0304388, 115.2092761]
                }],
                markerStyle: {
                    initial: {
                        fill: [window.theme.primary]
                    }
                },
                markerLabelStyle: {
                    initial: {
                        fontFamily: "Inter",
                        fontSize: 13,
                        fontWeight: 500,
                        cursor: "default",
                        fill: [window.theme.dark]
                    }
                },
                labels: {
                    markers: {
                        render: e => e.name
                    }
                }
            })
        }
        if ($("#trafficDountChart").length) {
            e = {
                series: [60, 55, 12, 17],
                labels: ["Organic Search", "Direct", "Refferrals", "Social Media"],
                colors: [window.theme.primary, window.theme.success, window.theme.danger, window.theme.warning],
                chart: {
                    type: "donut",
                    height: 260
                },
                legend: {
                    show: !1
                },
                dataLabels: {
                    enabled: !1
                },
                plotOptions: {
                    pie: {
                        donut: {
                            size: "50%"
                        }
                    }
                },
                stroke: {
                    width: 2
                }
            };
            new ApexCharts(document.querySelector("#trafficDountChart"), e).render()
        }
        if ($("#operatingSystem").length) {
            e = {
                series: [55, 88, 80, 75],
                labels: ["Window", "macOS", "Linux", "Android"],
                chart: {
                    type: "polarArea",
                    height: 350
                },
                colors: [window.theme.danger, window.theme.success, window.theme.primary, window.theme.info],
                legend: {
                    show: !1
                },
                stroke: {
                    colors: [window.theme.white]
                },
                fill: {
                    opacity: .9
                }
            };
            new ApexCharts(document.querySelector("#operatingSystem"), e).render()
        }
        if ($("#expenseChart").length) {
            e = {
                series: [9e3, 4500, 9030, 6800, 2400, 8320],
                labels: ["Design", "Sass Service", "Development", "SEO", "Entertainment", "Marketing"],
                colors: [window.theme.warning, window.theme.info, window.theme.danger, window.theme.primary, window.theme.info, window.theme.success],
                chart: {
                    type: "donut",
                    height: 450
                },
                legend: {
                    show: !1
                },
                dataLabels: {
                    enabled: !1
                },
                plotOptions: {
                    pie: {
                        customScale: .8,
                        startAngle: 55,
                        endAngle: 360,
                        expandOnClick: !1,
                        donut: {
                            size: "70%",
                            labels: {
                                show: !0,
                                name: {
                                    show: !0,
                                    offsetY: 26
                                },
                                value: {
                                    show: !0,
                                    fontSize: "42px",
                                    color: void 0,
                                    offsetY: -20,
                                    fontWeight: "700",
                                    formatter: function(e) {
                                        return "$" + e
                                    }
                                },
                                total: {
                                    show: !0,
                                    label: "Total Spent",
                                    fontSize: "20px",
                                    color: window.theme.gray400,
                                    fontWeight: "600",
                                    formatter: function(e) {
                                        return "$" + e.globals.seriesTotals.reduce(((e, t) => e + t), 0)
                                    }
                                }
                            }
                        }
                    }
                },
                stroke: {
                    width: 2
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            type: "donut",
                            width: 290,
                            height: 410
                        }
                    }
                }]
            };
            new ApexCharts(document.querySelector("#expenseChart"), e).render()
        }
        if ($("#taskSummary").length) {
            e = {
                series: [{
                    name: "Closed",
                    type: "column",
                    data: [12, 18, 20, 32, 19, 25, 30]
                }, {
                    name: "New",
                    type: "line",
                    data: [20, 32, 28, 50, 38, 35, 49]
                }],
                chart: {
                    height: 350,
                    type: "line",
                    toolbar: {
                        show: !1
                    }
                },
                plotOptions: {
                    bar: {
                        horizontal: !1,
                        columnWidth: "40%",
                        borderRadius: 5
                    }
                },
                markers: {
                    colors: [window.theme.dark],
                    fillColor: window.theme.gray200
                },
                colors: [window.theme.lightPrimary, window.theme.primary],
                legend: {
                    show: !1
                },
                stroke: {
                    width: [0, 4],
                    colors: [window.theme.lightPrimary]
                },
                dataLabels: {
                    enabled: !0,
                    enabledOnSeries: [1]
                },
                labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                xaxis: {
                    labels: {
                        style: {
                            fontSize: "13px",
                            fontWeight: 400,
                            colors: window.theme.gray500,
                            fontFamily: "inter"
                        }
                    }
                },
                yaxis: {
                    labels: {
                        style: {
                            fontSize: "13px",
                            fontWeight: 400,
                            colors: window.theme.gray500,
                            fontFamily: "inter"
                        }
                    }
                }
            };
            new ApexCharts(document.querySelector("#taskSummary"), e).render()
        }
        if ($("#taskSectionchart").length) {
            e = {
                series: [44, 65, 89, 75],
                chart: {
                    height: 400,
                    type: "radialBar"
                },
                legend: {
                    show: !0,
                    fontSize: "14px",
                    fontFamily: "Inter",
                    fontWeight: 500,
                    position: "bottom",
                    itemMargin: {
                        horizontal: 8,
                        vertical: 0
                    },
                    labels: {
                        colors: window.theme.gray500,
                        useSeriesColors: !1
                    },
                    markers: {
                        width: 8,
                        height: 8,
                        offsetY: 1,
                        offsetX: -2
                    }
                },
                plotOptions: {
                    radialBar: {
                        dataLabels: {
                            name: {},
                            value: {
                                fontSize: "24px",
                                fontWeight: 600,
                                formatter: function(e) {
                                    return e
                                }
                            },
                            total: {
                                show: !0,
                                label: "Total",
                                fontSize: "12px",
                                formatter: function(e) {
                                    return 273
                                }
                            }
                        },
                        track: {
                            background: window.theme.gray100,
                            margin: 10
                        }
                    }
                },
                labels: ["Design", "Frontend", "Development", "Issues"],
                colors: [window.theme.primary, window.theme.success, window.theme.info, window.theme.warning]
            };
            new ApexCharts(document.querySelector("#taskSectionchart"), e).render()
        }
        if ($("#budgetExpenseChart").length) {
            e = {
                series: [{
                    name: "Series 1",
                    data: [90, 32, 30, 40, 100, 20]
                }],
                stroke: {
                    show: !0,
                    width: 2,
                    colors: [window.theme.primary],
                    dashArray: 0
                },
                fill: {
                    colors: "#754ffe",
                    opacity: .4
                },
                colors: [window.theme.primary],
                dataLabels: {
                    enabled: !0,
                    background: {
                        enabled: !0,
                        borderRadius: 2
                    }
                },
                chart: {
                    height: 350,
                    type: "radar",
                    toolbar: {
                        show: !1
                    }
                },
                plotOptions: {
                    radar: {
                        size: 150,
                        offsetX: 0,
                        offsetY: 0,
                        polygons: {
                            strokeColors: "#e0e6ed",
                            strokeWidth: 1,
                            connectorColors: "#e0e6ed",
                            fill: {
                                colors: void 0
                            }
                        }
                    }
                },
                xaxis: {
                    categories: ["Design", "SaaS Services", "Development", "SEO", "Entertainment", "Marketing"],
                    labels: {
                        show: !0,
                        style: {
                            colors: window.theme.gray500,
                            fontSize: "14px",
                            fontFamily: "Inter",
                            fontWeight: 600
                        }
                    }
                }
            };
            new ApexCharts(document.querySelector("#budgetExpenseChart"), e).render()
        }
        if ($(".taskWireframeChart").length) {
            e = {
                series: [65],
                chart: {
                    height: 40,
                    width: 40,
                    type: "radialBar"
                },
                grid: {
                    show: !1,
                    padding: {
                        left: -15,
                        right: -15,
                        top: -12,
                        bottom: -15
                    }
                },
                colors: [window.theme.success],
                plotOptions: {
                    radialBar: {
                        hollow: {
                            size: "30%"
                        },
                        dataLabels: {
                            showOn: "always",
                            name: {
                                show: !0,
                                fontSize: "11px",
                                fontFamily: void 0,
                                fontWeight: 600,
                                color: void 0,
                                offsetY: 4
                            },
                            value: {
                                show: !1
                            }
                        }
                    }
                },
                stroke: {
                    lineCap: "round"
                },
                labels: ["65%"]
            };
            new ApexCharts(document.querySelector(".taskWireframeChart"), e).render()
        }
        if ($(".taskPrototypeChart").length) {
            e = {
                series: [75],
                chart: {
                    height: 40,
                    width: 40,
                    type: "radialBar"
                },
                grid: {
                    show: !1,
                    padding: {
                        left: -15,
                        right: -15,
                        top: -12,
                        bottom: -15
                    }
                },
                colors: [window.theme.success],
                plotOptions: {
                    radialBar: {
                        hollow: {
                            size: "30%"
                        },
                        dataLabels: {
                            showOn: "always",
                            name: {
                                show: !0,
                                fontSize: "11px",
                                fontFamily: void 0,
                                fontWeight: 600,
                                color: void 0,
                                offsetY: 4
                            },
                            value: {
                                show: !1
                            }
                        }
                    }
                },
                stroke: {
                    lineCap: "round"
                },
                labels: ["75%"]
            };
            new ApexCharts(document.querySelector(".taskPrototypeChart"), e).render()
        }
        if ($(".taskContentChart").length) {
            e = {
                series: [85],
                chart: {
                    height: 40,
                    width: 40,
                    type: "radialBar"
                },
                grid: {
                    show: !1,
                    padding: {
                        left: -15,
                        right: -15,
                        top: -12,
                        bottom: -15
                    }
                },
                colors: [window.theme.success],
                plotOptions: {
                    radialBar: {
                        hollow: {
                            size: "30%"
                        },
                        dataLabels: {
                            showOn: "always",
                            name: {
                                show: !0,
                                fontSize: "11px",
                                fontFamily: void 0,
                                fontWeight: 600,
                                color: void 0,
                                offsetY: 4
                            },
                            value: {
                                show: !1
                            }
                        }
                    }
                },
                stroke: {
                    lineCap: "round"
                },
                labels: ["85%"]
            };
            new ApexCharts(document.querySelector(".taskContentChart"), e).render()
        }
        if ($(".taskFigmaChart").length) {
            e = {
                series: [40],
                chart: {
                    height: 40,
                    width: 40,
                    type: "radialBar"
                },
                grid: {
                    show: !1,
                    padding: {
                        left: -15,
                        right: -15,
                        top: -12,
                        bottom: -15
                    }
                },
                colors: [window.theme.success],
                plotOptions: {
                    radialBar: {
                        hollow: {
                            size: "30%"
                        },
                        dataLabels: {
                            showOn: "always",
                            name: {
                                show: !0,
                                fontSize: "11px",
                                fontFamily: void 0,
                                fontWeight: 600,
                                color: void 0,
                                offsetY: 4
                            },
                            value: {
                                show: !1
                            }
                        }
                    }
                },
                stroke: {
                    lineCap: "round"
                },
                labels: ["40%"]
            };
            new ApexCharts(document.querySelector(".taskFigmaChart"), e).render()
        }
        if ($(".taskInterfaceChart").length) {
            e = {
                series: [35],
                chart: {
                    height: 40,
                    width: 40,
                    type: "radialBar"
                },
                grid: {
                    show: !1,
                    padding: {
                        left: -15,
                        right: -15,
                        top: -12,
                        bottom: -15
                    }
                },
                colors: [window.theme.success],
                plotOptions: {
                    radialBar: {
                        hollow: {
                            size: "30%"
                        },
                        dataLabels: {
                            showOn: "always",
                            name: {
                                show: !0,
                                fontSize: "11px",
                                fontFamily: void 0,
                                fontWeight: 600,
                                color: void 0,
                                offsetY: 4
                            },
                            value: {
                                show: !1
                            }
                        }
                    }
                },
                stroke: {
                    lineCap: "round"
                },
                labels: ["35%"]
            };
            new ApexCharts(document.querySelector(".taskInterfaceChart"), e).render()
        }
        if ($("#taskStatus").length) {
            e = {
                dataLabels: {
                    enabled: !1
                },
                series: [75, 25],
                labels: ["Completed", "Incomplete"],
                colors: [window.theme.primary, window.theme.info],
                chart: {
                    width: 480,
                    type: "donut"
                },
                plotOptions: {
                    pie: {
                        expandOnClick: !1,
                        donut: {
                            size: "75%"
                        }
                    }
                },
                legend: {
                    position: "bottom",
                    fontFamily: "inter",
                    fontWeight: 500,
                    fontSize: "14px",
                    markers: {
                        width: 8,
                        height: 8,
                        strokeWidth: 0,
                        strokeColor: "#ffffff",
                        fillColors: void 0,
                        radius: 12,
                        customHTML: void 0,
                        onClick: void 0,
                        offsetX: -2,
                        offsetY: 1
                    },
                    itemMargin: {
                        horizontal: 8,
                        vertical: 0
                    }
                },
                tooltip: {
                    theme: "light",
                    marker: {
                        show: !0
                    },
                    x: {
                        show: !1
                    }
                },
                states: {
                    hover: {
                        filter: {
                            type: "none"
                        }
                    }
                },
                responsive: [{
                    breakpoint: 1400,
                    options: {
                        chart: {
                            type: "donut",
                            width: 290,
                            height: 410
                        }
                    }
                }]
            };
            new ApexCharts(document.querySelector("#taskStatus"), e).render()
        }
        if ($("#progressChart").length) {
            e = {
                series: [75],
                chart: {
                    height: 350,
                    type: "radialBar",
                    toolbar: {
                        show: !1
                    }
                },
                colors: [window.theme.primary, window.theme.warning],
                plotOptions: {
                    radialBar: {
                        startAngle: -135,
                        endAngle: 225,
                        hollow: {
                            margin: 0,
                            size: "70%",
                            background: window.theme.white,
                            image: void 0,
                            imageOffsetX: 0,
                            imageOffsetY: 0,
                            position: "front",
                            dropShadow: {
                                enabled: !0,
                                top: 3,
                                left: 0,
                                blur: 4,
                                opacity: .24
                            }
                        },
                        track: {
                            background: window.theme.white,
                            strokeWidth: "67%",
                            margin: 0,
                            dropShadow: {
                                enabled: !0,
                                top: -3,
                                left: 0,
                                blur: 4,
                                opacity: .35
                            }
                        },
                        dataLabels: {
                            showOn: "always",
                            name: {
                                show: !1
                            },
                            value: {
                                formatter: function(e) {
                                    return parseInt(e) + "%"
                                },
                                color: window.theme.dark,
                                fontSize: "48px",
                                fontWeight: "700",
                                show: !0
                            }
                        }
                    }
                },
                fill: {
                    type: "gradient",
                    gradient: {
                        shade: "dark",
                        type: "horizontal",
                        shadeIntensity: .5,
                        gradientToColors: [window.theme.warning],
                        inverseColors: !1,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 100]
                    }
                },
                stroke: {
                    lineCap: "round"
                }
            };
            new ApexCharts(document.querySelector("#progressChart"), e).render()
        }
        if ($(".resultChart").length) {
            e = {
                series: [85],
                chart: {
                    height: 110,
                    width: 110,
                    type: "radialBar"
                },
                grid: {
                    show: !1,
                    padding: {
                        left: -15,
                        right: -15,
                        top: -12,
                        bottom: -15
                    }
                },
                colors: [window.theme.success],
                plotOptions: {
                    radialBar: {
                        hollow: {
                            margin: -2,
                            size: "50%",
                            background: [window.theme.lightSuccess]
                        },
                        dataLabels: {
                            showOn: "always",
                            name: {
                                show: !0,
                                fontSize: "20px",
                                fontFamily: void 0,
                                fontWeight: 600,
                                color: void 0,
                                offsetY: 7
                            },
                            value: {
                                show: !1
                            }
                        }
                    }
                },
                stroke: {
                    lineCap: "round"
                },
                labels: ["85%"]
            };
            new ApexCharts(document.querySelector(".resultChart"), e).render()
        }
    }(), $("#calendar").length && document.addEventListener("DOMContentLoaded", (function() {
        var e = moment().startOf("day"),
            t = e.format("YYYY-MM"),
            o = e.clone().subtract(1, "day").format("YYYY-MM-DD"),
            a = e.format("YYYY-MM-DD"),
            r = e.clone().add(1, "day").format("YYYY-MM-DD"),
            i = document.getElementById("calendar");
        new FullCalendar.Calendar(i, {
            headerToolbar: {
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth"
            },
            height: 900,
            contentHeight: 800,
            aspectRatio: 3,
            nowIndicator: !0,
            now: a + "T09:25:00",
            initialView: "dayGridMonth",
            initialDate: a,
            editable: !0,
            dayMaxEvents: !0,
            navLinks: !0,
            events: [{
                title: "All Day Event",
                start: t + "-01",
                description: "Toto lorem ipsum dolor sit incid idunt ut"
            }, {
                title: "Reporting",
                start: t + "-14T13:30:00",
                description: "Lorem ipsum dolor incid idunt ut labore",
                end: t + "-14"
            }, {
                title: "Company Meeting",
                start: t + "-05",
                description: "Lorem ipsum dolor sit tempor incid",
                end: t + "-03"
            }, {
                title: "Mexo 2021 - Product Release",
                start: t + "-02",
                description: "Lorem ipsum dolor sit tempor inci",
                end: t + "-04"
            }, {
                title: "Dinner",
                start: t + "-12",
                description: "Lorem ipsum dolor sit amet, conse ctetur",
                end: t + "-10"
            }, {
                id: 999,
                title: "Repeating Event",
                start: t + "-09T16:00:00",
                description: "Lorem ipsum dolor sit ncididunt ut labore"
            }, {
                id: 1e3,
                title: "Repeating Event",
                description: "Lorem ipsum dolor sit amet, labore",
                start: t + "-16T16:00:00"
            }, {
                title: "Conference",
                start: o,
                end: r,
                description: "Lorem ipsum dolor eius mod tempor labore"
            }, {
                title: "Meeting",
                start: a + "T10:30:00",
                end: a + "T12:30:00",
                description: "Lorem ipsum dolor eiu idunt ut labore"
            }, {
                title: "Lunch",
                start: a + "T12:00:00",
                description: "Lorem ipsum dolor sit amet, ut labore"
            }, {
                title: "Meeting",
                start: a + "T14:30:00",
                description: "Lorem ipsum conse ctetur adipi scing"
            }, {
                title: "Happy Hour",
                start: a + "T17:30:00",
                description: "Lorem ipsum dolor sit amet, conse ctetur"
            }, {
                title: "Dinner",
                start: r + "T05:00:00",
                description: "Lorem ipsum dolor sit ctetur adipi scing"
            }, {
                title: "Birthday Party",
                start: r + "T07:00:00",
                description: "Lorem ipsum dolor sit amet, scing"
            }, {
                title: "Click for Google",
                url: "http://google.com/",
                start: t + "-28",
                description: "Lorem ipsum dolor sit amet, labore"
            }]
        }).render()
    })), $(".input-group").on("click", ".button-plus", (function(e) {
        ! function(e) {
            e.preventDefault();
            var t = $(e.target).data("field"),
                o = $(e.target).closest("div"),
                a = parseInt(o.find("input[name=" + t + "]").val(), 10);
            isNaN(a) ? o.find("input[name=" + t + "]").val(0) : o.find("input[name=" + t + "]").val(a + 1)
        }(e)
    })), $(".input-group").on("click", ".button-minus", (function(e) {
        ! function(e) {
            e.preventDefault();
            var t = $(e.target).data("field"),
                o = $(e.target).closest("div"),
                a = parseInt(o.find("input[name=" + t + "]").val(), 10);
            !isNaN(a) && a > 0 ? o.find("input[name=" + t + "]").val(a - 1) : o.find("input[name=" + t + "]").val(0)
        }(e)
    }));
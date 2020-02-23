import '../styles/main.scss';

import $ from 'jquery'; window.jQuery = $;
import slick from 'slick-carousel';
import Isotope from 'isotope-layout';

const fancybox = require("@fancyapps/fancybox");

$(document).ready(function() {
  const heroSlider = $('.hero-slider');
  const heroSliderImages = $('.hero-slider .img-wrapper');
  const heroAllSlidesCount = $('.hero-slider .img-wrapper > a').length;

  $('.hero-slider__nav span.total').append(heroAllSlidesCount);
  $('.hero-slider__nav span.current').append(1);

  heroSliderImages.slick({
    infinite: false
  });
  heroSliderImages.on('afterChange', function(event, slick, currentSlide, nextSlide){
    $('.hero-slider__nav span.current').empty().append(currentSlide + 1);
  });

  heroSlider.find('.slider-prev')
    .on('click', function() {
      heroSliderImages.find('.slick-prev').click();
    });

  heroSlider.find('.slider-next')
    .on('click', function() {
      heroSliderImages.find('.slick-next').click();
    });

  heroSlider.find('.fancybox').fancybox();

  heroSlider.find('.slider-zoom')
    .on('click', function() {
      heroSlider.find('.slick-current img').click();
    });

  $('.portfolio .button-all .amount')
    .empty().append('(' + $('.portfolio .masonry .grid-item').length + ')');

  $('.portfolio .button-photo .amount')
    .empty().append('(' + $('.portfolio .masonry .mpicture').length + ')');

  $('.portfolio .button-video .amount')
    .empty().append('(' + $('.portfolio .masonry .mvideo').length + ')');

  const msnry = new Isotope('.portfolio .masonry', {
    itemSelector: '.grid-item',
    layoutMode: 'masonry',
    masonry: {
      gutter: 4
    },
    fitWidth: true,
    horizontalOrder: true,
    percentPosition: true,
  });

  msnry.arrange({
    filter: '*'
  });

  $('.filters-button-group button').on('click', function() {
    $('.filters-button-group button').removeClass('is-checked');
    $(this).addClass('is-checked');

    msnry.arrange({
      filter: $(this).attr('data-filter')
    });
  });


  const testimonials = $('.testimonials');
  const testimonialsImages = $('.testimonials .testimonials__carousel');
  const testimonialsCount = $('.testimonials .testimonials__carousel > .testimonial-item').length;

  $('.testimonials__nav span.total').append(testimonialsCount);
  $('.testimonials__nav span.current').append(1);

  testimonialsImages.slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: 0,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          centerMode: false
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  testimonialsImages.on('afterChange', function(event, slick, currentSlide, nextSlide){
    $('.testimonials__nav span.current').empty().append(currentSlide + 1);
  });

  testimonials.find('.slider-prev')
    .on('click', function() {
      testimonialsImages.find('.slick-prev').click();
    });

  testimonials.find('.slider-next')
    .on('click', function() {
      testimonialsImages.find('.slick-next').click();
    });
});
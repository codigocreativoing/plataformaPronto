(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// const countdown = new Date("Nov 30, 2017");

// function getRemainingTime(endtime) {
//   const milliseconds = Date.parse(endtime) - Date.parse(new Date());
//   const seconds = Math.floor((milliseconds / 1000) % 60);
//   const minutes = Math.floor((milliseconds / 1000 / 60) % 60);
//   const hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);
//   const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));

//   return {
//     'total': milliseconds,
//     'seconds': seconds,
//     'minutes': minutes,
//     'hours': hours,
//     'days': days,
//   };
// }

// function initClock(id, endtime) {
//   const counter = document.getElementById(id);
//   const daysItem = counter.querySelector('.js-countdown-days');
//   const hoursItem = counter.querySelector('.js-countdown-hours');
//   const minutesItem = counter.querySelector('.js-countdown-minutes');
//   const secondsItem = counter.querySelector('.js-countdown-seconds');

//   function updateClock() {
//     const time = getRemainingTime(endtime);

//     daysItem.innerHTML = time.days;
//     hoursItem.innerHTML = ('0' + time.hours).slice(-2);
//     minutesItem.innerHTML = ('0' + time.minutes).slice(-2);
//     secondsItem.innerHTML = ('0' + time.seconds).slice(-2);

//     if (time.total <= 0) {
//       clearInterval(timeinterval);
//     }
//   }

//   updateClock();
//   const timeinterval = setInterval(updateClock, 1000);
// }

// initClock('js-countdown', countdown);
"use strict";

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyBjb25zdCBjb3VudGRvd24gPSBuZXcgRGF0ZShcIk5vdiAzMCwgMjAxN1wiKTtcblxuLy8gZnVuY3Rpb24gZ2V0UmVtYWluaW5nVGltZShlbmR0aW1lKSB7XG4vLyAgIGNvbnN0IG1pbGxpc2Vjb25kcyA9IERhdGUucGFyc2UoZW5kdGltZSkgLSBEYXRlLnBhcnNlKG5ldyBEYXRlKCkpO1xuLy8gICBjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcigobWlsbGlzZWNvbmRzIC8gMTAwMCkgJSA2MCk7XG4vLyAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKChtaWxsaXNlY29uZHMgLyAxMDAwIC8gNjApICUgNjApO1xuLy8gICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IoKG1pbGxpc2Vjb25kcyAvICgxMDAwICogNjAgKiA2MCkpICUgMjQpO1xuLy8gICBjb25zdCBkYXlzID0gTWF0aC5mbG9vcihtaWxsaXNlY29uZHMgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xuXG4vLyAgIHJldHVybiB7XG4vLyAgICAgJ3RvdGFsJzogbWlsbGlzZWNvbmRzLFxuLy8gICAgICdzZWNvbmRzJzogc2Vjb25kcyxcbi8vICAgICAnbWludXRlcyc6IG1pbnV0ZXMsXG4vLyAgICAgJ2hvdXJzJzogaG91cnMsXG4vLyAgICAgJ2RheXMnOiBkYXlzLFxuLy8gICB9O1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBpbml0Q2xvY2soaWQsIGVuZHRpbWUpIHtcbi8vICAgY29uc3QgY291bnRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbi8vICAgY29uc3QgZGF5c0l0ZW0gPSBjb3VudGVyLnF1ZXJ5U2VsZWN0b3IoJy5qcy1jb3VudGRvd24tZGF5cycpO1xuLy8gICBjb25zdCBob3Vyc0l0ZW0gPSBjb3VudGVyLnF1ZXJ5U2VsZWN0b3IoJy5qcy1jb3VudGRvd24taG91cnMnKTtcbi8vICAgY29uc3QgbWludXRlc0l0ZW0gPSBjb3VudGVyLnF1ZXJ5U2VsZWN0b3IoJy5qcy1jb3VudGRvd24tbWludXRlcycpO1xuLy8gICBjb25zdCBzZWNvbmRzSXRlbSA9IGNvdW50ZXIucXVlcnlTZWxlY3RvcignLmpzLWNvdW50ZG93bi1zZWNvbmRzJyk7XG5cbi8vICAgZnVuY3Rpb24gdXBkYXRlQ2xvY2soKSB7XG4vLyAgICAgY29uc3QgdGltZSA9IGdldFJlbWFpbmluZ1RpbWUoZW5kdGltZSk7XG5cbi8vICAgICBkYXlzSXRlbS5pbm5lckhUTUwgPSB0aW1lLmRheXM7XG4vLyAgICAgaG91cnNJdGVtLmlubmVySFRNTCA9ICgnMCcgKyB0aW1lLmhvdXJzKS5zbGljZSgtMik7XG4vLyAgICAgbWludXRlc0l0ZW0uaW5uZXJIVE1MID0gKCcwJyArIHRpbWUubWludXRlcykuc2xpY2UoLTIpO1xuLy8gICAgIHNlY29uZHNJdGVtLmlubmVySFRNTCA9ICgnMCcgKyB0aW1lLnNlY29uZHMpLnNsaWNlKC0yKTtcblxuLy8gICAgIGlmICh0aW1lLnRvdGFsIDw9IDApIHtcbi8vICAgICAgIGNsZWFySW50ZXJ2YWwodGltZWludGVydmFsKTtcbi8vICAgICB9XG4vLyAgIH1cblxuLy8gICB1cGRhdGVDbG9jaygpO1xuLy8gICBjb25zdCB0aW1laW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh1cGRhdGVDbG9jaywgMTAwMCk7XG4vLyB9XG5cbi8vIGluaXRDbG9jaygnanMtY291bnRkb3duJywgY291bnRkb3duKTtcblxuXG4iXX0=

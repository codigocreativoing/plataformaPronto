(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var countdown = new Date("Nov 30, 2017");

function getRemainingTime(endtime) {
  var milliseconds = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor(milliseconds / 1000 % 60);
  var minutes = Math.floor(milliseconds / 1000 / 60 % 60);
  var hours = Math.floor(milliseconds / (1000 * 60 * 60) % 24);
  var days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));

  return {
    'total': milliseconds,
    'seconds': seconds,
    'minutes': minutes,
    'hours': hours,
    'days': days
  };
}

function initClock(id, endtime) {
  var counter = document.getElementById(id);
  var daysItem = counter.querySelector('.js-countdown-days');
  var hoursItem = counter.querySelector('.js-countdown-hours');
  var minutesItem = counter.querySelector('.js-countdown-minutes');
  var secondsItem = counter.querySelector('.js-countdown-seconds');

  function updateClock() {
    var time = getRemainingTime(endtime);

    daysItem.innerHTML = time.days;
    hoursItem.innerHTML = ('0' + time.hours).slice(-2);
    minutesItem.innerHTML = ('0' + time.minutes).slice(-2);
    secondsItem.innerHTML = ('0' + time.seconds).slice(-2);

    if (time.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

initClock('js-countdown', countdown);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsSUFBTSxZQUFZLElBQUksSUFBSixDQUFTLGNBQVQsQ0FBbEI7O0FBRUEsU0FBUyxnQkFBVCxDQUEwQixPQUExQixFQUFtQztBQUNqQyxNQUFNLGVBQWUsS0FBSyxLQUFMLENBQVcsT0FBWCxJQUFzQixLQUFLLEtBQUwsQ0FBVyxJQUFJLElBQUosRUFBWCxDQUEzQztBQUNBLE1BQU0sVUFBVSxLQUFLLEtBQUwsQ0FBWSxlQUFlLElBQWhCLEdBQXdCLEVBQW5DLENBQWhCO0FBQ0EsTUFBTSxVQUFVLEtBQUssS0FBTCxDQUFZLGVBQWUsSUFBZixHQUFzQixFQUF2QixHQUE2QixFQUF4QyxDQUFoQjtBQUNBLE1BQU0sUUFBUSxLQUFLLEtBQUwsQ0FBWSxnQkFBZ0IsT0FBTyxFQUFQLEdBQVksRUFBNUIsQ0FBRCxHQUFvQyxFQUEvQyxDQUFkO0FBQ0EsTUFBTSxPQUFPLEtBQUssS0FBTCxDQUFXLGdCQUFnQixPQUFPLEVBQVAsR0FBWSxFQUFaLEdBQWlCLEVBQWpDLENBQVgsQ0FBYjs7QUFFQSxTQUFPO0FBQ0wsYUFBUyxZQURKO0FBRUwsZUFBVyxPQUZOO0FBR0wsZUFBVyxPQUhOO0FBSUwsYUFBUyxLQUpKO0FBS0wsWUFBUTtBQUxILEdBQVA7QUFPRDs7QUFFRCxTQUFTLFNBQVQsQ0FBbUIsRUFBbkIsRUFBdUIsT0FBdkIsRUFBZ0M7QUFDOUIsTUFBTSxVQUFVLFNBQVMsY0FBVCxDQUF3QixFQUF4QixDQUFoQjtBQUNBLE1BQU0sV0FBVyxRQUFRLGFBQVIsQ0FBc0Isb0JBQXRCLENBQWpCO0FBQ0EsTUFBTSxZQUFZLFFBQVEsYUFBUixDQUFzQixxQkFBdEIsQ0FBbEI7QUFDQSxNQUFNLGNBQWMsUUFBUSxhQUFSLENBQXNCLHVCQUF0QixDQUFwQjtBQUNBLE1BQU0sY0FBYyxRQUFRLGFBQVIsQ0FBc0IsdUJBQXRCLENBQXBCOztBQUVBLFdBQVMsV0FBVCxHQUF1QjtBQUNyQixRQUFNLE9BQU8saUJBQWlCLE9BQWpCLENBQWI7O0FBRUEsYUFBUyxTQUFULEdBQXFCLEtBQUssSUFBMUI7QUFDQSxjQUFVLFNBQVYsR0FBc0IsQ0FBQyxNQUFNLEtBQUssS0FBWixFQUFtQixLQUFuQixDQUF5QixDQUFDLENBQTFCLENBQXRCO0FBQ0EsZ0JBQVksU0FBWixHQUF3QixDQUFDLE1BQU0sS0FBSyxPQUFaLEVBQXFCLEtBQXJCLENBQTJCLENBQUMsQ0FBNUIsQ0FBeEI7QUFDQSxnQkFBWSxTQUFaLEdBQXdCLENBQUMsTUFBTSxLQUFLLE9BQVosRUFBcUIsS0FBckIsQ0FBMkIsQ0FBQyxDQUE1QixDQUF4Qjs7QUFFQSxRQUFJLEtBQUssS0FBTCxJQUFjLENBQWxCLEVBQXFCO0FBQ25CLG9CQUFjLFlBQWQ7QUFDRDtBQUNGOztBQUVEO0FBQ0EsTUFBTSxlQUFlLFlBQVksV0FBWixFQUF5QixJQUF6QixDQUFyQjtBQUNEOztBQUVELFVBQVUsY0FBVixFQUEwQixTQUExQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJjb25zdCBjb3VudGRvd24gPSBuZXcgRGF0ZShcIk5vdiAzMCwgMjAxN1wiKTtcblxuZnVuY3Rpb24gZ2V0UmVtYWluaW5nVGltZShlbmR0aW1lKSB7XG4gIGNvbnN0IG1pbGxpc2Vjb25kcyA9IERhdGUucGFyc2UoZW5kdGltZSkgLSBEYXRlLnBhcnNlKG5ldyBEYXRlKCkpO1xuICBjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcigobWlsbGlzZWNvbmRzIC8gMTAwMCkgJSA2MCk7XG4gIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKChtaWxsaXNlY29uZHMgLyAxMDAwIC8gNjApICUgNjApO1xuICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IoKG1pbGxpc2Vjb25kcyAvICgxMDAwICogNjAgKiA2MCkpICUgMjQpO1xuICBjb25zdCBkYXlzID0gTWF0aC5mbG9vcihtaWxsaXNlY29uZHMgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xuXG4gIHJldHVybiB7XG4gICAgJ3RvdGFsJzogbWlsbGlzZWNvbmRzLFxuICAgICdzZWNvbmRzJzogc2Vjb25kcyxcbiAgICAnbWludXRlcyc6IG1pbnV0ZXMsXG4gICAgJ2hvdXJzJzogaG91cnMsXG4gICAgJ2RheXMnOiBkYXlzLFxuICB9O1xufVxuXG5mdW5jdGlvbiBpbml0Q2xvY2soaWQsIGVuZHRpbWUpIHtcbiAgY29uc3QgY291bnRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgY29uc3QgZGF5c0l0ZW0gPSBjb3VudGVyLnF1ZXJ5U2VsZWN0b3IoJy5qcy1jb3VudGRvd24tZGF5cycpO1xuICBjb25zdCBob3Vyc0l0ZW0gPSBjb3VudGVyLnF1ZXJ5U2VsZWN0b3IoJy5qcy1jb3VudGRvd24taG91cnMnKTtcbiAgY29uc3QgbWludXRlc0l0ZW0gPSBjb3VudGVyLnF1ZXJ5U2VsZWN0b3IoJy5qcy1jb3VudGRvd24tbWludXRlcycpO1xuICBjb25zdCBzZWNvbmRzSXRlbSA9IGNvdW50ZXIucXVlcnlTZWxlY3RvcignLmpzLWNvdW50ZG93bi1zZWNvbmRzJyk7XG5cbiAgZnVuY3Rpb24gdXBkYXRlQ2xvY2soKSB7XG4gICAgY29uc3QgdGltZSA9IGdldFJlbWFpbmluZ1RpbWUoZW5kdGltZSk7XG5cbiAgICBkYXlzSXRlbS5pbm5lckhUTUwgPSB0aW1lLmRheXM7XG4gICAgaG91cnNJdGVtLmlubmVySFRNTCA9ICgnMCcgKyB0aW1lLmhvdXJzKS5zbGljZSgtMik7XG4gICAgbWludXRlc0l0ZW0uaW5uZXJIVE1MID0gKCcwJyArIHRpbWUubWludXRlcykuc2xpY2UoLTIpO1xuICAgIHNlY29uZHNJdGVtLmlubmVySFRNTCA9ICgnMCcgKyB0aW1lLnNlY29uZHMpLnNsaWNlKC0yKTtcblxuICAgIGlmICh0aW1lLnRvdGFsIDw9IDApIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGltZWludGVydmFsKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVDbG9jaygpO1xuICBjb25zdCB0aW1laW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh1cGRhdGVDbG9jaywgMTAwMCk7XG59XG5cbmluaXRDbG9jaygnanMtY291bnRkb3duJywgY291bnRkb3duKTtcblxuXG4iXX0=

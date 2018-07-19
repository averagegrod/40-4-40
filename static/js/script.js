$(document).ready(function()
{
  $('hr').remove();

  var birthday = new Date(2019, 5 ,3);
  var now = new Date();
  var turnForty = (birthday.getTime()/1000) - (now.getTime()/1000);
  var clock = $('#turn-forty').FlipClock(turnForty,{
  	clockFace: 'DailyCounter',
  	countdown: true,
  	showSeconds: false
	});
});
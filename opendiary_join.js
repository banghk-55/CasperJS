var links = [];
var casper = require("casper").create({
		viewportSize: {width: 1024, height: 1700},
	});
	
var system = require('system');

// Start
casper.start("http://www.opendiary.com/", function() {
	this.capture('Opendiary_join_step1.png');
	this.echo('Opening opendiary.com to join');
});

var captcha = '';

casper.then(function() {
	this.clickLabel('join', 'a');
});

casper.wait(4000);

// Form resigned
casper.then(function() {
	this.echo('Writing to forms');
	this.fill('[action="newnamecheck.asp"]', {
		'diaryName': 'admin123456',
		'passwordPwd': 'qwe123456',
		'pw2': 'qwe123456',
		'youremail': 'admin123456@gmail.com',
		'agreeTerms': true
		//'action': true
	}, false);
	this.capture('Opendiary_join_step2.png');
	system.stdout.writeLine('Nhap Captcha:');
	captcha = system.stdin.readLine();
});

// Input captcha
casper.then(function() {
	this.fillSelectors('[action="newnamecheck.asp"]', {
		'input[id^="recaptcha_response_field"]': captcha
	}, true);
	this.capture('Opendiary_join_step3.png');
	//this.click('input[type="submit"][class="buttonhover"]');
});

casper.wait(4000, function() {
	this.capture('Opendiary_join_step4.png');
	this.echo('joining');
});

// Exit
casper.run(function() {
	this.capture('Opendiary_join_step999.png');
	this.echo('final');
    this.exit();
});
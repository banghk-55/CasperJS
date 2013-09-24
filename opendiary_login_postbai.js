var links = [];
var casper = require("casper").create({
		viewportSize: {width: 1024, height: 1700},
	});
	
var system = require('system');

//Login
casper.start("http://www.opendiary.com/", function() {
	this.capture('Opendiary_login_postbai_step1.png');
	this.echo('Opening website opendiary.com to login.');
});

casper.then(function() {
	this.echo('Writing to forms');
    this.fill('[action="unlock.asp"]', { 
		'logstring': "kimbang001",
		'logpw': "qwe123456",
		'staylogged': true
	}, true);
	this.capture('Opendiary_login_postbai_step2.png');
});

casper.wait(5000, function() {
	this.capture('Opendiary_login_postbai_step3.png');
	this.echo('Logged in!');
});

//Post bài
casper.thenOpen('http://www.opendiary.com/entryedit.asp?mode=add');

casper.wait(4000, function() {
	this.echo('Go to page post text');
	this.capture('Opendiary_login_postbai_step4.png');
});

casper.then(function() {
	this.fill('form#entryedit', {
		'entrytitle': 'football club eeeeeeeeeeee'
	}, true);
	this.capture('Opendiary_login_postbai_step5.png');
	this.echo('Post bai');
});

casper.wait(5000, function() {
	this.capture('Opendiary_login_postbai_step6.png');
	this.echo('Final post bai!');
});

casper.run(function() {
	this.capture('Opendiary_login_postbai_step999.png');
	this.echo('Final program');
    this.exit();
});
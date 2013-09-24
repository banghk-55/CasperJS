var casper = require('casper').create({
		viewportSize: {width: 1000, height: 768},
});

var url = '';// store confirm url
var links = new Array(); // store all links here
var mails = new Array(); // store mail's links here

// this function to get the 'href' attribute in 'a' tag 
function getLinks() { 
    var links = document.querySelectorAll('a');
    return Array.prototype.map.call(links, function(e) {
        return e.getAttribute('href');
    });
};

// use the userAgent of Window Phone 7
casper.userAgent('Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0; NOKIA; Lumia 800)');

// start
casper.start('https://mail.live.com/',function(){
	this.capture('CheckMail1.1.png');
	this.echo('Go to mail page')
});


// login
casper.then(function(){
	this.fill('form#i0281', {
		'login':'hoangbang001@hotmail.com',
		'passwd':'hoangbang123'
	});
	this.capture('CheckMail1.2.png');
	this.click('#i0011');
	this.echo('Logged In!')
});

casper.wait(10000, function() {
	this.capture('CheckMail1.aaaaaaaaa2.png');
});

casper.then(function(){
	// import mail's link to mails[]
	links = this.evaluate(getLinks);
	var patt = /messages.m/gi;
	var patt1 = /verify.asp/gi;
	for(var i=0;i<links.length;i++){
		if(links[i].match(patt)) 
			mails=mails.concat(links[i]);
	}
	// import mail's link completed!

	// access mail and get confirm link
	for(var i=0;i<mails.length;i++){
		mails[i] = 'https://bay175.mail.live.com'+mails[i];
	}
	var count = 1;
	this.each(mails, function(self, mail){
		self.thenOpen(mail, function(){
			this.capture('CheckMail2.'+count+'.png');
			this.echo('Open mail '+count);
			this.wait(1000);
			links = this.evaluate(getLinks);
			for (var i=0; i<links.length; i++){
				if(links[i].match(patt1)){
					url = links[i]; // here is the link which we need
					this.echo('Import link verify to url');
					//index++;
				}
			}
			count++;
		});
	});
});
 
casper.then(function(){
	this.thenOpen(url);
});

casper.wait(3000, function() {
	this.capture('CheckMail3.png');
	this.echo('Open link verify email');
});

casper.run(function(){
	this.capture('CheckMai999.png');
	this.echo('Final program');
    this.exit();
});

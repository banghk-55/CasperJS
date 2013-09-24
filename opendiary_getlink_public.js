var casper = require('casper').create();
var links = new Array();
var postLinks = new Array();
var url = '';

function getLinks() { 
    var links = document.querySelectorAll('a');
    return Array.prototype.map.call(links, function(e) {
        return e.getAttribute('href');
    });
};

casper.start("http://www.opendiary.com/", function() {
});

//Login
casper.then(function() {
    this.fill('[action="unlock.asp"]', { 
		'logstring': "kimbang001",
		'logpw': "qwe123456",
		'staylogged': true
	}, true);
});

casper.wait(4000);

// Go to entries manage
casper.then(function(){
	this.thenOpen('http://www.opendiary.com/entrylist.asp?authorcode=E101384', function(){
		this.echo('Go to entries manage');
	});
});

// Get link post text
casper.then(function(){
	var patt = /entryview.asp/gi;
	links = this.evaluate(getLinks);
	var n = 0;
	for(var i=0; i<links.length; i++){
		if(links[i].match(patt)){
			if(links[i].length>25){
				postLinks[n] = links[i];
				n++;
			}
		}
	}
	url = postLinks[1]; // import one link
	this.echo('Get one link post text to url.');
});

//Log out
casper.then(function() {
	this.clickLabel('logout', 'a');
	this.echo('Log out!');
});

casper.wait(4000, function() {
	this.capture('Opendiary_getlink_public_logout.png');
});

// Test link public
casper.then(function(){
	this.thenOpen(url, function(){
		this.capture('Opendiary_getlink_public.png'); 
		this.echo('Test link public!');
	});
});

casper.wait(4000);

casper.run(function(){
	this.exit();
});
var initialKittens = [
  {
    name: 'Tabby',
    clickCount: 0,
    imgSrc: 'img/434164568_fea0ad4013_z.jpg',
    imgAttribution: 'https://www.flickr.com',
    nickNames: ["Kitts", "Tabs", "Meow"]
  },
  {
    name: 'Jags',
    clickCount: 0,
    imgSrc: 'img/4154543904_6e2428c421_z.jpg',
    imgAttribution: 'https://www.flickr.com',
    nickNames: ["Kitts", "Jags", "Kit Power"]
  },
  {
    name: 'Blue',
    clickCount: 0,
    imgSrc: 'img/22252709_010df3379e_z.jpg',
    imgAttribution: 'https://www.flickr.com',
    nickNames: ["Kitts", "Baloo", "Ice Eyes"]
  },
  {
    name: 'Karen',
    clickCount: 0,
    imgSrc: 'img/1413379559_412a540d29_z.jpg',
    imgAttribution: 'https://www.flickr.com',
    nickNames: ["Kitts", "Floppy", "Whiskers"]
  },
  {
    name: 'Sleepy',
    clickCount: 0,
    imgSrc: 'img/9648464288_2516b35537_z.jpg',
    imgAttribution: 'https://www.flickr.com',
    nickNames: ["Kitts", "OJ", "Paws"]
  }
];


var Cat = function(data) {
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);
  this.imgAttribution = ko.observable(data.imgAttribution);
  this.nickNames = ko.observableArray(data.nickNames);

  this.title = ko.computed( function() {
    var title;
    var clicks = this.clickCount();
    if (clicks < 5) {
      title = "Newbie";
    }
    else if (clicks < 35) {
      title = "Infant";
    }
    else if (clicks < 100) {
      title = "Teen";
    }
    else {
      title = "Adult";
    }
    return title;
  }, this);
};

var ViewModel = function() {
  var that = this;

  this.catList = ko.observableArray([]);

  initialKittens.forEach(function(catItem) {
    that.catList.push( new Cat(catItem) );
  });

  this.currentCat = ko.observable( this.catList()[4] );

  this.incrementCounter = function() {
    that.currentCat().clickCount( that.currentCat().clickCount() + 1 );
  };

  this.setCurrentCat = function(clicked) {
    that.currentCat(clicked);
  };
};

ko.applyBindings(new ViewModel());

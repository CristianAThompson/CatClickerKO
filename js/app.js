var ViewModel = function() {
this.clickCount = ko.observable(0);
this.name = ko.observable('Tabby');
this.level = ko.observable('Newbie');
this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
this.imgAttribution = ko.observable('https://www.flickr.com');
this.nickNames = ko.observableArray([
  {nName: "Kitts"},
  {nName: "Jags"},
  {nName: "Cat Swanson"}
]);


this.incrementCounter = function() {
  this.clickCount(this.clickCount() + 1);

  if (this.clickCount() > 5) {
    this.level("Infant");
  };

  if (this.clickCount() > 15) {
    this.level("Teen");
  };

  if (this.clickCount() > 100) {
    this.level("Adult");
  };
};
};

ko.applyBindings(new ViewModel());

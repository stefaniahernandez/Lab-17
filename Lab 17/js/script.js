/*eslint-env browser*/

var Jukebox = function () {
    //good idea to capitalize objects
    "use strict";
    //"factory pattern"
    var albums = [], self;
    self = {
        addAlbum: function (album) {
            albums.push(album);
        },
        favoriteAlbum: function () {
            var max = -1, fav, i;
            for (i = 0; i < albums.length; i += 1) {
                if (albums[i].played > max) {
                    max = albums[i].played;
                    fav = albums[i];
                }
            }
            return fav.display();
        }
    };
    return self;
};

var Album = function (artist, title) {
    "use strict";
    var self = {
        played: 0, //comma NOT semicolon
        //two methods within this obkect
        play: function () {
            self.played += 1; //it will increment the played property by one
        },//comma
        display: function () {
            return artist + " '" + title + ".' It has been played " + this.played + " times.";
        }
    };
    return self;
};

var jbox = new Jukebox();
var album1 = new Album("No Doubt", "Tragic Kingdom");
var album2 = new Album("The Stooges", "Raw Power");
var album3 = new Album("The Rolling Stones", "Sticky Fingers");

jbox.addAlbum(album1);
jbox.addAlbum(album2);
jbox.addAlbum(album3);

album1.play();
album1.play();
album1.play();
album2.play();
album3.play();

window.document.write("Your favorite album is " + jbox.favoriteAlbum());



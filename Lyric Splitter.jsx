// Lyric Splitter Script for After Effects
// Splits a text file into word layers
// Created by https://github.com/PurpleCokeAE

var comp = app.project.activeItem;
if (!(comp instanceof CompItem)) {
    alert("Please select a composition first.");
} else {
    var file = File.openDialog("Select your lyrics text file");
    if (file != null) {
        file.open("r");
        var line;
        var yPos = 200; // starting vertical position
        app.beginUndoGroup("Import Lyrics");

        while (!file.eof) {
            line = file.readln();
            var words = line.split(" ");
            var xPos = 200; // reset horizontal position for each line

            for (var i = 0; i < words.length; i++) {
                var textLayer = comp.layers.addText(words[i]);
                textLayer.property("Position").setValue([xPos, yPos]);
                xPos += 120; // spacing between words
            }
            yPos += 100; // spacing between lines
        }

        file.close();
        app.endUndoGroup();
    }

}

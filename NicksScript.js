// data from https://www.kaggle.com/egrinstein/20-years-of-games/data
d3.csv("data/ign.csv", function (data) {
    var scores = [0, 0, 0, 0, 0, 0, 0, 0, 0]; // Scores for GameCube, Wii, Wii U, PS2, PS3, PS4, Xbox, Xbox 360, Xbox One
    var counts = [0, 0, 0, 0, 0, 0, 0, 0, 0]; // counting GameCube, Wii, Wii U, PS2, PS3, PS4, Xbox, Xbox 360, Xbox One
    var genreCounts = [0, 0, 0, 0, 0, 0, 0, 0, 0]; // counting Strategy, Sports, Action, Adventure, Shooter, RPG, Platformer, Fighting, Puzzle
    data.forEach(function (d) {
        d.score = +d.score;
        switch (d.platform) {
            case "GameCube":
                scores[0] += d.score;
                counts[0]++;
                break;
            case "Wii":
                scores[1] += d.score;
                counts[1]++;
                break;
            case "Wii U":
                scores[2] += d.score;
                counts[2]++;
                break;
            case "PlayStation 2":
                scores[3] += d.score;
                counts[3]++;
                break;
            case "PlayStation 3":
                scores[4] += d.score;
                counts[4]++;
                break;
            case "PlayStation 4":
                scores[5] += d.score;
                counts[5]++;
                break;
            case "Xbox":
                scores[6] += d.score;
                counts[6]++;
                break;
            case "Xbox 360":
                scores[7] += d.score;
                counts[7]++;
                break;
            case "Xbox One":
                scores[8] += d.score;
                counts[8]++;
        }
        switch (d.genre) {
            case "Strategy":
                genreCounts[0]++;
                break;
            case "Sports":
                genreCounts[1]++;
        }
    });
    function average(sum, count) {
        return sum / count;
    }
    var avgScoreGCN = average(scores[0], counts[0]);
    avgScoreGCN = d3.format(".2f")(avgScoreGCN);

    var avgScoreWii = average(scores[1], counts[1]);
    avgScoreWii = d3.format(".2f")(avgScoreWii);

    var avgScoreWiiU = average(scores[2], counts[2]);
    avgScoreWiiU = d3.format(".2f")(avgScoreWiiU);

    var avgScorePS2 = average(scores[3], counts[3]);
    avgScorePS2 = d3.format(".2f")(avgScorePS2);

    var avgScorePS3 = average(scores[4], counts[4]);
    avgScorePS3 = d3.format(".2f")(avgScorePS3);

    var avgScorePS4 = average(scores[5], counts[5]);
    avgScorePS4 = d3.format(".2f")(avgScorePS4);

    var avgScoreXbox = average(scores[6], counts[6]);
    avgScoreXbox = d3.format(".2f")(avgScoreXbox);

    var avgScoreXbox360 = average(scores[7], counts[7]);
    avgScoreXbox360 = d3.format(".2f")(avgScoreXbox360);

    var avgScoreXboxOne = average(scores[8], counts[8]);
    avgScoreXboxOne = d3.format(".2f")(avgScoreXboxOne);

    console.log("Nintento Gamecube scores should be: " + avgScoreGCN);
    d3.select("body")
        .append("h1")
        .text("IGN Video Game Ratings Data 2");
    d3.select("body") // Oddly formats the paragraph text if done in the same d3.select as the h1
        .append("p")
        .text("AVERAGE GAME RATINGS PER PLATFORM:")
        .append("p")
        .text("Gamecube: " + avgScoreGCN)
        .append("p")
        .text("Wii: " + avgScoreWii)
        .append("p")
        .text("Wii U: " + avgScoreWiiU)
        .append("p")
        .text("Playstation 2: " + avgScorePS2)
        .append("p")
        .text("Playstation 3: " + avgScorePS3)
        .append("p")
        .text("Playstation 4: " + avgScorePS4)
        .append("p")
        .text("Xbox: " + avgScoreXbox)
        .append("p")
        .text("Xbox 360: " + avgScoreXbox360)
        .append("p")
        .text("Xbox One: " + avgScoreXboxOne);
});
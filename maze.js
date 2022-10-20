$(() => {
  const MAZE = (function () {
    let wallTouched = false;
    let game = "";
    const defaultBoundaryBGColor = $(".boundary").css("background-color"); // reads the default color of the boundaries.

    const start = function () {
      $(".boundary").css("background-color", defaultBoundaryBGColor);
      wallTouched = false;
    };
    const gameStarted = function () {
      game = game ? "" : "Started";
    };
    const setBGToRed = function () {
      // Here, I used the function expression callback (not arrow function) in order for the "this" keyword to refer to each bounding DOM element
      $(this).css("background-color", "red");
      wallTouched = true;
    };
    const alertMessage = () => {
      alert("Sorry, you lost! :[");
    };
    const end = () => {
      if (!game) {
        alert(
          "You are coming from wrong direction! Please enter via [S] gate!"
        );
      } else {
        wallTouched ? alert("Sorry, you lost! :[") : alert("You win! :]");
        game = ""; // The game is "Over". To start, player should enter from the [S] gate
      }
    };
    return {
      start: start,
      gameStarted: gameStarted,
      setBGToRed: setBGToRed,
      alertMessage: alertMessage,
      end: end,
    };
  })();
  $("#start").click(MAZE.start);
  $("#start").mouseenter(MAZE.gameStarted);
  $(".boundary").mouseover(MAZE.setBGToRed);
  $(".boundary").mouseleave(MAZE.alertMessage);
  $("#end").mouseover(MAZE.end);
});

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid");
  const scoreDisplay = document.querySelector(".score");
  const width = 10;
  const squares = [];
  let matchResult = [];
  let score = 0;
  let moveTimes;

  const candyImages = [
    "url(images/red-candy.png)",
    "url(images/yellow-candy.png)",
    "url(images/orange-candy.png)",
    "url(images/purple-candy.png)",
    "url(images/green-candy.png)",
    "url(images/blue-candy.png)",
  ];

  const audio_3 = new Audio(
    "https://candy-crush-js-audios.s3-ap-southeast-2.amazonaws.com/match_3.mp3"
  );
  const audio_4 = new Audio(
    "https://candy-crush-js-audios.s3-ap-southeast-2.amazonaws.com/match_4.mp3"
  );
  const audio_5 = new Audio(
    "https://candy-crush-js-audios.s3-ap-southeast-2.amazonaws.com/match_5.mp3"
  );

  // Build the game board
  function buildBoard() {
    for (let i = 0; i < width * width; i++) {
      const square = document.createElement("div");
      let randomColorIndex = Math.floor(Math.random() * candyImages.length);
      square.setAttribute("draggable", true);
      square.setAttribute("id", i);
      square.style.backgroundImage = candyImages[randomColorIndex];
      grid.appendChild(square);
      squares.push(square);
    }
  }
  buildBoard();
  moveTimes = 0;
  let moves = document.querySelector(".moves");
  moves.innerHTML = moveTimes;

  // checking for candy matches
  function checkRowOfThree() {
    // put the last two elements for each row into an array
    let wrappingIndex = [];
    for (i = width - 2; i < width * width; i += width) {
      wrappingIndex.push(i);
    }
    for (i = width - 1; i < width * width; i += width) {
      wrappingIndex.push(i);
    }
    // skip the last two elements of each row
    for (i = 0; i <= 97; i++) {
      if (wrappingIndex.includes(i)) continue;
      let rowOfThree = [i, i + 1, i + 2];
      let chosenColor = squares[i].style.backgroundImage;
      const isWiped = squares[i].style.backgroundImage === "";
      if (
        rowOfThree.every(
          (index) =>
            squares[index].style.backgroundImage === chosenColor && !isWiped
        )
      ) {
        rowOfThree.forEach((index) => {
          squares[index].style.backgroundImage = "";
        });
        audio_3.play();
        score += 300;
        scoreDisplay.innerHTML = score;
      } else {
        matchResult.push(false);
      }
    }
  }

  function checkRowOfFour() {
    // put the last two elements for each row into an array
    let wrappingIndex = [];
    for (i = width - 3; i < width * width; i += width) {
      wrappingIndex.push(i);
    }
    for (i = width - 2; i < width * width; i += width) {
      wrappingIndex.push(i);
    }
    for (i = width - 1; i < width * width; i += width) {
      wrappingIndex.push(i);
    }
    // skip the last two elements of each row
    for (i = 0; i <= 96; i++) {
      if (wrappingIndex.includes(i)) continue;
      let rowOfFour = [i, i + 1, i + 2, i + 3];
      let chosenColor = squares[i].style.backgroundImage;
      const isWiped = squares[i].style.backgroundImage === "";
      if (
        rowOfFour.every(
          (index) =>
            squares[index].style.backgroundImage === chosenColor && !isWiped
        )
      ) {
        rowOfFour.forEach((index) => {
          squares[index].style.backgroundImage = "";
        });
        audio_4.play();
        score += 400;
        scoreDisplay.innerHTML = score;
      }
    }
  }

  function checkRowOfFive() {
    // put the last two elements for each row into an array
    let wrappingIndex = [];
    for (i = width - 4; i < width * width; i += width) {
      wrappingIndex.push(i);
    }
    for (i = width - 3; i < width * width; i += width) {
      wrappingIndex.push(i);
    }
    for (i = width - 2; i < width * width; i += width) {
      wrappingIndex.push(i);
    }
    for (i = width - 1; i < width * width; i += width) {
      wrappingIndex.push(i);
    }
    // skip the last two elements of each row
    for (i = 0; i <= 95; i++) {
      if (wrappingIndex.includes(i)) continue;
      let rowOfFive = [i, i + 1, i + 2, i + 3, i + 4];
      let chosenColor = squares[i].style.backgroundImage;
      const isWiped = squares[i].style.backgroundImage === "";
      if (
        rowOfFive.every(
          (index) =>
            squares[index].style.backgroundImage === chosenColor && !isWiped
        )
      ) {
        rowOfFive.forEach((index) => {
          squares[index].style.backgroundImage = "";
        });
        audio_5.play();
        score += 500;
      }
    }
  }

  function checkColumnOfThree() {
    // skip checking the last two elements
    let wrappingIndex = [];
    for (i = (width - 2) * width; i < width * width; i++) {
      wrappingIndex.push(i);
    }
    for (i = 0; i <= 97; i++) {
      if (wrappingIndex.includes(i)) continue;
      let columnOfThree = [i, i + width, i + 2 * width];
      let chosenColor = squares[i].style.backgroundImage;
      const isWiped = squares[i].style.backgroundImage === "";
      if (
        columnOfThree.every(
          (index) =>
            squares[index].style.backgroundImage === chosenColor && !isWiped
        )
      ) {
        columnOfThree.forEach((index) => {
          squares[index].style.backgroundImage = "";
        });
        audio_3.play();
        score += 300;
        scoreDisplay.innerHTML = score;
      }
    }
  }

  function checkColumnOfFour() {
    // skip checking the last two elements
    let wrappingIndex = [];
    for (i = (width - 3) * width; i < width * width; i++) {
      wrappingIndex.push(i);
    }
    for (i = 0; i <= 96; i++) {
      if (wrappingIndex.includes(i)) continue;
      let columnOfFour = [i, i + width, i + 2 * width, i + 3 * width];
      let chosenColor = squares[i].style.backgroundImage;
      const isWiped = squares[i].style.backgroundImage === "";
      if (
        columnOfFour.every(
          (index) =>
            squares[index].style.backgroundImage === chosenColor && !isWiped
        )
      ) {
        columnOfFour.forEach((index) => {
          squares[index].style.backgroundImage = "";
        });
        audio_4.play();
        score += 400;
        scoreDisplay.innerHTML = score;
      }
    }
  }

  function checkColumnOfFive() {
    // skip checking the last two elements
    let wrappingIndex = [];
    for (i = (width - 4) * width; i < width * width; i++) {
      wrappingIndex.push(i);
    }
    for (i = 0; i <= 95; i++) {
      if (wrappingIndex.includes(i)) continue;
      let columnOfFour = [
        i,
        i + width,
        i + 2 * width,
        i + 3 * width,
        i + 4 * width,
      ];
      let chosenColor = squares[i].style.backgroundImage;
      const isWiped = squares[i].style.backgroundImage === "";
      if (
        columnOfFour.every(
          (index) =>
            squares[index].style.backgroundImage === chosenColor && !isWiped
        )
      ) {
        columnOfFour.forEach((index) => {
          squares[index].style.backgroundImage = "";
        });
        audio_5.play();
        score += 500;
        scoreDisplay.innerHTML = score;
      }
    }
  }

  // dropping new candies
  function dropCandies() {
    let firstRowIndex = [];
    for (i = 0; i < width; i++) {
      firstRowIndex.push(i);
    }
    for (i = 0; i < width * (width - 1); i++) {
      if (squares[i + width].style.backgroundImage === "") {
        // the [a. b] = [b, a] syntax
        [
          squares[i + width].style.backgroundImage,
          squares[i].style.backgroundImage,
        ] = [
          squares[i].style.backgroundImage,
          squares[i + width].style.backgroundImage,
        ];
      }
      const isFirstRow = firstRowIndex.includes(i);
      if (isFirstRow && squares[i].style.backgroundImage === "") {
        squares[i].style.backgroundImage =
          candyImages[Math.floor(Math.random() * candyImages.length)];
      }
    }
  }

  function checkBoard() {
    // while (squares.find(square => square.style.backgroundImage === "")) {
    checkRowOfFive();
    dropCandies();
    checkColumnOfFive();
    dropCandies();
    checkRowOfFour();
    dropCandies();
    checkColumnOfFour();
    dropCandies();
    checkRowOfThree();
    dropCandies();
    checkColumnOfThree();
    dropCandies();
    // }
  }

  let colorBeingDragged;
  let candyBeingDragged;
  // Dragging function
  squares.forEach((square) => square.addEventListener("dragstart", dragStart));
  squares.forEach((square) => square.addEventListener("dragover", dragOver));
  squares.forEach((square) => square.addEventListener("dragend", dragEnd));
  squares.forEach((square) => square.addEventListener("dragenter", dragEnter));
  squares.forEach((square) => square.addEventListener("dragleave", dragLeave));
  squares.forEach((square) => square.addEventListener("drop", drop));

  function dragStart(e) {
    colorBeingDragged = e.target.style.backgroundImage;
    candyBeingDragged = e.target.id;
    e.target.style.opacity = "50%";
  }
  function dragOver(e) {
    e.preventDefault();
    e.target.style.cursor = "grabbing";
  }
  function dragEnd(e) {
    e.target.style.opacity = "100%";
  }
  function dragEnter(e) {
    e.target.style.opacity = "50%";
  }
  function dragLeave(e) {
    e.preventDefault();
    e.target.style.opacity = "100%";
  }
  function drop(e) {
    e.target.style.cursor = "grab";
    // valid move?
    let validMove = [
      parseInt(squares[candyBeingDragged].id) + 1,
      parseInt(squares[candyBeingDragged].id) - 1,
      parseInt(squares[candyBeingDragged].id) + width,
      parseInt(squares[candyBeingDragged].id) - width,
    ];
    // change the background image
    if (validMove.includes(parseInt(e.target.id))) {
      // change the position of two candies
      squares[candyBeingDragged].style.backgroundImage =
        e.target.style.backgroundImage;
      e.target.style.backgroundImage = colorBeingDragged;
      e.target.style.opacity = "100%";
      moveTimes += 1;
      moves.innerHTML = moveTimes;
    } else {
      e.target.style.opacity = "100%";
    }
  }

  document.querySelector(".reset").addEventListener("click", () => {
    score = 0;
    moveTimes = 0;
    scoreDisplay.innerHTML = 0;
    moves.innerHTML = 0;
  });

  // if (valid candy move) {
  // check for matches
  // if (a match is made) {
  // dropCandies();
  // } else {
  // move candies back to their original position
  // }
  // }

  window.setInterval(() => {
    matchResult = [];
    checkBoard();
  }, 200);
});

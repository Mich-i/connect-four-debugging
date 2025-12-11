import { assertEquals } from "@std/assert";
import { Board, Player } from "./board.ts";

Deno.test("UserInputsColumnZero", () => {
  const board = new Board();
  for (let i = 0; i < 8; i++) {
    const row = board.makeMove(Player.PlayerX, 0);
    board.winner(Player.PlayerX, row, 0);

    const row2 = board.makeMove(Player.PlayerO, 0);
    board.winner(Player.PlayerO, row2, 0);
  }
});

Deno.test("ChessboardPatternNoWinner", () => {
  const board = new Board();
  const moves = [
    0, 1, 2, 3, 4, 5, 6, // Row 5
    0, 1, 2, 3, 4, 5, 6, // Row 4
    0, 1, 2, 3           // Row 3
  ];

  let currentPlayer = Player.PlayerX;

  for (const col of moves) {
    const row = board.makeMove(currentPlayer, col);
    const winner = board.winner(currentPlayer, row, col);
    assertEquals(winner, Player.Nobody, `Winner found incorrectly at move col ${col} by ${currentPlayer}`);

    currentPlayer = currentPlayer === Player.PlayerX ? Player.PlayerO : Player.PlayerX;
  }
});
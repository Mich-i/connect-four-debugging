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
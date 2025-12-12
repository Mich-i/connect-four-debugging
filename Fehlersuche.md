# Fehlersuche

## Gewählter Fehler
Ich habe den Fehler *„Programmabsturz (Index out of Range) bei voller Spalte“* ausgewählt.

## Reproduktion des Fehlers
Der Fehler ist reproduzierbar, indem wiederholt dieselbe Spalte (zB: Spalte 0) gewählt wird, bis diese vollständig gefüllt ist. Danach stürzt das Programm ab.

## Verwendete Debugging-Technik
Als Debugging-Technik habe ich einfach den Code genau angeschaut und logisch gehandelt.

## Analyse
Die Methode `makeMove(...)` gibt den Wert `-1` zurück, wenn eine Spalte voll ist.  
Dieser Rückgabewert wird anschliessend ungeprüft an die Methode `winner(...)` weitergegeben.  
Dort wird der Wert `row = -1` für weitere Berechnungen verwendet, was zu einem ungültigen Zugriff auf das Spielfeld und damit zu einem Programmabsturz führt.

## Ursache
Ungültige Zugkoordinaten (`row = -1`) werden nicht abgefangen, bevor eine Gewinnerprüfung durchgeführt wird.

## Lösung
In der Methode `winner(...)` wurde eine zusätzliche Überprüfung eingebaut.  
Falls `row` oder `col` ungültig sind, wird sofort `Player.Nobody` zurückgegeben und keine weitere Gewinnerprüfung durchgeführt.

### Code-Änderung (Auszug)
```ts
if (row < 0 || col < 0 || col >= COLS) {
  return Player.Nobody;
}
// Given a string representing the sequence of moves a robot vacuum makes, return whether or not it will return to its original position.
// The string will only contain L, R, U, and D characters, representing left, right, up, and down respectively.
// EXAMPLES:
// "LR", return true
// "URURD", return false
// "RUULLDRD", return true

const VacuumCleanerRoute = moves => {
  let left = 0;
  let right = 0;
  let up = 0;
  let down = 0;

  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === 'L') {
      left++;
    } else if (moves[i] === 'R') {
      right++;
    } else if (moves[i] === 'U') {
      up++;
    } else if (moves[i] === 'D') {
      down++;
    }
  }

  if (left - right === 0 && up - down === 0) {
    return true;
  }

  return false;
}
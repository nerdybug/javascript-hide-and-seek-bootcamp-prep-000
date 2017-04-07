function getFirstSelector(selector) {
  var first = document.querySelector(selector)
  return first;
}

function nestedTarget(nested, target) {
  var nested = document.querySelector('#nested .target')
  return nested;
}

function increaseRankBy(n) {
  var rankedLists = document.querySelectorAll('.ranked-list')
  for (var i = 0; i < rankedLists.length; i++) {
    rankedLists[i].innerHTML = parseInt(rankedLists[i].innerHTML, 10) + n
  }
}

function deepestChild() {
  var currentDiv = document.querySelector('div#grand-node');
  var childDiv = currentDiv.querySelector('div');
  while (childDiv !== null) {
    currentDiv = childDiv;
    childDiv = currentDiv.querySelector('div');
  }
  return currentDiv;
}

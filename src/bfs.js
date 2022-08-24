function bfs(tree, name) {
  var queue = [],
    result = {};
  queue.unshift(tree);
  while (queue.length != 0) {
    var item = queue.shift();
    if (item.name == name) {
      result = item;
      break;
    }
    var children = item.children;
    if (children) {
      for (let i = 0; i < children.length; i++) {
        queue.push(children[i]);
      }
    }
  }
  return result;
}

module.exports = { bfs };

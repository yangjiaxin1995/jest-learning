function dfs(tree, name) {
  var stack = [],
    result = {};
  stack.push(tree);
  while (stack.length != 0) {
    var item = stack.pop();
    if (item.name == name) {
      result = item;
      break;
    }
    let children = item.children;
    if (children) {
      for (let i = children.length - 1; i >= 0; i--) {
        stack.push(children[i]);
      }
    }
  }
  return result;
}

module.exports = { dfs };

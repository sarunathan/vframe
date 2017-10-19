const moduleRefMap = {};
const vdomMap = {};
let uniqId = 0;


function createTextNode(string, pNode){
  const textNode = document.createTextNode(string);
  pNode.appendChild(textNode);
  return textNode;
}

function createHtmlNode(type, pNode){
  const node = document.createElement(type);
  pNode.appendChild(node);
  return node;
}

function fnRenderTree(tree,pNode){
  let createdNode;
  if(typeof tree == "string"){
    createdNode = createTextNode(tree,pNode);
  }else{
    createdNode = createHtmlNode(tree.type,pNode);
  }

  

  if(tree.childrens){
    for(let i = 0;i<tree.childrens.length;i++){
      fnRenderTree(tree.childrens[i],createdNode);
    }
  }
}


function render(component,node){
  const instance = new component(),
    renderTree = instance.render();

  instance.uniqId = uniqId;
  moduleRefMap[uniqId] = instance;
  ++uniqId;

  fnRenderTree(renderTree,node);
}


export default {
  render,
  moduleRefMap
}

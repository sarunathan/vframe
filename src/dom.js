export function dom(type, props, ...childrens){
   return {
     type,
     props,
     childrens
   }
}



export default {
  dom:dom
}

import store from "./store.js";
import vframeDom from "./vframe-dom";

const moduleRefMap = vframeDom.moduleRefMap;
const moduleSubsMap = {};
const eventBus = {};
const storeData = new store();


//this.sub({
//  key : ["notificationcount"]  
//})

//this.pub({
//  key: "notificationcount",
//  value : 1000
//}) 


class vframe{
  pub(obj){
    storeData.set(obj.key,obj.value);
    if(eventBus[obj.key]){
      eventBus[obj.key].forEach((k,moduleIdToBeRendered)=>{
        const props = {};
        moduleSubsMap[moduleIdToBeRendered].forEach((k,moduleSubsKey)=>{
          props[moduleSubsKey] = storeData.get(moduleSubsKey);
        })
        moduleMap[v].call(moduleMap[v],render(props));
      });
    }
  }
  sub(obj){
    moduleSubsMap[obj.moduleId || this.moduleId[]] = obj.key;
    obj.key.forEach((k,v)=>{
      if(eventBus[v]){
        eventBus[v] = [];
      }
      eventBus[v].push(obj.moduleId || this.moduleId);
    })
  }
}



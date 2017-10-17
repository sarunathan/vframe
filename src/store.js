export default function Store(){
  this.store = {};
  return {
    get : function(key){
      return this.storeList[key] || null
    },
    set : function (key,store){
      this.storeList[key] = store;
    }
  }
}

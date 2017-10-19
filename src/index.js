/** @jsx dom */
import vframe from "./vframe.js";
import vframeDom from "./vframe-dom.js";
import {dom} from "./dom.js";


class Helloworld extends vframe{
  render(){
    return <Div>
      <h1> Hello world </h1>
    </Div>;
  }
}

class SomeOtherWorld extends vframe{
  render(){
    return <div>
      <h1> Some Other World </h1>
    </div>;
  }
}


vframeDom.render( Helloworld, document.getElementById("root1"));
vframeDom.render( SomeOtherWorld, document.getElementById("root2"));

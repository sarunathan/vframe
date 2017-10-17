/** @jsx dom */
import vframe from "./src/vframe";
import vframeDom from "./src/vframe-dom";


class Helloworld extends vframe{
  render(){
    return <div>
      <h1> Hello world </h1>
    </div>;
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

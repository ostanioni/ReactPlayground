import React, { Component } from 'react'
import Prism from 'prismjs'
import Table from 'components/Table'


export default class About extends Component {
  
  render() {
    const { match } = this.props
    console.log( match )
    return (
      <div>
        <div> 
        <h2>MAIN</h2>
           MAIN CONTENT
           <Table />
<pre><code className="language-css">{`p { color: red }`}</code></pre>
            <pre>
<code className="language-js ">
{`var Prism = require('prismjs');
var loadLanguages = require('prismjs/components/');
loadLanguages(['haml']);
// The code snippet you want to highlight, as a string
var code = "= ['hi', 'there', 'reader!'].join \" \"";
// Returns a highlighted HTML string
var html = Prism.highlight(code, Prism.languages.haml, 'haml');`}
</code>
            </pre>
            <pre>
<code className="language-clike line-numbers">
{`int main(){
  printf("Hello World");
}`}
</code>
            </pre>
        </div>
      </div>
    )
  }
}

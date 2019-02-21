import React from 'react'
import 'katex/dist/katex.min.css'
import { InlineMath, BlockMath } from 'react-katex'
const expr =`\\textcolor{blue}{\\LARGE{\\lfloor} \\bf x \\scriptstyle x}`
const expr2 = "\\rfloor"
const expr3 = "\\LARGE{\\lceil} \\bold{x}"
const expr4="\\scriptstyle \\large{H_N}"
const expr5="\\scriptstyle \\large{e = 2.71828 \\dots}"
const Table = () => { return (
<>
  <div>
    <InlineMath>\int_0^\infty x^2 dx</InlineMath>
  </div>
  <div>
    <BlockMath math={expr2} />
    <BlockMath math={expr} />
    <BlockMath math={expr3} />
    <BlockMath math={expr4} />
    <BlockMath math={expr5} />
    <BlockMath> </BlockMath>
    <BlockMath> </BlockMath>
    <BlockMath> </BlockMath>
    <BlockMath> </BlockMath>
  </div>
</>
)}
export default Table
/* 
</table>
<katex-element expression="\rfloor"/>
    <td id="el2">
      <katex-element expression="\LARGE{\lceil} \bold{x}"/>
      x
      <katex-element expression="\rceil"/>
    </td>
    <td id="el3">
      <katex-element expression="\lg \bf N"/>
    
    </td>
  </tr>
  <tr>
    <katex-element expression="\bf F_N"/>
  </tr>
  <tr>
    <katex-element expression="\scriptstyle \large{H_N}"/>
  </tr>
  <tr>
    <katex-element expression="\scriptstyle \large{e = 2.71828 \dots}"/>
  </tr>
  */
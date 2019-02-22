import React from 'react'
import styled from 'styled-components'
import 'katex/dist/katex.min.css'
import { InlineMath, BlockMath } from 'react-katex'
const expr  = `\\textcolor{blue}{\\LARGE{\\lfloor} \\bf x \\scriptstyle x}`
const expr2 = "\\rfloor"
const expr3 = "\\scriptstyle \\LARGE{\\lceil} \\bold{x}"
const expr4 = "\\scriptstyle \\large{H_N}"
const expr5 = "\\scriptstyle \\large{e = 2.71828 \\dots}"

const expr6 = "\\scriptstyle \\large{x}"

const expr_1_1 = "\\lceil x \\rceil"
const expr_2_1 = "\\lfloor x \\rfloor"


const TableStyled = styled.table.attrs({
  align: 'center',
  valign: 'middle'
})`
/* border: 1px solid blue; */
border-collapse: collapse;
margin: 1rem;
thead {
  font: italic small-caps 1rem Arial, Helvetica, sans-serif;
  th {
    border: 0;
    border-bottom: 1px solid blue;
    padding: 0.15rem 1rem;
    vertical-align: middle;
  }  
}
tbody {
  font: normal 1rem Arial, Helvetica, sans-serif;
  /* border: 1px solid blue; */
  td {
    /* border: 1px solid blue; */
    padding: 0.15rem 1rem;
    vertical-align: middle;
  }
}

`

const Table = () => { return (
<>
  <TableStyled>
    <thead>
      <tr>
        <th>Функция</th>
        <th>Название</th>
        <th>Типовое значение</th>
        <th>Приближение</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><BlockMath math={expr_2_1} /></td>
        <td>Функция округления снизу</td>
        <td></td>
        <td><BlockMath math={expr_1_1} /></td>
      </tr>

    </tbody>

  </TableStyled> 


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
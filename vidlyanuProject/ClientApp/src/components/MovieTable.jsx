import React from 'react'
export const MovieTable = (props) => {
    const { tableData } = props

     return (<table className="table table-bordered">
         <thead>
             <tr>
                 <th >Title</th>
                

                 <th >Genre</th>
                 <th>Stock</th>
                 <th>Rate</th>
                 <th>Actions</th>
             </tr>
         </thead>
         <tbody>


             {tableData}





         </tbody>
     </table>);




}
import React, { Component } from 'react'
import "./Table.css"

class Table extends Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
         students: [
            { id: 1, name: 'Ty Good', age: 21, email: 'ty@email.com' },
            { id: 2, name: 'An Wang', age: 19, email: 'an@email.com' },
            { id: 3, name: 'Tyler Dillon', age: 27, email: 't.dillon4884@gmail.com' },
            { id: 4, name: 'Mikey Wilson', age: 25, email: 'mikey@email.com' },
            { id: 5, name: 'Dishad Chopra', age: 25, email: 'dishad@email.com' },
            { id: 4, name: 'Kushal Jhunjhunwalla', age: 25, email: 'kushal@email.com' },
            { id: 4, name: 'Daniel Lee', age: 25, email: 'daniel@email.com' }
         ]
      }
   }

  render() {
     return (
      //applies css style for table
        <div>
           <h1 id='title'>React Dynamic Table</h1>
           <table id='students'>
              <tbody>
                 <tr>{this.renderTableHeader()}</tr>
                 {this.renderTableData()}
              </tbody>
           </table>
        </div>
     )
  }

  renderTableHeader() {
        let header = Object.keys(this.state.students[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }

  renderTableData() {
        return this.state.students.map((student, index) => {
           const { id, name, age, email } = student //destructuring
           return (
              <tr key={id}>
                 <td>{id}</td>
                 <td>{name}</td>
                 <td>{age}</td>
                 <td>{email}</td>
              </tr>
           )
        })
     }


}

export default Table //exporting a com


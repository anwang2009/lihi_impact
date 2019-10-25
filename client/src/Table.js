import React, { Component } from 'react'

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
        <div>
           <h1 id='title'>React Dynamic Table</h1>
           <table id='students'>
              <tbody>
                 {this.renderTableData()}
              </tbody>
           </table>
        </div>
     )
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


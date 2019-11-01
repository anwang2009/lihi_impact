import React, { Component } from 'react'
import "./Table.css"

class Table extends Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
         devs: [
            { id: 1, name: 'Ty Good', role: 'General Project Manager', email: 'tyandrewgood@icloud.com' },
            { id: 2, name: 'An Wang', role: 'Technical Project Manager', email: 'anwang2009@gmail.com' },
            { id: 3, name: 'Tyler Dillon', role: 'Developer', email: 't.dillon4884@gmail.com' },
            { id: 4, name: 'Mikey Wilson', role: 'Developer', email: 'wilsmic2@cs.washington.edu' },
            { id: 5, name: 'Dishad Chopra', role: 'Developer', email: 'dishad@cs.washington.edu' },
            { id: 6, name: 'Kushal Jhunjhunwalla', role: 'Developer', email: 'kushal.jhunjhunwalla@gmail.com' },
            { id: 7, name: 'Daniel Lee', role: 'Developer', email: 'daleewa@gmail.com' }
         ]
      }
   }

  render() {
     return (
        <div>
           <h1 id='title'>Developers</h1>
           <table id='devs'>
              <tbody>
                 <tr>{this.renderTableHeader()}</tr>
                 {this.renderTableData()}
              </tbody>
           </table>
        </div>
     )
  }

  renderTableHeader() {
        let header = Object.keys(this.state.devs[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }

  renderTableData() {
        return this.state.devs.map((student, index) => {
           const { id, name, role, email } = student //destructuring
           return (
              <tr key={id}>
                 <td>{id}</td>
                 <td>{name}</td>
                 <td>{role}</td>
                 <td>{email}</td>
              </tr>
           )
        })
     }
}

export default Table //exporting a com


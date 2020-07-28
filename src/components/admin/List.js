import React from 'react';
import '../../index.css'

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    let newArr = [];
    fetch('https://randomuser.me/api?results=25')
      .then((res) => res.json())
      .then((res) => res.results.map( contact => {
        newArr = [...newArr, contact];
        return newArr
      }))
      .then(() => {
        this.setState({
          contacts: newArr
        })
      })

      .catch(error => console.log('There was an error', error))
  }


    render() {

      console.log(this.state.contacts);
        return (
          <div className="body">
            <h2>My Peoples</h2>
            <div className="container">
            {this.state.contacts.map((contact, index) => {
               return (
              
                <div className="card" key={contact.email}>
                  <h3>{contact.name.first} {contact.name.last} </h3>
                  <div className="media">
                      <img src={contact.picture.large} alt="No img"/>
                  </div >
                    {/* < MoreDet contact={contact}/> */}
                </div>

              )
              })
            }
            </div>    
          </div>
  )}
}

export default List;
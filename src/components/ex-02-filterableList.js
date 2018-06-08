import React, { Component } from 'react';

const allUsersList = [
  { user: 'Tomas' , status: 'happy'},
  { user: 'Maria' , status: 'sad'},
  { user: 'Shana' , status: 'happy'},
  { user: 'Alejandra' , status: 'happy'},
  { user: 'Carolina' , status: 'happy'},
  { user: 'Romina' , status: 'sad'},
  { user: 'Daniela' , status: 'sad'},
]

class UserComponent extends Component{
  render(){
    return (
      <div className="user--active">
        <span>{this.props.username}</span>
        <span>{this.props.activeStatus}</span>
      </div>
    )
  }
}

class FilterableList extends Component {
  constructor(){
    super()

    this.state = {
      visibleUserType: 'all'
    }
  }

  _handleUsrTypeClick(clickedType){

    this.setState({
      visibleUserType : clickedType
    })
  }

  _renderUserComponents(visibleUserType){

    let filteredUserList = allUsersList.filter(function(usrObj){
      if(visibleUserType === 'all') return true

      if(usrObj.status === visibleUserType ){
        return true
      } else {
        return false
      }

    })


    let componentsArr = filteredUserList.map(function(usrObj){
      return <UserComponent username={usrObj.user} activeStatus={usrObj.status} />
    })

    return componentsArr
  }

  render() {
    let allTagClassVal = 'status--inactive'
    let happyTagClassVal = 'status--inactive'
    let sadTagClassVal = 'status--inactive'

    if(this.state.visibleUserType === 'all') allTagClassVal = 'status--active'
    if(this.state.visibleUserType === 'happy') happyTagClassVal = 'status--active'
    if(this.state.visibleUserType === 'sad') sadTagClassVal = 'status--active'

    return (
      <main>
        <h3>Filterable List</h3>
        <aside>
          <h4>
            Currently showing: <mark>{this.state.visibleUserType}</mark>
          </h4>
          <span className={allTagClassVal} onClick={ ()=>{ this._handleUsrTypeClick('all') } }>All</span>
          <span className={happyTagClassVal} onClick={ ()=>{ this._handleUsrTypeClick('happy') } }>Happy</span>
          <span className={sadTagClassVal} onClick={ ()=>{ this._handleUsrTypeClick('sad') } }>Sad</span>
        </aside>


        <section>
           { this._renderUserComponents(this.state.visibleUserType) }
        </section>

      </main>
    );
  }
}

export default FilterableList;

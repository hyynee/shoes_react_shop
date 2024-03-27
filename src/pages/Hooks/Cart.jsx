import React, { Component } from 'react'

export default class Cart extends Component {
    state = {
        like: 10
    }
    handleLike = () => {
        this.setState({
            like: this.state.like + 1
        })
    }
  render() {
    return (
      <div className='card'>
        <img src="https://i.pravatar.cc?u=1" alt="..." style={{width: "30%"}}/>
        <div className="card-body">
            <h3>user name</h3>
            <p>age: 19</p>
            <div>
                {this.state.like}
                <i onClick={() => {
                    this.handleLike();
                }} style={{cursor: 'pointer'}} className='fa fa-heart text-danger display-4'></i>
            </div>
        </div>
      </div>
    )
  }
}

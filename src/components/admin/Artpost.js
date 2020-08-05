import React, { Component } from 'react';
// import Ordered from './Ordered';
import '../../styles/request.css';
import { Link } from 'react-router-dom';

class Artpost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {
      name: "",
      image: "",
      article: ""
      }

    }
  };
 
  loadPost = (data) => {
    this.setState({post: {
        name: data.name,
        image: data.image,
        article: data.article
      }
    })
  }

  componentDidMount() {
    this._isMounted = true;
  }


  onNameChange = (event) => {
    this.setState({ name: event.target.value })
  };

  onImageChange = (event) => {
    this.setState({ image: event.target.value })
  };
  
  onArticleChange = (event) => {
    this.setState({ article: event.target.value })
  };


  onSubmitRequest = () => {
    fetch('http://localhost:4000/artpost', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: this.state.name,
        image: this.state.image,
        article: this.state.article
      })
    })
    .then(response => response.json())
    .then(post1 => {
      if (post1 && this._isMounted) {
        this.loadPost(post1)        
      }
    })

  };

  componentWillUnmount() {
    this._isMounted = false;
  }

  
  render() {
    return (
      <div className='addContent'>
        <div className="addDiv">
        <article className='br2 ba b--black-10 mv4 w-100 w-50-m w-25-1 shadow-5 mw7 center'>
        <main className="pa4 black-80 w-50">
          <div className="measure">
            <fieldset
              id="sign_up"
              className="ba b--transparent ph0 mh0"
            >
              <legend className="f1 fw6 ph0 mh0 title">
                Post Article
              </legend>
              <div className="mt3">
                <label
                  className="db fw6 lh-copy f6 label"
                  htmlFor="name"
                >
                  Title
                </label>
              <input
                className="pa2 input-reset ba  hover-bg-black hover-white w-70"
                type="text"
                name="name"
                id="name"
                onChange={this.onNameChange}
                required
              />
              </div>
              <div className="mt3">
                <label
                  className="db fw6 lh-copy f6 label"
                  htmlFor="image"
                >
                  Image URL
                </label>
              <input
                
                className="pa2 input-reset ba hover-bg-black hover-white w-70"
                type="text"
                name="image"
                id="image"
                onChange={this.onImageChange}
                required
              />
              </div>
              <div className="mt3">
                <label
                  className="db fw6 lh-copy f6 label"
                  htmlFor="article"
                >
                  Article
                </label>
              <input
                className="pa2 input-reset ba hover-bg-black hover-white w-50"
                type="text"
                name="article"
                id="article"
                onChange={this.onArticleChange}
                required
              />
              
              </div>
            </fieldset>
            <div className="">
              <button
                className="b ph3 pv2 input-reset ba b--black grow pointer f6 dib"
                type="submit"
                // value="Request"
                onClick={this.onSubmitRequest}
                >
                  <Link className='order' to="/admin">Submit</Link>
                </button>
            </div>
          </div>
        </main>
        </article>
        </div>
      </div> 

    );
  }
}

export default Artpost;
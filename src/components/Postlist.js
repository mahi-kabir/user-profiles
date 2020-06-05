import React, {Component} from 'react'
import axios from 'axios'

export class Postlist extends Component{
    constructor(props){
        super(props)
        this.state = {
            posts: []

        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            console.log(response)
            this.setState({posts : response.data})
        })
        .catch (error =>{
            console.log(error)
        })
    }
    render(){
        const {posts} = this.state
        return(
            <div>
                
               {
                    posts.length ?
                    posts.map(post => <div key = {post.username}>
                        {post.username}
                        <br/>
                        {post.email}
                        </div>):
                    null
              }
                
                

            </div>
        )
    }
}


export default Postlist;


import React, { Component} from 'react';
import '.App.css';

export default class Users extends Component{
    
    state= {
        
        Trainee:[ ["Bella", "Tau", "32","Jane Furse"],
             ["Kamogelo", "Radi", "10", "Pretoria"],
             ["Thego", "Tau", "12", "Stone Ridge"]]        
    }

    render()
    {
        return (
            <div className= "cover">
            <h2> Name| Surname| Age| Location </h2>
               
            <h1> {this.state.Trainee.map(elements=> {elements})
            }
             </h1>
             </div>
             
        );
    }

    Data = () =>{

    }

    getData = () => {
        const {name} = this.trainee;
        return name;
    }

     // verify age
     getAge = () =>
     {
         return this.state.age === 18 ? "you are old enough" : "you are not old enough to code";
     }

}


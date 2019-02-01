import React from 'react';
import './season.css';
import Loader from './Loader';

const seasonConfig = {
    winter : {
        text : "It's so cold out there",
        icon : 'snowflake'
    },
    summer : {
        text : "It's so hot out there",
        icon : 'sun',
    },
    rainy : {
        text : "it has been raining. So, get an umbrella.",
        icon : "cloud"

    }
}



const getSeason = (month)=>{
    if(month < 4) return 'winter'
    else if(month < 8) return 'summer'
    else return 'rainy' 
}

class Location extends React.Component{

    renderComponent(){
        const season = getSeason(this.props.month)
        const {text,icon} = seasonConfig[season]
            if(this.props.click && this.props.long > 90 && this.props.lat < 24){
                return(
                    <div className={`display ${season}`}>
                    <div className={season}>
                        <i className={`top-left massive ${icon} icon`} />
                        <h1>The season is {season} and {text}. </h1>
                       <i className={`bottom-right massive ${icon} icon`} /> 
                    </div>
                    </div>
                   
                )
            }
            else if(this.props.click && !this.props.lat && !this.props.long){
                return(
                    <div>
                        <Loader message = "Please allow location"
                         />
                    </div>
                )
            }
            else{
                return(
                    <div className="display">
                    <div className="outside"><h1>You are outside of Bangladesh. Good luck </h1></div>
                    </div>
                )
            }
        }
        
    

    render(){
        
        
        return(
            <div>
            {this.renderComponent()}
            </div>
        )

        }
    
}



export default Location
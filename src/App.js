import React from 'react'
import Location from './Location'


class App extends React.Component{
    state = {
        lat: null,
        click: true,
        err: '',
        long: null,
        
    }
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position =>this.setState({
                    lat : position.coords.latitude,
                    long : position.coords.longitude
                }),
            error =>this.setState({
                    err: "Location not found",
                    click: false,
                })
        )
    }

    render(){
        
       
        return(
            <Location 
            lat = {this.state.lat}
            click = {this.state.click}
            err = {this.state.err}
            long = {this.state.long}
            month = {new Date().getMonth()}

            />
            
        );
    }
}


export default App
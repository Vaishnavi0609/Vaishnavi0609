import React from 'react';
import "semantic-ui-css/semantic.min.css";
import "./seasonDisplay.css";

const seasonConfig = {
    summer:{
        text: "Its hot!" ,
        iconName:"sun"
    },
    winter:{
        text:"Its cold!" ,
        iconName:"snowflake"
    }
}
const getSeasons = (lat , month) => {
    if(month > 1 && month < 8 ){
       return lat > 0 ? "summer" : "winter"  
    }else{
       return  lat < 0 ? "summer" : "winter" 
    }
}
const seasonDisplay = (props) => {      
    const Seasons = getSeasons(props.lat , new Date().getMonth())
    const { text , iconName} = seasonConfig[Seasons]
    return (
         <div className={`season-display ${Seasons}`}>
            <i className = {`top-left massive ${iconName} icon`} />
            <h1> {text} </h1>        
            <i className = {`bottom-right massive ${iconName} icon`} />
         </div>
    )
}

export default seasonDisplay

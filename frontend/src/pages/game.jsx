import React from "react";
import Box from "../components/boxes.component";

class GamePage extends React.Component{

    render(){
        return(
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-1">1</div>
                        <div className="col-1">
                            <Box color={"green"}>1</Box>
                        </div>
                        <div className="col-1">3</div>
                        <div className="col-1">4</div>
                        <div className="col-1">5</div>
                        <div className="col-1">6</div>
                        <div className="col-1">7</div>
                        <div className="col-1">8</div>
                        <div className="col-1">9</div>
                        <div className="col-1">10</div>
                    </div>
                </div>
            </>
        );
    }
}

export default GamePage;
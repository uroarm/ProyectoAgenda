import React, { PureComponent } from 'react'

class Timer extends React.Component {

    constructor(){
        super();

        this.state = {
            isSession: true,
            timerSecond: 0,
            intervalId: 0
        };

        this.playTimer = this.playTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.refreshTimer = this.refreshTimer.bind(this);
        this.decreaseTimer = this.decreaseTimer.bind(this);
    }

    playTimer(){
        let intervalId = setInterval(this.decreaseTimer, 1000);
        this.props.onPlayStopTimer(true);   
        this.setState({
            intervalId: intervalId
        })
    }

    stopTimer(){
        clearInterval(this.state.intervalId);
        this.props.onPlayStopTimer(false);
    }

    refreshTimer(){
        this.stopTimer();
        this.props.refreshTimer();
        this.props.onPlayStopTimer(false);
        this.setState({
            timerSecond: 0,
            isSession: true
        });
    }

    decreaseTimer(){
        switch(this.state.timerSecond){
            case 0:
                if(this.props.timerMinute === 0){
                    if(this.state.isSession){
                        this.setState({
                            isSession: false
                        });
                        this.props.toggleInterval(this.state.isSession);
                    }else{
                        this.setState({
                            isSession: true
                        });
                        this.props.toggleInterval(this.state.isSession);
                    }
                }else{
                    this.props.updateTimerMinute()
                    this.setState({
                        timerSecond: 59
                    })
                } 
                break;
            default:
                this.setState(prevState => {
                    return{
                        timerSecond: prevState.timerSecond -1
                    }
                })
                break;
        }
    }

    render() {
        return (
            <section>
                <section className="timer-container">
                    <section>
                    <h4 className="titleLength">{this.state.isSession === true ? "Session" : "Break"}</h4>
                    <span className="timer">{this.props.timerMinute}</span>
                    <span className="timer">:</span>
                    <span className="timer">{this.props.timerSecond === 0 ? "00" : this.state.timerSecond < 10 ? "0" + this.state.timerSecond : this.state.timerSecond}</span>
                    </section>
                   
                    
                    <section className="timer-actions">
                    <button className="timer-buttons" onClick={this.playTimer}>Play</button>
                    <button className="timer-buttons" onClick={this.stopTimer}>Stop</button>
                    
                </section>
                </section>
                
            </section>
        );
    }
}


export default Timer;

import React, { Component } from 'react'

export default class Hero extends Component {
    componentDidMount(){
        setInterval(() => {
            var now = new Date().getTime();
            var lebaran = new Date("May 12, 2021 00:00:00").getTime();
            var distance = lebaran - now;

            var day = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hour = Math.floor((distance % (1000 * 60 * 60  * 24) ) / (1000 * 60 * 60));
            var minute = Math.floor((distance % (1000 * 60 * 60) ) / (1000 * 60));
            var second = Math.floor((distance % (1000 * 60) ) / 1000);

            var result = day + "d " + hour + "h " + minute + "m  " + second + "s ";

            document.getElementById('result').textContent = result

        }, 1000);
    }

    render() {
        return (
            <div className="jumbotron">
                <div className="container">
                    <div>
                        Lebaran 2021 : <span id="result"></span>
                    </div>
                </div>
            </div>
        )
    }
}

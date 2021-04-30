import React, { Component } from 'react'

export default class Hero extends Component {
    componentDidMount(){
       let interval = setInterval(() => {
            var now = new Date().getTime();
            var lebaran = new Date("May 12, 2021 00:00:00").getTime();
            var distance = lebaran - now;

            var day = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hour = Math.floor((distance % (1000 * 60 * 60  * 24) ) / (1000 * 60 * 60));
            var minute = Math.floor((distance % (1000 * 60 * 60) ) / (1000 * 60));
            var second = Math.floor((distance % (1000 * 60) ) / 1000);

            document.getElementById('day').textContent = day;
            document.getElementById('hour').textContent = hour;
            document.getElementById('minute').textContent = minute;
            document.getElementById('second').textContent = second;

            if(interval < 0){
                alert('Minal Aidzin Wal Faidzin')
            }

        }, 0);
    }

    render() {
        return (
            <div className="jumbotron">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-2 p-3 text-center bg-success text-white rounded">
                            <h1 id="day">0</h1>
                            <p>Hari</p>
                        </div>
                        <div className="col-2 p-3 text-center bg-success text-white rounded">
                            <h1 id="hour">0</h1>
                            <p>Jam</p>
                        </div>
                        <div className="col-2 p-3 text-center bg-success text-white rounded">
                            <h1 id="minute">0</h1>
                            <p>Menit</p>
                        </div>
                        <div className="col-2 p-3 text-center bg-success text-white rounded">
                            <h1 id="second">0</h1>
                            <p>Detik</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

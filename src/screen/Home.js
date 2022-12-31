import React from 'react';
import { Navigate, renderMatches, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import "./home.css"
export default function Home()
{

    const navigate= useNavigate();
    return (
        
        <div class="content bor">
        <div id="heading">
            <h2>Instructions</h2>
        </div>
        <div className="box">
            <h3>Duration: 90mins</h3><br></br>
            <h3>Questions: 3</h3>
        </div>
        <div>
            <ul>
                <h3>About the test </h3>
                <li>Language supported for the test is Python.</li>
                <li>Each submission will be tested based on the private test cases.</li>
                <li>The test will be auto-submitted when the time exceeds.</li>
                <li>The results will auto-appear once test is over.</li>
            </ul>
        </div>
        <div>
            <ul>
                <h3>Before the test </h3>
                <li>Make sure you have stable internet connection.</li>
                <li>Ensure the device is fully charged.</li>
            </ul>
        </div>
        <div>
            <ul>
                <h3>During the test</h3>
                <li>Keep up with the time.</li>
                <li>Avoid switching tabs on web.</li>
            </ul>
        </div>
        <button className="btn-bg" onClick={()=>{navigate("/quest")}}>Start test</button>
    </div>
  
     
    )
    
}


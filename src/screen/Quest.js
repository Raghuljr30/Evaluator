import React from 'react';
import { Navigate, renderMatches, useNavigate ,Link} from 'react-router-dom';
import "./quest.css"
export default function Quest()
{

    const navigate= useNavigate();
    return (
        
    <div className="quest-container">
        
        
        <div class="item quest-header">
            <h3 class="quest-header">Solved: 0/3</h3>
            <Link to="/leaderboard" className='quest-header'>Leaderboard</Link>
            {/* <button className='quest-header' onClick={()=>{navigate("/leaderboard")}}>Leaderboard</button> */}
            {/* <h3 class="quest-header" onclick="location.href = '/leaderboard.html';">Leaderboard</h3> */}
            <h3 class="quest-header">Profile</h3>
        </div>
       
        <div className="item sidebar">
            <div id="hover"><a href="#quest.html"><p class="num">Quests</p></a></div>
            <div id="hover"><a href="/"><p class="num">1</p></a></div>
            <div id="hover"><a href="/"><p class="num">2</p></a></div>
            <div id="hover"><a href="/"><p class="num">3</p></a></div>
        </div>
        <div className="item content-1">
            <div className="question-content">
                <h1>Questions</h1>
                <div className="inner-quest">
                    <h3 className="sub-quest">1. Count Array Pairs Divisible by K</h3>
                    <button type="button" class="btn btn-danger" onclick="location.href='/compiler.html';">Solve</button>
                </div>
                <div class="inner-quest">
                    <h3 class="sub-quest">2. Four Substrings equal</h3>
                    <button type="button" class="btn btn-danger">Solve</button>
                </div>
                <div class="inner-quest">
                    <h3 class="sub-quest">3. 8 queen problem</h3>
                    <button onClick={()=>{navigate("/leaderboard")}}type="button" class="btn btn-danger">Solve</button>
                </div>
            </div>
        </div>
    </div>
    
    )
    
}


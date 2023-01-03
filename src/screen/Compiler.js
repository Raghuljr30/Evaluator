import React from 'react';
import { Navigate, renderMatches, useNavigate } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import {render} from 'react-dom';
import "./compiler.css";
export default function Compiler()
{
    
  return (
    <div class="wrapper">
    <div class="section">
        <div class="topnav">
            <a href="#home" class="active">Python Evaluator</a>
            <div id="myLinks">
                <a href="#compiler.html">All</a>
                <a href="#">Question 1</a>
                <a href="#">Question 2</a>
                <a href="#">Question 3</a>
            </div>
            <a href="javascript:void(0);" class="icon" onclick="myFunction()">
   <button onClick={window['myFunction']}><i class="fa fa-bars"></i></button> 
  </a>
        </div>
    </div>


    <div class="row">
      <div class="column quest1">
        <div>
          <diV class="quest-box">
              <h5>Question 1</h5>
              
          </diV>
        </div>
        <diV class="quest-box">
          <div class="quest-content">
            <h5>Sample Input 1</h5>
            <div>
              <p>nums = [1,2,3,4,5]
                  k = 2</p>
            </div>
            <h5>Sample Output 1</h5>
            <div>
              <p>7 Pairs - (0, 1), (0, 3), (1, 2), (1, 3), (1, 4), (2, 3), and (3, 4)</p>
            </div>
          </div>
        </diV>
        <diV class="quest-box">
          <div class="quest-content">
            <h5>Sample Input 2</h5>
            <div>
              <p>nums = [1,2,3,4], k = 5
              </p>
            </div>
            <h5>Sample Output 2</h5>
            <div>
              <p>0 There does not exist any pair of indices whose corresponding product is divisible by 5.</p>
            </div>
          </div>
        </diV>
        <diV class="quest-box">
            <h5>Constraints:</h5>
            <ul>
              <li>1  nums.length  105</li>
              <li>1  nums[i], k 105</li>
            </ul>
        </diV>
      </div>
      <div class="column" >
        <center id="icon-time">
          <i class="fas fa-tachometer-alt" id="icon-space"></i>
          <h id="head">5:00</h>
        </center>
        <div class="container" >
          <div class="wrap">
            <textarea spellcheck="false" placeholder="Type something here..."  required></textarea>
          </div>
          
          </div>
          <div class="col">
            <div id="button">
            <button class="btn btn-success">Run Code</button>
            <br />
            <button class="btn btn-success">Submit</button>
            <br />
            <pre id="ans"></pre>
            </div>
          </div>
        </div>
            
        </div>
      </div>
    
    
    
    )
    
}

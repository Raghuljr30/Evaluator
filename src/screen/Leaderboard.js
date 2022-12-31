import React, { Fragment } from 'react';
import { Navigate, renderMatches, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {render} from 'react-dom';
import "./leaderboard.css";

export default function Leaderboard()
{

    const navigate= useNavigate();

    const submitLogin=async(e)=>{
      e.preventDefault();
      
          navigate("/");
          
    }
   
  return (

      <Fragment>
        <ul>
    <li><a href="profile.html">Profile</a></li>
    <li><a href="leaderboard.html">Leaderboard</a></li>
  </ul>
  <div className="container">
  <div className="myblock">
  <table>
    <thead>
      <tr>
        <th>Rank</th>
        <th colspan="2">Name</th>
        <th>Finish Time</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>
          <div>
          {/* <img src="https://t4.ftcdn.net/jpg/00/65/77/27/240_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg" style="width:40px;border-radius: 35px;" /> */}
          <p>Lani</p>
          </div>
        </td>
        <td>0:16:23</td>
      </tr>
      <tr>
        <td>2</td>
        <td>
        <div>
          {/* <img src="https://t4.ftcdn.net/jpg/00/65/77/27/240_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg" style="width:40px;border-radius: 35px;"/> */}
          <p>Israel</p>
        </div>
        </td>
        <td>0:20:30</td>
      </tr>
      <tr>
        <td>3</td>
        <td>
          <div>
            {/* <img src="https://t4.ftcdn.net/jpg/00/65/77/27/240_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg" style="width:40px;border-radius: 35px;" /> */}
            <p>Eveleen</p>
          </div>
          </td>
        <td>0:29:41</td>
        
        
      </tr>
      <tr>
        <td>4</td>
        <td><div>
          {/* <img src="https://t4.ftcdn.net/jpg/00/65/77/27/240_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg" style="width:40px;border-radius: 35px;"/> */}
          <p>Conn</p>
        </div>
        </td>
        <td>0:30:45</td>
      </tr>
      </tbody>
      </table>
    </div>
    </div>
    </Fragment>
    )
    
}



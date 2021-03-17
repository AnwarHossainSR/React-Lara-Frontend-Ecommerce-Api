import React,{useState,useEffect} from 'react';
import { useHistory } from 'react-router-dom'
import Header from './Header';

function Login() {

    useEffect(()=>{
        if (localStorage.getItem('user-info')) {
            histry.push('/add')
        }
    },[]);
    const histry = useHistory();
    
    return (
        <>
            <Header />,
            <div className="col-md-4 offset-md-4">
                <h1>Sign In</h1><br/>
                {/* <br/>
                <label className="float-left">Email</label>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" />
                <br/>
                <label className="float-left">Password</label>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" />

                <br/>
                <button type="submit" onClick={signUp} className="btn btn-info btn-block">Sign Up</button> */}
            </div>
        </>
    )
}

export default Login;
import React,{useState,useEffect} from 'react';
import { useHistory } from 'react-router-dom'
import Header from './Header';

function Login() {

    useEffect(()=>{
        if (localStorage.getItem('user-info')) {
            histry.push('/add')
        }
    },[]);
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const histry = useHistory();

    async function validate() { 
        let item = {email,password}
        let result = await fetch('http://127.0.0.1:8000/api/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            body:JSON.stringify(item)
        });
        result = await result.json();
        localStorage.setItem('user-info',JSON.stringify(result))
        histry.push('/add')
     }
    
    return (
        <>
            <Header />,
            <div className="col-md-4 offset-md-4">
                <h1>Sign In</h1><br/>
                <br/>
                <label className="float-left">Email</label>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" />
                <br/>
                <label className="float-left">Password</label>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" />

                <br/>
                <button type="submit" onClick={validate} className="btn btn-info btn-block">Sign In</button>
            </div>
        </>
    )
}

export default Login;
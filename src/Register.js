import React,{useState,useEffect} from 'react';
import { useHistory } from 'react-router-dom'
import Header from './Header';


function Register() {

    useEffect(()=>{
        if (localStorage.getItem('user-info')) {
            histry.push('/add')
        }
    },[]);

    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const histry = useHistory();

    async function signUp () { 
        let item = {name,email,password}
        let result = await fetch('http://127.0.0.1:8000/api/register',{
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
                <h1>User Signup</h1><br/>
                <label className="float-left">Full Name</label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" />
            
                <br/>
                <label className="float-left">Password</label>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" />

                <br/>
                <label className="float-left">Email</label>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" />

                <br/>
                <button type="submit" onClick={signUp} className="btn btn-info btn-block">Sign Up</button>
            </div>
        </>
    )
}

export default Register;
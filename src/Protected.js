import React,{useEffect} from 'react';
import { useHistory } from 'react-router-dom'

function Protected(props) {
    let Cmp = props.Cmp;
    const histry = useHistory();
    useEffect(()=>{
        if (!localStorage.getItem('user-info')) {
            histry.push('/login')
        }
    },[]);
    
    return (
        <div>
            <Cmp />
        </div>
    )
}

export default Protected;
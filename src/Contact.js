import React from 'react';
import {useState} from "react";

const Contact = () =>{
    const [data,setData] = useState({
        fullname : "",
        mobile: "",
        email: "",
        msg : "",
    });

    const inputEventform =(event)=>{
        const {name,value} = event.target;

        setData((preVal)=>{
            return{
                ...preVal,
                [name]:value,
            };
        });
    };

    const formSubmit =(e)=>{
        e.preventDefault();
        alert(`My name is ${data.fullname}. My mobile number is ${data.mobile}. My email id is ${data.email}. Here is I want to say ${data.msg}`)
    };

    return(
        <>
        <div className="colorBody2">
        <div className="my-5">
            <h1 className="text-center"> Contact US </h1>
        </div>
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={formSubmit}>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Name</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} 
                        onChange={inputEventform}
                         placeholder="Enter your name" />
                        </div>
                        <div class="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Mobile No:</label>
                        <input type="number" className="form-control" id="exampleFormControlInput1" name="mobile" onChange={inputEventform} Value={data.mobile} placeholder="Enter your mobile number" />
                        </div>
                        <div class="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Email</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" name="email" onChange={inputEventform} Value={data.email} placeholder="name@example.com" />
                        </div>
                        <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Message:</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" name="msg" onChange={inputEventform} value={data.msg} rows="3"></textarea>
                        </div>
                        <div className="col-12 mb-5">
                            <button className="btn btn-outline-primary text-bold" type="submit" onClick={formSubmit}>Submit form</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Contact;
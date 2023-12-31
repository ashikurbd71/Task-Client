import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Footer = () => {

    const handlefrom = e => {

        e.preventDefault()
        const text = e.target.text.value
        if(text === ''){
            return
        }else{

            return Swal.fire({
                title: "Thanks For Subscribe",
                text: "Please Waiting For Our Feedback",
                icon: "success"
              });
        }
    }

    return (
        <div>
            <footer className="footer p-10 bg-[#092635] text-[#FFF] ">
  <nav>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <Link to={'/'}><a className="link link-hover">Home</a></Link>
    <Link to={'/about'}><a className="link link-hover">About</a></Link>
    <Link to={'/contact'}><a className="link link-hover">Contact</a></Link>
   
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav> 
  <form onSubmit={handlefrom}>
    <header className="footer-title">Newsletter</header> 
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text text-white">Enter your email address</span>
      </label> 
      <div className="join">
        <input type="text" name='text' placeholder="username@site.com" className="input input-bordered text-black join-item" /> 
        <button className="btn btn-primary bg-red-500 border-none join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>
        </div>
    );
};

export default Footer;
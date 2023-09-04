import React,{useState} from 'react'
import './Style.scss'
import Logo from '../../../../assets/icons/logo.png'
import { SuccessMessage } from '../../../../Helper/Message' 
import {useNavigate} from 'react-router-dom'

const Verification = () => {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        code: "",
      });
      const handleSubmit = (e) => {
        e.preventDefault();
          SuccessMessage(`code verified`)
          navigate('/reset-password',{replace:true})
      };
      const handlePhone = (e) => {
        const codeValue = e.target.value;
        setCredentials({
          ...credentials,
          code: codeValue,
        });
      };
  return (
    <div className="mainContainer">
      <div className="code">
        <div className="form">
          <div className="logoDiv">
            <img src={Logo} alt="logo" />
          </div>
          <div className="inputFields">
            <h2>Verification Code</h2>
            <form onSubmit={handleSubmit}>
              <div className="inputDiv">
                  <label htmlFor="Vcode">Verification Code</label>
                <input
                  type="text"
                  id="Vcode"
                  placeholder="Enter your verification code"
                  onChange={(e) => handlePhone(e)}
                />
                          </div>
                <p>An four digit code has been sent to +92 333 7878769</p>
              <input type="submit" value="Continue" className="submit" />
            </form>
          </div>
        </div>
        <div className="imgDiv">
          <div className="textDiv">
            <h2>ARABELLA MILLS</h2>
            <p>
              Olive oil is a liquid fat obtained by pressing whole olives, the
              fruit of Olea europaea, a traditional tree crop of the
              Mediterranean Basin, and extracting the oil.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Verification
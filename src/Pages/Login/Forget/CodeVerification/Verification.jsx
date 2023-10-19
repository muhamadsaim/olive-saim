import React,{useState} from 'react'
import './Style.scss'
import Logo from '../../../../assets/icons/logo.png'
import { SuccessMessage,ErrorMessage } from '../../../../Helper/Message' 
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import apiService from '../../../../Services/apiService'
import { clearPhoneNumber } from '../../../../Redux/slice/authSlice'

const Verification = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({
    code: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const phoneNumber = useSelector((state) => state.auth.phoneNumber)
  const validateVerificationCode = (code) => {
    return /^\d{4}$/.test(code);
  };
  const handlePhone = (e) => {
    const codeValue = e.target.value;
    setCredentials({
      ...credentials,
      code: codeValue,
    });
    if (validateVerificationCode(codeValue)) {
      setErrorMessage('')
    } else {
      setErrorMessage('Enter Valid Code')
    }
    
  };
  const gotoResetPassword = () => {
    navigate('/reset-password', { replace: true });
    
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const code=Number(credentials.code)

    if (!phoneNumber || !code) {
      ErrorMessage('Phone number and verification code are required.');
      return;
    }

    try {
      const response = await apiService('POST', '/auth/verify-code', {}, { phone:phoneNumber, resetCode:code });

      if (response.success) {
        SuccessMessage(response.message);
        gotoResetPassword();
        dispatch(clearPhoneNumber())
        setCredentials({
code:''
        })
      } else {
        ErrorMessage(response.message)
      }
    } catch (error) {
      ErrorMessage(`Request Error ${error}`)
    }
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
                <div className='errorAndLabel'>
                <label htmlFor="Vcode">Verification Code</label>
                {errorMessage && <p className="errorMessage">{errorMessage}</p>}
                </div>
                <input
                  type="text"
                  id="Vcode"
                  value={credentials.code}
                  placeholder="Enter your verification code"
                  onChange={(e) => handlePhone(e)}
                />
                          </div>
              <p>An four digit code has been sent to {phoneNumber}</p>
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
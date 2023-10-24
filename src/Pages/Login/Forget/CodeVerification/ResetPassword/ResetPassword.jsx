import React,{useState} from 'react'
import './Style.scss'
import Logo from '../../../../../assets/icons/logo.png'
import Eye from '../../../../../assets/icons/eye.png'
import { useNavigate} from 'react-router-dom'
import { ErrorMessage, SuccessMessage } from '../../../../../Helper/Message'
import apiService from '../../../../../Services/apiService'

const ResetPassword = () => {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        phone: '',
        password:''
    })
    const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(true);
    const [showPass, setShowPass] = useState(false)
    const [strength, setStrength] = useState('');

 

    const validatePhoneNumber = (inputPhoneNumber) => {
        const phonePattern = /^[0-9]{7,15}$/; 
    
        return phonePattern.test(inputPhoneNumber);
      };
  
      const checkPasswordStrength = (inputPassword) => {
          const lengthScore = inputPassword.length >= 8 ? 1 : 0;
          const uppercaseScore = /[A-Z]/.test(inputPassword) ? 1 : 0;
          const lowercaseScore = /[a-z]/.test(inputPassword) ? 1 : 0;
          const numberScore = /[0-9]/.test(inputPassword) ? 1 : 0;
          const specialCharScore = /[^A-Za-z0-9]/.test(inputPassword) ? 1 : 0;
      
          const totalScore = lengthScore + uppercaseScore + lowercaseScore + numberScore + specialCharScore;
      
          if (totalScore <= 2) {
            return 'poor';
          } else if (totalScore <= 4) {
            return 'good';
          } else {
            return 'strong';
          }
      };
      const getColor = (strengthLevel) => {
          switch (strengthLevel) {
            case 'poor':
              return 'red';
            case 'good':
              return 'orange';
            case 'strong':
              return 'green';
            default:
              return 'rgba(144, 166, 123, 1)';
          }
    };
    
    const handlePhone = (e) => {
        const phoneValue = e.target.value;
        setCredentials({
            ...credentials,
            phone:phoneValue
        })
        setIsPhoneNumberValid(validatePhoneNumber(phoneValue))
       
    }
    const handlePassword = (e) => {
        const passValue = e.target.value;
        setCredentials({
            ...credentials,
            password:passValue
        })
        setStrength(checkPasswordStrength(passValue))
    }
    const gotoCong = () => {
        navigate('/congratulations',{replace:true})
        
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isPhoneNumberValid && (strength === 'good' || strength === 'strong')) {
            try {
                const newPassword = credentials.password
                const phone = credentials.phone
                const response = await apiService('POST', '/auth/update-password', {}, { phone: phone, newPassword: newPassword })
                if (response.success) {
                    SuccessMessage(response.message);
                    gotoCong();
                    setCredentials({
                        phone: '',
                        password:''
                    })

                } else {
                    ErrorMessage(response.message)
                }
            } catch (error) {
                ErrorMessage(`Api Error ${error}`)
            }
        }
    }

  return (
    <div className='mainContainer'>
    <div className='reset'>
        <div className='form'>
            <div className='logoDiv'>
                <img src={Logo} alt="logo" />
            </div>
            <div className='inputFields'>
                <h2>Reset Password</h2>
                <form onSubmit={handleSubmit}>
                    <div className='inputDiv'>
                        <div className='labelAnderror'>
                        <label htmlFor="phone">Phone</label>
                        {
                            !isPhoneNumberValid&&<p style={{color:'red',fontSize:'12px',fontWeight:'normal'}}>please enter valid phone</p>
                        }
                        </div>
                    <input type="text" id='phone' value={credentials.phone} placeholder='Enter your Phone Number' onChange={(e)=>handlePhone(e)} style={{border:isPhoneNumberValid? '1px solid rgba(144, 166, 123, 1)':'1px solid red'}}/>
                    </div>
                    <div className='inputDiv'>
                        <div className='labelAnderror'><label htmlFor="password">New Password</label>
                        <p style={{color:getColor(strength),fontSize:'12px',fontWeight:'normal'}}>{strength}</p></div>
                        <div className='passwordDiv' style={{border:`1px solid ${getColor(strength)}`}}>
                            <input type={showPass?'text':'password'} value={credentials.password} id='password' placeholder='Enter your new password' onChange={(e)=>handlePassword(e)} />
                            <img src={Eye} alt="passwordShow" onClick={()=>setShowPass(!showPass)}/>
                        </div>
                    </div>
                    <input type="submit" value='Confirm' className='submit'/>
                </form>

            </div> 
        </div>
        <div className='imgDiv'>
            <div className='textDiv'>
                
            <h2>ARABELLA MILLS</h2>
            <p>Olive oil is a liquid fat obtained by pressing whole olives, the fruit of Olea europaea, a traditional tree crop of the Mediterranean Basin, and extracting the oil.</p>
            </div>
        </div>
    </div>
        </div>
  )
}

export default ResetPassword
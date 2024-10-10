import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import PasswordIcon from '../../components/passwordIcon';
const Otp = () => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState("");
  const [step, setStep] = useState(1)
  const [message, setMessage]= useState("")
  const [email, setEmail] =useState("")
  const [showPass, setShowPass]= useState(false)
  const handleSendOtp =(e)=>{
    e.preventDefault();
    setStep(2)
  }
  const handleVerifyOtp = (e) => {
    e.preventDefault();
    setStep(3)
  }
  const navigate = useNavigate();
  return (
    <div className='otp-form'>
      {step ===1 && (
        <div>
          <form action="" className='email-form' onSubmit={handleSendOtp}>
            <h1 className='otp-text'>FORGOT YOUR PASSWORD</h1>
            <p className='request-email-text'>Please Enter the email you use to sign into the app</p>
            <input type="email" name="email" id="email" className='email-input-otp' placeholder='Enter Email' value={email}/>
            <button type="submit" className='otp-btn'>Send OTP</button>
          </form>
        </div>
      )}

      {step === 2 && (
        <div>
          <form action="" className='email-form' onSubmit={handleVerifyOtp}>
            <h1 className='otp-text'>ENTER OTP</h1>
            <p className='request-email-text'>Please Enter the OTP sent to your email</p>
            <input type="number" name="otp" id="otp" className='email-input-otp' placeholder='Enter OTP' value={otp} onChange={(e) => setOtp(e.target.value)}/>
            <button type="submit" className='otp-btn' >Submit</button>
          </form>
        </div>
      )}
      {step === 3 &&(
        <div>
          <h4 className='otp-verify'>OTP Verified Successfully!</h4>
          <form action="" className='email-form'>
            <h1 className='otp-text'>RESET YOUR PASSWORD</h1>
            <p className='request-email-text'>Enter New Password</p>
            <PasswordIcon iconPlaceholder='Enter Password' iconClassName='otp-password-icon '/>
            <p className='request-email-text'>Confirm New Password</p>
            <PasswordIcon iconPlaceholder='Confirm New Password' iconClassName='confirm-password-icon'/>
            <button type="submit" className='otp-btn'onClick={() => navigate("/users/sign_in")} >Reset Password</button>
          </form>
        </div>
      )}
    </div>
  )
}

export default Otp

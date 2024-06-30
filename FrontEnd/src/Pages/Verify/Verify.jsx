import {React,useContext,useEffect} from 'react'
import {StoreContext} from '../../context/StoreContext'
import "./Verify.css"
import axios from "axios"
import {useSearchParams, useNavigate} from 'react-router-dom'


const Verify = () => {

    const [searchParams,setSearchParams] = useSearchParams();
    const success = searchParams.get("success")
    const orderId = searchParams.get("orderId")
    console.log(success + orderId)
    const {url} = useContext(StoreContext)
    const navigate= useNavigate();
    
    const verifyPayment = async ()=>{
        try {
            console.log("Verifying payment with",{success,orderId});
            const response = await axios.post(url+"/api/order/verify",{success,orderId})
            console.log("API response:",response.data)
            console.log(response)
            if(response.data.success){
                console.log('Payment successful, navigating to /myorders');
                navigate('/myorders')
            }else{
                console.log('Payment not successful, navigating to /');
                navigate('/')
            }
        } catch (error) {
            console.log(error)   
            navigate('/')
        }
    }
        useEffect(()=>{
            verifyPayment();
        },[]);

    // console.log(success,orderId)
  return (
  <div className="verify">
    <div className="spinner"></div>
  </div>
  )
}

export default Verify
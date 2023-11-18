import '../ContactForm/ContactForm.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import { useState ,useEffect} from 'react';




const  ContactForm = ()=> {


    const [data,setData]=useState({
        pname:'',
        pemail:'',
        message:''
    })
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);

    const validateValues = (inputValues) => {
        let errors = {};
        if (inputValues.pname.length < 5) {
          errors.pname = "Name is too short";
        }
        if (inputValues.pname.length > 20) {
            errors.pname = "Name is too long";
          }
        if (inputValues.pemail.length < 5) {
            errors.pemail = "email is too short";
        }
        if (!inputValues.message || inputValues.message < 18) {
          errors.message = "Minimum message is 18";
        }
        if (inputValues.message > 200) {
            errors.message = "Maxmum message is 200";
          }
        return errors;
      };



   const handelChange=(input)=>{
      
        setData({
             ...data,
             [input.target.name]:input.target.value
            })
     
   }

   const handelSubmit=async (e)=>{
        e.preventDefault();
        setErrors(validateValues(data));
        setSubmitting(true);

      
   }

   const finishSubmit = async() => {
    try{
        const apiData={
            name:data.pname,
            email:data.pemail,
            message:data.message
        }
        await axios.post('https://win23-assignment.azurewebsites.net/api/contactform' ,apiData)
         .then(res=>{
             console.log(res.status);
             console.log(res.data)
             alert(res.data)
             setData({
                 pname:'',
                 pemail:'',
                 message:''
             })
 
         })
         .catch(e=>{
             console.log("Error")
         })
     }
     catch(e){
         console.log(e.message)
     }
     
  };
  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitting) {
      finishSubmit();
    }
  }, [errors]);


    return(

        <div className='row d-flex justify-content-center s-1 mb-5'>
                <div className='col-9 colcolor mt-4 '>
                    <h1 className='leaveUs'> Leave us a massage</h1>
                    <h1 className='leaveUs1'> for any information</h1>
                    
                        <Form  className='mb-2  styling-1' onSubmit={handelSubmit}> 
                            <Form.Control type="text" placeholder="Firstname*" name="pname" className="mb-3 styling" onChange={handelChange} value={data.pname}/>
                            {errors.pname ? (
                            <p className="error">
                                {errors.pname}
                            </p>
                            ) : null}
                            <Form.Control type="email" placeholder="email*" name="pemail" className="mb-3 styling" onChange={handelChange} value={data.pemail} />
                            {errors.pemail ? (
                            <p className="error">
                                {errors.pemail}
                            </p>
                            ) : null}
                            <Form.Control as="textarea" rows={3} className="mb-3 styling" name="message" onChange={handelChange} value={data.message}/>
                            {errors.message ? (
                            <p className="error">
                                {errors.message}
                            </p>
                            ) : null}
                            <Button as="input" type="submit" value="Sent Massage" className='styling-2' />
                       </Form>
                </div>
            </div>

    )
} 

export default ContactForm;
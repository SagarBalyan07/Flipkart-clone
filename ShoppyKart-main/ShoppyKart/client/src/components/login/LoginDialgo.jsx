import { useState } from "react";
import { Dialog, TextField,Typography,Button,Box,styled } from "@mui/material"
import { Password } from "@mui/icons-material";


const Component=styled(Box)`
    height:70vh;
    width:90vh;
    display:flex;
    
`;

const Image=styled(Box)`
    background:#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
    
    height:90.5%;
    width:40%;
    padding:20px 15px;
    color:white;
`;

const Wrapper=styled(Box)`
    display:flex;
    flex-direction:column;
    padding-left:40px;
    align-items:center;
    justify-content:center;
   
    &>div,&>button,&>p{
        margin-top:10px;
        margin-left:10px;
        
    }
`;



const LoginButton=styled(Button)`
    text-transform:none;
    background:#FB641B;
    color:white;
    font-weight:600;
    height:48px;
    width:50%;
    :hover{
    background:orangered;
    }

`;

const ReqOTP=styled(Button)`
    text-transform:none;
    color:#2874f0;

`;

const TextP=styled(Typography)`
    font-size:12px;
    font:serif
`;
const NewTo=styled(Typography)`
    font-size:15px;
    font-weight:550;
    cursor:pointer;
`;


const accountIntialValues={
    login:{
        view:'login'
    },
    signup:{
        view:'signup'
    }
}

const signupIntialValues={
    firstname:' ',
    lastname:' ',
    username:' ',
    email:' ',
    Password:' ',
    phone:' '
}
const LoginDialog=({open,setopen})=>{
   
    const [account,toggleAccount]=useState(accountIntialValues.login);
    const [signup,setSignup]=useState(signupIntialValues)
    
    const handleclose=()=>{
        setopen(false);
        toggleAccount(accountIntialValues.login); 
    }
   const toggleSignup=()=>{
    toggleAccount(accountIntialValues.signup);
   }

   const onInputChange=(e)=>{
        // console.log(e.target.value);
        setSignup({ ...signup,[e.target.name]:e.target.value});
        console.log(signup);

   }
   const signupUser=()=>{
    
   }
    return(
        <Dialog open={open} onClose={handleclose}>
            <Component>
                <Image>
                    <Typography variant="h5">Login</Typography>
                    <Typography style={{marginTop:20}}>Get access to your Orders, Wishlist and Recommendations</Typography>
                </Image>
                {account.view==='login'?
                <Wrapper>
                    <TextField variant="standard" label="Enter Email/ Mobile Number "/>
                    <TextField variant="standard" label="Enter Password"/>
                    <TextP>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</TextP>
                    <LoginButton>Login</LoginButton>
                    <Typography>OR</Typography>
                    <ReqOTP>Request OTP</ReqOTP>
                    <NewTo onClick={()=>toggleAccount(false)}   >New to Flipkart? Create an account</NewTo>
                </Wrapper>
                :
                <Wrapper>
                    <TextField variant="standard" onChange={(e)=>onInputChange(e)} name='firstname' label="Enter First Name "/>
                    <TextField variant="standard" onChange={(e)=>onInputChange(e)} name='lastname' label="Enter Last Name "/>
                    <TextField variant="standard" onChange={(e)=>onInputChange(e)} name='username' label="Enter Username"/>
                    <TextField variant="standard" onChange={(e)=>onInputChange(e)} name='email' label="Enter Email"/>

                    <TextField variant="standard" onChange={(e)=>onInputChange(e)} name='Password' label="Enter Password"/>
                    <TextField variant="standard" onChange={(e)=>onInputChange(e)} name='phone'label="Enter Mobile Number "/>
                   
                    <LoginButton onClick={()=>signupUser()} >Continue</LoginButton>

                </Wrapper>
                 }

            </Component>
        </Dialog>

    )
}

export default LoginDialog;

import {Box,Button, IconButton, styled, Typography} from '@mui/material';
import {ShoppingCart} from '@mui/icons-material';

import LoginDialog from './login/LoginDialgo';
import { useState } from 'react';

const Wrapper=styled(Box)`
    display:flex;
    align-items:center;
    margin:0 3% 0 auto;
    &>button,&>p,&>div{
        margin-right:40px;
        font-size:14px;
    }
`;
const Cartcontainer=styled(Box)`
    display:flex;
`;

const Loginbtn=styled(Button)`
    margin-left:30px;
    width:100px;
    height:30px;
    background:white;
    color:blue;
    text-transform:none;
    font-weight:bold;
    :hover{
        color:white;
        background:#2874f0;
    }
`;
const CustomButtons=()=>{

    const [open,setopen]=useState(false);
    const openDialog=()=>{
        setopen(true);
    }
    return(
        <Wrapper>
            <Loginbtn variant='contained' onClick={()=>openDialog()} >Login</Loginbtn>
            <Typography style={{width:150}} >Become a Seller</Typography>
            <Typography>More</Typography>
            <Cartcontainer>
                <ShoppingCart/>
                <Typography >Cart</Typography>
            </Cartcontainer>
            <LoginDialog open={open} setopen={setopen} />
        </Wrapper>

    )
}

export default CustomButtons;
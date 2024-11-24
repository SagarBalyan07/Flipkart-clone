
import{AppBar,Toolbar,styled,Box,Typography, typographyClasses} from '@mui/material';
// components
import Search from './Search';
import { yellow } from '@mui/material/colors';
import CustomButtons from './CustomButtons';

const StyledHeader=styled(AppBar)`
background:#2874f0;
height:55px;
`;

const Component=styled(Box)`
margin-left:12%;
`;

const Subheading=styled(Typography)`
    font-size:9px;
    font-style:italic;
`;
const Plusimage=styled('img')({
    width:11,
    height:11,
    marginLeft:2
})
const Header=()=>{
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    return (
        <StyledHeader>
            <Toolbar style={{minHeight:'55px'}}>
                <Component>
                    <img src={logoURL} alt="logo" style={{width:75}} />
                    <Box style={{display:'flex'}}>
                        <Subheading >Explore &nbsp;
                            <Box component="span" style={{color:'yellow'}}>Plus</Box>
                        </Subheading>
                        <Plusimage src={subURL}/>
                    </Box>
                </Component>
                <Search/>

                <Box>
                    <CustomButtons/>
                </Box>
            </Toolbar>
        </StyledHeader>    
    )
}
export default Header;
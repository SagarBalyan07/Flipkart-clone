import { InputBase,styled,Box } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';


const SearchContainer=styled(Box)`
    background:#fff;
    width:35%;
    border-radius:5px;
    margin-left:30px;
    display:flex;
    
    align-items:center;
    
`;
const InputsearchBase=styled(InputBase)`
    padding-left:10px;
    width:100%;
    font-size:unset;
`;

const SearchIconsWrapper=styled(SearchIcon)`
    color:blue;
    padding :4px;
`;

const Search=()=>{
    return(
        <SearchContainer>
           <InputsearchBase placeholder="Search for products, Brands and More" />
            <Box>
                <SearchIconsWrapper/>
            </Box>
        </SearchContainer>
    )
}

export default Search;
import React from 'react'
import styled from 'styled-components';
import {Avatar} from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from '@material-ui/icons/Search';
// import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../firebase";
import {Button} from "@material-ui/core";

function Header() {
    const [user] = useAuthState(auth);
    return (
        <HeaderContainer>

            {/* Header Left */}
            <HeaderLeft>
                <p></p>
                <HeaderAvatar alt={user?.displayName} src={user?.photoURL}
                />
                <AccessTimeIcon/>

            </HeaderLeft>

            {/* Header Search */}
            <HeaderSearch>
                <SearchIcon/>
                <input placeholder='Search'/>

            </HeaderSearch>
            {/* Header Right */}
            <HeaderRight>
                <Button onClick={() => auth.signOut()}>
                    logOut
                </Button>
                {/*<HelpOutlineIcon/>*/}
            </HeaderRight>

        </HeaderContainer>
    )
}

export default Header;


const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  background-color: var(--slack--color);
  color: white;
`;

const HeaderRight = styled.div`
  display: flex;
  flex: 0.3;
  align-items: flex-end;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
  }

  > button {
    margin-left: auto;
    margin-right: 20px;
    color: white;
    font-weight: bold;
  }

`;
const HeaderLeft = styled.div`
  display: flex;
  flex: 0.3;
  align-items: center;
  margin-left: 20px;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }

`;

const HeaderSearch = styled.div`
  display: flex;
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  text-align: center;
  color: gray;
  background-color: #421f44;
  padding: 0 50px;
  border: 1px solid gray;

  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: 0;
    color: white;
  }
`;
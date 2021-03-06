import React from "react";
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import MapIcon from '@mui/icons-material/Map';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { Link } from "react-router-dom"; 

const PageIndex={
    "":0,"map":1,"schedule":2
};

const Footer =()=>{
    const MainLink = window.location.pathname.split("/")[1];
    const [value, setValue] = React.useState(PageIndex[MainLink]);
    
    return (
        <Box sx={{
            position:'fixed',
            bottom:'env(safe-area-inset-bottom)',
            left:0,
            width: '100%',
            zIndex:1201
        }}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction label="ホーム" icon={<HomeIcon />} component={Link} to='/'/>
                <BottomNavigationAction label="校内マップ" icon={<MapIcon />} component={Link} to='/map'/>
                <BottomNavigationAction label="スケジュール" icon={<DateRangeIcon />} component={Link} to='/schedule'/>
            </BottomNavigation>
        </Box>
        
    );
}

export default Footer
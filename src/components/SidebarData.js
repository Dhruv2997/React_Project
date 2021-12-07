import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
// eslint-disable-next-line no-unused-vars
export  const SidebarData = [ 
    {
        title:"Home",
        icon: <HomeIcon/>,
        path:"/",
        cName: 'nav-text'
    },
    {
        title:"Login",
        icon: <GroupIcon/>,
        path:"/main",
        cName: 'nav-text'
    },
    {
        title:"About",
        icon: <ExitToAppIcon/>,
        path:"/quit",
        cName: 'nav-text'
    },

];

    

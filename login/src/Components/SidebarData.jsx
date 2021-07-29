import React from 'react'
import * as GiIcons from 'react-icons/gi';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Self Check In',
        path: '/SelfCheck',
        icon: <GiIcons.GiHazardSign />,
        cName: 'nav-text'
    },
    {
        title: 'Site',
        path: '/CountySite',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    }
]
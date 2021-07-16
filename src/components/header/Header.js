import React from 'react'
import { Avatar, IconButton } from '@material-ui/core';
import HeaderOptions from './HeaderOptions';
import './Header.css'
import { Icon } from '@iconify/react';
import bxlFacebook from '@iconify-icons/bx/bxl-facebook';
import bxlGooglePlus from '@iconify-icons/bx/bxl-google-plus';
import bxlInstagram from '@iconify-icons/bx/bxl-instagram';
import bxlLinkedin from '@iconify-icons/bx/bxl-linkedin';
import bxGitBranch from '@iconify-icons/bx/bx-git-branch';

import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import EmailIcon from '@material-ui/icons/Email';

function Header() {
    return (
        <div className="header">
            <div className="header__profile">
                <Avatar src="logo192.png" />
                <h1>
                    <a href="javascript();">Eric Wang</a>
                </h1>
                {/* facebook, gmail, instagram, linkedIn, gitHub */}
                <div className="header__icons">
                    <IconButton>
                        <Icon icon={bxlFacebook} />
                    </IconButton>
                    <IconButton>
                        <Icon icon={bxlGooglePlus} />
                    </IconButton>
                    <IconButton>
                        <Icon icon={bxlInstagram} />
                    </IconButton>
                    <IconButton>
                        <Icon icon={bxlLinkedin} />
                    </IconButton>
                    <IconButton>
                        <Icon icon={bxGitBranch} />
                    </IconButton>
                </div>
            </div>
            <div className="header__options">
                <a href="#profile">
                    <HeaderOptions Icon={HomeIcon} title="Home" />
                </a>
                <a href="#intro">
                    <HeaderOptions Icon={PersonIcon} title="About" />
                </a>
                <a href="#resume">
                    <HeaderOptions Icon={AssignmentIcon} title="Resume" />
                </a>
                <a href="#projects">
                    <HeaderOptions Icon={ChromeReaderModeIcon} title="Project" />
                </a>
                <a href="#contact">
                    <HeaderOptions Icon={EmailIcon} title="Contact" />
                </a>





            </div>
            <div className="header__footer">
                <div className="header__copyrights">
                    &copy; 2021 Eric Wang
                </div>
            </div>
        </div>
    )
}

export default Header

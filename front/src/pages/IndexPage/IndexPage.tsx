import React, { FC } from 'react'
import Lottie from "lottie-react";
import cherry from './cherry_booty.json';
import stl from './IndexPage.module.scss'


const IndexPage: FC = () => {
    return (
        <div className={stl.page}>
            <h1>Welcome!</h1>
            <Lottie animationData={cherry} />
        </div>
    )
};

export default IndexPage;
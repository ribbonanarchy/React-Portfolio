import React from 'react';

export default function Project(props) {


    return(
        <div>
            <a href={props.src}><img src={props.picPath}></img></a>
            <a href={props.src}>{props.projName}</a>
        </div>
    );
}
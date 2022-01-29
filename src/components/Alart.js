import React from 'react';

export default function Alart(props) {
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        props.alart && <div className={`alert alert-${props.alart.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alart.type)}</strong> : {props.alart.massage}
            
        </div>
    );
}

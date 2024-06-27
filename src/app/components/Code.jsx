import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'; 
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
const Code = ({code}) => {
    const customStyle = {
        lineHeight: '1.2',
        fontSize: '1rem',
        borderRadius: '20px',
        border: '2px solid #3d4650',
        backgroundColor: '#080b0e',
        padding: '25px 15px 15px 7px',
        width: '35rem',
    };

    
    const codeString = code


    return (
        <SyntaxHighlighter language="javascript" style={dark} customStyle={customStyle} showLineNumbers >
            {codeString}
        </SyntaxHighlighter>
    );
}

export default Code

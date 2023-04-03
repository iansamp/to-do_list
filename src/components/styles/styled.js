import styled from "styled-components"

export const Header = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    background-color: #161616;
    width: 500px;
    max-height: 500vh;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

    h1{
        font-family: 'Kanit', sans-serif;
        color: #fff;
        text-transform: uppercase;  
    }

    .descption{
        color: #fff;
        font-family: 'Roboto Condensed', sans-serif;
    }

    .content{
        display: flex;
    }

    .form{
        border-bottom: 1px solid #ffffff;
        padding: 10px 100px;
        display: flex;
        flex-direction: column;
    }

    label{
        color: #fff;
        padding: 3px;
        font-family: 'Kanit', sans-serif;
    }

    .formControl{
        display: flex;
        flex-direction: column;
        align-items: baseline;
        margin-bottom: 1em;
    }

    .formControl label{
        font-size: 1.1em;
    }

    .formControl input{
        border: 1px solid #222;
        border-radius: 2px;
        background-color: #2c3035;
        padding: 0.5em;
        color: #dfdfdf;
        font-family: 'Kanit', sans-serif;
    }

    .formControl .send{
        margin-top: 0.5em;
        cursor: pointer;
        width: 100%;
    }

    /* ----------TO-DO---------- */

    .box{
        border-bottom: 1px solid #ffffff;
        padding-bottom: 20px;
    }

    .box button{
        border: none;
        background: none;
        color: red;
        font-size: 30px;
    }

    .box h2{
        font-family: 'Roboto Condensed', sans-serif;
        color: ${(props) => (props.checked ? "rgb(0, 255, 0)" : "#fff")};
        text-decoration: ${(props) => (props.checked ? "line-through" : "")};
    }

    /* .box .actvive{
        color: rgb(0, 255, 0);
        text-decoration: line-through;
        font-style: italic;
        font-family: 'Roboto Condensed', sans-serif;
    } */

    .box label{
        color: #fff;
        font-family: 'Kanit', sans-serif;
    }

    .box input{
        cursor: pointer;
    }

    .box p{
        color: #fff;
        font-family: 'Kanit', sans-serif;
    }
    .box button{
        cursor: pointer;
    }
`

export const Box = styled.div`
    border-bottom: 1px solid #ffffff;
    padding-bottom: 20px;

    button{
        border: none;
        background: none;
        color: red;
        font-size: 30px;
    }

    h2{

    }

    /* .box .actvive{
        color: rgb(0, 255, 0);
        text-decoration: line-through;
        font-style: italic;
        font-family: 'Roboto Condensed', sans-serif;
    } */

    label{
        color: #fff;
        font-family: 'Kanit', sans-serif;
    }

    input{
        cursor: pointer;
    }

    p{
        color: #fff;
        font-family: 'Kanit', sans-serif;
    }
    button{
        cursor: pointer;
    }
`

export const H2 = styled.h2`
    font-family: 'Roboto Condensed', sans-serif;
    color: ${(props) => (props.checked ? "rgb(0, 255, 0)" : "#fff")};
    text-decoration: ${(props) => (props.checked ? "line-through" : "")};
`
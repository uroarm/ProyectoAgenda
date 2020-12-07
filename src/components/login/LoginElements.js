import styled from 'styled-components';

export const Container = styled.div`
    min-height: 700px;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to bottom, #8ED1FC , #ffd1c0);
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 10%;
`

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: right;
`


export const Images = styled.img`
    
    width: auto;
    height: 556px;
    display:flex;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
`

export const Form = styled.form`
    background: #fff;
    max-width: 350px;
    height: auto;
    width: 150%;
    z-index: 1;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    padding: 80px 32px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    //hacer media screen 
`

export const FormTitle = styled.h1`
    margin-bottom: 40px;
    color: #000;
    font-size: 40px;   
    text-align: center;
`

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #000;
    font-weight: bold;
    text-align: left;
    
`

export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border-radius: 2px;
`

export const FormButton = styled.button`
    background: #d06d46;
    padding: 16px 0;
    border: none;
    border-radius: 10px;
    color: #fff;
    font-size: 20px;
    width: 30%;
    align-self: center;
    cursor: pointer;
`
export const Text = styled.span`
    text-align: center;
    margin-top: 24px;
    color: #fff;
    font-size: 14px;
`

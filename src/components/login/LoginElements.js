import styled from 'styled-components';
import img from '../../images/background.jpg'
export const Container = styled.div`
    min-height: 700px;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    //background: linear-gradient(to bottom, #1f2675 , #ad0ed4);
    flex-direction: row;
    justify-content: center;
    background-image: url(${img}); 
    background-color: #cccccc;
    
`

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`


export const Images = styled.img`
    width: auto;
    height: 556px;
    display:flex;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    @media screen and (max-width: 922px){
        display: none;
    }
`

export const Form = styled.form`
   // border: solid;
   // border-color: #e9d7ff;
    background: rgba(255, 255, 255, 0.7);
    max-width: 350px;
    height: auto;
    width: 150%;
    z-index: 1;
    display: grid;
    margin-right: auto;
    margin-left: auto;
    flex-direction: column;
    padding: 40px 32px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    //hacer media screen 
    
`

export const FormTitle = styled.h1`
    font-family: 'sans-serif', 'Optima', sans-serif;
    margin-bottom: 20px;
    color: #313131;
    font-size: 40px;   
    text-align: center;
`

export const FormLabel = styled.h2`

    font-family: 'sans-serif', 'Optima', sans-serif;

    margin-bottom: 8px;
    font-size: 20px;
    color: #313131;
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
    border-radius: 20px;
    color: #fff;
    font-size: 20px;
    width: 30%;
    margin-top: 20px;
    margin-left: 120px;
    margin-bottom: 10px;
    align-self: center;
    cursor: pointer;
`
export const Text = styled.span`
    text-align: center;
    margin-top: 24px;
    color: #fff;
    font-size: 14px;
`

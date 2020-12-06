import styled from 'styled-components';

export const Container = styled.div`
    min-height: 700px;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #C4F5D1;
    display: flex;
    flex-direction: column;
    justify-content: left;
    
    
`

export const Title = styled.h1`
    display: flex;
    color: #000;
    height: 70px;
    width: auto;
    
`

export const SessionButton = styled.button`
    background: #fff;
    border-color: #000;
    border-radius: 10px;
    color: #000;
    font-size: 20px;
    width: 150px;
    height: 40px;
    text-align: center;
    cursor: pointer;
    position: absolute;
    right: 20px;
    top: 31px;
    
`

export const ActivitiesContainer = styled.div`
    height: 87%;
    width: auto;
    display: flex;
    flex-direction: row;
    background-color: #fff;
     
`

export const ActivitiesList = styled.div` 
    display: flex;
    height: auto; 
    width:  30%;
    background-color: gray;
    flex-direction: column;
`

export const ActivitySection = styled.div`
    display: flex;
    height: auto; 
    width:  50%;
    background-color: blue;
    flex-direction: column;
`

export const NotesSeccion = styled.div`
    display: flex;
    height: auto;
    width: 20%;
    background-color: violet;
    flex-direction: column;
`
//inside containers

export const Subtitles = styled.div `
    display: flex;
    font-size: 25px;
`


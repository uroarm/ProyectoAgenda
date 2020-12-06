import React from 'react'
import { 
    Title,
    Container,
    ActivitiesContainer,
    SessionButton,
    ActivitiesList,
    ActivitySection,
    NotesSeccion,
    Subtitles
 } from './CalendarElements'

const Calendar = () => {
    return (
        <div>
            <Container>
                <Title>Bienvenido de nuevo
                    <SessionButton>Cerrar sesion</SessionButton>
                </Title>
                <ActivitiesContainer>
                    <ActivitiesList>
                    <Subtitles>Actividades pendientes</Subtitles>
                    </ActivitiesList>
                    <ActivitySection>
                        
                    </ActivitySection>
                    <NotesSeccion>

                    </NotesSeccion>
                </ActivitiesContainer>
            </Container>
        </div>
    )
}

export default Calendar

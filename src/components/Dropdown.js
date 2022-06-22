import axios from 'axios'
import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import LanguageContext from '../context/LanguageContext'

const DropdownContainer = styled("div")`
    width: 10.5em;
    margin: 0 auto;
`

const DropdownHeader = styled("div")`
    margin-bottom: 0.8em;
    padding: 0.4em 2em 0.4em 1em;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
`

const DropdownList = styled("ul")`
    padding: 0;
    margin: 0;
    padding-left: 1em;
    background: #fff;
    border: 2px solid #e5e5e5;
    color: #3f3f3f;
`
export const Dropdown = () => {
    const context = useContext(LanguageContext)
    const options = [{name: "Madrid"}, {name: "London"}, {name: "Panama"}]
    const [selectedOption, setSelectedOption] = useState(null)
    const [currentWeather, setCurrentWeather] = useState(null)
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
    const optionClicked = value => () => {
        setSelectedOption(value)
        setIsOpen(false)
        axios
            .get(`http://api.openweathermap.org/data/2.5/forecast?lang=${context.language}&q=${value}&appid=f18b493a12be9767d46ed60128618df4`)
            .then(res => {
                setCurrentWeather(res.data.list[0].weather[0].description)
            })
    }
    return (
        <div className="flex flex-col justify-center">
            <DropdownContainer>
                <DropdownHeader onClick={toggle}>
                {selectedOption || options[0].name}
                </DropdownHeader>
                {isOpen && (
                <div>
                    <DropdownList>
                    {
                        options.map(option => (
                            <li onClick={optionClicked(option.name)} key={Math.random()}>
                               {option.name} 
                            </li>
                        ))
                    }
                    </DropdownList>
                </div>
                )}
            </DropdownContainer>
            <div>
                {currentWeather}
            </div>
        </div>
    )
}

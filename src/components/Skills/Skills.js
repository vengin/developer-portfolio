import React, { useContext, useState } from 'react';
import Marquee from "react-fast-marquee";

import './Skills.css'

import { ThemeContext } from '../../contexts/ThemeContext';
import { skillsData } from '../../data/skillsData'
import { skillsImage } from '../../utils/skillsImage'

function Skills() {

    const { theme } = useContext(ThemeContext);
    const [isHovering, setIsHovering] = useState(false);

    const skillBoxStyle = {
        backgroundColor: theme.secondary,
        boxShadow: `0px 0px 30px ${theme.primary30}`
    }

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    const rows = 3;
    const shift = Math.floor(skillsData.length / rows);

    return (
        <div
            className="skills"
            style={{ backgroundColor: theme.secondary }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="skillsHeader">
                <h2 style={{ color: theme.primary }}>Skills</h2>
            </div>
            <div className="skillsContainer">
                {[...Array(rows)].map((_, index) => {
                    const start = index * shift;
                    const shiftedSkills = [...skillsData.slice(start), ...skillsData.slice(0, start)];

                    return (
                        <div className="skill--scroll" key={index}>
                            <Marquee
                                gradient={false}
                                speed={80}
                                pauseOnHover={true}
                                pauseOnClick={true}
                                delay={0}
                                play={!isHovering}
                                direction="left"
                            >
                                {shiftedSkills.map((skill, id) => (
                                    <div className="skill--box" key={id} style={skillBoxStyle}>
                                        <img src={skillsImage(skill)} alt={skill} />
                                        <h3 style={{ color: theme.tertiary }}>
                                            {skill}
                                        </h3>
                                    </div>
                                ))}
                            </Marquee>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Skills

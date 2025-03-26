import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Fade from 'react-reveal/Fade'

import { ThemeContext } from '../../contexts/ThemeContext'

import expImgWhite from '../../assets/svg/experience/expImgWhite.svg'
import expImgBlack from '../../assets/svg/experience/expImgBlack.svg'

import './Experience.css'
import { useState } from 'react'

function ExperienceCard({
  id,
  company,
  jobtitle,
  startYear,
  endYear,
  additionalInfo,
  url,
}) {
  const { theme } = useContext(ThemeContext)
  const [showInfo, setShowInfo] = useState(false)

  const useStyles = makeStyles((t) => ({
    experienceCard: {
      backgroundColor: theme.primary30,
      position: 'relative',
      overflow: 'hidden',
      transition: 'all 0.3s ease',
      height: '140px',
      '&:hover': {
        backgroundColor: theme.primary50,
        height: '280px',
      },
    },
    additionalInfo: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      padding: '10px',
      backgroundColor: '#A0A080',
      color: '#fff',
      opacity: 0,
      pointerEvents: 'none',
      transition: 'all 0.3s ease',
      overflow: 'hidden',
      fontSize: '1.1rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '& > div': {  
        maxHeight: '100%',
        overflow: 'auto',
        paddingTop: '10px',
        paddingBottom: '10px',
      },
      ul: {
        listStyleType: 'disc',
        paddingLeft: '20px',
        margin: '0',
      },
      li: {
        marginBottom: '5px',
      },
      a: {
        color: theme.secondary,
        textDecoration: 'underline',
      },
    },
    showInfo: {
      opacity: 0.9,
      pointerEvents: 'auto',
      overflow: 'auto',
    }
  }))

  const classes = useStyles()

  return (
    <Fade bottom>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        key={id}
        className={`experience-card ${classes.experienceCard}`}
        onMouseEnter={() => setShowInfo(true)}
        onMouseLeave={() => setShowInfo(false)}
      >
        <div className="expcard-img" style={{ backgroundColor: theme.primary }}>
          <img src={theme.type === 'light' ? expImgBlack : expImgWhite} alt="" />
        </div>
        <div className="experience-details" style={{ opacity: showInfo ? 0 : 1, transition: 'opacity 0.3s ease' }}>
          <h6 style={{ color: theme.primary }}>
            {startYear} - {endYear}
          </h6>
          <h4 style={{ color: theme.tertiary }}>{jobtitle}</h4>
          <h5 style={{ color: theme.tertiary80 }}>{company}</h5>
        </div>
        <div
          className={`${classes.additionalInfo} ${showInfo ? classes.showInfo : ''}`}
        >
          <div dangerouslySetInnerHTML={{ __html: additionalInfo }} />
        </div>
      </a>
    </Fade>
  )
}

export default ExperienceCard

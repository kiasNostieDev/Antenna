import './Styles/Dev.css'
import React, { useRef, useState } from 'react'
import antenna from '../Data/antennna.jpg'
import { Typography, makeStyles } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import People from '@material-ui/icons/People'
import Star from '@material-ui/icons/Star'
import Phone from '@material-ui/icons/Phone'
import Mail from '@material-ui/icons/Mail'
import ConfirmationNumber from '@material-ui/icons/ConfirmationNumber'
import axios from 'axios'

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
    fontFamily: 'Geo',
    fontSize: '40pt',
    color: '#ffffff',
    marginLeft: '10px'
  },
  field: {
    width: '300px'
  },
  [theme.breakpoints.up(900)]: {
    width: '400px'
  }
}))

export default function Dev () {
  const classes = useStyles()
  const nameref = useRef()
  const passref = useRef()
  const [name, setName] = useState()
  const [pwd, setPwd] = useState()
  const [devMode, setDevMode] = useState('0')

  function DataTile () {
    const classes = useStyles()
    return (
      <div className='DataTile'>
        <div className='DevRoll textDev leftDev'>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          >
            <ConfirmationNumber />
          </IconButton>
          33
        </div>
        <div className='DevName textDev leftDev'>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          >
            <People />
          </IconButton>
          name
        </div>
        <div className='DevMobile textDev leftDev'>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          >
            <Phone />
          </IconButton>
          4940930934
        </div>
        <div className='DevMail textDev leftDev'>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          >
            <Mail />
          </IconButton>
          akindkjdljfj@gmak.pcm
        </div>
        <div className='DevPass textDev leftDev'>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          >
            <Star />
          </IconButton>
          kjfldskjldfsjklfds980341*&*
        </div>
      </div>
    )
  }

  function DataDev () {
    if (devMode === '0') {
      return <></>
    }
    return (
      <div className='DataDev'>
        <button>Get the Data</button>
      </div>
    )
  }

  function handleClick () {
    const dataDev = {
      email: name,
      password: pwd
    }
    console.log(dataDev)
    const devUrl = 'http://an73nna.heroku.com/dev/login'
    axios.post(devUrl, dataDev).then(res => {
      localStorage.setItem('DevWaveForm', res.headers['auth-token'])
      setDevMode('1')
      console.log('ola', res.data)
    })
  }

  return (
    <div className='Dev' style={{ backgroundImage: `url(${antenna}` }}>
      <Typography variant='h6' className={classes.title}>
        Antenna
      </Typography>
      <div className='inputDev'>
        <input
          type='text'
          ref={nameref}
          onChange={() => {
            setName(nameref.current.value)
          }}
        />
        <input
          type='password'
          ref={passref}
          onChange={() => {
            setPwd(passref.current.value)
          }}
        />
        <div className='devlog'>
          <button onClick={handleClick}>Get In</button>
        </div>
      </div>
      <DataDev />
    </div>
  )
}

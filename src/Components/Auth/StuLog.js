import React, { useState } from 'react'
import '../Styles/StuLog.css'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { currentLogin } from '../../Data/loginData'
import { names } from '../../data'

const data = {
  mobileNumber: '',
  password: ''
}

const useStyles = makeStyles(theme => ({
  field: {
    width: '300px',
    [theme.breakpoints.up(900)]: {
      width: '400px'
    }
  }
}))

export default function StuLog () {
  var history = useHistory()
  const [phone, setPhone] = useState('')
  const [pwd, setPwd] = useState('')
  const [alerText, setAlertText] = useState('Student Login')
  const [inidiColor, setIndiColor] = useState('#000')
  const classes = useStyles()

  function handleClick () {
    data.mobileNumber = phone
    data.password = pwd

    // const proxyurl = "https://cors-anywhere.herokuapp.com/"
    const urlsign = 'https://an73nna.herokuapp.com/students/login'
    axios.post(urlsign, data,{
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'
      }
    }).then(res => {
      console.log('heyThere')
      if (res.data.antenna) {
        setIndiColor('#ED6A5A')
        setAlertText('Wrong Credentials')
      } else {
        console.log(res.data)
        currentLogin.name = res.data.studentName
        currentLogin.mail = res.data.email
        currentLogin.phone = data.mobileNumber
        currentLogin.jwt = res.headers['auth-token']
        currentLogin.rollNo = String(names.indexOf(currentLogin.name) + 1)
        localStorage.setItem('AntennaWaveForm', JSON.stringify(currentLogin))
        history.push('/student')
      }
    })
  }

  return (
    <div className='StuLogAuth'>
      <div className='StuLogHeading' style={{ color: inidiColor }}>
        {alerText}
      </div>
      <div className='BoxAdmin'>
        <TextField
          id='phone'
          label='Phone'
          className={classes.field}
          variant='outlined'
          onChange={e => {
            setPhone(e.target.value)
          }}
        />
      </div>
      <div className='BoxAdmin'>
        <TextField
          id='pwd'
          label='Password'
          className={classes.field}
          variant='outlined'
          type='password'
          onChange={e => {
            setPwd(e.target.value)
          }}
        />
      </div>
      <div className='StuLogin'>
        <button className='btnlogin' onClick={handleClick}>
          COnnect_antenna
        </button>
      </div>
    </div>
  )
}

import React, { useState } from 'react'
import '../Styles/Admin.css'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'
import { currentAdmin } from '../../Data/loginData'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  field: {
    width: '300px'
  },
  [theme.breakpoints.up(900)]: {
    width: '400px'
  }
}))

const data = {
  email: '',
  password: ''
}

export default function Admin () {
  var history = useHistory()
  const classes = useStyles()
  const [mail, setMail] = useState()
  const [password, setPassword] = useState()
  const [alerText, setAlertText] = useState('AdminAuth')
  const [inidiColor, setIndiColor] = useState('#000')

  function handleClick () {
    data.email = mail
    data.password = password

    const proxyUrl = 'http://localhost:8080/'
    const urlsign = 'https://an73nna.heroku.com/admin/login'
    axios.post(urlsign, data).then(res=>{
      if (res.data.antenna) {
        setIndiColor('#ED6A5A')
        setAlertText('Wrong Credentials')
      }else{
        localStorage.setItem('AdminWaveForm', res.data)
        currentAdmin.jwt = res.data
        currentAdmin.mail = data.email
        history.push('/root')
      }
    })
  }

  return (
    <div className='AdminAuth'>
      <div className='AdminHeading' style={{color: inidiColor}}>{alerText}</div>
      <div className='BoxAdmin'>
        <TextField
          id='outlined-basic'
          label='Mail'
          className={classes.field}
          variant='outlined'
          onChange={e => setMail(e.target.value)}
        />
      </div>
      <div className='BoxAdmin'>
        <TextField
          id='outlined-basic'
          label='Password'
          className={classes.field}
          variant='outlined'
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <div className='LoginAdmin'>
        <button onClick={handleClick} className='btnlogin'>
          COnnect_antenna
        </button>
      </div>
    </div>
  )
}

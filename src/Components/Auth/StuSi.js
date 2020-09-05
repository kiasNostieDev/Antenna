import React, { useState } from 'react'
import '../Styles/StuSi.css'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import { names } from '../../data'
import axios from 'axios'

const data = {
  studentName: '',
  mobileNumber: '',
  email: '',
  password: '',
  rollNo: ''
}

const useStyles = makeStyles(theme => ({
  field: {
    width: '300px',
    [theme.breakpoints.up(900)]: {
      width: '400px'
    }
  },
  formControl: {
    margin: theme.spacing(1),
    width: '300px',
    [theme.breakpoints.up(900)]: {
      width: '400px'
    }
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}))

export default function StuSi () {
  const [name, setName] = useState('')
  const [mail, setMail] = useState('')
  const [phone, setPhone] = useState('')
  const [pwd, setPwd] = useState('')

  const classes = useStyles()

  function handleClick () {
    data.email = mail
    data.studentName = name
    data.mobileNumber = phone
    data.password = pwd
    data.rollNo = names.indexOf(name) + 1

    const proxyUrl = 'http://localhost:8080/'
    const urlsign = 'https://an73nna.heroku.com/students/signup'
    axios.post(urlsign, data).then(res => {
      console.log(res)
      alert('Now Login to your account')
    })
  }

  return (
    <div className='StuSignin'>
      <div className='StuSiHeading'>StudentSignIn</div>
      <div className='BoxAdmin'>
        <div>
          <FormControl variant='outlined' className={classes.formControl}>
            <InputLabel id='demo-simple-select-outlined-label'>Name</InputLabel>
            <Select
              labelId='demo-simple-select-outlined-label'
              id='demo-simple-select-outlined'
              onChange={e => {
                setName(e.target.value)
                names.indexOf(e.target.value, e.target.value)
              }}
              label='Name'
            >
              {names.map(item => {
                return <MenuItem value={item}>{item}</MenuItem>
              })}
            </Select>
          </FormControl>
        </div>
      </div>
      <div className='BoxAdmin'>
        <TextField
          id='outlined-basic'
          label='Email'
          className={classes.field}
          variant='outlined'
          onChange={e => {
            setMail(e.target.value)
          }}
        />
      </div>
      <div className='BoxAdmin'>
        <TextField
          id='outlined-basic'
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
          id='outlined-basic'
          label='Password'
          className={classes.field}
          variant='outlined'
          type='password'
          onChange={e => {
            setPwd(e.target.value)
          }}
        />
      </div>
      <div className='SignUpStu'>
        <button className='btnlogin' onClick={handleClick}>
          COnnect_antenna
        </button>
      </div>
    </div>
  )
}

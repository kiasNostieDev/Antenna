import React, { useRef, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import SettingsInputAntenna from '@material-ui/icons/SettingsInputAntenna'
import './Styles/StudentHub.css'
import { fb } from '../FIrebase/firebase'
import axios from 'axios'
import { currentLogin } from '../Data/loginData'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Geo',
    fontSize: '30pt'
  },
  nav: {
    backgroundColor: '#ED6A5A'
  },
  btn: {
    backgroundColor: '#ED6A5A'
  },
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20
  }
}))

export default function StudentHub (props) {
  const [file, setFile] = useState()
  const allInputs = { imgURL: '' }
  const [fileurl, setFileURL] = useState(allInputs)
  const data = {
    studentName: '',
    caseStudy: '',
    straightness: '',
    filelink: ''
  }

  console.log(currentLogin)

  // console.log(props.location.state)

  const classes = useStyles()
  function AppBarCustom () {
    return (
      <div className={classes.root}>
        <AppBar position='static' className={classes.nav}>
          <Toolbar>
            <IconButton
              edge='start'
              className={classes.menuButton}
              color='inherit'
              aria-label='menu'
            >
              <SettingsInputAntenna />
            </IconButton>
            <Typography variant='h6' className={classes.title}>
              Antenna
            </Typography>
            <Button color='inherit'>Logout</Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  }

  function CurrentCaseStudy () {
    return (
      <div className='CurrentCaseStudy'>
        <div className='StudyName'>
          Case Study to deal with normal problems in C
        </div>
      </div>
    )
  }

  function HelloStudent () {
    return <div className='HelloStudent'>Hello Akinthiya Srinath KI,</div>
  }

  function handleChange (event) {
    const imageFile = event.target.files[0]
    console.log(imageFile)
    setFile(imageFile)
    console.log(file)
  }

  function Tile () {
    return (
      <div className='nthCaseStudyTile'>
        <div className='CaseStudyTitle'>
          <div className='CaseStudyText'></div>
        </div>
        <div className='CaseStudyDownload'>
          <button className='SubmitButton'>DownloadFile</button>
        </div>
        <div className='CaseStudyUpload'>
          <div className='file-input-wrapper'>
            <button className='btn-file-input'>UploadFile</button>
            <input type='file' name='file' />
          </div>
        </div>
        <button className='SubmitButton' onClick={handleUpload}>
          UploadSolution
        </button>
      </div>
    )
  }

  function handleUpload () {
    const fbstorage = fb.storage().ref('/docs/solutions')
    const imageUpload = fbstorage.child(file.name)
    const proxyUrl = 'http://localhost:8080/'
    const urlsign = 'http://localhost:6969/students/login'

    imageUpload.put(file).then(
      snapshot => {
        imageUpload.getDownloadURL().then(url => {
          setFileURL(url)
          // data.filelink = fileurl
          // data.name = this.props.location.state.name
          console.log(data.name)
          axios.post(proxyUrl + urlsign, data).then(res => {
            console.log(res)
          })
        })
      },
      err => {
        console.log(err)
      }
    )
  }

  return (
    <div>
      <AppBarCustom />
      <HelloStudent />
      <div className='HeadingCase'>Current_Case_Studies</div>
      <Tile />
      <Tile />
      <Tile />
    </div>
  )
}

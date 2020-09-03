import React, { useRef, useState, useEffect } from 'react'
import './Styles/AdminHub.css'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import SettingsInputAntenna from '@material-ui/icons/SettingsInputAntenna'
import Delete from '@material-ui/icons/Delete'
import TextField from '@material-ui/core/TextField'
import { fb } from '../FIrebase/firebase'
import { names } from '../data'
import { currentAdmin } from '../Data/loginData'
import axios from 'axios'
import Admin from './Auth/Admin'
import { caseStudies } from '../Data/caseStudyData'

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
  field: {
    width: '30%',
    float: 'left',
    marginLeft: '40px'
  }
}))

export default function AdminHub () {
  const [file, setFile] = useState()
  const [caseArray, setCaseArray] = useState([])
  const el = useRef()
  const allInputs = { imgURL: '' }
  const fileRef = useRef()

  const [fileName, setFileName] = useState('')
  const [getFile, setGetFile] = useState('')
  const [caseName, setCaseName] = useState()
  var cases = caseArray

  const data = {
    caseStudetitle: '',
    fileLink: '',
  }
  const proxyUrl = 'http://localhost:8080/'
  const urlsign = 'http://localhost:6969/cases'

  const classes = useStyles()

  function handleChange (event) {
    setFileName(el.current.value)
    const imageFile = event.target.files[0]
    console.log(imageFile)
    setFile(imageFile)
    // console.log(fileRef.current.files[0].name)
  }

  function handleUpload () {
    const storage = fb.storage().ref('docs/admin')
    const imageUpload = storage.child(fileName)
    imageUpload.put(file).then(
      snapshot => {
        imageUpload.getDownloadURL().then(url => {
          data.fileLink = url
          console.log(data.fileLink)
          data.caseStudytitle = fileName

          const proxyUrl = 'http://localhost:8080/'
          const urlsign = 'http://localhost:6969/cases'
          axios.post(proxyUrl + urlsign, data).then(res => {
            console.log(res)
            alert('Uploaded the CaseStudy Meta!')
            axios.get(proxyUrl+urlsign).then(res=>{
              setCaseArray(res.data)
              console.log(caseStudies)
            })
          })
        })
      },
      err => {
        console.log(err)
      }
    )
  }

  function AppBarCustom () {
    const classes = useStyles()
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

  function handleNameClick (item) {
    setGetFile(item)
  }

  function StudentTileAdmin (props) {
    const item = props.name
    return (
      <div
        className='nthTile'
        onClick={() => {
          props.clickfunc(item)
        }}
      >
        {item}
      </div>
    )
  }

  function AdminCaseTile (props) {
    const link = props.link
    return (
      <div className='AdminCaseTile'>
        <div className='TileTitle'>{props.caseName}</div>
        <div className='TileIcon'>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          >
            <Delete />
          </IconButton>
        </div>
      </div>
    )
  }

  function MainAdminScreen () {
    return (
      <div className='MainAdminScreen'>
        <div className='AddScreen'>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <div className='HeadingMain'>Case_Studies</div>
          </div>
          <div className='AddCaseStudyTile'>
            <input placeholder='CaseStudyTitle' type='text' id='outlined-basic' className={classes.field} ref={el} />
            <div className='file-input-wrapper'>
              <button className='btn-file-input'>Upload File</button>
              <input
                type='file'
                name='file'
                ref={fileRef}
                onChange={handleChange}
              />
            </div>
            <button className='SubmitCaseBtn' onClick={handleUpload}>
              Upload CaseStudy
            </button>
          </div>
          <div className='ShowBefore'>
            {
            cases.map(item=>{
              return <AdminCaseTile id={item.caseStudetitle} caseName={item['caseStudytitle']} link={item['fileLink']}/>
            })
          }
          </div>
        </div>
        <div className='StudentsScreen'>
          <div className='ListofStuds'>
            {names.map(item => {
              return (
                <>
                  <StudentTileAdmin name={item} clickfunc={handleNameClick} />
                </>
              )
            })}
          </div>
          <div className='Studownload'>
            <div className='GetFileDesc'>
              Get {getFile}'s file here down below!
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '20px'
              }}
            >
              <button className='GetFileBtn'>File</button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <AppBarCustom />
      <MainAdminScreen />
    </div>
  )
}

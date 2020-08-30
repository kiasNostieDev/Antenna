import React, { useRef, useState } from 'react'
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
  const [progress, setProgress] = useState(0)
  const el = useRef()
  const allInputs = { imgURL: '' }
  const [fileurl, setFileURL] = useState(allInputs)
  const [getFile, setGetFile] = useState('')

  const classes = useStyles()

  function handleChange (event) {
    setProgress(0)
    const imageFile = event.target.files[0]
    console.log(imageFile)
    setFile(imagefile => imageFile)
    console.log(file)
  }

  function handleUpload () {
    const storage = fb.storage().ref('docs/admin')
    const imageUpload = storage.child(file.name)
    imageUpload.put(file).then(
      snapshot => {
        imageUpload.getDownloadURL().then(url => {
          setFileURL(url)
          console.log(url)
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

  function AdminCaseTile () {
    return (
      <div className='AdminCaseTile'>
        <div className='TileTitle'>C Lab Programs</div>
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
            <TextField
              className={classes.field}
              id='standard-textarea'
              label='Title or Description'
              placeholder='CaseStudy'
            />
            <div className='file-input-wrapper'>
              <button className='btn-file-input'>Upload File</button>
              <input type='file' name='file' />
            </div>
            <button className='SubmitCaseBtn'>Upload CaseStudy</button>
          </div>
          <div className='ShowBefore'>
            <AdminCaseTile />
            <AdminCaseTile />
            <AdminCaseTile />
            <AdminCaseTile />
            <AdminCaseTile />
            <AdminCaseTile />
            <AdminCaseTile />
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

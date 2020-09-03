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
  const [isLoading, setIsLoading] = useState('1')
  const [cases, setCases] = useState([])
  const el = useRef()
  const fileRef = useRef()
  const [getFile, setGetFile] = useState('')

  const data = {
    studentName: '',
    caseStudy: '',
    rollNo: '',
    straightness: '',
    fileLink: ''
  }
  const proxyUrl = 'http://localhost:8080/'
  const urlcase = 'http://localhost:6969/cases'

  if (isLoading === '1') {
    axios.get(proxyUrl + urlcase).then(res => {
      const Cases = res.data
      setCases(Cases)
      setIsLoading('0')
    })
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

  function HelloStudent (props) {
    return <div className='HelloStudent'>Hello {props.name},</div>
  }

  function handleChange (event) {
    const imageFile = event.target.files[0]
    console.log(imageFile)
    setFile(imageFile)
    console.log(file)
  }

  function Tile (props) {
    const link = props.link
    return (
      <div className='nthCaseStudyTile'>
        <div className='CaseStudyTitle'>
          <div className='CaseStudyText'>{props.name}</div>
        </div>
        <div className='CaseStudyDownload'>
          <button
            className='SubmitButton'
            onClick={() => {
              window.open(link)
            }}
          >
            DownloadFile
          </button>
        </div>
        <div className='CaseStudyUpload'>
          <div className='file-input-wrapper'>
            <button className='btn-file-input'>UploadFile</button>
            <input type='file' name='file' ref={el} onChange={handleChange}/>
          </div>
        </div>
        <button
          className='SubmitButton'
          onClick={() => {
            props.click(props.name)
          }}
        >
          UploadSolution
        </button>
      </div>
    )
  }

  function handleUpload (caseTitle) {
    const fbstorage = fb.storage().ref('/docs/solutions')
    const imageUpload = fbstorage.child(currentLogin.name + caseTitle)
    const proxyUrl = 'http://localhost:8080/'
    const urlsign = 'https://an73nna.herokuapp.com/hw'

    imageUpload.put(file).then(
      snapshot => {
        imageUpload.getDownloadURL().then(url => {
          setFileURL(url)
          console.log(url)
          data.fileLink = url
          data.straightness = '1'
          data.caseStudy = caseTitle
          data.studentName = currentLogin.name
          data.rollNo = currentLogin.rollNo
          console.log(data.name)
          axios.post(proxyUrl + urlsign, {"body":data},{headers:{
            "auth-token":currentLogin.jwt
          }})
            .then(res => {
              console.log(res)
            })
        })
      },
      err => {
        console.log(err)
      }
    )
  }

  function Decider () {
    if (isLoading === '1') {
      return <>Loading...</>
    }
    return (
      <div>
        <AppBarCustom />
        <HelloStudent name={currentLogin.name} />
        <div className='HeadingCase'>Current_Case_Studies</div>
        <div>
          {cases.map(item => {
            console.log(item['caseStudytitle'])
            return (
              <Tile
                name={item['caseStudytitle']}
                click={handleUpload}
                link={item['fileLink']}
              />
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div>
      <Decider />
    </div>
  )
}

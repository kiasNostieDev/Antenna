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
import { fb } from '../FIrebase/firebase'
import { names } from '../data'
import axios from 'axios'
import { caseStudies } from '../Data/caseStudyData'
import Loading from './Loading'
import {useHistory} from 'react-router-dom'

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
  const history = useHistory()
  const [isLoading, setIsLoading] = useState('1')
  const [startCase, setStartCase] = useState([])
  const [file, setFile] = useState()
  const el = useRef()
  const fileRef = useRef()

  const [fileName, setFileName] = useState('')
  const [getFile, setGetFile] = useState('')

  const [url,setUrl] = useState('')
  const nullState = ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',]
  const nullColor = ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',]

  const [curCase, setCurCase] = useState('')
  const [currentColorList, setCurrentColorList] = useState(nullColor)
  const [currentLinkList, setCurrentLinkList] = useState(nullState)

  const classes = useStyles()
  const data = {
    caseStudetitle: '',
    fileLink: ''
  }

  const proxyUrl = 'http://localhost:8080/'
  const urlcase = 'https://an73nna.herokuapp.com/cases'

  if (isLoading === '1') {
    const proxyurl = "https://cors-anywhere.herokuapp.com/"
    axios.get(proxyurl+urlcase,{
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'
      }
    }).then(res => {
      const Cases = res.data
      setStartCase(Cases)
      setIsLoading('0')
    })
  }

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

          const urlsign = 'https://an73nna.herokuapp.com/cases'
          axios.post(urlsign, data,{
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': 'POST',
              'Access-Control-Allow-Headers': 'Content-Type, Authorization'
            }
          }).then(res => {
            console.log(res)
            alert('Uploaded the CaseStudy Meta!')
            axios.get(proxyUrl + urlsign).then(res => {
              setStartCase(res.data)
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
            <Button color='inherit' onClick={()=>{
              history.goBack()
            }}>Logout</Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  }

  function handleNameClick (item) {
    setGetFile(item)
    const index = names.indexOf(item)
    const URL = currentLinkList[index]
    setUrl(URL)
  }

  function StudentTileAdmin (props) {
    const item = props.name
    return (
      <div
        className='nthTile'
        style={{color:currentColorList[names.indexOf(item)]}}
        onClick={() => {
          props.clickfunc(item)
        }}
      >
        {item}
      </div>
    )
  }

  async function handleClickCase (casename) {
    setCurrentColorList([])
    setCurCase(casename)
    console.log(curCase)
    const allGuysData = {
      caseStudy: casename
    }
    var result = []
    const urlHw = 'https://an73nna.herokuapp.com/hw/case'

    axios.post(urlHw,allGuysData,{
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'
      }
    }).then(res=>{
      result.push(res.data)
      res.data.map(rol=>{
        nullState[rol.rollNo-1] = rol.fileLink
        nullColor[rol.rollNo-1] = '#00ff00'
        return null
      })
      setCurrentColorList(nullColor)
      setCurrentLinkList(nullState)
    })
  }

  function AdminCaseTile (props) {
    return (
      <div
        className='AdminCaseTile'
        onClick={() => {
          props.click(props.caseName)
        }}
      >
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
            <input
              placeholder='value'
              type='text'
              id='outlined-basic'
              className={classes.field}
              ref={el}
            />
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
            {startCase
              .slice(0)
              .reverse()
              .map(item => {
                return (
                  <AdminCaseTile
                    id={item.caseStudetitle}
                    caseName={item['caseStudytitle']}
                    link={item['fileLink']}
                    click={handleClickCase}
                  />
                )
              })}
          </div>
        </div>
        <div className='StudentsScreen'>
          <div className='ListofStuds'>
            {names.map(item => {
              return (
                <>
                  <StudentTileAdmin
                    name={item}
                    clickfunc={handleNameClick}
                  />
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
              <button className='GetFileBtn' onClick={downFile}>File</button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  function downFile(){
    window.open(url)
  }

  function Decider () {
    if (isLoading === '1') {
      return <Loading />
    }
    return (
      <div>
        <AppBarCustom />
        <MainAdminScreen />
      </div>
    )
  }

  return (
    <div>
      <Decider />
    </div>
  )
}

import axios from "axios"

var cases = []
const proxyUrl = 'http://localhost:8080/'
const urlsign = 'http://localhost:6969/cases'
axios.get(proxyUrl+urlsign).then(res=>{
    cases.push(res.data)
})

export const caseStudies = cases
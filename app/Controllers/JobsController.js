import { ProxyState } from "../AppState.js"
import { getJobform } from "../Component/JobForm.js"
import { jobsService } from "../Services/JobsService.js"


function _drawJobs() {
  const jobs = ProxyState.jobs
  let template = ''
  jobs.forEach(j => template += j.Template)
  document.getElementById('listings').innerHTML = template
}



export class JobsController {
  constructor(){
    ProxyState.on('jobs',  _drawJobs)
  }
  
  drawHouses() {
    _drawJobs()
    document.getElementById('modal-body-slot').innerHTML = getJobform()
  }
  
  createJob() {
    // prevents page reload
    window.event.preventDefault()
    console.log("submitted")
    /** @type {HTMLFormElement} */
    // @ts-ignore
    const form = window.event.target
    const jobsData = {
      jobTitle: form.jobTitle.value,
      business: form.business.value,
      pay: form.pay.value,
      description: form.description.value,
      imgUrl: form.imgUrl.value
    }
    jobsService.createJob(jobsData)
    // clear form
    form.reset()
    // close modal
    // @ts-ignore
    bootstrap.Modal.getOrCreateInstance(document.getElementById('new-listing')).hide()
  }
  
  
  }
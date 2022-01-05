import { ProxyState } from "../AppState.js"
import { Job } from "../Models/Job.js"
import { api } from "./AxiosService.js"

class JobsService {

async getAllJobs(){
  const res = await api.get('jobs')
  ProxyState.jobs = res.data.map(j => new Job (j))
}

  async removeJob(id) {
    const res = await api.delete(`jobs/${id}`)
    console.log('delete job res', res)
    ProxyState.jobs = ProxyState.jobs.filter(j => j.id !== id)
  }
  async createJob(jobData) {
    const res = await api.post('jobs', jobData)
    console.log('post car res', res.data)
    ProxyState.jobs = [new Job(res.data), ...ProxyState.jobs]
  }



}

export const jobsService = new JobsService()
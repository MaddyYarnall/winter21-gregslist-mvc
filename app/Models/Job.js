

export class Job {
constructor(data){
  this.id = data.id;
  this.jobTitle = data.jobTitle;
  this.business = data.business;
  this.pay = data.pay;
  this.imgUrl = data.imgUrl;
}

get Template(){
  return `<div class="col-md-4 p-4">
  <div class="bg-white shadow rounded">
    <img class="w-100 rounded-top" src="${this.imgUrl}" alt="${this.jobTitle}">
    <div class="p-3">
      <p class="text-center"><b>${this.business}</b></p>
      <p class="m-0">${this.jobTitle}</p>
    </div>
    <div class="p-3 d-flex justify-content-between align-items-center">
      <p class="m-0">$${this.pay}</p>
      <i class="mdi mdi-delete"></i>
    </div>
  </div>
</div>`
}

}
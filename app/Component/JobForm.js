export function getJobform() {
  return `
  <form onsubmit="app.jobController.createJob()">
  <div class="mb-3 d-flex justify-content-between">
    <div>
      <label for="title" class="form-label">Job Title</label>
      <input type="text" class="form-control" name="title" id="title" aria-describedby="title"
        placeholder="Job Title..." required>
    </div>
    <div>
      <label for="business" class="form-label">Business/label>
      <input type="text" class="form-control" name="business" id="business" aria-describedby="business"
        placeholder="Business..." required>
    </div>
  </div>
  <div class="mb-3 d-flex justify-content-between">
    <div>
      <label for="pay" class="form-label">Pay/hr</label>
      <input type="number" class="form-control" name="pay" id="pay" aria-describedby="pay"
        placeholder="Pay/hr..." required>
    </div>
  </div>
  <div class="mb-3">
    <div>
      <label for="imgUrl" class="form-label">Image Url</label>
      <input type="url" class="form-control" name="imgUrl" id="imgUrl" aria-describedby="imgUrl"
        placeholder="Image Url..." required>
    </div>
  </div>
  <div class="mb-3">
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    <button type="submit" class="btn btn-primary">Create</button>
  </div>
</form>`
}
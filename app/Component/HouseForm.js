export function getHouseform(houseData = {}) {
  return `
  <form onsubmit="app.housesController.createHouse()">
  <div class="mb-3 d-flex justify-content-between">
    <div>
      <label for="beds" class="form-label">Beds</label>
      <input type="number" class="form-control" name="beds" id="beds" aria-describedby="beds"
        placeholder="Beds..." required>
    </div>
    <div>
      <label for="baths" class="form-label">Baths</label>
      <input type="number" class="form-control" name="baths" id="baths" aria-describedby="baths"
        placeholder="Baths..." required>
    </div>
  </div>
  <div class="mb-3 d-flex justify-content-between">
    <div>
      <label for="levels" class="form-label">levels</label>
      <input type="number" class="form-control" name="levels" id="levels" aria-describedby="levels"
        placeholder="Levels..." required>
    </div>
    <div>
      <label for="year" class="form-label">year</label>
      <input type="number" class="form-control" name="year" id="year" aria-describedby="year"
        placeholder="Year..." required>
    </div>
    <div>
      <label for="price" class="form-label">Price</label>
      <input type="number" class="form-control" name="price" id="price" aria-describedby="price" placeholder="$..." required>
    </div>
    <div>
      <label for="description" class="form-label">Description</label>
      <input type="text" class="form-control" name="description" id="description" aria-describedby="description"
        placeholder="Description..." required>
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
export function getHouseform() {
  return `
  <form onsubmit="app.houseController.createHouse()">
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
      <label for="sqft" class="form-label">SQFT</label>
      <input type="number" class="form-control" name="sqft" id="sqft" aria-describedby="sqft"
        placeholder="SQFT..." required>
    </div>
    <div>
      <label for="price" class="form-label">Price</label>
      <input type="number" class="form-control" name="price" id="price" aria-describedby="price" placeholder="$..." required>
    </div>
    <div>
      <label for="address" class="form-label">Address</label>
      <input type="text" class="form-control" name="address" id="address" aria-describedby="address"
        placeholder="Address..." required>
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
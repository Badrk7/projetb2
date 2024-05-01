import React from "react";
import Dropdown from "../dropdown";

const PlaceForm = ({ handleChange, formData, onDetailChange }) => {
  return (
    <div>
      <div className="mb-3">
        <label htmlFor="locationName">Location Name</label>
        <input
          className="form-input w-full rounded"
          name="locationName"
          onChange={handleChange}
          value={formData.locationName}
          type="text"
          placeholder="Location Name"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="address">Address</label>
        <input
          className="form-input w-full rounded"
          name="address"
          onChange={handleChange}
          value={formData.address}
          type="text"
          placeholder="Address"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="city">City</label>
        <input
          className="form-input w-full rounded"
          name="city"
          onChange={handleChange}
          value={formData.city}
          type="text"
          placeholder="City"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="postalCode">Postal Code</label>
        <input
          className="form-input w-full rounded"
          name="postalCode"
          onChange={handleChange}
          value={formData.postalCode}
          type="number"
          placeholder="Postal Code"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="country">Country</label>

        <Dropdown
          name="country"
          onChange={handleChange}
          value={formData.country}
          required={true}
          options={[
            { label: "Afghanistan", value: "Afghanistan" },
            { label: "Albania", value: "Albania" },
            { label: "Algeria", value: "Algeria" },
            { label: "American Samoa", value: "American Samoa" },
            { label: "Andorra", value: "Andorra" },
            { label: "France", value: "France" },
          ]}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="locationType">Type of Location</label>

        <Dropdown
          name="locationType"
          onChange={handleChange}
          value={formData.locationType}
          required={true}
          options={[
            { label: "Restaurant", value: "restaurant" },
            { label: "Bar", value: "bar" },
            { label: "Museum", value: "museum" },
            { label: "Park", value: "park" },
          ]}
        />
      </div>
      {formData.locationType === "restaurant" && (
        <>
          <div className="mb-3">
            <label htmlFor="locationType">Type of Cuisine</label>

            <Dropdown
              name="cuisine"
              onChange={onDetailChange}
              value={formData?.detail?.cuisine}
              required={true}
              options={[
                { label: "Italian", value: "italian" },
                { label: "Mexican", value: "mexican" },
                { label: "Asian", value: "asian" },
              ]}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="locationType">Number of Stars</label>

            <Dropdown
              name="stars"
              value={formData?.detail?.stars}
              onChange={onDetailChange}
              required={true}
              options={[
                { label: "1", value: "1" },
                { label: "2", value: "2" },
                { label: "3", value: "3" },
              ]}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="avgPrice">Average Price</label>
            <input
              className="form-input w-full rounded"
              name="avgPrice"
              onChange={onDetailChange}
              value={formData?.detail?.avgPrice}
              type="number"
              min="1"
              placeholder="Price"
              required
            />
          </div>
        </>
      )}
      {formData.locationType === "museum" && (
        <>
          <div className="mb-3">
            <label htmlFor="artisticMovement">Artistic Movement</label>

            <Dropdown
              name="artisticMovement"
              onChange={onDetailChange}
              value={formData?.detail?.artisticMovement}
              required={true}
              options={[
                { label: "Impressionism", value: "Impressionism" },
                { label: "Cubism", value: "Cubism" },
                { label: "Surrealism", value: "Surrealism" },
              ]}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="artType">Type of Art</label>

            <Dropdown
              name="artType"
              onChange={onDetailChange}
              value={formData?.detail?.artType}
              required={true}
              options={[
                { label: "Painting", value: "painting" },
                { label: "Sculpture", value: "sculpture" },
              ]}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="freeOrPaid">Free or Paid</label>

            <Dropdown
              name="freeOrPaid"
              onChange={onDetailChange}
              value={formData?.detail?.freeOrPaid}
              required={true}
              options={[
                { label: "Free", value: "free" },
                { label: "1", value: "1" },
                { label: "2", value: "2" },
                { label: "3", value: "3" },
                { label: "4", value: "4" },
                { label: "5", value: "5" },
              ]}
            />
          </div>
          {formData?.detail?.freeOrPaid !== "free" && (
            <div className="mb-3">
              <label htmlFor="price">Price</label>
              <input
                className="form-input w-full rounded"
                name="price"
                onChange={onDetailChange}
                value={formData?.detail?.price}
                type="number"
                min="1"
                placeholder="Price"
              />
            </div>
          )}
        </>
      )}

      {formData.locationType === "bar" && (
        <>
          <div className="mb-3">
            <label htmlFor="freeOrPaid">Type of Bar</label>

            <Dropdown
              name="barType"
              onChange={onDetailChange}
              value={formData?.detail?.barType}
              required={true}
              options={[
                { label: "Wine", value: "wine" },
                { label: "Cocktail", value: "cocktail" },
                { label: "Pub", value: "pub" },
              ]}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="barAvgPrice">Average Price</label>
            <input
              className="form-input w-full rounded"
              name="barAvgPrice"
              onChange={onDetailChange}
              value={formData?.detail?.barAvgPrice}
              type="number"
              placeholder="Price"
              min="1"
              required
            />
          </div>
        </>
      )}

      {formData.locationType === "park" && (
        <>
          <div className="mb-3">
            <label htmlFor="freeOrPaid">Type of Park</label>

            <Dropdown
              name="parkType"
              onChange={onDetailChange}
              value={formData?.detail?.parkType}
              required={true}
              options={[
                { label: "Floral", value: "floral" },
                { label: "Forest", value: "forest" },
              ]}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="publicOrPrivate">Public or Private</label>

            <Dropdown
              name="publicOrPrivate"
              onChange={onDetailChange}
              value={formData?.detail?.publicOrPrivate}
              required={true}
              options={[
                { label: "Private", value: "private" },
                { label: "Public", value: "public" },
              ]}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="parkFreeOrPaid">Free or Paid</label>
            <Dropdown
              name="parkFreeOrPaid"
              onChange={onDetailChange}
              required={true}
              value={formData?.detail?.parkFreeOrPaid}
              options={[
                { label: "Free", value: "free" },
                { label: "1", value: "1" },
                { label: "2", value: "2" },
                { label: "3", value: "3" },
                { label: "4", value: "4" },
                { label: "5", value: "5" },
              ]}
            />
          </div>
          {formData?.detail?.parkFreeOrPaid !== "free" && (
            <div className="mb-3">
              <label htmlFor="parkPrice">Price</label>
              <input
                className="form-input w-full rounded"
                name="parkPrice"
                onChange={onDetailChange}
                value={formData?.detail?.parkPrice}
                type="number"
                min="1"
                placeholder="Price"
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PlaceForm;

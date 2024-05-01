import React from "react";
import Image from "next/image";
import Cafe from "../../../public/images/cafe.jpg";
import Park from "../../../public/images/park.jpg";
import Resturant from "../../../public/images/resturant.jpg";
import Museum from "../../../public/images/museum.jpg";
import {
  TYPE_BAR,
  TYPE_MUSEUM,
  TYPE_PARK,
  TYPE_RESTURANT,
} from "../../constants";
import Link from "next/link";

const PlaceDetail = ({ place }) => {
  const {
    locationName,
    address,
    city,
    country,
    locationType,
    detail,
    postalCode,
  } = place;

  const formatPropertyName = (name) => {
    let words = name.split(/(?=[A-Z])|_/);
    return words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className="container grid grid-cols-1 lg:grid-cols-12">
      <div className="col-span-3 sm:col-span-12 lg:col-span-6">
        {locationType === TYPE_RESTURANT && (
          <Image
            style={{ width: "fit-content" }}
            src={Resturant}
            alt={"Resturant"}
            priority
          />
        )}
        {locationType === TYPE_MUSEUM && (
          <Image
            style={{ width: "fit-content" }}
            src={Museum}
            alt={"museum"}
            priority
          />
        )}

        {locationType === TYPE_PARK && (
          <Image
            style={{ width: "fit-content" }}
            src={Park}
            alt={"park"}
            priority
          />
        )}
        {locationType === TYPE_BAR && (
          <Image
            style={{ width: "fit-content" }}
            src={Cafe}
            alt={"bar"}
            priority
          />
        )}
      </div>
      <div className="col-span-9 p-4 sm:col-span-12 lg:col-span-6">
        <h5 className="card-title pb-2"> Name: {locationName}</h5>
        <p className="card-text pb-2 capitalize">
          Type:
          <b> {locationType}</b>
        </p>
        <p className="card-text pb-2">
          Address:
          <b>
            {" "}
            {address}, {city}, {country}
          </b>
        </p>
        <p className="card-text pb-2">
          Postal Code:
          <b> {postalCode}</b>
        </p>
        {detail ? <h5 className="card-title pb-2"> Additional Detail</h5> : ""}
        {Object.keys(detail)?.map((key) => {
          if (detail[key]) {
            return (
              <p key={key} className="card-text pb-2 capitalize">
                {formatPropertyName(key)}: <b>{detail[key]}</b>
              </p>
            );
          }
        })}
        <Link
          className="btn btn-primary z-0 "
          href={`/update-place/${place?._id}`}
          rel=""
        >
          Edit
        </Link>
      </div>
    </div>
  );
};

export default PlaceDetail;

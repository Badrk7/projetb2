import React from "react";
import Link from "next/link";
import Image from "next/image";
import Cafe from "../../../public/images/cafe.jpg";
import Park from "../../../public/images/park.jpg";
import Resturant from "../../../public/images/resturant.jpg";
import Museum from "../../../public/images/museum.jpg";
import EditIcon from "../../../public/images/edit-icon.png";
import DeleteIcon from "../../../public/images/delete-icon.png";
import {
  TYPE_BAR,
  TYPE_MUSEUM,
  TYPE_PARK,
  TYPE_RESTURANT,
} from "../../constants";

const Card = ({ place, onDelete }) => {
  const { locationName, address, city, country, locationType } = place;

  return (
    <div className="">
      {locationType === TYPE_RESTURANT && (
        <Image
          style={{ width: "100%", height: "172px" }}
          src={Resturant}
          alt={"Resturant"}
          priority
        />
      )}
      {locationType === TYPE_MUSEUM && (
        <Image
          style={{ width: "100%", height: "172px" }}
          src={Museum}
          alt={"museum"}
          priority
        />
      )}

      {locationType === TYPE_PARK && (
        <Image
          style={{ width: "100%", height: "172px" }}
          src={Park}
          alt={"park"}
          priority
        />
      )}

      {locationType === TYPE_BAR && (
        <Image
          style={{ width: "100%", height: "172px" }}
          src={Cafe}
          alt={"bar"}
          priority
        />
      )}

      <div className="p-4">
        <h5 className="card-title">Name: {locationName}</h5>
        <p className="card-text">
          {" "}
          Address: {address}, {city}, {country}
        </p>
        <p className="card-text capitalize"> Type: {locationType}</p>
        <div className="flex justify-between">
          <Link className="nav-link-active" href={`/single-place/${place._id}`}>
            View Details
          </Link>
          <div className="flex">
            <Link
              className="nav-link-active me-1"
              href={`/update-place/${place._id}`}
            >
              <Image height={20} width={20} src={EditIcon} alt={"bar"} />
            </Link>
            <div className="cursor-pointer" onClick={() => onDelete(place._id)}>
              <Image height={20} width={20} src={DeleteIcon} alt={"bar"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

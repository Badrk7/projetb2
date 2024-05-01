import Layout from "../../components/layout";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { toast } from "react-toastify";
import { fetchSinglePlace, updatePlace } from "../../services/places";
import PlaceForm from "../../components/place-form";
const INITIAL_STATE = {
  locationType: "",
  locationName: "",
  address: "",
  city: "",
  postalCode: "",
  country: "",
  detail: {},
  // Additional fields based on location type
  // // ******Restaurant
  // cuisine: "",
  // stars: 1,
  // avgPrice: 1,
  // // ******Museum
  // artisticMovement: "",
  // artType: "",
  // freeOrPaid: "free",
  // price: "",
  // // ******Bar
  // barType: "",
  // barAvgPrice: 1,
  // // ******Park
  // parkType: "",
  // publicOrPrivate: "public",
  // parkFreeOrPaid: "free",
  // parkPrice: "",
};

const AddNewPlace = () => {
  const [formData, setFormData] = useState({ ...INITIAL_STATE });
  const [loading, setLoading] = useState(false);
  const [getLoading, setGetLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      getSinglePlace(id);
    }
  }, [id]);

  const getSinglePlace = async (id) => {
    try {
      setGetLoading(true);

      const { status, data } = await fetchSinglePlace(id);
      if (status === 200) {
        if (data) {
          setFormData(data);
        }
      }
      setGetLoading(false);
    } catch (error) {
      setGetLoading(false);
    }
  };

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "locationType") {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
        detail: {},
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const onDetailChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      detail: {
        ...prev.detail,
        [name]: value,
      },
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data, status } = await updatePlace(id, formData);
      if (status === 200) {
        toast.success(data?.message);
        router.push("/");
      } else {
        toast.error(data?.error);
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error(error);
      console.error("Error fetching data:", error);
    }
  };

  return (
    <Layout title="Add Place | Add Place" content="Add Place">
      {" "}
      <section className="section">
        <div className="container">
          <div className=" row flex justify-center pb-0">
            <div className="w-9/12">
              {getLoading ? (
                <p className="h-48 text-center">Loading...</p>
              ) : (
                <>
                  <h4 className="pb-4 text-center">Update Place</h4>
                  <form className="contact-form" onSubmit={handleSubmit}>
                    <PlaceForm
                      handleChange={handleChange}
                      onDetailChange={onDetailChange}
                      formData={formData}
                    />
                    <div className="text-center">
                      <input
                        disabled={loading}
                        type="submit"
                        value={`${loading ? "Loading..." : "Update"}`}
                        className="btn btn-primary"
                      />
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AddNewPlace;

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/layout";
import PlaceDetail from "../../components/place-detail";
import { fetchSinglePlace } from "../../services/places";

const PlaceDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [placeDetail, setPlaceDetail] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      getSinglePlace(id);
    }
  }, [id]);

  const getSinglePlace = async (id) => {
    try {
      setLoading(true);

      const { status, data } = await fetchSinglePlace(id);
      if (status === 200) {
        if (data) {
          setPlaceDetail(data);
        }
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };


  return (
    <Layout>
      <div className="p-5">
        {loading ? (
          <p className="h-48 text-center">Loadiing...</p>
        ) : placeDetail ? (
          <PlaceDetail place={placeDetail} />
        ) : (
          <p className="h-48 text-center">No record found.</p>
        )}
      </div>
    </Layout>
  );
};

export default PlaceDetails;

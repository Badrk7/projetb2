import { useEffect, useState } from "react";
import Card from "../components/card";
import Sidebar from "../components/side-bar-search-filter";
import { deletelace, fetchPlaces } from "../services/places";
import { toast } from "react-toastify";
import Modal from "../components/modal";
import Layout from "../components/layout";


const Home = () => {
  const [places, setPlaces] = useState([]);
  const [placesCopy, setPlacesCopy] = useState([]);
  const [placeId, setPlaceId] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [deleteLoaing, setDeleteLoaing] = useState(false);
  useEffect(() => {
    getPlacesList();
  }, []);

  const getPlacesList = async () => {
    try {
      setLoading(true);
      const { status, data } = await fetchPlaces();
      if (status === 200) {
        if (data?.length) {
          setPlaces(data);
          setPlacesCopy(data);
        }
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  const handleDeletePlace = async () => {
    try {
      setDeleteLoaing(true);
      const { data, status } = await deletelace(placeId);
      if (status === 200) {
        toast.success(data?.message);
        let filter = places?.filter((item) => item?._id !== placeId);
        setPlaces(filter);
        setPlacesCopy(filter);
        handleModal("");
      } else {
        toast.error(data?.message);
      }

      setDeleteLoaing(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setDeleteLoaing(false);
    }
  };

  const handleSearch = (searchCriteria) => {
    try {
      setLoading(true);
      const { country, types } = searchCriteria;
      const filteredData = placesCopy.filter((item) => {
        return (
          (country === "" ||
            item.country.toLowerCase().includes(country.toLowerCase())) &&
          (types.length === 0 || types.includes(item.locationType))
        );
      });
      setPlaces(filteredData);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const handleModal = (placeId) => {
    debugger;
    setIsModalOpen(!isModalOpen);
    setPlaceId(placeId);
  };
  return (
    <Layout title="Web App | Web App" content="Web App">
      <Modal onClose={handleModal} isOpen={isModalOpen} title={"Alert"}>
        <div className="w-96">
          <div className="h-16">Are you sure do you want to delete ?</div>
          <div className="flex justify-end">
            <button
              onClick={() => handleModal("")}
              disabled={deleteLoaing}
              className="btn  me-2"
            >
              Cancel
            </button>
            <button
              onClick={handleDeletePlace}
              disabled={deleteLoaing}
              className="btn btn-primary"
            >
              {deleteLoaing ? "Deleting.." : "Delete"}
            </button>
          </div>
        </div>
      </Modal>
      <div className="container grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-3 sm:col-span-12 lg:col-span-3 ">
          <Sidebar onSearch={handleSearch} />
        </div>
        <div className="col-span-9 sm:col-span-12 lg:col-span-9">
          <h4 className="my-4 text-center">Places List</h4>
          <div className="flex flex-wrap justify-center gap-6	">
            {loading
              ? "loading..."
              : places?.length
              ? places.map((place) => (
                  <div
                    className=" mb-4 w-64 rounded bg-white shadow-lg"
                    key={place._id}
                  >
                    <Card onDelete={handleModal} place={place} />
                  </div>
                ))
              : "No places to display."}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;

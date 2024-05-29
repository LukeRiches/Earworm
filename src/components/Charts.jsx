import axios from "axios";
import { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ChartsCarousel from "./Charts-Carousel";
import { Form } from "react-bootstrap";

function Charts({ accessToken }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [chartButtonDisabled, setChartButtonDisabled] = useState(true);
  const [chartLocation, setChartLocation] = useState("🌍");
  const [chartID, setChartID] = useState("37i9dQZEVXbMDoHDwVN2tF");
  const [charts, setCharts] = useState([]);
  const [importedCharts, setImportedCharts] = useState(false);

  function setChart(location) {
    setChartButtonDisabled(true);
    setIsLoading(true);
    setChartLocation(location);
    updateChartID(location);
  }

  function updateChartID(chartLocation) {
    if (chartLocation === "🌍") {
      setChartID("37i9dQZEVXbMDoHDwVN2tF");
      setImportedCharts(false);
    }
    if (chartLocation === "🇬🇧") {
      setChartID("37i9dQZEVXbLnolsZ8PSNw");
      setImportedCharts(false);
    }
    if (chartLocation === "🇺🇸") {
      setChartID("37i9dQZEVXbLRQDuF5jeBp");
      setImportedCharts(false);
    }
  }

  if (accessToken !== null && importedCharts === false) {
    axios
      .get(`https://api.spotify.com/v1/playlists/${chartID}/tracks`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then(({ data }) => {
        // setError(null);
        setCharts(data.items);
        setImportedCharts(true);
        setIsLoading(false);
        setChartButtonDisabled(false);
      })
      .catch((err) => {
        // setError(err.response);
        setIsLoading(false);
      });
  }

  return (
    <div className="px-4 py-3 my-3 text-center container" id="Charts-Preview">
      <h2
        className="d-flex align-items-center justify-content-start"
        id="Charts-Title"
      >
        Charts &nbsp;{" "}
        <DropdownButton
          itemType="button"
          id="dropdown-basic-button"
          title={chartLocation}
          variant="light"
          size="lg"
          disabled={chartButtonDisabled}
        >
          <Dropdown.Item onClick={() => setChart("🌍")}>
            Global 🌍
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setChart("🇬🇧")}>UK 🇬🇧</Dropdown.Item>
          <Dropdown.Item onClick={() => setChart("🇺🇸")}>USA 🇺🇸</Dropdown.Item>
        </DropdownButton>
      </h2>
      <ChartsCarousel charts={charts} isLoading={isLoading} error={error} />
    </div>
  );
}

export default Charts;

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
  const [chartLocation, setChartLocation] = useState("🇬🇧");
  const [chartID, setChartID] = useState("4OIVU71yO7SzyGrh0ils2i");
  const [charts, setCharts] = useState([]);
  const [importedCharts, setImportedCharts] = useState(false);

  function setChart(location) {
    setChartButtonDisabled(true);
    setIsLoading(true);
    setChartLocation(location);
    updateChartID(location);
  }

  function updateChartID(chartLocation) {
    // if (chartLocation === "🌍") {
    //   setChartID("37i9dQZEVXbMDoHDwVN2tF");
    //   setImportedCharts(false);
    // }
    if (chartLocation === "🇬🇧") {
      setChartID("4OIVU71yO7SzyGrh0ils2i");
      setImportedCharts(false);
    }
    if (chartLocation === "🇺🇸") {
      setChartID("6UeSakyzhiEt4NB3UAd6NQ");
      setImportedCharts(false);
    }
    if (chartLocation === "🇪🇸") {
      setChartID("7ki8VipxMygh7Y8ZdPRvmX");
      setImportedCharts(false);
    }
    if (chartLocation === "🇫🇷") {
      setChartID("2IgPkhcHbgQ4s4PdCxljAx");
      setImportedCharts(false);
    }
    if (chartLocation === "🇧🇷") {
      setChartID("0x0jotqIY7ltgpekBWnKhD");
      setImportedCharts(false);
    }
    if (chartLocation === "🇦🇷") {
      setChartID("61UaGYFDMBk8aatYqA3Gkf");
      setImportedCharts(false);
    }
    // if (chartLocation === "🇪🇸") {
    //   setChartID("37i9dQZEVXbNFJfN1Vw8d9");
    //   setImportedCharts(false);
    // }
    // if (chartLocation === "🇫🇷") {
    //   setChartID("37i9dQZEVXbIPWwFssbupI");
    //   setImportedCharts(false);
    // }
    // if (chartLocation === "🇵🇹") {
    //   setChartID("37i9dQZEVXbKyJS56d1pgi");
    //   setImportedCharts(false);
    // }
    // if (chartLocation === "🇮🇹") {
    //   setChartID("37i9dQZEVXbIQnj7RRhdSX");
    //   setImportedCharts(false);
    // }
    // if (chartLocation === "🇩🇪") {
    //   setChartID("37i9dQZEVXbJiZcmkrIHGU");
    //   setImportedCharts(false);
    // }
    // if (chartLocation === "🇮🇳") {
    //   setChartID("37i9dQZEVXbLZ52XmnySJg");
    //   setImportedCharts(false);
    // }
    // if (chartLocation === "🇨🇳") {
    //   setChartID("3qwyQJzNAt4BDfnijpKkbi");
    //   setImportedCharts(false);
    // }
    // if (chartLocation === "🇷🇺") {
    //   setChartID("6qv7CRaZr9nJaamM8Xtrv6");
    //   setImportedCharts(false);
    // }
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
          className="clickableParent"
        >
          {/* <Dropdown.Item onClick={() => setChart("🌍")}>
            Global 🌍
          </Dropdown.Item> */}
          <Dropdown.Item onClick={() => setChart("🇬🇧")} className="clickable">
            UK 🇬🇧
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setChart("🇺🇸")} className="clickable">
            USA 🇺🇸
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setChart("🇪🇸")} className="clickable">
            Spain 🇪🇸
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setChart("🇫🇷")} className="clickable">
            France 🇫🇷
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setChart("🇧🇷")} className="clickable">
            Brazil 🇧🇷
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setChart("🇦🇷")} className="clickable">
            Argentina 🇦🇷
          </Dropdown.Item>
          {/* <Dropdown.Item onClick={() => setChart("🇩🇪")}>
            Germany 🇩🇪
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setChart("🇵🇹")}>
            Portugal 🇵🇹
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setChart("🇮🇹")}>
            Italy 🇮🇹{" "}
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setChart("🇮🇳")}>India 🇮🇳</Dropdown.Item> */}
          {/* <Dropdown.Item onClick={() => setChart("🇨🇳")}>China 🇨🇳</Dropdown.Item>
          <Dropdown.Item onClick={() => setChart("🇷🇺")}>
            Russia 🇷🇺
          </Dropdown.Item> */}
        </DropdownButton>
      </h2>
      <ChartsCarousel charts={charts} isLoading={isLoading} error={error} />
    </div>
  );
}

export default Charts;

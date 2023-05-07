import React, { useState, useEffect } from 'react';

function App() {
  const [isChecked, setIsChecked] = useState(false);
  const [plantsData, setPlantsData] = useState(null);

  async function fetchData() {
    const response = await fetch('/db.json');
    const data = await response.json();
    setPlantsData(data.plants);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function handleCheckboxChange() {
    setIsChecked(!isChecked);
  }

  if (!plantsData) {
    fetchData();
    return <p>Loading...</p>;
  }

  const filteredPlantsData = isChecked ? plantsData.filter(plant => plant.active === true) : plantsData;

  return (
    <>
      <h1 className="text-2xl text-cyan-700 mt-4 text-center">
        Képek ki-be kapcsolása
      </h1>

      <label className="block my-4 pl-10 pr-2">
        <strong>Szűrés: </strong>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="mr-2"
        />
      </label>

      <div className="flex flex-wrap justify-center">
        {filteredPlantsData.map((plant) => (
          <div key={plant.id} className="m-2 shadow-lg overflow-hidden p-3">
            <img src={plant.pic} alt={plant.title}
              className="w-40 h-45 object-cover filter brightness-90 hover:brightness-150 transition duration-500" />
            <h2 className="bg-white text-left font-bold p-2 rounded-b-lg">{plant.title}</h2>
          </div>
        ))}
      </div>

    </>
  );
}
export default App;
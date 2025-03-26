import axios from "axios";

const fetchDataFromAPI = async () => {
  try {
    const response = await axios.get(
      "https://inverso-backend.onrender.com/api/items?populate=*&pagination[pageSize]=100"
    );

    // Sort items based on position
    const sortedItems = response.data.data.sort(
      (a, b) => a.Position - b.Position
    );

    return sortedItems.reduce((acc, item) => {
      if (item.menu_section) {
        const sectionKey = item.menu_section.key;

        // If the sectionKey is not in the accumulator, initialize an array for it
        if (!acc[sectionKey]) {
          acc[sectionKey] = [];
        }

        // Push the current item into the correct section array
        acc[sectionKey].push(item);
      }
      return acc;
    }, {});
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

const fetchAllData = async () => {
  const apiResponse = await fetchDataFromAPI();
  if (!apiResponse) return {};

  return {
    montanare: apiResponse.montanare,
    tapas: apiResponse.tapas,
    dolci: apiResponse.dolci,
    cocktails: apiResponse.cocktails,
    bebidas: apiResponse.bebidas,
    vinosBlancos: apiResponse.vinosBlancos,
    vinosRosado: apiResponse.vinosRosado,
    vinosTintos: apiResponse.vinosTintos,
    prosecco: apiResponse.prosecco,
    caprichos: apiResponse.caprichos,
  };
};

export default fetchAllData;

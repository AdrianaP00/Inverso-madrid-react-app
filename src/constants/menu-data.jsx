import axios from "axios";

const fetchDataFromAPI = async () => {
  try {
    const response = await axios.get(
      "https://inverso-backend.onrender.com/api/items?populate=*&pagination[pageSize]=100"
    );

    // Sort items based on position, fallback to 0 if missing
    const sortedItems = response.data.data.sort(
      (a, b) => (a.Position ?? 0) - (b.Position ?? 0)
    );

    return sortedItems.reduce((acc, item) => {
      const sectionKey = item.menu_section?.key;
      if (sectionKey) {
        if (!acc[sectionKey]) {
          acc[sectionKey] = [];
        }
        acc[sectionKey].push(item);
      }
      return acc;
    }, {});
  } catch (error) {
    console.error("Error fetching data:", error);
    return {};
  }
};

const getMenuSections = async () => {
  const apiResponse = await fetchDataFromAPI();
  if (!apiResponse) return {};
  return apiResponse;
};

export default getMenuSections;

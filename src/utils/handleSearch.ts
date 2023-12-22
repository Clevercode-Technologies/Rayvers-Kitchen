// Sample data since the actual imports are not available
const allEvents = [
    { name: "Event1", category: "Tech", country: "USA" },
    { name: "Event2", category: "Music", country: "UK" },
    { name: "Event3", category: "Art", country: "France" },
    // Add more sample events as needed
  ];
  
  const countriesData = {
    USA: "United States of America",
    UK: "United Kingdom",
    France: "France",
    // Add more sample countries as needed
  };
  
  export const handleSearch = (searchQuery: string) =>
    allEvents?.filter(
      (event) =>
        searchQuery &&
        Object.values(event).some(
          (value) =>
            typeof value === "string" &&
            value.toLowerCase().includes(searchQuery?.toLowerCase())
        )
    );
  
  export const handleCategoryFilter = (category: string) =>
    allEvents?.filter(
      (event) =>
        category &&
        Object.values(event).some(
          (value) =>
            typeof value === "string" &&
            value.toLowerCase().includes(category?.toLowerCase())
        )
    );
  
  export const countryList = Object.keys(countriesData);
  
  export const handleCountrySearch = (searchQuery: string) =>
    countryList.filter(
      (country) =>
        searchQuery &&
        country?.toLowerCase().includes(searchQuery?.toLowerCase())
    );
  
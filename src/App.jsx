import Search from "./components/Search";
import SearchImages from "./api";
import { useState } from "react";
import ImageList from  "./components/ImageList";

const App = () => {
  const [images,setImages] = useState([]);
  const handleSubmit = async(term) => {
    // console.log("do a search with",term)
    const result =  await SearchImages(term);
    setImages(result)
    // console.log(result)
  };
  return (
    <div>
      <Search handleSubmit={handleSubmit}  />
      <ImageList images = {images}/>
    </div>
  );
};

export default App;

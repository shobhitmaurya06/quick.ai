import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import DashBoard from "./pages/DashBoard";
import Community from "./pages/Community";
import WriteArticle from "./pages/WriteArticle";
import RemoveObject from "./pages/RemoveObject";
import RemoveBackground from "./pages/RemoveBackground";
import ReviewResume from "./pages/ReviewResume";
import { GenerateImages } from "./pages/GenerateImages";
import BlogTitle from "./pages/BlogTitle";
import Home from "./pages/Home";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/ai" element={<Layout />}>
         <Route index element={<DashBoard/>}/>
           <Route path="community" element={<Community/>}/>
           <Route path="write-article" element={<WriteArticle/>}/>
           <Route path="remove-object" element={<RemoveObject/>}/>
           <Route path="remove-background" element={<RemoveBackground/>}/>
           <Route path="review-resume" element={<ReviewResume/>}/>
           <Route path="generate-images" element={<GenerateImages/>}/>
           <Route path="blog-title" element={<BlogTitle/>}/>
        </Route>
      </Routes>
    </div>
  );
};

export default App;

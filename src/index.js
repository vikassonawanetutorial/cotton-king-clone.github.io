import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Component/Home/Nav.jsx';
import Index from "./Component/Home/Index.jsx";
import Anti_stain from "./Component/Shop/Anti-stain/Anti_stain.jsx";
import Breathe_easy from "./Component/Shop/Breathe Easy/Breathe_easy.jsx";
import Aerosoft from "./Component/Shop/AeroSoft/Aerosoft.jsx";
import Giza from "./Component/Shop/Giza/Giza.jsx";
import Indigo_dyed from "./Component/Shop/Indigo_dyed/Indigo_dyed.jsx";
import Micro_dobby from "./Component/Shop/Micro_dobby/Micro_dobby.jsx";
import Formal_shirt from "./Component/Shop/Formal_shirt/Formal_shirt.jsx";
import Slim_formal from "./Component/Shop/Slim Formal/Slim_formal.jsx";
import Contact_us from "./Component/Contact_us/Contact_us.jsx";
import Footer from './Component/Home/Footer.jsx';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <>
 <Router>
  <Nav></Nav>
<Routes>
  <Route path="Index" element={<Index></Index>}>Index</Route>
  <Route path="Anti_stain" element={<Anti_stain></Anti_stain>}>Anti_stain</Route>
  <Route path="Breathe_easy" element={<Breathe_easy></Breathe_easy>}>Breathe_easy</Route>
  <Route path="Aerosoft" element={<Aerosoft></Aerosoft>}>Aerosoft</Route>
  <Route path="Giza" element={<Giza></Giza>}>Giza</Route>
  <Route path="Indigo_dyed" element={<Indigo_dyed></Indigo_dyed>}>Indigo_dyed</Route>
  <Route path="Micro_dobby" element={<Micro_dobby></Micro_dobby>}>Micro_dobby</Route>
  <Route path="Formal_shirt" element={<Formal_shirt></Formal_shirt>}>Formal_shirt</Route>
  <Route path="Slim_formal" element={<Slim_formal></Slim_formal>}>Slim_formal</Route>
  <Route path="Contact_us" element={<Contact_us></Contact_us>}>Contact_us</Route>
</Routes>
<Footer></Footer>
 </Router>
 </>
,
document.getElementById('root'));
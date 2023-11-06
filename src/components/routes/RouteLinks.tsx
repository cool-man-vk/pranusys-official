import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from '../home/Home';
import ContactForm from "../contact/ContactForm";
import React, { ReactElement } from "react";

const RouteLinks = () => {
    return (
            <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<ContactForm />} />   
            </Routes>
    );
}
export default RouteLinks;



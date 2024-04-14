import React, { useState } from "react";
import AppContext from "./AppContext";

function AppState(props) {

  const [contact, setcontact] = useState("");
  const [navShow, setnavShow] = useState("");
  const [mobNav, setmobNav] = useState(false)
  const [header, setHeader] = useState(false);

  // eslint-disable-next-line 
  const [contactBtn, setcontactBtn] = useState("contactbtn");
  // eslint-disable-next-line 
  const [contactSbtn, setcontactSbtn] = useState("contactsbtn");
  // eslint-disable-next-line 
  const [contactPg, setcontactPg] = useState("contactpg");

  const showContact = () => {
    if (contact === "") {
      setcontact("displayShow");
    } else {
      setcontact("");
    }
  };

  const showMobileNav = () => {
    if (navShow === "") {
      setnavShow("mobileNavShow");
    } else {
      setnavShow("");
    }
  };

  const body = document.body;
  body.onscroll = () => {
    if (window.scrollY >= 0 && window.scrollY <= 30) {
      setHeader(false);
    } else {
      setHeader(true);
    }
  };

    const handleBodyClick = (event) => {
      const contactbtn = document.getElementById(contactBtn);
      const contactsbtn = document.getElementById(contactSbtn);
      const contactpg = document.getElementById(contactPg);
      if (
        contactpg && 
        contactbtn &&
        contactsbtn && 
        !contactsbtn.contains(event.target)&&
        !contactpg.contains(event.target) &&
        !contactbtn.contains(event.target) 
      ) {
          setcontact("");
      }
    };
    document.body.addEventListener("click", handleBodyClick);

  return (
    <AppContext.Provider
      value={{
        contact,
        header,
        navShow,
        contactPg,
        contactBtn,
        contactSbtn,
        mobNav,
        setcontact,
        showMobileNav,
        showContact,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppState;

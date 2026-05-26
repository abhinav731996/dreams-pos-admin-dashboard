import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../feature/authSlice";

import profileImg from "../../assets/images/navbar/image-1.jpg";
import freshmart from "../../assets/images/navbar/freshmart.jpg";
import flag from "../../assets/images/navbar/flag.jpg";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showSettings, setShowSettings] = useState(false);

  const settingsRef = useRef(null);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  // CLOSE DROPDOWN OUTSIDE CLICK
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        settingsRef.current &&
        !settingsRef.current.contains(event.target)
      ) {
        setShowSettings(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="top-navbar">

      {/* LEFT */}
      <div className="navbar-left">

        <button className="toggle-btn">
          <i className="bi bi-chevron-double-left"></i>
        </button>

        {/* SEARCH */}
        <div className="search-bar">
          <div className="search-left">
          <i className="bi bi-search"></i>

          <input type="text" placeholder="Search" />
          </div>

          <span className="shortcut-key">
            <span> <i class="bi bi-command"></i> </span>
              K
          </span>
        </div>
      </div>

      {/* RIGHT */}
      <div className="navbar-right">

        {/* STORE */}
        <div className="store-dropdown">
          <img src={freshmart} alt="profile" width="20px"/>

          <span>Freshmart</span>

          <i className="bi bi-chevron-down"></i>
        </div>

        {/* ADD BUTTON */}
        <button className="add-btn">
          <i className="bi bi-plus-circle"></i>
          Add New
        </button>

        {/* POS BUTTON */}
        <button className="pos-btn">
          <i class="bi bi-laptop"></i>
          POS
        </button>

        <div className="vertical-line"></div>

        {/* ICONS */}
        <div className="navbar-icons">

          <button>
            <img src={flag} alt="profile" width="20px"/>
          </button>

          <button>
            <i className="bi bi-fullscreen"></i>
          </button>

          <button className="notif">
            <i className="bi bi-envelope"></i>
            <div className="notif-no">01</div>
          </button>

          <button>
            <i className="bi bi-bell"></i>
          </button>

          {/* SETTINGS */}
          <div className="settings-wrapper" ref={settingsRef}>

            <button
              onClick={() => setShowSettings(!showSettings)}
            >
              <i className="bi bi-gear"></i>
            </button>

            {showSettings && (
              <div className="settings-dropdown">

                <button onClick={handleLogout}>
                  <i className="bi bi-box-arrow-right"></i>
                  Logout
                </button>

              </div>
            )}
          </div>

          {/* PROFILE */}
          <div className="profile-img">
            <img src={profileImg} alt="profile" />
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
import { useEffect, useState } from "react";
import { Dropdown, ListGroup } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";

function Settings({ signedIn }) {
  return (
    <section>
      <div className="px-4 py-3 my-3 text-center" id="HomeHero">
        <h1 className="display-5 fw-bold">Settings ⚙️</h1>
      </div>

      {signedIn === true ? (
        <section>
          <section className="flex-shrink-0 p-3 w-25 h-100 d-flex justify-content-start">
            <Dropdown autoClose="inside">
              <Dropdown.Toggle id="settings-section-dropdown">
                <h2>Profile</h2>
              </Dropdown.Toggle>

              <Dropdown.Menu id="settings-section-dropdown-menu">
                <Dropdown.Item
                  className="p-0 settings-section-dropdown-item"
                  as="div"
                >
                  <NavLink
                    data-rr-ui-dropdown-item
                    to="/settings/email"
                    className="dropdown-item settings-section-dropdown-item"
                  >
                    <h6>Update Email</h6>
                  </NavLink>
                </Dropdown.Item>
                <Dropdown.Item
                  className="p-0 settings-section-dropdown-item"
                  as="div"
                >
                  <NavLink
                    to="/settings/password"
                    className="dropdown-item settings-section-dropdown-item"
                  >
                    <h6>Update Password</h6>
                  </NavLink>
                </Dropdown.Item>
                <Dropdown.Item
                  className="p-0 settings-section-dropdown-item"
                  as="div"
                >
                  <NavLink
                    to="/settings/delete"
                    className="dropdown-item settings-section-dropdown-item"
                  >
                    <h6>Delete Account</h6>
                  </NavLink>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </section>
          <Outlet />
        </section>
      ) : null}
    </section>
  );
}

export default Settings;

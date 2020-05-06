import React from "react";

const ProfileTab = () => {
  return (
    <div
      className="tab-pane fade show active"
      id="v-pills-profile"
      role="tabpanel"
      aria-labelledby="v-pills-profile-tab"
    >
      <h1 className="profile__tab-title">Profile</h1>
      <small className="text-muted">ID: 25826581692</small>

      <div className="profile-data">
        <p>Name: John Doe</p>
        <p>Email: johndoe@domain.com</p>
        <p>Mobile: 09123456789</p>
        <p>Gender: Male</p>
        <p>Birthday: Not set</p>
        <button className="btn btn-success">Update</button>
      </div>
    </div>
  );
};

export default ProfileTab;

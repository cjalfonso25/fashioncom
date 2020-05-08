import React from "react";

const ProfileTab = ({ activeUser }) => {
  return (
    <div
      className="tab-pane fade show active"
      id="v-pills-profile"
      role="tabpanel"
      aria-labelledby="v-pills-profile-tab"
    >
      <h1 className="profile__tab-title">Profile</h1>

      <small className="text-muted">ID: {activeUser._id}</small>

      <div className="profile-data">
        <p>Name: {activeUser.name}</p>
        <p>Email: {activeUser.email}</p>
        <p>Mobile: {activeUser.mobile}</p>
        <p>Gender: {activeUser.gender}</p>
        <p>Birthday: {activeUser.birthday}</p>
        <button className="btn btn-success">Update</button>
      </div>
    </div>
  );
};

export default ProfileTab;

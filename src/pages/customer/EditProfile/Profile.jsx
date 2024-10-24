import React, { useState } from "react";
import { Layout, Input, Button, Upload, Avatar } from "antd";
import "./Profile.css";

const { Content } = Layout;

function Profile() {
  const [image, setImage] = useState(null);

  const handleImageChange = (info) => {
    if (info.file.status === "done") {
      // Giả định rằng URL của ảnh sẽ được trả về từ server
      setImage(info.file.response.url);
    }
  };

  return (
    <Layout>
      <Content style={{ padding: "20px" }}>
        <div className="profile-container">
          <h2>Profile</h2>
          <div className="profile-content">
            <div className="profile-form">
              <div className="form-item">
                <label>First Name</label>
                <Input placeholder="First Name" defaultValue="" />
              </div>
              <div className="form-item">
                <label>Last Name</label>
                <Input placeholder="Last Name" defaultValue="" />
              </div>
              <div className="form-item">
                <label>Email</label>
                <Input placeholder="Email" defaultValue="" />
              </div>
              <div className="form-item">
                <label>Contact Number</label>
                <Input placeholder="Contact Number" defaultValue="" />
              </div>
              <div className="form-item">
                <label>Social network account</label>
                <Input placeholder="Social network account" />
              </div>
              <div className="form-item">
                <label>Affiliate bank</label>
                <Input placeholder="Affiliate bank" />
              </div>
              <div className="form-item">
                <label>Change password</label>
                <Input.Password placeholder="Change password" />
              </div>
              <div className="form-actions">
                <Button type="default">Cancel</Button>
                <Button type="primary">Save</Button>
              </div>
            </div>
            <div className="profile-image">
              <h3>Update Profile Picture</h3>
              <Avatar src={image} size={100} />
              <Upload
                showUploadList={false}
                action="/upload" // URL của API để tải lên ảnh
                onChange={handleImageChange}
              >
                <Button type="primary">Upload Image</Button>
              </Upload>
            </div>
          </div>
        </div>
      </Content>
    </Layout>
  );
}

export default Profile;

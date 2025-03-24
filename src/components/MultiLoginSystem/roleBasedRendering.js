const Sidebar = ({ role }) => {
    return (
      <div>
        <a href="/dashboard">Dashboard</a>
        {role === "admin" && <a href="/admin">Admin Settings</a>}
        {role === "editor" && <a href="/manage-content">Manage Content</a>}
      </div>
    );
  };
  
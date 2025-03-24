const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null); // Clear user context or state
    navigate("/login");
  };
  
import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  const authData = useContext(AuthContext);

  // 🔁 Restore login after refresh
  // useEffect(() => {
  //   if (authData) {
  //     const storedUser = JSON.parse(
  //       localStorage.getItem("loggedInUser")
  //     );

  //     if (storedUser) {
  //       setUser(storedUser.role);
  //     }
  //   }
  // }, [authData]);

  // 🔐 Login handler
  const handleLogin = (email, password) => {
    // ADMIN LOGIN
    if (email === "admin@me.com" && password === "123") {
      setUser("admin");
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "admin" })
      );
      return;
    }

    // EMPLOYEE LOGIN
    if (authData?.employees) {
      const employee = authData.employees.find(
        (e) => e.email === email && e.password === password
      );

      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee" })
        );
        return;
      }
    }

    alert("Invalid credentials");
  };

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === "admin" && <AdminDashboard />}
      {user === "employee" && (
        <EmployeeDashboard data={loggedInUserData} />
      )}
    </>
  );
};

export default App;

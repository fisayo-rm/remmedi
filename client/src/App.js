import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { data } from "./data";
import Header from "./components/Header";
import PrescriptionsList from "./components/PrescriptionsList";
import AddPrescription from "./components/AddPrescription";
import LandingPage from "./components/LandingPage";
import { Route, Switch, Redirect } from "react-router-dom";
import axios from "axios";

function App() {
  const [prescriptions, setPrescriptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);

  const login = async (user) => {
    console.log('LOG IN')
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    try {
      const res = await axios.post(
        "/api/v1/users/login", user, config
      );
      if(res.data.token === 'token'){
        setAuthenticated(true)
      }
    } catch (err) {
      console.log(err)
    }
  }

  const signup = async (user) => {
    console.log('SIGN IN');
    const config = {
      headers:{
        "Content-Type": "application/json"
      }
    };
    try {
      const res = await axios.post(
        "/api/v1/users/signup", user, config
      );
      login({
        email: user.email,
        password: user.password
      })
    } catch (err) {
      console.log(err);
    }
  }

  const logout = () => {
    setAuthenticated(false);
    return <Redirect to='/' />
  }

  const addPrescription = async prescription => {
    const test = {
      name: "Test",
      numOfTablets: 2,
      numOfTimesPerDay: 2,
      startDate: "2020-03-07",
      endDate: "2020-03-20"
    };
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    console.log(prescription);
    try {
      const res = await axios.post(
        "/api/v1/prescriptions",
        prescription,
        config
      );
      console.log("Hello");
      // setPrescriptions((prev) => {
      //   return [...prev, res.data.data]
      // })
      getPrescriptions();
    } catch (err) {
      // setError(err.response.data.error);
      console.log("err");
    }
  };

  async function getPrescriptions() {
    try {
      const res = await axios.get("/api/v1/prescriptions");
      setPrescriptions(res.data.data);
      setLoading(false);
    } catch (err) {
      setError(err.response.data.error);
    }
  }

  // async function completeDosage(id) {
  //   try {
  //     const res = await axios.patch(`/api/v1/prescriptions/${id}`)
  //     console.log('complete dosage')
  //     getPrescriptions();
  //   } catch (err) {
  //     console.log(err, 'NOT complete dosage')
  //   }
  // }

  async function completeDosage(id) {
    const test = {
      id: id,
      completedDosage: !prescriptions.find(p => p._id === id).completedDosage
    };
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    try {
      const res = await axios.post(
        `/api/v1/prescriptions/update`,
        test,
        config
      );
      console.log("complete dosage");
      getPrescriptions();
    } catch (err) {
      console.log(err, "NOT complete dosage");
    }
  }

  useEffect(() => {
    getPrescriptions();
  }, []);

  if (!authenticated) {
    return (
      <div>
        <LandingPage login={login} signup={signup}/>
      </div>
    );
  }
  return (
    <div>
      <Header logout={logout} />
      <Switch>
        <Route
          exact
          path="/"
          component={props => (
            <PrescriptionsList
              data={prescriptions}
              completeDosage={completeDosage}
            />
          )}
        />
        {/* <Route exact path='/' component={PrescriptionsList} /> */}
        <Route
          path="/add"
          component={props => (
            <AddPrescription addPrescription={addPrescription} />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;

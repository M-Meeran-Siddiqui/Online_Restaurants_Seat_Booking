/*
import React, { useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";

const Reservation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedSeats, setSelectedSeats] = useState([]);
  const navigate = useNavigate();

  const seats = [
    "A1", "A2", "A3", "A4",
    "B1", "B2", "B3", "B4",
    "C1", "C2", "C3", "C4",
  ];

  const handleReservation = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !phone || !date || !time || selectedSeats.length === 0) {
      toast.error("Please fill all the fields and select at least one seat.");
      return;
    }

    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/reservation/send",
        {
          firstName,
          lastName,
          email,
          phone,
          date,
          time,
          seats: selectedSeats,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      toast.success(data.message);

      await emailjs.send(
        "service_wi4cw75",    
        "template_6xib0d6",   
        {
          from_name: `${firstName} ${lastName}`,
          email,
          phone,
          date,
          time,
          seats: selectedSeats.join(", "),
        },
        "H47EOtkXOHrnjWG2p"
      );

      resetForm();
      navigate("/success");
      
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Something went wrong!");
    }
  };

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setDate("");
    setTime("");
    setPhone("");
    setSelectedSeats([]);
  };

  return (
    <section className="reservation" id="reservation">
      <div className="container">
        <div className="banner">
          <img src="/reservation.png" alt="reservation" />
        </div>
        <div className="banner">
          <div className="reservation_form_box">
            <h1>MAKE A RESERVATION</h1>
            <p>For Further Questions, Please Call</p>
            <form onSubmit={handleReservation}>
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="email_tag"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="seat-selection">
                <h3>Select Your Seats</h3>
                <select
                  multiple
                  value={selectedSeats}
                  onChange={(e) =>
                    setSelectedSeats(
                      Array.from(e.target.selectedOptions, (option) => option.value)
                    )
                  }
                >
                  {seats.map((seat) => (
                    <option key={seat} value={seat}>
                      {seat}
                    </option>
                  ))}
                </select>
              </div>
              <button type="submit">
                RESERVE NOW{" "}
                <span>
                  <HiOutlineArrowNarrowRight />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
*/

import React, { useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";

const Reservation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedSeats, setSelectedSeats] = useState([]);
  const navigate = useNavigate();

  const seats = [
    "A1", "A2", "A3", "A4",
    "B1", "B2", "B3", "B4",
    "C1", "C2", "C3", "C4",
  ];

  const handleReservation = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !phone || !date || !time || selectedSeats.length === 0) {
      toast.error("Please fill all the fields and select at least one seat.");
      return;
    }

    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/reservation/send",
        {
          firstName,
          lastName,
          email,
          phone,
          date,
          time,
          seats: selectedSeats,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      toast.success(data.message);

      await emailjs.send(
        "service_wi4cw75",    
        "template_6xib0d6",   
        {
          from_name: `${firstName} ${lastName}`,
          email,
          phone,
          date,
          time,
          seats: selectedSeats.join(", "),
        },
        "H47EOtkXOHrnjWG2p"
      );

      resetForm();
      navigate("/success");
      
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Something went wrong!");
    }
  };

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setDate("");
    setTime("");
    setPhone("");
    setSelectedSeats([]);
  };

  return (
    <section className="reservation" id="reservation">
      <div className="container">
        <div className="banner">
          <img src="/reservation.png" alt="reservation" />
        </div>
        <div className="banner">
          <div className="reservation_form_box">
            <h1>MAKE A RESERVATION</h1>
            <p>For Further Questions, Please Call</p>
            <form onSubmit={handleReservation}>
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="email_tag"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="seat-selection">
                <h3>Select Your Seats (Max 4 per table)</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                  {["A", "B", "C"].map((table) => {
                    const tableSeats = seats.filter((s) => s.startsWith(table));
                    const selectedFromTable = selectedSeats.filter((s) =>
                      s.startsWith(table)
                    );

                    return (
                      <div key={table}>
                        <h4>Table  {table}</h4>
                        {tableSeats.map((seat) => (
                          <label key={seat} style={{ marginRight: "8px" }}>
                            <input
                              type="checkbox"
                              value={seat}
                              checked={selectedSeats.includes(seat)}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  if (selectedFromTable.length < 4) {
                                    setSelectedSeats([...selectedSeats, seat]);
                                  } else {
                                    toast.error(`You can select max 4 seats from Table ${table}`);
                                  }
                                } else {
                                  setSelectedSeats(
                                    selectedSeats.filter((s) => s !== seat)
                                  );
                                }
                              }}
                            />
                            {seat}
                          </label>
                        ))}
                      </div>
                    );
                  })}
                </div>
              </div>

              <button type="submit">
                RESERVE NOW{" "}
                <span>
                  <HiOutlineArrowNarrowRight />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;

/*
import React, { useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";

const Reservation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedSeats, setSelectedSeats] = useState([]);
  const navigate = useNavigate();

  const seatGroups = {
    A: ["A1", "A2", "A3", "A4"],
    B: ["B1", "B2", "B3", "B4"],
    C: ["C1", "C2", "C3", "C4"],
  };

  const handleSeatChange = (group, seat, isChecked) => {
    const groupSeats = Object.values(seatGroups).flat();
    const selectedFromGroup = selectedSeats.filter((s) =>
      seatGroups[group].includes(s)
    );

    if (isChecked) {
      if (selectedFromGroup.length >= 4) {
        toast.error(`You can select a maximum of 4 seats from Table ${group}`);
        return;
      }
      setSelectedSeats([...selectedSeats, seat]);
    } else {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    }
  };

  const handleReservation = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !phone || !date || !time || selectedSeats.length === 0) {
      toast.error("Please fill all the fields and select at least one seat.");
      return;
    }

    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/reservation/send",
        {
          firstName,
          lastName,
          email,
          phone,
          date,
          time,
          seats: selectedSeats,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      toast.success(data.message);

      await emailjs.send(
        "service_wi4cw75",
        "template_6xib0d6",
        {
          from_name: `${firstName} ${lastName}`,
          email,
          phone,
          date,
          time,
          seats: selectedSeats.join(", "),
        },
        "H47EOtkXOHrnjWG2p"
      );

      resetForm();
      navigate("/success");
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Something went wrong!");
    }
  };

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setDate("");
    setTime("");
    setPhone("");
    setSelectedSeats([]);
  };

  return (
    <section className="reservation" id="reservation">
      <div className="container">
        <div className="banner">
          <img src="/reservation.png" alt="reservation" />
        </div>
        <div className="banner">
          <div className="reservation_form_box">
            <h1>MAKE A RESERVATION</h1>
            <p>For Further Questions, Please Call</p>
            <form onSubmit={handleReservation}>
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="email_tag"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="seat-selection">
                <h3>Select Your Seats</h3>
                <div className="seat-container" style={{ maxHeight: "150px", overflowY: "auto" }}>
                  {Object.entries(seatGroups).map(([group, seats]) => (
                    <div key={group} style={{ marginBottom: "10px" }}>
                      <h4>Table {group}</h4>
                      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                        {seats.map((seat) => (
                          <label key={seat}>
                            <input
                              type="checkbox"
                              value={seat}
                              checked={selectedSeats.includes(seat)}
                              onChange={(e) =>
                                handleSeatChange(group, seat, e.target.checked)
                              }
                            />
                            {seat}
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button type="submit">
                RESERVE NOW{" "}
                <span>
                  <HiOutlineArrowNarrowRight />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
*/




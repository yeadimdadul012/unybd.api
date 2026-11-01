
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Fake UYNBD Members
const members = [
  {
    id: 1,
    name: "Yead Imdadul",
    position: "IT & Digitals Director",
    department: "IT & Digitals",
    status: "Active"
  },
  {
    id: 2,
    name: "Rahim Ahmed",
    position: "Executive",
    department: "HR & Membership",
    status: "Active"
  },
  {
    id: 3,
    name: "Karim Hasan",
    position: "Deputy Director",
    department: "Administration",
    status: "Active"
  }
];

// Home Route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to UYNBD API",
    status: "Running"
  });
});

// Get All Members
app.get("/api/members", (req, res) => {
  res.json(members);
});

// Get Single Member
app.get("/api/members/:id", (req, res) => {
  const member = members.find(
    item => item.id === Number(req.params.id)
  );

  if (!member) {
    return res.status(404).json({
      message: "Member not found"
    });
  }

  res.json(member);
});

// Server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`UYNBD API running on port ${PORT}`);
});


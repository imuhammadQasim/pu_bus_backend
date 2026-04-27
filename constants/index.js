const campuses = [
  // ─────────────────────────────────────────────────────────
  //  ✅ EXISTING ENTRIES (retained / coordinates corrected)
  // ─────────────────────────────────────────────────────────

  {
    name: "Department of Gender Studies",
    lat: 31.495661,
    lng: 74.29425,
    info: "Department of Gender Studies, Faculty of Behavioral and Social Sciences, University of the Punjab.",
    address: "University of the Punjab, Quaid-i-Azam Campus, Lahore, Pakistan",
    image:
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxW4hSco0Tph5fOVszIk_uSeqnxBMtuJ0P9YRfq2RUrk7BYpjHhjzy3S4v5_03j8QiQSqky7GJ_NgZ7gQbgbuDWvAQRcLTU0V_2m63ZnMinaHURY23B56onACTtzz3afbbyjUQu=w288-h114-p-k-no",
  },
  {
    name: "School of Economics PU",
    lat: 31.50280571894848,
    lng: 74.3075985425132,
    info: "School of Economics, Faculty of Business, Economics and Administrative Sciences, University of the Punjab.",
    address: "University of the Punjab, Quaid-i-Azam Campus, Lahore, Pakistan",
    image:
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwEBWqFycgN7yPZpxusXkhgLlIhujNcgQtR6-P-cTL7BV59FRqirRaKqZd-hHX8JavxtziIeFXB5MSXwKy36qqmrvfSEy1iCgsU0amZ32VFAVFq6IMffX2KTGIkLJ0iAy05kXMK-g=w288-h114-p-k-no",
  },
  {
    name: "Department of Elementary Education",
    lat: 31.503994894453516,
    lng: 74.30944390230988,
    info: "Department of Elementary Education, Institute of Education & Research, University of the Punjab.",
    address: "G835+HQ4, Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "Institute of Electrical, Electronics & Computer Engineering",
    lat: 31.500299994069707,
    lng: 74.30476297826284,
    info: "Institute of Electrical, Electronics & Computer Engineering, Faculty of Electrical, Energy & Environmental Engineering, University of the Punjab.",
    address: "Quaid-i-Azam Campus, Lahore, Pakistan",
    image:
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwiHe3hnh4JN4sVbRjwCLBjoPZuQrpWUydk186YxJIAMtDe0xG1KX0ozgLq3SnXFysNGaDiGX7VjxzqwVMZ7D_RsJG0pARzMQGceZ7RBDdet_9bkH7B6BGO8bTKnfp7r-6yTsN4=w288-h114-p-k-no",
  },
  {
    name: "Department of Political Science",
    lat: 31.502918708192517,
    lng: 74.30748330783867,
    info: "Department of Political Science, Faculty of Behavioral and Social Sciences, University of the Punjab.",
    address: "G834+4XP, Quaid-i-Azam Campus, Lahore, Pakistan",
    image:
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzsrHGxaAfWFmMdCz2TGjJRfuq8kdex0J3L1EtLLcU6usttpECxeHmOw5U77zKYXVoGR2BLkVfL-Ulhs0fPYcril_ET-x7KOBaRCDPzi-K4TrehCSiOXEFr2RGg3dKZ2KjYSJb9=w288-h114-p-k-no",
  },
  {
    name: "Institute of Chemical Engineering & Technology",
    lat: 31.500778156798596,
    lng: 74.30579888058399,
    info: "Institute of Chemical Engineering & Technology, Faculty of Chemical and Materials Engineering, University of the Punjab.",
    address: "Quaid-i-Azam Campus, Lahore, Pakistan",
    image:
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyf8P7XulvRRkTo4MmV2yhnd1MIO5Rv34LjHBjew4gHlCBU6pAlE9FGrpp1_RSRLY0SY55nSsY_T6gMVm4nt3Z7Aat9zzEZqAa95TowW8_fsQMDJPhSwx10EKszeERv4F0hmng7Hw=w288-h114-p-k-no",
  },
  {
    name: "CHEP (Centre for High Energy Physics)",
    lat: 31.502552805439862,
    lng: 74.30555211735599,
    info: "Centre for High Energy Physics, Faculty of Science, University of the Punjab.",
    address: "G834+257, Quaid-i-Azam Campus, Lahore, Pakistan",
    image:
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxDnRRNRSN8C8veyfVJvxNiM9b2bzEig-p3DBLswYjVTfAXpGNSI5G8PyCZ7jZWfqYojjQWjb8t0ftpxV8p04TsGw8-ynz094DZP4xdKdEHAtXs_kbiDFURSjNCbYBhrVKb7g0=w408-h306-k-no",
  },
  {
    name: "Cell and Molecular Biology Lab",
    lat: 31.501592303915242,
    lng: 74.30682884883558,
    info: "Cell and Molecular Biology Lab, Institute of Zoology, University of the Punjab.",
    address: "G824+JM8, Quaid-i-Azam Campus, Lahore, Pakistan",
    image:
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSw5R1WC21NCE47V0V2AQOWCJMh_HPMlltb5icSzd03_AQKgbVBGrdIm0hYXEVWN07UG0038FivDcSc9I5Cajtq3UZDMMLXebecQ-c_btIi5p7BWZWY4yy9qGY3IvOZ2u3LSApdwnv4Swlvf=w330-h114-p-k-no",
  },
  {
    name: "School of Biochemistry & Biotechnology",
    lat: 31.5022875250473,
    lng: 74.30476891231734,
    info: "School of Biochemistry & Biotechnology, Faculty of Life-Sciences, University of the Punjab.",
    address: "Institute of Agricultural Sciences, Punjab University, Lahore",
    image:
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzbJ8cV2_I-WFSPIy6rKlSm3isgh9quaU1HDzUI1hhF8nD8SvP39UA08QMjTKLpsJcgyebAD4fIReXX4erANAaPETanINcb3w4p4BoI99FUGbZlpdc9Py67IPL_BykOY_AmzDns=w288-h114-p-k-no",
  },
  {
    name: "Hailey College of Commerce",
    lat: 31.497027499793482,
    lng: 74.30310594271828,
    info: "Hailey College of Commerce, Faculty of Commerce, University of the Punjab.",
    address: "Department of Botany, Punjab University, Lahore",
    image:
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzlyARy9iJxQqhUlCK-8pPm4CXo2J1VlvChL_iJ0WtQuDes_jhvVR4ZviRGP8U_mpnzyaFMAJIadb_-BRow6398xaiSKNKuHXd5hiP8xtbBJS7Rvv9DQraQWQwWA6qjKura-3XF=w288-h114-p-k-no",
  },
  {
    name: "Department of Space Sciences",
    lat: 31.4940739,
    lng: 74.2931195,
    info: "Institute of Space Science, Faculty of Science. Studies space exploration, remote sensing, astronomy and meteorology.",
    address: "University Of The Punjab, Quaid e Azam Campus, 53720, Pakistan",
    image:
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSy4OI2dZMC8zkJ8x8nX6onLi2Emzd1NbQAlbCkl_2SuLN08hjDS3ph9SmN4uckkOjoeAZCxBHjDS3ph9SmN4uckkOjoeAZCbJqwC2KfTuia0SmBHLWq-6V_FKXxdj1Urn44JC3cTYkNXGltJUXHOhUpq5D-RSanY=w288-h114-p-k-no",
  },
  {
    name: "Institute of English Studies",
    lat: 31.495170980375864,
    lng: 74.29992596550278,
    info: "Institute of English Studies, Faculty of Arts and Humanities, University of the Punjab.",
    address: "Jannat Rd, Quaid-i-Azam Campus, Lahore, Pakistan",
    image:
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyloRyxsuG5Y4xWm-wDy2JLc64Xxul_Zb8PcKJoh1HRJmkFBTw0x6T4kZHnnt1Lds49ykoaaiptouUnNRr05M_0nI4IeI7Z25EfekVkanRfEoMvxqe4_NaBbO6TDyN_t8-5DXk=w288-h114-p-k-no",
  },
  {
    name: "Institute of Administrative Sciences",
    lat: 31.49448485468987,
    lng: 74.29840247078477,
    info: "Institute of Administrative Sciences, Faculty of Business, Economics and Administrative Sciences, University of the Punjab.",
    address:
      "F7VX+P8P Institute of Administrative Sciences, Canal Rd, Quaid-i-Azam Campus, Lahore, Pakistan",
    image:
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxg8ZfVtiQeDoFnbh1Cr6qpyW0JaKlwuMltRkOsjogANbUE_yMYYcwX6waXlFinNnNRP5MEBs8ut8QGDVmAD_kdrFmiJDuglVCRkW2QjpPCsTc9OWmwqbEB9Xy25atSUqNHeT--=w288-h114-p-k-no",
  },

  // ─────────────────────────────────────────────────────────
  //  ➕ NEWLY ADDED — Faculty of Agricultural Sciences
  // ─────────────────────────────────────────────────────────

  {
    name: "Department of Agronomy",
    lat: 31.495041,
    lng: 74.296913,
    info: "Department of Agronomy, Faculty of Agricultural Sciences, University of the Punjab.",
    address: "F7WW+2Q7, Muslim Town, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "Department of Animal Sciences",
    lat: 31.495239,
    lng: 74.296998,
    info: "Department of Animal Sciences, Faculty of Agricultural Sciences, University of the Punjab.",
    address: "F7WW+3QX, Jannat Rd, Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "Department of Entomology",
    lat: 31.494953,
    lng: 74.297389,
    info: "Department of Entomology, Faculty of Agricultural Sciences, University of the Punjab.",
    address: "F7VW+XXJ, Muslim Town, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "Department of Food Sciences",
    lat: 31.4956,
    lng: 74.297017,
    info: "Department of Food Sciences, Faculty of Agricultural Sciences, University of the Punjab.",
    address: "F7WW+6RR, Jannat Rd, Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "Department of Horticulture",
    lat: 31.494981,
    lng: 74.297298,
    info: "Department of Horticulture, Faculty of Agricultural Sciences, University of the Punjab.",
    address: "F7VW+XWV, Muslim Town, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "Department of Plant Breeding and Genetics",
    lat: 31.495272,
    lng: 74.2967,
    info: "Department of Plant Breeding and Genetics, Faculty of Agricultural Sciences, University of the Punjab.",
    address: "F7WW+4M4, Jannat Rd, Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "Department of Plant Pathology",
    lat: 31.494706,
    lng: 74.297175,
    info: "Department of Plant Pathology, Faculty of Agricultural Sciences, University of the Punjab.",
    address: "F7VW+VVM, Muslim Town, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "Department of Soil Science",
    lat: 31.49512,
    lng: 74.297624,
    info: "Department of Soil Science, Faculty of Agricultural Sciences, University of the Punjab.",
    address: "F7WX+22X, Jannat Rd, Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },

  // ─────────────────────────────────────────────────────────
  //  ➕ NEWLY ADDED — Faculty of Arts and Humanities
  // ─────────────────────────────────────────────────────────

  {
    name: "Centre for South Asian Studies",
    lat: 31.500544,
    lng: 74.303711,
    info: "Centre for South Asian Studies, Faculty of Arts and Humanities, University of the Punjab.",
    address:
      "New Campus, G823+6F8, University of the Punjab, Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "Department of Archaeology",
    lat: 31.502797,
    lng: 74.308414,
    info: "Department of Archaeology, Faculty of Arts and Humanities, University of the Punjab.",
    address: "G835+497, Main Corridor, Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "Department of History & Pakistan Studies",
    lat: 31.503181,
    lng: 74.307907,
    info: "Department of History & Pakistan Studies, Faculty of Arts and Humanities, University of the Punjab.",
    address: "G835+75F, Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "Department of Philosophy",
    lat: 31.503027,
    lng: 74.308401,
    info: "Department of Philosophy, Faculty of Arts and Humanities, University of the Punjab.",
    address: "G835+696, Unnamed Road, Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "Department of Sports Sciences & Physical Education",
    lat: 31.486838,
    lng: 74.303235,
    info: "Department of Sports Sciences & Physical Education, Faculty of Arts and Humanities, University of the Punjab.",
    address: "Usmani Rd, Quaid-i-Azam Campus, Lahore, 54700, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "Pakistan Study Centre",
    lat: 31.501048,
    lng: 74.30419,
    info: "Pakistan Study Centre, Faculty of Arts and Humanities, University of the Punjab.",
    address:
      "Underpass No. 1, inside Punjab University, Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },

  // ─────────────────────────────────────────────────────────
  //  ➕ NEWLY ADDED — Faculty of Behavioral and Social Sciences
  // ─────────────────────────────────────────────────────────

  {
    name: "Centre for Clinical Psychology",
    lat: 31.494663,
    lng: 74.300896,
    info: "Centre for Clinical Psychology, Faculty of Behavioral and Social Sciences, University of the Punjab.",
    address: "F8V2+V96, Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "Department of Social Work",
    lat: 31.502695,
    lng: 74.308941,
    info: "Department of Social Work, Faculty of Behavioral and Social Sciences, University of the Punjab.",
    address: "Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "Institute of Applied Psychology",
    lat: 31.494527,
    lng: 74.3003,
    info: "Institute of Applied Psychology, Faculty of Behavioral and Social Sciences, University of the Punjab.",
    address:
      "F8V2+V96, University of the Punjab, Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "Institute of Social & Cultural Studies",
    lat: 31.495334,
    lng: 74.293808,
    info: "Institute of Social & Cultural Studies, Faculty of Behavioral and Social Sciences, University of the Punjab.",
    address:
      "Institute of Social and Cultural Studies, Quaid-i-Azam Campus, Lahore, 54590, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },

  // ─────────────────────────────────────────────────────────
  //  ➕ NEWLY ADDED — Faculty of Business, Economics and Administrative Sciences
  // ─────────────────────────────────────────────────────────

  {
    name: "Business Incubation Centre",
    lat: 31.492727405013863,
    lng: 74.2984275856527,
    info: "Business Incubation Centre, Faculty of Business, Economics and Administrative Sciences, University of the Punjab.",
    address:
      "Business Incubation Center, University of the Punjab, Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "Institute of Business & Information Technology",
    lat: 31.495188,
    lng: 74.298938,
    info: "Institute of Business & Information Technology (IBIT), Faculty of Business, Economics and Administrative Sciences, University of the Punjab.",
    address: "Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "Institute of Business Administration (IBA)",
    lat: 31.493265,
    lng: 74.299171,
    info: "Institute of Business Administration (IBA), Faculty of Business, Economics and Administrative Sciences, University of the Punjab.",
    address: "F7VX+8M3, Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },

  // ─────────────────────────────────────────────────────────
  //  ➕ NEWLY ADDED — Faculty of Chemical and Materials Engineering
  // ─────────────────────────────────────────────────────────

  {
    name: "Institute of Metallurgy & Materials Engineering",
    lat: 31.500296,
    lng: 74.306179,
    info: "Institute of Metallurgy & Materials Engineering, Faculty of Chemical and Materials Engineering, University of the Punjab.",
    address: "G824+4F7, Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "Institute of Polymer & Textile Engineering",
    lat: 31.492025,
    lng: 74.29188,
    info: "Institute of Polymer & Textile Engineering, Faculty of Chemical and Materials Engineering, University of the Punjab.",
    address: "54400, Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },

  // ─────────────────────────────────────────────────────────
  //  ➕ NEWLY ADDED — Faculty of Education
  // ─────────────────────────────────────────────────────────

  {
    name: "Institute of Education & Research",
    lat: 31.503563,
    lng: 74.309313,
    info: "Institute of Education & Research (IER), Faculty of Education, University of the Punjab. Houses multiple sub-departments including Elementary, Secondary and Early Childhood Education.",
    address: "Quaid-i-Azam Campus, Lahore, 54000, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "Institute of Special Education",
    lat: 31.502973,
    lng: 74.311795,
    info: "Institute of Special Education, Faculty of Education, University of the Punjab.",
    address: "G836+5PM, Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },

  // ─────────────────────────────────────────────────────────
  //  ➕ NEWLY ADDED — Faculty of Electrical, Energy & Environmental Engineering
  // ─────────────────────────────────────────────────────────

  {
    name: "Institute of Energy & Environmental Engineering",
    lat: 31.495185,
    lng: 74.295135,
    info: "Institute of Energy & Environmental Engineering, Faculty of Electrical, Energy & Environmental Engineering, University of the Punjab.",
    address: "F7WW+33C, Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },

  // ─────────────────────────────────────────────────────────
  //  ➕ NEWLY ADDED — Faculty of Geo-Sciences
  // ─────────────────────────────────────────────────────────

  {
    name: "Centre for Geographical Information System (GIS)",
    lat: 31.479572,
    lng: 74.265977,
    info: "Centre for Geographical Information System (GIS), Faculty of Geo-Sciences, University of the Punjab.",
    address: "F7H8+R9H Center of GIS, Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "Centre For Integrated Mountain Research (CIMR)",
    lat: 31.493663,
    lng: 74.292328,
    info: "Centre for Integrated Mountain Research (CIMR), Faculty of Geo-Sciences, University of the Punjab.",
    address:
      "F7VR+FW8, P.O. Box No. 54590, Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "College of Earth & Environmental Sciences",
    lat: 31.496813,
    lng: 74.294938,
    info: "College of Earth & Environmental Sciences, Faculty of Geo-Sciences, University of the Punjab.",
    address: "Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "Institute of Geography",
    lat: 31.501938,
    lng: 74.308438,
    info: "Institute of Geography, Faculty of Geo-Sciences, University of the Punjab.",
    address: "G825+PHC, Quaid-i-Azam Campus, Lahore, 54590, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "Institute of Geology",
    lat: 31.502047,
    lng: 74.308066,
    info: "Institute of Geology, Faculty of Geo-Sciences, University of the Punjab.",
    address:
      "G825+R68, Punjab University Rd, Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },

  // ─────────────────────────────────────────────────────────
  //  ➕ NEWLY ADDED — Faculty of Health Sciences
  // ─────────────────────────────────────────────────────────

  {
    name: "Centre for Applied Molecular Biology (CAMB)",
    lat: 31.477937,
    lng: 74.263492,
    info: "Centre for Applied Molecular Biology (CAMB), Faculty of Health Sciences, University of the Punjab.",
    address:
      "West, Sector 3, 87 Canal Rd, Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "Department of Public Health",
    lat: 31.49534184129732,
    lng: 74.29379996886966,
    info: "Department of Public Health, Faculty of Health Sciences, University of the Punjab.",
    address: "Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },

  // ─────────────────────────────────────────────────────────
  //  ➕ NEWLY ADDED — Faculty of Information and Media Studies
  // ─────────────────────────────────────────────────────────

  {
    name: "Institute of Information Management",
    lat: 31.501617,
    lng: 74.308125,
    info: "Institute of Information Management, Faculty of Information and Media Studies, University of the Punjab.",
    address: "G825+J6X, Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "School of Communication Studies",
    lat: 31.494097,
    lng: 74.300851,
    info: "School of Communication Studies, Faculty of Information and Media Studies, University of the Punjab. Pakistan's oldest journalism school.",
    address:
      "University of the Punjab New Campus, Quaid-i-Azam Campus, Lahore, 54590, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },

  // ─────────────────────────────────────────────────────────
  //  ➕ NEWLY ADDED — Faculty of Islamic Studies
  // ─────────────────────────────────────────────────────────

  {
    name: "Institute of Islamic Studies",
    lat: 31.488517,
    lng: 74.294664,
    info: "Institute of Islamic Studies, Faculty of Islamic Studies, University of the Punjab.",
    address: "F7QV+CV3, Unnamed Road, Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "Sheikh Zayed Islamic Centre",
    lat: 31.490817,
    lng: 74.29484,
    info: "Sheikh Zayed Islamic Centre, Faculty of Islamic Studies, University of the Punjab.",
    address:
      "Block D, Canal View Colony, F7RV+8WG, Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },

  // ─────────────────────────────────────────────────────────
  //  ➕ NEWLY ADDED — Faculty of Law
  // ─────────────────────────────────────────────────────────

  {
    name: "University Law College",
    lat: 31.497821,
    lng: 74.302307,
    info: "University Law College, Faculty of Law, University of the Punjab. Established in 1868, one of the oldest law schools in Pakistan.",
    address: "F8X2+4WF, Canal Rd, Quaid-i-Azam Campus, Lahore, 54590, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },

  // ─────────────────────────────────────────────────────────
  //  ➕ NEWLY ADDED — Faculty of Life-Sciences
  // ─────────────────────────────────────────────────────────

  {
    name: "Institute of Botany",
    lat: 31.501322,
    lng: 74.307335,
    info: "Institute of Botany, Faculty of Life-Sciences, University of the Punjab.",
    address: "G824+GW, Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "Institute of Microbiology and Molecular Genetics",
    lat: 31.495939,
    lng: 74.296004,
    info: "Institute of Microbiology and Molecular Genetics, Faculty of Life-Sciences, University of the Punjab.",
    address:
      "Punjab University North Underpass, Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "Institute of Zoology",
    lat: 31.501688,
    lng: 74.306813,
    info: "Institute of Zoology, Faculty of Life-Sciences, University of the Punjab.",
    address: "G824+MPF, Quaid-i-Azam Campus, Lahore, 54000, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "National Centre of Excellence in Molecular Biology",
    lat: 31.477946,
    lng: 74.262204,
    info: "National Centre of Excellence in Molecular Biology (CEMB), Faculty of Life-Sciences, University of the Punjab.",
    address:
      "Sector-1, 87 West Canal Rd, Quaid-i-Azam Campus, Lahore, 53700, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "School of Biological Sciences",
    lat: 31.501445,
    lng: 74.304855,
    info: "School of Biological Sciences (SBS), Faculty of Life-Sciences, University of the Punjab. Specialises in M.Phil and PhD in Molecular Biology.",
    address: "University of the Punjab, Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },

  // ─────────────────────────────────────────────────────────
  //  ➕ NEWLY ADDED — Faculty of Oriental Learning
  // ─────────────────────────────────────────────────────────

  {
    name: "Confucius Institute",
    lat: 31.502437,
    lng: 74.307448,
    info: "Confucius Institute, Faculty of Oriental Learning, University of the Punjab. Offers Chinese language and culture courses.",
    address: "G824+XXG, Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "Department of Arabic",
    lat: 31.502561,
    lng: 74.308636,
    info: "Department of Arabic, Faculty of Oriental Learning, University of the Punjab.",
    address: "Geology Building, Quaid-i-Azam Campus, Lahore, 54590, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },

  // ─────────────────────────────────────────────────────────
  //  ➕ NEWLY ADDED — Faculty of Quality & Industrial Systems Engineering
  // ─────────────────────────────────────────────────────────

  {
    name: "Institute of Quality & Technology Management",
    lat: 31.496234873819887,
    lng: 74.30105325585001,
    info: "Institute of Quality & Technology Management (IQTM), Faculty of Quality & Industrial Systems Engineering, University of the Punjab.",
    address:
      "F8W2+G95, PU Cemetery Trail, Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "Institute of Industrial Engineering & Management",
    lat: 31.496437969563047,
    lng: 74.30100497266258,
    info: "Institute of Industrial Engineering & Management, Faculty of Quality & Industrial Systems Engineering, University of the Punjab.",
    address: "Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  // ─────────────────────────────────────────────────────────
  //  ➕ NEWLY ADDED — Faculty of Science
  // ─────────────────────────────────────────────────────────

  {
    name: "Centre of Excellence in Solid State Physics",
    lat: 31.500161,
    lng: 74.307184,
    info: "Centre of Excellence in Solid State Physics, Faculty of Science, University of the Punjab.",
    address: "Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "College of Statistical and Actuarial Sciences",
    lat: 31.487272,
    lng: 74.290709,
    info: "College of Statistical and Actuarial Sciences (CSAS), Faculty of Science, University of the Punjab.",
    address: "F7PR+J5M, Canal Rd, Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "Department of Physics",
    lat: 31.501928387930946,
    lng: 74.307623,
    info: "Department of Physics, Faculty of Science, University of the Punjab.",
    address: "Department of Physics, Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "Institute of Mathematics",
    lat: 31.501438,
    lng: 74.308313,
    info: "Institute of Mathematics, Faculty of Science, University of the Punjab.",
    address: "Public Sector, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "School of Chemistry",
    lat: 31.501018,
    lng: 74.306827,
    info: "School of Chemistry, Faculty of Science, University of the Punjab. Established as University Chemical Laboratories in 1923.",
    address:
      "G824+CP4, University of The Punjab, Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "PUCIT New Campus",
    lat: 31.480564254982212,
    lng: 74.26517796672314,
    info: "PUCIT New Campus, University of the Punjab.",
    address:
      "University of The Punjab, New Campus, Hanjarwal Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "PUCIT Old Campus",
    lat: 31.570386681595636,
    lng: 74.30962225521036,
    info: "PUCIT Old Campus, University of the Punjab.",
    address:
      "University of The Punjab, Old Campus, , Allama Iqbal Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "Institute of Special Education",
    lat: 31.503020016223864,
    lng: 74.31181353942243,
    info: "Institute of Special Education, University of the Punjab.",
    address: "University of The Punjab, Quaid-e-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
];

const hostels = [
  // ─────────────────────────────────────────────────────────
  //  🏠 BOYS HOSTELS
  // ─────────────────────────────────────────────────────────

  {
    name: "Boys Hostel No. 1 — Quaid-e-Azam Hall",
    lat: 31.498664,
    lng: 74.309689,
    info: "Boys Hostel No. 1 (Quaid-e-Azam Hall), University of the Punjab, Quaid-i-Azam Campus. One of the oldest boys hostels on campus.",
    address:
      "1 Punjab University Hostel Rd, Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "Boys Hostel No. 2 — Sir Syed International Hall",
    lat: 31.499147162263082,
    lng: 74.30848541882162,
    info: "Boys Hostel No. 2 (Sir Syed International Hall), University of the Punjab, Quaid-i-Azam Campus. Known for its modern facilities and academic support.",
    address:
      "2 Punjab University Hostel Rd, Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "Boys Hostel No. 3 — Allama Iqbal Hall",
    lat: 31.499438,
    lng: 74.309063,
    info: "Boys Hostel No. 3 (Allama Iqbal Hall), University of the Punjab. Named after Allama Iqbal. Popular hostel with good mess and study facilities.",
    address: "Quaid-i-Azam Campus, Lahore, 05054, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "Boys Hostel No. 4 - Moulana Muhammad Ali Johar Hall",
    lat: 31.500438,
    lng: 74.309688,
    info: "Boys Hostel No. 4, University of the Punjab. One of the most well-reviewed boys hostels on campus, known for its clean environment and cooperative staff.",
    address: "Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "Boys Hostel No. 7 - Aurang Zaib Alamgir Hall",
    lat: 31.499002679052037,
    lng: 74.30981249999999,
    info: "Boys Hostel No. 7, University of the Punjab. One of the most well-reviewed boys hostels on campus, known for its clean environment and cooperative staff.",
    address: "Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "Boys Hostel No. 8 - Tipu Sultan Hall",
    lat: 31.499894617700548,
    lng: 74.31075127287595,
    info: "Boys Hostel No. 8, University of the Punjab. One of the most well-reviewed boys hostels on campus, known for its clean environment and cooperative staff.",
    address: "Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "Boys Hostel No. 9 — Liaqat Ali Hall",
    lat: 31.500438,
    lng: 74.311188,
    info: "Boys Hostel No. 9, University of the Punjab. Features an air-conditioned study room and is highly rated among PU hostels.",
    address: "Quaid-i-Azam Campus, Lahore, 54590, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "Boys Hostel No. 11 — Salahuddin Ayubi Hall",
    lat: 31.500931,
    lng: 74.310497,
    info: "Boys Hostel No. 11 (Salahuddin Ayubi Hall), University of the Punjab. Near Gate 4 on Canal Road. Known for its spacious rooms and clean washrooms.",
    address:
      "University of the Punjab, Quaid-i-Azam Campus, Lahore, 54000, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "Boys Hostel No. 14 — Chaudhry Rehmat Ali Hall",
    lat: 31.493313,
    lng: 74.303063,
    info: "Boys Hostel No. 14 (Chaudhry Rehmat Ali Hall), University of the Punjab. A student hostel with cafeteria, masjid, laundry, study rooms and residential facilities.",
    address: "F8V3+86G, Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "Boys Hostel No. 15 - Hazrat Umar Farooq Hall",
    lat: 31.49279668087438,
    lng: 74.30251152065067,
    info: "Boys Hostel No. 15, University of the Punjab, Quaid-i-Azam Campus. Houses students from across Pakistan.",
    address: "F8Q3+932, Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "Boys Hostel No. 18 - Hazrat Usman Ghani Hall",
    lat: 31.492168744409177,
    lng: 74.30373906976722,
    info: "Boys Hostel No. 18, University of the Punjab, Quaid-i-Azam Campus. Houses students from across Pakistan.",
    address: "F8Q3+932, Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "Boys Hostel No. 19 - Hazrat Abu Bakar Siddique Hall",
    lat: 31.492443202081038,
    lng: 74.30388927346456,
    info: "Boys Hostel No. 19, University of the Punjab, Quaid-i-Azam Campus. Houses students from across Pakistan.",
    address: "F8Q3+932, Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },

  // ─────────────────────────────────────────────────────────
  //  🏠 GIRLS HOSTELS
  // ─────────────────────────────────────────────────────────

  {
    name: "Girls Hostel No. 1 - Fatima Jinnah Hall",
    lat: 31.495288,
    lng: 74.306536,
    info: "Girls Hostel No. 1, University of the Punjab. Considered one of the best-managed girls hostels on campus with modern facilities.",
    address: "F8W4+4J7, Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "Girls Hostel No. 2 - Hazrat Ayesha Sadique Hall",
    lat: 31.49631,
    lng: 74.305842,
    info: "Girls Hostel No. 2, University of the Punjab. Available to regular PU students on merit basis.",
    address: "Girls Hostel Rd, Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "Girls Hostel No. 3 - Hazrat Maryam Hall",
    lat: 31.494951445273337,
    lng: 74.3049335581072,
    info: "Girls Hostel No. 3 - Hazrat Maryam Hall, University of the Punjab. Available to regular PU students on merit basis.",
    address: "Girls Hostel Rd, Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "Girls Hostel No. 4 — Khadija & Amna Hall",
    lat: 31.494464650323096,
    lng: 74.30583339546662,
    info: "Girls Hostel No. 4 (Khadija Hall & Amna Hall), University of the Punjab. One of the largest girls hostels on campus with two residential halls.",
    address: "F8V3+PPR, Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "Girls Hostel No. 5 — Hazrat Zainab Hall",
    lat: 31.494047,
    lng: 74.303879,
    info: "Girls Hostel No. 5 (Hazrat Zainab Hall), University of the Punjab. Located on Canal Road with vast lawns and a peaceful environment.",
    address: "Canal Rd, Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "Girls Hostel No. 6 - Hazrat Rabia Basri Hall",
    lat: 31.493474,
    lng: 74.304832,
    info: "Girls Hostel No. 6, University of the Punjab. Good infrastructure with cooperative staff and lush green surroundings.",
    address:
      "19 Punjab University Hostel Rd, Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "Girls Hostel No. 7 - Hazrat Asma Hall",
    lat: 31.491509,
    lng: 74.301446,
    info: "Girls Hostel No. 7, University of the Punjab. Known for its canteen (especially biryani and pulao). One of the older hostels on campus.",
    address: "F8R2+JH4, Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "Girls Hostel No. 8 — Hazrat Hafsa Hall",
    lat: 31.493187,
    lng: 74.297154,
    info: "Girls Hostel No. 8 (Hazrat Hafsa Hall), University of the Punjab. Located on the western side of Quaid-i-Azam Campus.",
    address: "F7VW+7VC, Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "Girls Hostel No. 9 — Hazrat Sakina Hall",
    lat: 31.489995,
    lng: 74.301331,
    info: "Girls Hostel No. 9 (Hazrat Sakina Hall), University of the Punjab. Open 24 hours on weekdays. Spacious rooms with a lush green environment.",
    address:
      "F8Q2+XGW, Girls Hostel Rd, Quaid-i-Azam Campus, Lahore, 54000, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "Girls Hostel No. 10",
    lat: 31.490861156479443,
    lng: 74.29962065092434,
    info: "Girls Hostel No. 10, University of the Punjab. Located near the main entrance with easy access to academic buildings.",
    address:
      "F8Q2+XGW, Girls Hostel Rd, Quaid-i-Azam Campus, Lahore, 54000, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "Girls Hostel No. 11 - Aqsa Hall",
    lat: 31.491748,
    lng: 74.301594,
    info: "Girls Hostel No. 11, University of the Punjab. Located near Canal Bank Road, Wafaqi Colony. Peaceful environment with good canteen.",
    address:
      "319/2, Canal Bank Road, near Wafaqi Colony, Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "Girls Hostel No. 12 — Hazrat Bibi Asiya Hall",
    lat: 31.491452,
    lng: 74.302976,
    info: "Girls Hostel No. 12 (Hazrat Bibi Asiya Hall), University of the Punjab. Affordable hostel with 2, 4, and 5-seater rooms, mess, 24/7 electricity and geyser.",
    address: "Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "Girls Sports Hostel",
    lat: 31.494286,
    lng: 74.304958,
    info: "Girls Sports Hostel, University of the Punjab. Dedicated hostel for sportswomen representing the university.",
    address: "F8V3+PX8, Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },

  // ─────────────────────────────────────────────────────────
  //  🎓 POSTGRADUATE / PhD HOSTELS
  // ─────────────────────────────────────────────────────────

  {
    name: "SBS MPhil & PhD Hostel",
    lat: 31.502307,
    lng: 74.313454,
    info: "SBS MPhil & PhD Hostel, University of the Punjab. Exclusively for MPhil and PhD students. Well-equipped, comfortable rooms in a lavish setting.",
    address: "G827+W9G, Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "New Girls PhD Hostel",
    lat: 31.501774,
    lng: 74.312879,
    info: "New Girls PhD Hostel, University of the Punjab. Newly built postgraduate hostel for female PhD students with modern facilities.",
    address:
      "G827+P52, Punjab University Hostel Rd, Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },

  // ─────────────────────────────────────────────────────────
  //  👨‍🏫 STAFF / FACULTY HOSTEL
  // ─────────────────────────────────────────────────────────

  {
    name: "Staff Hostel — Faisal Hall No. 10",
    lat: 31.501312,
    lng: 74.312211,
    info: "Staff Hostel No. 10 (Faisal Hall), University of the Punjab. Family accommodation for university faculty and staff members.",
    address: "G826+GVG, Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
];

const grounds = [
  {
    name: "Punjab University Cricket Ground",
    lat: 31.499978331208045,
    lng: 74.31441645404985,
    info: "Main cricket ground for sports activities.",
    address: "Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "Punjab University Hockey Ground",
    lat: 31.498160671542212,
    lng: 74.31147969351804,
    info: "Main hockey ground for sports activities.",
    address: "Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "Punjab University Football Ground",
    lat: 31.497061498875247,
    lng: 74.31221610672185,
    info: "Football field for matches and training.",
    address: "University of the Punjab, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "Basketball Court",
    lat: 31.49132753608863,
    lng: 74.30391509315724,
    info: "Basketball court with modern facilities.",
    address: "Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "PU Tennis Court",
    lat: 31.503522016500625,
    lng: 74.30035903006195,
    info: "Tennis court for recreational activities.",
    address: "University of the Punjab, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "Punjab University Swimming Pool",
    lat: 31.497207200000002,
    lng: 74.3084662,
    info: "Olympic-size swimming pool open to students and staff for aquatic training.",
    address: "Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "University of the Punjab Sports Complex",
    lat: 31.4952773,
    lng: 74.3111318,
    info: "Multi-sport indoor complex with table tennis, fitness halls, and gym.",
    address: "Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "Punjab University Jogging Track",
    lat: 31.4990049,
    lng: 74.31121,
    info: "Scenic jogging and walking track running through the campus greenbelt.",
    address: "Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "PU Cricket Ground (North)",
    lat: 31.504322199999997,
    lng: 74.3049229,
    info: "Secondary cricket ground in the northern zone of campus.",
    address: "Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "Squash Court Punjab University",
    lat: 31.494560300000003,
    lng: 74.30165509999999,
    info: "On-campus squash courts for student and faculty use.",
    address: "Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "New Campus Botanical Garden",
    lat: 31.4994148,
    lng: 74.2997247,
    info: "Lush botanical garden with diverse plant species for recreation and study.",
    address: "Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "Punjab University Graveyard",
    lat: 31.496350699999997,
    lng: 74.2988044,
    info: "Campus graveyard located near the South Underpass within campus boundaries.",
    address: "Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },

  // ── NEW additions found in this search ──

  {
    name: "VC Ground",
    lat: 31.502050299999993,
    lng: 74.3042297,
    info: "Open green ground near the VC office, popular for jogging and recreational walks.",
    address: "Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "PURS Lawn (STC Punjab University)",
    lat: 31.4978436,
    lng: 74.30879999999999,
    info: "Open lawn space used by students for discussions, meetings, and recreational activities.",
    address: "Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "PU Girls Sports Hostel Ground",
    lat: 31.4964208242959,
    lng: 74.3075171779622,
    info: "Dedicated sports ground attached to the Girls Hostel for female athletes.",
    address: "Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "PU Seed Research Farms",
    lat: 31.498835660275972,
    lng: 74.29893486771515,
    info: "Research and botanical garden maintained by the Seed Research Center on campus.",
    address: "Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
];

const gates = [
  {
    name: "Main Gate",
    lat: 31.49,
    lng: 74.294,
    info: "Main entrance to the university.",
    address: "Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "North Gate",
    lat: 31.492,
    lng: 74.296,
    info: "North gate entrance.",
    address: "University of the Punjab, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "South Gate",
    lat: 31.494,
    lng: 74.298,
    info: "South gate entrance.",
    address: "Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "East Gate",
    lat: 31.496,
    lng: 74.3,
    info: "East gate entrance.",
    address: "University of the Punjab, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "West Gate",
    lat: 31.498,
    lng: 74.302,
    info: "West gate entrance.",
    address: "Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
];

//  Routes constant data
const routes = [
  {
    id: 1, // Aap apni preference ke mutabiq ID change kar sakte hain
    name: "Barki Route",
    desc: "Via Canal Road, Dharampura & Barki Road",
    color: "#ef4444",
    waypoints: [
      {
        lat: 31.496541,
        lng: 74.297017,
        name: "Cafe Millenials (Cafeteria PU)",
      },
      {
        lat: 31.493642,
        lng: 74.30101,
        name: "School of Communication Studies",
      },
      { lat: 31.497477, lng: 74.303717, name: "Hailey College of Commerce" },
      { lat: 31.499484, lng: 74.303228, name: "Law College Rd" },
      { lat: 31.502469, lng: 74.306643, name: "Political Science" },
      { lat: 31.5562, lng: 74.3644, name: "Dharampura / Mustafa Abad" },
      { lat: 31.549998, lng: 74.380779, name: "Sadar Cantt" },
      { lat: 31.548775, lng: 74.40511, name: "Jurray Pull" },
      { lat: 31.544989, lng: 74.419529, name: "Guldasht Town" },
      { lat: 31.543413, lng: 74.42343, name: "Chunghi Gujarpura" },
      { lat: 31.530876, lng: 74.44049, name: "Bowala" },
      { lat: 31.526598, lng: 74.44614, name: "Paragon City Main Gate" },
      { lat: 31.512221, lng: 74.464975, name: "Green City Stop" },
      { lat: 31.505416, lng: 74.473913, name: "Air Avenue / DHA Phase 8" },
      { lat: 31.502695, lng: 74.477385, name: "Pangali Stop" },
      { lat: 31.49689, lng: 74.485231, name: "Padri" },
      { lat: 31.476247, lng: 74.512797, name: "Barki Terminal" },
      { lat: 31.444362, lng: 74.556112, name: "Hudiara Drain Bridge" },
    ],
    batches: ["morning", "afternoon", "evening"],
  },
  {
    id: 2,
    name: "Khaira Pull Route",
    desc: "Via Canal Road, Mughalpura & Harbanspura",
    color: "#3b82f6",
    waypoints: [
      {
        lat: 31.496541,
        lng: 74.297017,
        name: "Cafe Millenials (Cafeteria PU)",
      },
      {
        lat: 31.493642,
        lng: 74.30101,
        name: "School of Communication Studies",
      },
      { lat: 31.497477, lng: 74.303717, name: "Hailey College of Commerce" },
      { lat: 31.499484, lng: 74.303228, name: "Law College Rd" },
      { lat: 31.502469, lng: 74.306643, name: "Political Science" },
      { lat: 31.5562, lng: 74.3644, name: "Dharampura / Mustafa Abad" },
      { lat: 31.56285, lng: 74.381346, name: "Mughalpura Underpass" },
      { lat: 31.567628, lng: 74.40556, name: "Fateh Garh" },
      { lat: 31.573618, lng: 74.434688, name: "Harbanspura" },
      {
        lat: 31.576148213172228,
        lng: 74.44673986695416,
        name: "Nawab Palace Marque",
      },
      {
        lat: 31.57935735444077,
        lng: 74.46308826135689,
        name: "Lahore Medical & Dental College",
      },
      {
        lat: 31.581618236542216,
        lng: 74.47434149993387,
        name: "Rizwan Garden",
      },
      {
        lat: 31.583726594398147,
        lng: 74.48475285089106,
        name: "Sozo Water Park",
      },
      {
        lat: 31.584812161742942,
        lng: 74.48935489938901,
        name: "Al Hafeez Garden Phase 2",
      },
      {
        lat: 31.586856201427096,
        lng: 74.50047242575347,
        name: "Khaira Pull (Terminal)",
      },
    ],
    batches: ["morning", "afternoon", "evening"],
  },
  {
    id: 3,
    name: "New Campus to Old Campus",
    desc: "Connecting Quaid-i-Azam Campus to Allama Iqbal Campus",
    color: "#10b981", // Purple color for distinction
    waypoints: [
      {
        lat: 31.496541,
        lng: 74.297017,
        name: "Cafe Millenials (Cafeteria PU)",
      },
      {
        lat: 31.493642,
        lng: 74.30101,
        name: "School of Communication Studies",
      },
      {
        lat: 31.497477,
        lng: 74.303717,
        name: "Hailey College of Commerce",
      },
      { lat: 31.499484, lng: 74.303228, name: "Law College Rd" },
      { lat: 31.502469, lng: 74.306643, name: "Political Science" },
      {
        lat: 31.507539013101212,
        lng: 74.3059521883618,
        name: "Gate Number 4",
      },
      { lat: 31.511999, lng: 74.305264, name: "Wahdat Road" },
      { lat: 31.520766, lng: 74.323958, name: "Muslim Town" },
      { lat: 31.531854505634094, lng: 74.32111352517597, name: "Ichra" },
      {
        lat: 31.553733696611516,
        lng: 74.31164281959362,
        name: "Jahanghiaz East",
      },
      {
        lat: 31.560996092095248,
        lng: 74.30761106658598,
        name: "Mozang",
      },
      { lat: 31.56243116119036, lng: 74.30470200622051, name: "MAO College" },
      {
        lat: 31.571449664749508,
        lng: 74.30922250514533,
        name: "PU Old Campus (Terminal)",
      },
    ],
    batches: ["morning", "afternoon", "evening"],
  },
  {
    id: 4,
    name: "Ada Plot Route",
    desc: "Via Johar Town, Shaukat Khanum & Raiwind Road",
    color: "#f59e0b",
    waypoints: [
      {
        lat: 31.496541,
        lng: 74.297017,
        name: "Cafe Millenials (Cafeteria PU)",
      },
      {
        lat: 31.493642,
        lng: 74.30101,
        name: "School of Communication Studies",
      },
      { lat: 31.497477, lng: 74.303717, name: "Hailey College of Commerce" },
      { lat: 31.499484, lng: 74.303228, name: "Law College Rd" },
      { lat: 31.502469, lng: 74.306643, name: "Political Science" },
      {
        lat: 31.50523651822226,
        lng: 74.31060052454252,
        name: "PU campus",
      },
      {
        lat: 31.480059950993205,
        lng: 74.28021533590046,
        name: "Doctor's Hospital",
      },
      {
        lat: 31.478688114899114,
        lng: 74.27545837164352,
        name: "Johar Town G-Block",
      },
      {
        lat: 31.473192270342544,
        lng: 74.25159225775484,
        name: "Tokar Niaz Baig",
      },
      {
        lat: 31.464204015829772,
        lng: 74.24394691894824,
        name: "Ali Town",
      },
      {
        lat: 31.45937455652966,
        lng: 74.24467603893152,
        name: "Nawab Town",
      },
      {
        lat: 31.455045876899828,
        lng: 74.24524718092674,
        name: "Choopa St.",
      },
      {
        lat: 31.443203330330523,
        lng: 74.23293570420232,
        name: "Hassan Abad",
      },
      {
        lat: 31.425216946383813,
        lng: 74.23015179793327,
        name: "University of the South Asia",
      },
      {
        lat: 31.41911661656825,
        lng: 74.22978885479748,
        name: "Superior University Gold Campus",
      },
      {
        lat: 31.399496406790917,
        lng: 74.23007688791203,
        name: "Ali Fatima Hospital",
      },
      {
        lat: 31.379018178268307,
        lng: 74.23023512052231,
        name: "Ripha Univeristy",
      },
      {
        lat: 31.363782499303547,
        lng: 74.23441897886761,
        name: "Ada Plot (Terminal)",
      },
    ],
    batches: ["morning", "afternoon", "evening"],
  },
  {
    id: 5,
    name: "Kasur Road Route",
    desc: "Via Gujranwala Road & Northern Bypass",
    color: "#ec4899",
    waypoints: [
      {
        lat: 31.496541,
        lng: 74.297017,
        name: "Cafe Millenials (Cafeteria PU)",
      },
      {
        lat: 31.493642,
        lng: 74.30101,
        name: "School of Communication Studies",
      },
      { lat: 31.497477, lng: 74.303717, name: "Hailey College of Commerce" },
      { lat: 31.499484, lng: 74.303228, name: "Law College Rd" },
      { lat: 31.502469, lng: 74.306643, name: "Political Science" },
      { lat: 31.49, lng: 74.318, name: "Kalma Chowk" },
      { lat: 31.468, lng: 74.325, name: "Model Town Mor" },
      { lat: 31.448, lng: 74.338, name: "Chungi Amar Sidhu" },
      { lat: 31.428, lng: 74.348, name: "Gajju Mata (Metro Last Station)" },
      { lat: 31.385, lng: 74.362, name: "Kahna Nau" },
      { lat: 31.32, lng: 74.395, name: "Lilliani (Mustafabad)" },
      { lat: 31.245, lng: 74.43, name: "Raja Jang" },
      { lat: 31.185, lng: 74.45, name: "Landa Bazar Kasur" },
      { lat: 31.118, lng: 74.445, name: "Kasur Terminal (Ghanda Singh Rd)" },
    ],
    batches: ["morning", "afternoon", "evening"],
  },
  {
    id: 6,
    name: "Sheikhupura Route",
    desc: "Via Samanabad, Saggian Bridge & Sheikhupura Road",
    color: "#6366f1",
    waypoints: [
      {
        lat: 31.496541,
        lng: 74.297017,
        name: "Cafe Millenials (Cafeteria PU)",
      },
      {
        lat: 31.493642,
        lng: 74.30101,
        name: "School of Communication Studies",
      },
      { lat: 31.497477, lng: 74.303717, name: "Hailey College of Commerce" },
      { lat: 31.499484, lng: 74.303228, name: "Law College Rd" },
      { lat: 31.502469, lng: 74.306643, name: "Political Science" },
      { lat: 31.520543, lng: 74.295432, name: "Samanabad Mor" },
      { lat: 31.531234, lng: 74.288765, name: "Yateem Khana Chowk" },
      { lat: 31.558901, lng: 74.265432, name: "Saggian Bridge" },
      { lat: 31.585678, lng: 74.234567, name: "Kot Abdul Malik" },
      { lat: 31.621234, lng: 74.185432, name: "Javed Nagar" },
      { lat: 31.654321, lng: 74.125678, name: "Chahuran Stop" },
      { lat: 31.685678, lng: 74.085432, name: "Feroze Wattwan" },
      { lat: 31.701234, lng: 74.045678, name: "Sheikhupura Bypass" },
      { lat: 31.712345, lng: 74.015432, name: "Hiran Minar Interchange" },
      { lat: 31.716543, lng: 73.985432, name: "Batti Chowk Sheikhupura" },
      { lat: 31.710578, lng: 73.995354, name: "Sheikhupura Terminal" },
    ],
    batches: ["morning", "afternoon"],
  },
];

module.exports = {
  campuses,
  hostels,
  grounds,
  gates,
  routes,
};

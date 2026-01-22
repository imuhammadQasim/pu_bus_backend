const campuses = [
  {
    name: "Department of Gender Studies",
    lat: 31.49572873662415,
    lng: 74.29423081315865,
    info: "Department of Gender Studies.",
    address: "University of the Punjab, Quaid-i-Azam Campus, Lahore, Pakistan",
    image:
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxW4hSco0Tph5fOVszIk_uSeqnxBMtuJ0P9YRfq2RUrk7BYpjHhjzy3S4v5_03j8QiQSqky7GJ_NgZ7gQbgbuDWvAQRcLTU0V_2m63ZnMinaHURY23B56onACTtzz3afbbyjUQu=w288-h114-p-k-no",
  },
  {
    name: "School of Economics PU",
    lat: 31.50280571894848,
    lng: 74.3075985425132,
    info: "School of Economics PU.",
    address: "University of the Punjab, Quaid-i-Azam Campus, Lahore, Pakistan",
    image:
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwEBWqFycgN7yPZpxusXkhgLlIhujNcgQtR6-P-cTL7BV59FRqirRaKqZd-hHX8JavxtziIeFXB5MSXwKy36qqmrvfSEy1iCgsU0amZ32VFAVFq6IMffX2KTGIkLJ0iAy05kXMK-g=w288-h114-p-k-no",
  },
  {
    name: "Department of Elementary Education",
    lat: 31.503994894453516,
    lng: 74.30944390230988,
    info: "Department of Elementary Education.",
    address: "G835+HQ4, Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "Institute of Electrical Electronics and Computer Engineering",
    lat: 31.500299994069707,
    lng: 74.30476297826284,
    info: "Institute of Electrical Electronics and Computer Engineering",
    address: "Quaid-i-Azam Campus, Lahore, Pakistan",
    image:
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwiHe3hnh4JN4sVbRjwCLBjoPZuQrpWUydk186YxJIAMtDe0xG1KX0ozgLq3SnXFysNGaDiGX7VjxzqwVMZ7D_RsJG0pARzMQGceZ7RBDdet_9bkH7B6BGO8bTKnfp7r-6yTsN4=w288-h114-p-k-no",
  },
  {
    name: "Department of Political Science",
    lat: 31.502918708192517,
    lng: 74.30748330783867,
    info: "Department of Political Science.",
    address: "G834+4XP, Quaid-i-Azam Campus, Lahore, Pakistan",
    image:
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzsrHGxaAfWFmMdCz2TGjJRfuq8kdex0J3L1EtLLcU6usttpECxeHmOw5U77zKYXVoGR2BLkVfL-Ulhs0fPYcril_ET-x7KOBaRCDPzi-K4TrehCSiOXEFr2RGg3dKZ2KjYSJb9=w288-h114-p-k-no",
  },
  {
    name: "Institute of Chemical Engineering & Technology, PU",
    lat: 31.500778156798596,
    lng: 74.30579888058399,
    info: "Institute of Chemical Engineering & Technology, PU.",
    address: "Quaid-i-Azam Campus, Lahore, Pakistan",
    image:
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyf8P7XulvRRkTo4MmV2yhnd1MIO5Rv34LjHBjew4gHlCBU6pAlE9FGrpp1_RSRLY0SY55nSsY_T6gMVm4nt3Z7Aat9zzEZqAa95TowW8_fsQMDJPhSwx10EKszeERv4F0hmng7Hw=w288-h114-p-k-no",
  },
  {
    name: "CHEP (Centre for High Energy Physics)",
    lat: 31.502552805439862,
    lng: 74.30555211735599,
    info: "CHEP (Centre for High Energy Physics)",
    address: "G834+257, Quaid-i-Azam Campus, Lahore, Pakistan",
    image:
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxDnRRNRSN8C8veyfVJvxNiM9b2bzEig-p3DBLswYjVTfAXpGNSI5G8PyCZ7jZWfqYojjQWjb8t0ftpxV8p04TsGw8-ynz094DZP4xdKdEHAtXs_kbiDFURSjNCbYBhrVKb7g0=w408-h306-k-no",
  },
  {
    name: "Cell and Molecular Biology Lab",
    lat: 31.501592303915242,
    lng: 74.30682884883558,
    info: "Cell and Molecular Biology Lab, Institute of Zoology, University of the Punjab",
    address: "G824+JM8, Quaid-i-Azam Campus, Lahore, Pakistan",
    image:
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSw5R1WC21NCE47V0V2AQOWCJMh_HPMlltb5icSzd03_AQKgbVBGrdIm0hYXEVWN07UG0038FivDcSc9I5Cajtq3UZDMMLXebecQ-c_btIi5p7BWZWY4yy9qGY3IvOZ2u3LSApdwnv4Swlvf=w330-h114-p-k-no",
  },
  {
    name: "School Of Biochemistry & Biotechnology",
    lat: 31.5022875250473,
    lng: 74.30476891231734,
    info: "School Of Biochemistry & Biotechnology",
    address: "Institute of Agricultural Sciences, Punjab University, Lahore",
    image:
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzbJ8cV2_I-WFSPIy6rKlSm3isgh9quaU1HDzUI1hhF8nD8SvP39UA08QMjTKLpsJcgyebAD4fIReXX4erANAaPETanINcb3w4p4BoI99FUGbZlpdc9Py67IPL_BykOY_AmzDns=w288-h114-p-k-no",
  },
  {
    name: "Hailey College of Commerce",
    lat: 31.497027499793482,
    lng: 74.30310594271828,
    info: "Hailey College of Commerce",
    address: "Department of Botany, Punjab University, Lahore",
    image:
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzlyARy9iJxQqhUlCK-8pPm4CXo2J1VlvChL_iJ0WtQuDes_jhvVR4ZviRGP8U_mpnzyaFMAJIadb_-BRow6398xaiSKNKuHXd5hiP8xtbBJS7Rvv9DQraQWQwWA6qjKura-3XF=w288-h114-p-k-no",
  },
  {
    name: "Department of Space Sciences",
    lat: 31.49417324049651,
    lng: 74.29309593869212,
    info: "Zoological research and wildlife conservation studies.",
    address: "University Of The Punjab, Quaid e Azam Campus, 53720, Pakistan",
    image:
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSy4OI2dZMC8zkJ8x8nX6onLi2Emzd1NbQAlbCkl_2SuLN08hjDS3ph9SmN4uckkOjoeAZCbJqwC2KfTuia0SmBHLWq-6V_FKXxdj1Urn44JC3cTYkNXGltJUXHOhUpq5D-RSanY=w288-h114-p-k-no",
  },
  {
    name: "Institute of English Studies",
    lat: 31.495170980375864,
    lng: 74.29992596550278,
    info: "Institute of English Studies",
    address: "Jannat Rd, Quaid-i-Azam Campus, Lahore, Pakistan",
    image:
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyloRyxsuG5Y4xWm-wDy2JLc64Xxul_Zb8PcKJoh1HRJmkFBTw0x6T4kZHnnt1Lds49ykoaaiptouUnNRr05M_0nI4IeI7Z25EfekVkanRfEoMvxqe4_NaBbO6TDyN_t8-5DXk=w288-h114-p-k-no",
  },
  {
    name: "Institute of Administrative Sciences",
    lat: 31.49448485468987,
    lng: 74.29840247078477,
    info: "Main university library with extensive collection of books and digital resources.",
    address:
      "F7VX+P8P Institute of Administrative Sciences, Canal Rd, Quaid-i-Azam Campus, Lahore, Pakistan",
    image:
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxg8ZfVtiQeDoFnbh1Cr6qpyW0JaKlwuMltRkOsjogANbUE_yMYYcwX6waXlFinNnNRP5MEBs8ut8QGDVmAD_kdrFmiJDuglVCRkW2QjpPCsTc9OWmwqbEB9Xy25atSUqNHeT--=w288-h114-p-k-no",
  },
];

const hostels = [
  {
    name: "Boys Hostel A",
    lat: 31.492,
    lng: 74.295,
    info: "Boys Hostel A with modern facilities.",
    address: "Near Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "Girls Hostel B",
    lat: 31.494,
    lng: 74.297,
    info: "Girls Hostel B with comfortable accommodations.",
    address: "Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "International Hostel",
    lat: 31.496,
    lng: 74.299,
    info: "International Hostel for foreign students.",
    address: "University of the Punjab, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "Faculty Residence",
    lat: 31.498,
    lng: 74.301,
    info: "Residence for faculty members.",
    address: "Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "Guest House",
    lat: 31.5,
    lng: 74.303,
    info: "Guest House for visitors.",
    address: "University of the Punjab, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
];

const grounds = [
  {
    name: "Cricket Ground",
    lat: 31.493,
    lng: 74.296,
    info: "Main cricket ground for sports activities.",
    address: "Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "Football Field",
    lat: 31.495,
    lng: 74.298,
    info: "Football field for matches and training.",
    address: "University of the Punjab, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "Basketball Court",
    lat: 31.497,
    lng: 74.3,
    info: "Basketball court with modern facilities.",
    address: "Quaid-i-Azam Campus, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "Tennis Court",
    lat: 31.499,
    lng: 74.302,
    info: "Tennis court for recreational activities.",
    address: "University of the Punjab, Lahore, Pakistan",
    image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
  },
  {
    name: "Gymnasium",
    lat: 31.501,
    lng: 74.304,
    info: "Indoor gymnasium for fitness.",
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

module.exports = {
  campuses,
  hostels,
  grounds,
  gates,
};

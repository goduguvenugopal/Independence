//independence day count down function
// Set the date we're counting down to
const countdownDate = new Date("August 15, 2024 00:00:00").getTime();
// Update the countdown every 1 second
const countdownFunction = setInterval(() => {
  // Get today's date and time
  const now = new Date().getTime();
  // Find the distance between now and the countdown date
  const distance = countdownDate - now;
  // Time calculations for days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // Display the result in the element with id="countdown"
  document.getElementById(
    "countdown1"
  ).textContent = `Registration ends in : ${days}d ${hours}h ${minutes}m ${seconds}s`;
  // If the countdown is finished, write some text
  if (distance < 0) {
    clearInterval(countdownFunction);
    document.getElementById("countdown1").textContent =
      "Happy Independence Day!";
  }
}, 1000);


// navbar toggle function 
document.addEventListener('click', function(event) {
  // Get the navbar and the toggler button
  const navbar = document.getElementById('navbarNavAltMarkup');
  const navbarToggler = document.querySelector('.navbar-toggler');

  // Check if the navbar is open and the click target is not inside the navbar or the toggler button
  if (navbar.classList.contains('show') && !navbar.contains(event.target) && !navbarToggler.contains(event.target)) {
      // Collapse the navbar
      navbarToggler.click();
  }
});

// occupation list
const occupationList = [
  "Software Developer",
  "Data Scientist",
  "Graphic Designer",
  "Teacher",
  "Doctor",
  "Nurse",
  "Engineer",
  "Lawyer",
  "Accountant",
  "Marketing Manager",
  "Sales Representative",
  "Architect",
  "Pharmacist",
  "Chef",
  "Journalist",
  "Photographer",
  "Electrician",
  "Mechanic",
  "Plumber",
  "Construction Worker",
  "Farmer",
  "Student",
  "Others",
];

// state name list

const statesList = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

// all districts names list

const allDistricts = [
  "Anantapur",
  "Chittoor",
  "East Godavari",
  "Guntur",
  "Krishna",
  "Kurnool",
  "Nellore",
  "Prakasam",
  "Srikakulam",
  "Visakhapatnam",
  "Vizianagaram",
  "West Godavari",
  "YSR Kadapa",
  "Tawang",
  "West Kameng",
  "East Kameng",
  "Papum Pare",
  "Kurung Kumey",
  "Kra Daadi",
  "Lower Subansiri",
  "Upper Subansiri",
  "West Siang",
  "East Siang",
  "Siang",
  "Upper Siang",
  "Lower Siang",
  "Lower Dibang Valley",
  "Dibang Valley",
  "Anjaw",
  "Lohit",
  "Namsai",
  "Changlang",
  "Tirap",
  "Longding",
  "Baksa",
  "Barpeta",
  "Biswanath",
  "Bongaigaon",
  "Cachar",
  "Charaideo",
  "Chirang",
  "Darrang",
  "Dhemaji",
  "Dhubri",
  "Dibrugarh",
  "Goalpara",
  "Golaghat",
  "Hailakandi",
  "Hojai",
  "Jorhat",
  "Kamrup Metropolitan",
  "Kamrup",
  "Karbi Anglong",
  "Karimganj",
  "Kokrajhar",
  "Lakhimpur",
  "Majuli",
  "Morigaon",
  "Nagaon",
  "Nalbari",
  "Dima Hasao",
  "Sivasagar",
  "Sonitpur",
  "South Salmara-Mankachar",
  "Tinsukia",
  "Udalguri",
  "West Karbi Anglong",
  "Araria",
  "Arwal",
  "Aurangabad",
  "Banka",
  "Begusarai",
  "Bhagalpur",
  "Bhojpur",
  "Buxar",
  "Darbhanga",
  "East Champaran",
  "Gaya",
  "Gopalganj",
  "Jamui",
  "Jehanabad",
  "Kaimur",
  "Katihar",
  "Khagaria",
  "Kishanganj",
  "Lakhisarai",
  "Madhepura",
  "Madhubani",
  "Munger",
  "Muzaffarpur",
  "Nalanda",
  "Nawada",
  "Patna",
  "Purnia",
  "Rohtas",
  "Saharsa",
  "Samastipur",
  "Saran",
  "Sheikhpura",
  "Sheohar",
  "Sitamarhi",
  "Siwan",
  "Supaul",
  "Vaishali",
  "West Champaran",
  "Balod",
  "Baloda Bazar",
  "Balrampur",
  "Bastar",
  "Bemetara",
  "Bijapur",
  "Bilaspur",
  "Dantewada",
  "Dhamtari",
  "Durg",
  "Gariaband",
  "Janjgir-Champa",
  "Jashpur",
  "Kabirdham",
  "Kanker",
  "Kondagaon",
  "Korba",
  "Koriya",
  "Mahasamund",
  "Mungeli",
  "Narayanpur",
  "Raigarh",
  "Raipur",
  "Rajnandgaon",
  "Sukma",
  "Surajpur",
  "Surguja",
  "North Goa",
  "South Goa",
  "Ahmedabad",
  "Amreli",
  "Anand",
  "Aravalli",
  "Banaskantha",
  "Bharuch",
  "Bhavnagar",
  "Botad",
  "Chhota Udaipur",
  "Dahod",
  "Dang",
  "Devbhoomi Dwarka",
  "Gandhinagar",
  "Gir Somnath",
  "Jamnagar",
  "Junagadh",
  "Kheda",
  "Kutch",
  "Mahisagar",
  "Mehsana",
  "Morbi",
  "Narmada",
  "Navsari",
  "Panchmahal",
  "Patan",
  "Porbandar",
  "Rajkot",
  "Sabarkantha",
  "Surat",
  "Surendranagar",
  "Tapi",
  "Vadodara",
  "Valsad",
  "Ambala",
  "Bhiwani",
  "Charkhi Dadri",
  "Faridabad",
  "Fatehabad",
  "Gurugram",
  "Hisar",
  "Jhajjar",
  "Jind",
  "Kaithal",
  "Karnal",
  "Kurukshetra",
  "Mahendragarh",
  "Nuh",
  "Palwal",
  "Panchkula",
  "Panipat",
  "Rewari",
  "Rohtak",
  "Sirsa",
  "Sonipat",
  "Yamunanagar",
  "Bilaspur",
  "Chamba",
  "Hamirpur",
  "Kangra",
  "Kinnaur",
  "Kullu",
  "Lahaul and Spiti",
  "Mandi",
  "Shimla",
  "Sirmaur",
  "Solan",
  "Una",
  "Bokaro",
  "Chatra",
  "Deoghar",
  "Dhanbad",
  "Dumka",
  "East Singhbhum",
  "Garhwa",
  "Giridih",
  "Godda",
  "Gumla",
  "Hazaribagh",
  "Jamtara",
  "Khunti",
  "Koderma",
  "Latehar",
  "Lohardaga",
  "Pakur",
  "Palamu",
  "Ramgarh",
  "Ranchi",
  "Sahibganj",
  "Seraikela Kharsawan",
  "Simdega",
  "West Singhbhum",
  "Bagalkot",
  "Ballari",
  "Belagavi",
  "Bengaluru Rural",
  "Bengaluru Urban",
  "Bidar",
  "Chamarajanagar",
  "Chikballapur",
  "Chikkamagaluru",
  "Chitradurga",
  "Dakshina Kannada",
  "Davanagere",
  "Dharwad",
  "Gadag",
  "Hassan",
  "Haveri",
  "Kalaburagi",
  "Kodagu",
  "Kolar",
  "Koppal",
  "Mandya",
  "Mysuru",
  "Raichur",
  "Ramanagara",
  "Shivamogga",
  "Tumakuru",
  "Udupi",
  "Uttara Kannada",
  "Vijayapura",
  "Yadgir",
  "Alappuzha",
  "Ernakulam",
  "Idukki",
  "Kannur",
  "Kasaragod",
  "Kollam",
  "Kottayam",
  "Kozhikode",
  "Malappuram",
  "Palakkad",
  "Pathanamthitta",
  "Thiruvananthapuram",
  "Thrissur",
  "Wayanad",
  "Agar Malwa",
  "Alirajpur",
  "Anuppur",
  "Ashoknagar",
  "Balaghat",
  "Barwani",
  "Betul",
  "Bhind",
  "Bhopal",
  "Burhanpur",
  "Chhatarpur",
  "Chhindwara",
  "Damoh",
  "Datia",
  "Dewas",
  "Dhar",
  "Dindori",
  "Guna",
  "Gwalior",
  "Harda",
  "Hoshangabad",
  "Indore",
  "Jabalpur",
  "Jhabua",
  "Katni",
  "Khandwa",
  "Khargone",
  "Mandla",
  "Mandsaur",
  "Morena",
  "Narsinghpur",
  "Neemuch",
  "Panna",
  "Raisen",
  "Rajgarh",
  "Ratlam",
  "Rewa",
  "Sagar",
  "Satna",
  "Sehore",
  "Seoni",
  "Shahdol",
  "Shajapur",
  "Sheopur",
  "Shivpuri",
  "Sidhi",
  "Singrauli",
  "Tikamgarh",
  "Ujjain",
  "Umaria",
  "Vidisha",
  "Ahmednagar",
  "Akola",
  "Amravati",
  "Aurangabad",
  "Beed",
  "Bhandara",
  "Buldhana",
  "Chandrapur",
  "Dhule",
  "Gadchiroli",
  "Gondia",
  "Hingoli",
  "Jalgaon",
  "Jalna",
  "Kolhapur",
  "Latur",
  "Mumbai City",
];

// registration form function

const formFunc = document.getElementById("formFunc");
const occupation = document.getElementById("occupation-box");
const stateBox = document.getElementById("state-box");
const cityBox = document.getElementById("city-box");
const searchCityBox = document.getElementById("search-city-box");
const fullName = document.getElementById("full-name-box");
const email = document.getElementById("email-box");

window.addEventListener("load", () => {
  // Adding the occupation options
  occupationList.map((item) => {
    occupation.innerHTML += `<option value="${item}">${item}</option>`;
  });

  // adding the state list
  statesList.map((item) => {
    stateBox.innerHTML += `<option value="${item}">${item}</option>`;
  });
});

searchCityBox.addEventListener("click", () => {
  cityBox.style.display = "block";
  allDistricts.map((item) => {
    cityBox.innerHTML += `<h6 class="district-name" onclick="city('${item}')">${item}</h6>`;
  });
});

searchCityBox.addEventListener("change", () => {
  cityBox.style.display = "block";
  const text = searchCityBox.value.trim().toLocaleLowerCase();
  cityBox.innerHTML = ""; // Clear existing items

  if (text !== "") {
    const filterD = allDistricts.filter((item) => {
      return item.toLocaleLowerCase().includes(text);
    });
    filterD.map((item) => {
      cityBox.innerHTML += `<h6 class="district-name" onclick="city('${item}')">${item}</h6>`;
    });
  } else {
    allDistricts.map((item) => {
      cityBox.innerHTML += `<h6 class="district-name" onclick="city('${item}')">${item}</h6>`;
    });
  }
});

function city(city) {
  searchCityBox.value = city;
  cityBox.style.display = "none";
}

const nameValidation = document.getElementById("name-validation");
const emailValidation = document.getElementById("email-validation");
const occuValidation = document.getElementById("occupation-validation");
const stateValidation = document.getElementById("state-validation");
const cityValidation = document.getElementById("city-validation");
const pinBox = document.getElementById("pin-box");
const valid_Email = document.getElementById("valid-email");
const formSuccPop = document.getElementById("form-pop-up");
document.getElementById("close-count-bt").addEventListener("click", () => {
  formSuccPop.style.display = "none";
});
const spin_sub_bt = document.getElementById("spin-sub-bt");

formFunc.addEventListener("click", async () => {
  const fullName1 = fullName.value.trim();
  const email1 = email.value.trim();
  const state = stateBox.value.trim();
  const occupation1 = occupation.value.trim();
  const city1 = searchCityBox.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // form validation logic
  if (fullName1 === "") {
    nameValidation.style.display = "block";
  } else if (email1 === "") {
    emailValidation.style.display = "block";
    valid_Email.style.display = "none";
  } else if (occupation1 === "") {
    occuValidation.style.display = "block";
  } else if (state === "") {
    stateValidation.style.display = "block";
  } else if (city1 === "") {
    cityValidation.style.display = "block";
  } else if (!emailRegex.test(email1)) {
    valid_Email.style.display = "block";
    emailValidation.style.display = "none";
  } else {
    formFunc.style.display = "none";
    spin_sub_bt.style.display = "block";

     

    const image =
      "https://media.istockphoto.com/id/2165184709/vector/78th-indian-independence-day-15th-august-social-media-post-poster-banner-web-banner-print.jpg?s=612x612&w=0&k=20&c=a2OQbBwD4eBj1K3VQiJ9Jw45TrNAoRcwjVBXeEQiaqk=";

    //sending email registration details
    const html = `
<h3> Dear ${fullName1},</h3>
<h3 class="mt-3"> We are thrilled to inform you that your registration for our Independence Event has been successfully completed!</h3>
<img src=${image} alt="independence" style="max-width:100%; height:200px;" class="mt-3 "/>
   <h3 class="my-1">Event details : </h3>
<h4 class="my-1">Event : Independence Day Celebration</h4>
  <h4 class="my-1">Date : 15 August 2024 </h4>
  <h4 class="my-1">Venue : Red Fort Delhi India</h4>
<h4 class="mt-3">Please find your token number and detailed information attached to this email.
Kindly print a hard copy of this email and bring it with you to the event. This will serve as your entry pass. </h4>
<h4 class="my-3">Token Number : 123456</h4>
<h4>We look forward to celebrating this special occasion with you!</h4>
<h5 class="text-secondary my-3">If you have any questions or need further assistance, please do not hesitate to contact us.</h5>
<button style="height:35px; width:130px;" class="btn bg-primary text-white"> <a class="text-white" href="https://independencei.netlify.app/" target="_blank">Contact us</a></button>
 `;

    // mail properties
    const formData = {
      to: email1,
      subject: "Independence Event Registration Confirmation",
      html: html,
    };

    try {
      // sending mail to the registration details
      const response = await fetch(
        "https://fashionkart-server.onrender.com/mail/sendmail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response) {
        nameValidation.style.display = "none";
        emailValidation.style.display = "none";
        occuValidation.style.display = "none";
        stateValidation.style.display = "none";
        valid_Email.style.display = "none";
        cityValidation.style.display = "none";
        fullName.value = "";
        email.value = "";
        stateBox.value = "";
        occupation.value = "";
        searchCityBox.value = "";
        pinBox.value = "";
        formFunc.style.display = "block";
        spin_sub_bt.style.display = "none";
        formSuccPop.style.display = "block";
      }
    } catch (error) {
      console.log(error);
      alert("Please try again registration has failed");
    }
  }
});

 // share web api function

async function shareFunc() {
  try {
    await navigator.share({
      title:
        "Hello, I’m Venugopal. Explore this amazing website and learn more about Indian Independence Day.",
      url: "https://independencei.netlify.app/",
    });
  } catch (error) {
    console.error(error);
  }
}

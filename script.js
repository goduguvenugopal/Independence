// arrow card function
window.addEventListener("scroll", function () {
  const arrow = this.document.getElementById("arrow-card2");
  if (window.scrollY > window.innerHeight * 2) {
    arrow.style.display = "block";
  } else {
    arrow.style.display = "none";
  }
});

// freedom fighters Array list
const freedomFighters = [
  "Mahatma Gandhi",
  "Jawaharlal Nehru",
  "Subhash Chandra Bose",
  "Bhagat Singh",
  "Sardar Vallabhbhai Patel",
  "Dr. B.R. Ambedkar",
  "Netaji Subhash Chandra Bose",
  "Lala Lajpat Rai",
  "Sarojini Naidu",
  "Maulana Abul Kalam Azad",
  "Bal Gangadhar Tilak",
  "C. Rajagopalachari (Rajaji)",
  "Rani Lakshmibai",
  "Dadabhai Naoroji",
  "Chandra Shekhar Azad",
  "Annie Besant",
  "Gopal Krishna Gokhale",
  "Bipin Chandra Pal",
  "Vinayak Damodar Savarkar",
  "Rajendra Prasad",
  "Aruna Asaf Ali",
  "Ashfaqulla Khan",
  "Khan Abdul Ghaffar Khan",
  "Birsa Munda",
  "Alluri Sitarama Raju",
  "Ram Prasad Bismil",
  "Khudiram Bose",
  "Chandrashekhar Azad",
  "Rani Gaidinliu",
  "Dr. Rajendra Prasad",
  "Veer Savarkar",
  "Maulana Mohammad Ali Johar",
  "Rajkumar Shukla",
  "Bhikaji Cama",
  "M.K. Gandhi (Gandhiji)",
  "Bhagat Singh",
  "Sukhdev",
  "Rajguru",
  "Batukeshwar Dutt",
  "Sucheta Kriplani",
  "Jatin Das",
  "Bahadur Shah Zafar II",
  "Begum Hazrat Mahal",
  "Jawaharlal Nehru",
  "Chittaranjan Das",
  "Kanaklata Barua",
  "Usha Mehta",
  "K. Kamaraj",
  "Khudiram Bose",
  "Rani Abbakka",
  "Surya Sen",
  "Begum Hazrat Mahal",
  "Lokmanya Tilak",
  "Jogendra Nath Mandal",
  "Veer Surendra Sai",
  "Moulvi Ahmadullah Shah",
  "Sarojini Naidu",
  "Dr. Annie Besant",
  "Gopaldas Neeraj",
  "Gopal Krishna Gokhale",
  "Matangini Hazra",
  "Batukeshwar Dutt",
  "Nana Saheb",
  "Kasturba Gandhi",
  "Usha Mehta",
  "Pritilata Waddedar",
  "Surendranath Banerjee",
  "Dr. Muthulakshmi Reddy",
  "Rani Velu Nachiyar",
  "Ram Manohar Lohia",
  "Bhikaiji Rustom Cama",
  "Vijaya Lakshmi Pandit",
  "Matangini Hazra",
  "Mangal Pandey",
  "Jawaharlal Nehru",
  "Vinayak Savarkar",
  "Nellie Sengupta",
  "Moulana Azad",
  "Govind Ballabh Pant",
  "Lala Lajpat Rai",
  "Chittaranjan Das",
  "B.R. Ambedkar",
  "Raja Ram Mohan Roy",
  "Bal Gangadhar Tilak",
  "Rani Padmini",
  "Sir Syed Ahmad Khan",
  "Rajendra Prasad",
  "Surendranath Banerjee",
  "Bipin Chandra Pal",
  "Annie Besant",
  "Kazi Nazrul Islam",
  "Shyamji Krishna Varma",
  "Mahadev Govind Ranade",
  "Dadabhai Naoroji",
  "P.V. Narasimha Rao",
  "Abul Kalam Azad",
  "Gopinath Bordoloi",
  "Lala Hansraj Gupta",
  "Jogendranath Mandal",
  "Dadabhai Naoroji",
];

// mapping all name list

const nameCard = document.getElementById("fightersList");

window.addEventListener("load", () => {
  freedomFighters.map((item, index) => {
    const nameDiv = document.createElement("div");
    nameDiv.classList.add("col-10", "col-md-3" , "name-card");
    nameDiv.textContent = `${index + 1}. ${item}`;
    nameCard.appendChild(nameDiv);
  });
});

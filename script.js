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
const namesBtn = document.getElementById("namesBtn");
const closeBtn = document.getElementById("closeBtn");
const spinnerCard = document.getElementById("spinnerCard");

namesBtn.addEventListener("click", () => {
  spinnerCard.style.display = "block";
  setTimeout(() => {
    mapFunc();
    spinnerCard.style.display = "none";
  }, 1200);
});

function mapFunc() {
  nameCard.innerHTML = "";

  freedomFighters.map((item, index) => {
    const nameDiv = document.createElement("div");
    nameDiv.classList.add("col-10", "col-md-5", "col-lg-3", "name-card");
    nameDiv.textContent = `${index + 1}. ${item}`;
    nameCard.appendChild(nameDiv);
  });
  namesBtn.style.pointerEvents = "none";
  namesBtn.style.opacity = "0.7";
  closeBtn.style.visibility = "visible";
}

// removing addEventListener
closeBtn.addEventListener("click", () => {
  nameCard.innerHTML = "";
  namesBtn.style.pointerEvents = "auto";
  namesBtn.style.opacity = "1";
  closeBtn.style.visibility = "hidden";
});

// freedomFighters Array list with names , images and about

 
const fighters = [
  { 
    name: 'Mahatma Gandhi', 
    image: '/greatestFighters/image1.jpeg', 
    about: 'Leader of the Indian independence movement and advocate of nonviolent resistance. He inspired movements for civil rights and freedom across the world. He is also known as the Father of the Nation in India for his efforts in leading the country to independence through peaceful means.'
  },
  { 
    name: 'Bal Gangadhar Tilak', 
    image: '/greatestFighters/image2.jpeg', 
    about: 'Indian nationalist, teacher, and an independence activist. He was one of the first leaders of the Indian Independence Movement and was often called "The father of Indian unrest". His famous declaration, "Swaraj is my birthright, and I shall have it," inspired many future leaders.'
  },
  { 
    name: 'Subhas Chandra Bose', 
    image: '/greatestFighters/image3.jpeg', 
    about: 'Indian nationalist whose defiant patriotism made him a hero in India. He was a prominent figure in the Indian independence movement and led the Indian National Army against British forces during World War II. His legacy continues to inspire Indians today.'
  },
  { 
    name: 'Bhagat Singh', 
    image: '/greatestFighters/image4.jpeg', 
    about: 'Indian socialist revolutionary whose acts of dramatic violence against the British government helped inspire the Indian independence movement. He is considered a hero by many Indians for his daring and commitment to the cause of freedom. His execution turned him into a martyr.'
  },
  { 
    name: 'Sardar Vallabhbhai Patel', 
    image: '/greatestFighters/image5.jpeg', 
    about: 'First Deputy Prime Minister and Home Minister of India, known for his role in the integration of the princely states into the Indian Union. He is remembered as the "Iron Man of India" for his strong leadership and efforts to unify the country after independence.'
  },
  { 
    name: 'Jawaharlal Nehru', 
    image: '/greatestFighters/image6.jpeg', 
    about: 'First Prime Minister of India and a central figure in Indian politics both before and after independence. He was a leading figure in the Indian independence movement and worked closely with Mahatma Gandhi. His policies shaped modern India.'
  },
  { 
    name: 'Chandra Shekhar Azad', 
    image: '/greatestFighters/image7.jpeg', 
    about: 'Indian revolutionary who reorganized the Hindustan Republican Association under its new name of Hindustan Socialist Republican Association after the death of its founder, Ramprasad Bismil. He vowed never to be captured alive by the British.'
  },
  { 
    name: 'Lal Bahadur Shastri', 
    image: '/greatestFighters/image8.jpeg', 
    about: 'Second Prime Minister of India and a senior leader of the Indian National Congress. He promoted the White Revolution – a national campaign to increase the production and supply of milk – and the Green Revolution to boost India’s food production.'
  },
  { 
    name: 'Dr Rajendra Prasad', 
    image: '/greatestFighters/image9.jpeg', 
    about: 'First President of India, serving from 1950 to 1962. He was a leader of the Indian independence movement and played a crucial role in the drafting of the Indian Constitution. He is remembered for his humility and dedication to public service.'
  },
  { 
    name: 'Gopal Krishna Gokhale', 
    image: '/greatestFighters/image10.jpeg', 
    about: 'Indian political leader, social reformer, and a senior leader of the Indian National Congress. He was a mentor to Mahatma Gandhi and advocated for social and political reforms through moderate means. He founded the Servants of India Society.'
  },
  { 
    name: "Dr. Br. Ambedkar",
    image: "/greatestFighters/image11.jpeg",
    about:
      " Dr. B.R. Ambedkar is a famous freedom fighter in India.His sacrifices had stable social ostracism and faced opposition from traditional caste hierarchies. Also, Ambedkar’s legacy continues to inspire millions of people with social justice and a symbol of hope for marginalised communities in India.",
  },
  { 
    name: 'Dadabhai Naoroji', 
    image: '/greatestFighters/image12.jpeg', 
    about: 'Indian political leader, educator, and an early Indian political and social leader. He was the first Asian to be a British MP and worked tirelessly for the cause of Indian self-rule. He is known as the "Grand Old Man of India."'
  },
  { 
    name: 'Mangal Pandey', 
    image: '/greatestFighters/image13.jpeg', 
    about: 'Indian soldier who played a key part in events immediately preceding the outbreak of the Indian rebellion of 1857. He is often considered the first martyr in India’s struggle for independence from British rule.'
  },
  { 
    name: "Alluri Sitarama Raju",
    image: "/greatestFighters/image14.jpeg",
    about:
      " Alluri Sitarama Raju was an Indian revolutionary who fought against the British colonial rule in India. He led a guerrilla campaign in the Eastern Ghats region of present-day Andhra Pradesh, mobilizing the tribal people against the oppressive forest laws and policies of the British government",
   },
  { 
    name: 'Rani Lakshmi Bai', 
    image: '/greatestFighters/image15.jpeg', 
    about: 'Queen of the Maratha-ruled princely state of Jhansi and a leader of the Indian Mutiny of 1857. She is remembered for her bravery and leadership in the fight against British rule and remains a symbol of resistance.'
  },
  { 
    name: 'Sarojini Naidu', 
    image: '/greatestFighters/image16.jpeg', 
    about: 'Indian independence activist, poet, and politician. She was the first woman to become the president of the Indian National Congress and the first woman to serve as a governor in independent India. Her literary work earned her the title "Nightingale of India."'
  }
];


const indiFightersCard = document.getElementById("indi-fighters-Card");

 

window.addEventListener("load", () => {
  let htmlContent = '';
  fighters.forEach((item) => {
    htmlContent += `<div class="col col-md-6 col-lg-4 col-xl-3">
        <div class="card shadow" style="width: 18.5rem;" id="card-for-f">
          <img src=${item.image} class="card-img-top" alt="${item.name}">
          <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">${item.about}</p>
          </div>
        </div>
      </div>`;
  });

  indiFightersCard.innerHTML = htmlContent;

  console.log(htmlContent);
});

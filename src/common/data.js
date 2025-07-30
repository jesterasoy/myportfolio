const myProjectsData = [
  {
    id: 1,
    Title: 'Plated.',
    Cover: 'plated/plated_cover.png',
    Preview:
      'A recipe website that allows users to search for recipes, view details, and save their favorites.',
    Description:
      "Plated is a recipe blog I built using PHP, HTML, CSS, TailwindCSS and JavaScript, designed to make discovering and cooking new meals simple and enjoyable. The site connects with TheMealDB API to provide users with a wide range of recipes — complete with ingredients, cooking instructions, and meal images. Visitors can browse through categories, explore international dishes, and even search for specific meals based on their cravings.\n\nWith a focus on clean design and a user-friendly interface, Plated ensures a smooth experience whether you're exploring from a desktop or a mobile device. Every feature — from the dynamic content loading to the responsive layout — is carefully crafted to make the process of finding and following recipes as easy as possible.\n\nThis project showcases my ability to work with APIs and build interactive, content-driven web applications from scratch using core web technologies. Plated reflects both my passion for web development and my goal to create useful, engaging online experiences.",
    Technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'PHP',
      'TailwindCSS',
      'TheMealDB API'
    ],
    Images: [
      'plated/plated2.png',
      'plated/plated3.png',
      'plated/plated4.png',
      'plated/plated.png'
    ],
    Year: 2025,
    Link: 'https://example.com/portfolio'
  },
  {
    id: 2,
    Title: 'Bagong Barrio Senior High School Library System',
    Cover: 'capstone/caps_cover.png',
    Preview:
      'Built for a local school, this library system allows students to search for books, view details, and manage their borrowing.',
    Description:
      "This web-based system was created specifically for Bagong Barrio Senior High School as our capstone project to streamline library operations. It allows students to search for available books, check borrowing history, and request books online. Designed with a responsive interface using React and styled with TailwindCSS, it provides a simple and intuitive user experience.\n\nThe backend was developed using Node.js and Express.js, with data stored in a MySQL database. This project demonstrates our team's ability to build a full-stack application tailored to a real-world scenario, making school library management more efficient and accessible.",
    Technologies: ['React', 'TailwindCSS', 'MySQL', 'Node.js', 'Express.js'],
    Images: [
      'capstone/login.jpg',
      'capstone/home.jpg',
      'capstone/books.jpg',
      'capstone/cart.jpg',
      'capstone/history.jpg',
      'capstone/profile.jpg'
    ],
    Year: 2024,

    Link: 'https://example.com/task-manager'
  },
  {
    id: 3,
    Title: 'IAS Project',
    Cover: 'ias/ias_cover.png',
    Preview:
      "A secure web application for viewing BINI's event schedule, featuring reCAPTCHA, session management, and SQL injection protection.",
    Description:
      'The IAS Project is our final academic project focused on implementing web security practices. The application allows users to view the official schedule of BINI, a popular P-pop girl group. It showcases secure login functionality, reCAPTCHA integration to prevent bots, session management to protect user data, and input validation to defend against SQL injection.\n\nBuilt using core frontend technologies and secured with proper backend implementations, the project demonstrates our understanding of both usability and security in web development.',
    Technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'reCAPTCHA',
      'PHP',
      'Sessions',
      'SQL Injection Prevention'
    ],
    Images: ['ias/ias.png', 'ias/ias2.png', 'ias/ias3.png'],
    Year: 2025,
    Link: 'https://example.com/bini-schedule'
  },
  {
    id: 4,
    Title: 'AK8 Travel & Tours',
    Cover: 'ak8/ak8_cover.png',
    Preview:
      'A travel booking website developed during my internship, where I focused on frontend development and dynamic data display using API calls.',
    Description:
      'AK8 Travel & Tours is a travel booking web application developed by the company I interned with. My role in the project involved working on the frontend using HTML, CSS, JavaScript, and Bootstrap to build responsive pages. I also implemented API calls to fetch and display dynamic content such as tour packages and booking details.\n\nThis experience helped me strengthen my frontend development skills and gave me real-world exposure to integrating APIs and working collaboratively in a professional development environment.',
    Technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'API Integration'],
    Images: ['ak8/ak8.png', 'ak8/ak82.png', 'ak8/ak83.png', 'ak8/ak84.jpg'],
    Year: 2025,
    Link: 'https://example.com/movie-finder'
  }
]

export default myProjectsData

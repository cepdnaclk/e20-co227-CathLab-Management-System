# CathLab Management System

A comprehensive software solution for managing catheterization laboratory operations at Peradeniya Hospital.

## Project Structure

```
CathLab-Management-System/
├── backend/                 # Django REST API backend
│   ├── manage.py
│   ├── requirements.txt
│   ├── api/                # Django app for API endpoints
│   ├── backend/            # Django project settings
│   ├── media/              # User uploaded files
│   └── staticfiles/        # Static files for production
├── frontend/               # React frontend application
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── build/              # Production build files
├── docs/                   # Documentation and GitHub Pages
├── docker-compose.yml      # Multi-container Docker setup
├── .gitignore
└── README.md
```

## Technology Stack

### Backend
- **Framework**: Django 5.0.4
- **API**: Django REST Framework
- **Authentication**: JWT (JSON Web Tokens)
- **Database**: MySQL 8.0
- **Image Processing**: OpenCV, PIL
- **Deployment**: Heroku-ready with Gunicorn

### Frontend
- **Framework**: React 18.3.1
- **Build Tool**: Vite
- **HTTP Client**: Axios
- **Charts**: Chart.js + React-ChartJS-2
- **Routing**: React Router DOM

## Features

### Core Functionality
- **Patient Management**: Centralized patient data with medical history
- **Doctor Management**: Staff profiles and specializations
- **Report Generation**: Automated medical report creation
- **Image Processing**: X-ray angiogram analysis and processing
- **Authentication**: Secure JWT-based login system
- **Dashboard**: Analytics and overview of cathlab operations

### Technical Features
- RESTful API design
- Responsive web interface
- Real-time data updates
- Secure file upload and storage
- Cross-origin resource sharing (CORS) enabled
- Production-ready deployment configuration

## Quick Start

### Prerequisites
- Python 3.8+
- Node.js 14+
- MySQL 8.0
- Docker (optional)

### Using Docker (Recommended)
```bash
# Clone the repository
git clone <repository-url>
cd CathLab-Management-System

# Start all services
docker-compose up -d

# Access the application
# Frontend: http://localhost:3000
# Backend API: http://localhost:8000
```

### Manual Setup

#### Backend Setup
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

#### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

## Environment Variables

Create `.env` files in the respective directories:

### Backend (.env)
```
SECRET_KEY=your-secret-key
DEBUG=True
DATABASE_URL=mysql://user:password@localhost:3306/cathlab_db
ALLOWED_HOSTS=localhost,127.0.0.1
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:8000/api
```

## Team

- E/20/284, Peiris T.M.S.U., [e20284@eng.pdn.ac.lk](mailto:e20284@eng.pdn.ac.lk)
- E/20/279, Panawennage L.S., [e20279@eng.pdn.ac.lk](mailto:e20279@eng.pdn.ac.lk)
- E/20/286, Perera K.M.S., [e20286@eng.pdn.ac.lk](mailto:e20286@eng.pdn.ac.lk)
- E/20/078, Dissanayaka D.M.N.H., [e20078@eng.pdn.ac.lk](mailto:e20078@eng.pdn.ac.lk)

## Introduction

The Cathlab Management System is a software solution designed to transform and modernize the catheterization laboratory (Cathlab) operations at Peradeniya Hospital. This facility is very much useful in diagnosing and treating cardiovascular diseases, especially blockages of heart vessels, by taking X-ray angiograms. 

The current management processes in Cathlab are heavily reliant on manual systems, paper records, and Word documents to maintain patient information and reports. These methods are extremely time-consuming, prone to errors, and affect the efficient management of data regarding patients and their respective treatment outcomes. Additionally, this lack of a centralized digital solution limits data accessibility and scalability as patient volumes increase.

The proposed Cathlab Management System aims to address these inefficiencies by introducing an integrated and automated system that enhances workflow efficiency, data accuracy, and overall patient care.

## Key Features

### Centralized Patient Data Management
* The system provides a centralized database that stores all the information of the patients, including personal details such as name, age, and contact, case history, diagnosis, and treatment plans.
* The users (doctors, and nurses) can create, update, and retrieve the patient records from one interface, reducing reliance on paper-based records and scattered digital files.
* Quick and reliable access to patient information ensures continuity of care, even during emergencies.

### Efficient Report Generation
* Automated templates allow for the generation of complete and standardized medical reports for the patients. 
* This feature saves considerable time compared to the manual preparation of reports, and at the same time, all errors linked to variability in format or omission of information are avoided.


Improved Image Management
* They will be allowed to upload images, such as angiograms, directly into the system from their mobile devices.
* Images are immediately linked to the respective patients' records, hence enhancing workflow and correct data association.
* Image processing tools will include equalization, denoising, and CLAHE for enhancing image quality and thereby giving better interpretation for doctors. 

Role-Based Access Control
* The system manages access based on user roles, such as doctors, nurses, and administrators, to ensure that sensitive patient data is only accessible to those who should have access.
* Permissions are granted to users depending on their responsibilities to view, edit, or manage records.
* This feature ensures confidentiality for the patients and prevents unauthorized access or data breaches.

Enhanced Diagnostic Support
* The diagnostic tools and features of the system, such as image processing, support more accurate identification of medical conditions, including blockages in heart vessels.
* Integration of images and diagnostic data on one platform would enable users to analyze the case in detail and take informed decisions.

Statistical Analysis and Insights
* Generate and analyze statistics on patient data, offering insights for hospital management and research purposes.
.....
## Links
## Links

- [Project Repository](https://github.com/cepdnaclk/e20-co227-CathLab-Management-System)
- [Project Page](https://cepdnaclk.github.io/e20-co227-CathLab-Management-System/)
- [Department of Computer Engineering](http://www.ce.pdn.ac.lk/)
- [University of Peradeniya](https://eng.pdn.ac.lk/)

[//]: # (Please refer this to learn more about Markdown syntax)
[//]: # (https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

# API Documentation

## Base URL
- Development: `http://localhost:8000/api`
- Production: `https://your-domain.com/api`

## Authentication

The API uses JWT (JSON Web Token) authentication. Include the token in the Authorization header:

```
Authorization: Bearer <your-jwt-token>
```

### Authentication Endpoints

#### Login
```http
POST /auth/login/
Content-Type: application/json

{
    "username": "your_username",
    "password": "your_password"
}
```

**Response:**
```json
{
    "access": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...",
    "refresh": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...",
    "user": {
        "id": 1,
        "username": "doctor1",
        "email": "doctor1@hospital.com",
        "first_name": "John",
        "last_name": "Doe"
    }
}
```

#### Token Refresh
```http
POST /auth/refresh/
Content-Type: application/json

{
    "refresh": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9..."
}
```

## Patient Management

### List Patients
```http
GET /patients/
Authorization: Bearer <token>
```

### Create Patient
```http
POST /patients/
Content-Type: application/json
Authorization: Bearer <token>

{
    "name": "John Smith",
    "age": 45,
    "gender": "M",
    "phone": "0771234567",
    "address": "123 Main St, Kandy",
    "hospital_id": "H001234",
    "medical_history": "Hypertension, Diabetes"
}
```

### Get Patient Details
```http
GET /patients/{id}/
Authorization: Bearer <token>
```

### Update Patient
```http
PUT /patients/{id}/
Content-Type: application/json
Authorization: Bearer <token>

{
    "name": "John Smith Jr.",
    "age": 46,
    ...
}
```

### Delete Patient
```http
DELETE /patients/{id}/
Authorization: Bearer <token>
```

## Doctor Management

### List Doctors
```http
GET /doctors/
Authorization: Bearer <token>
```

### Create Doctor
```http
POST /doctors/
Content-Type: application/json
Authorization: Bearer <token>

{
    "name": "Dr. Jane Wilson",
    "specialization": "Cardiologist",
    "phone": "0771234568",
    "email": "jane.wilson@hospital.com",
    "license_number": "LIC12345"
}
```

## Report Management

### List Reports
```http
GET /reports/
Authorization: Bearer <token>
```

### Create Report
```http
POST /reports/
Content-Type: multipart/form-data
Authorization: Bearer <token>

{
    "patient": 1,
    "doctor": 1,
    "procedure_type": "Angiogram",
    "findings": "Significant blockage in LAD",
    "recommendations": "PCI recommended",
    "balloon_pressure": 12.5,
    "report_image": <file>
}
```

### Get Report Details
```http
GET /reports/{id}/
Authorization: Bearer <token>
```

## Image Processing

### Upload and Process Image
```http
POST /process-image/
Content-Type: multipart/form-data
Authorization: Bearer <token>

{
    "image": <file>,
    "processing_type": "angiogram_analysis"
}
```

**Response:**
```json
{
    "processed_image_url": "/media/processed_images/processed_123.jpg",
    "analysis_results": {
        "blockage_detected": true,
        "severity": "moderate",
        "location": "LAD"
    }
}
```

## Error Responses

The API returns standard HTTP status codes:

- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `500` - Internal Server Error

**Error Response Format:**
```json
{
    "error": "Error message description",
    "details": {
        "field": ["Field-specific error message"]
    }
}
```

## Pagination

List endpoints support pagination:

```http
GET /patients/?page=2&page_size=20
```

**Response:**
```json
{
    "count": 100,
    "next": "http://localhost:8000/api/patients/?page=3",
    "previous": "http://localhost:8000/api/patients/?page=1",
    "results": [...]
}
```

## Filtering and Search

### Filter Patients by Age Range
```http
GET /patients/?age_min=30&age_max=60
```

### Search Patients by Name
```http
GET /patients/?search=john
```

### Filter Reports by Date
```http
GET /reports/?date_from=2024-01-01&date_to=2024-12-31
```

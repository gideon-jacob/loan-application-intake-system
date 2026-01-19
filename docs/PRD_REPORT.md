# Product Requirements Document (PRD)
## Loan Application Intake System

**Project Title:** Loan Application Intake System  
**Client/Partner:** In association with Naandi Foundation  

---

## 1. Introduction
The Loan Application Intake System is a digital platform designed to streamline the specific loan application process for the Naandi Foundation context. It replaces existing manual workflows (emails/spreadsheets) with a structured, secure, and efficient web-based system.

## 2. Problem Statement
Currently, loan officers rely on disjointed methods like email threads and spreadsheets to collect and track loan applications. This results in:
- **Data Redundancy:** Manual entry errors and duplicate data.
- **Lack of Visibility:** Customers cannot track their status; Officers lose track of applications.
- **Security Risks:** Sensitive financial documents shared via unsecured email.
- **Inefficiency:** High turnaround time due to manual verification loops.

## 3. Goals & Objectives
- **Digitize Intake:** 100% digital capture of customer data and documents.
- **Centralize Operations:** Single dashboard for Loan Officers to review and manage cases.
- **Enhance Experience:** Transparent status tracking for customers.
- **Ensure Compliance:** Secure storage of KYC and financial documents.

## 4. User Personas

### 4.1. The Applicant (Customer)
- **Goal:** Apply for a loan quickly and know the status.
- **Pain Points:** Confusing forms, lack of updates, anxiety about approval.
- **Needs:** Mobile-friendly interface, clear instructions, instant status visibility.

### 4.2. The Loan Officer (Staff)
- **Goal:** Process applications efficiently and make accurate decisions.
- **Pain Points:** Chasing documents, manual data entry, scattered information.
- **Needs:** Unified dashboard, quick review tools, automated validation cues.

### 4.3. The Administrator
- **Goal:** Manage system access and monitor overall performance.
- **Needs:** User management, analytical reports (Applications per month, Approval rates).

## 5. Functional Requirements

### 5.1. Customer Portal
- **Registration/Login:** 
    - **Mobile OTP Authentication:** Users log in using their mobile number and a One-Time Password (OTP).
- **Loan Application Form:**
  - **Personal Details:** Name, DOB, Contact.
  - **KYC Section:** 
    - **Real-time API Verification:** Integration with government APIs for Aadhaar eKYC and PAN validation.
    - **Manual Fallback:** Option to upload documents if API verification fails (subject to stricter officer review).
  - **Financials:** Income source, Annual income, Desired loan amount & Tenure.
- **Document Upload:**
  - Drag-and-drop interface for supporting documents.
  - Support for PDF, JPG, PNG.
- **Status Dashboard:** Real-time view of application state (Submitted, Under Review, Approved, Rejected).

### 5.2. Loan Officer Dashboard
- **Queue Management:** List of pending applications.
- **Application Detail View:**
  - Verified KYC data badges (e.g., "PAN Verified").
  - Document viewer.
- **Action Triggers:** 
  - "Request More Info" (sends SMS/Notification).
  - "Approve" / "Reject" (with mandatory remarks).
- **Workflow Automation:** Automatic transition of status.

### 5.3. System Features
- **Validation:** 
    - Real-time PAN regex and API check.
    - Aadhaar format validation.
- **Notifications:** SMS alerts on status changes (primary channel).
- **Audit Logs:** Record of who accessed/modified an application.

## 6. User Flows

### Flow A: Customer Application
1. Customer enters Mobile Number -> Receives OTP -> Verifies.
2. Clicks "New Loan Application".
3. Enters PAN/Aadhaar -> System performs API check -> Auto-populates/Verifies name.
4. Fills remaining financial details and uploads proofs.
5. Submits application.

### Flow B: Officer Review
1. Officer logs in.
2. Selects an application.
3. Sees system-verified flags for KYC. Performs visual check of other docs.
4. Updates status -> "Approved" -> System logs approval event for downstream integration.

## 7. Non-Functional Requirements
- **Security:** 
    - AWS KMS for key management.
    - Data encryption at rest and in transit.
- **Hosting:** AWS Cloud (S3, EC2/Lambda, RDS).
- **Compliance:** Adherence to **RBI Digital Lending Guidelines** and **Indian DPDP Act** standards.
- **Scalability:** Architecture to support 1000+ concurrent applications.

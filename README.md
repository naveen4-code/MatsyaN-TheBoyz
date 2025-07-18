MatsyaN - THE BOYZ | Geo-Tagged Fish Catch Logger
A smart, offline-capable Progressive Web App (PWA) for fishermen to log, store, and analyze their fish catches using AI and geolocation — even in areas with no internet access. Integrated with Google Gemini AI for fish species recognition and Firebase Cloud for authentication and storage.

Problem Statement:
Fishermen often lack a streamlined way to log catches detailing species, weight, time, and GPS location. This leads to:
- Lost or inaccurate data
- No historical insights for personal tracking or marine research
- Incompatibility with offline coastal or marine conditions

MatsyaN solves this with:
- AI-powered image-based fish recognition
- Offline-first logging with automatic sync
- Geo-tagging via Leaflet + OpenStreetMap
- Simple PWA interface for use even on mobile phones

 Live Demo
Try It Now:  
https://geo-tagged-fish-catcher.web.app

Watch Demo Video:  
[https://youtu.be/](https://youtu.be/8rUu3qivW5Q?si=vZN8oOOHj0kpAXfj)


Features
AI Fish Analyzer:  
  Upload a fish image to get the species name, scientific name, habitat, and edibility info using Google Gemini AI.
Geo-Tagged Catch Logging:  
  Auto-captures your live location (latitude and longitude) via Leaflet.js when submitting a catch.

Detailed Input:  
  Users can enter fish species, weight (in kg), and upload a photo for accurate record-keeping.

Offline Submission Support:
  Uses IndexedDB to save catches locally when offline and syncs them automatically once reconnected.

Firebase Authentication:
  Secure user login/register flow using Firebase Auth. Only logged-in users can access core features.

Real-Time Cloud Sync:
  All catches and images are stored in Firebase Firestore and Firebase Storage.

Progressive Web App:  
  Can be installed to home screen and used like a native mobile app with offline-first experience.

Tech Stack:

| Purpose              | Technology                             |
|----------------------|-----------------------------------------|
| Frontend             | HTML, CSS, JavaScript                   |
| Backend              | Firebase Auth, Firestore, Cloud Storage |
| AI Analyzer          | Google Gemini API (via Cloud Functions) |
| Mapping & Geo-tagging| Leaflet.js + OpenStreetMap              |
| Offline Queue        | IndexedDB, Service Worker               |
| Hosting              | Firebase Hosting                        |
| Version Control      | Git & GitHub                            |


Prerequisites:
- Node.js & npm
- Firebase CLI (`npm install -g firebase-tools`)
- Google Cloud project with Gemini AI enabled

Local Setup:
```bash
git clone https://github.com/naveen4-code/MatsyaN-TheBoyz.git
cd MatsyaN-TheBoyz

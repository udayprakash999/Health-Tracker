# Health Tracker App

A simple and intuitive web application to track your daily health data such as calories consumed, exercise duration, water intake, and sleep hours. The app allows users to input and save health data, view daily summaries, and generate a PDF containing the entire health history.

## Features

- **Track Daily Health Data**: Track calories, exercise, water intake, and sleep duration.
- **Daily Summary**: View a summary of your health data for the current day.
- **Edit Entries**: Edit past entries if needed.
- **Health Data History**: View all past entries stored locally.
- **Generate PDF**: Save your entire health data history in a downloadable PDF format.
- **Responsive Design**: Works seamlessly across devices (desktop, tablet, mobile).

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **PDF Generation**: jsPDF (JavaScript library for PDF creation)
- **Storage**: LocalStorage for storing health data

## Getting Started

### Prerequisites

Ensure that you have a modern web browser (e.g., Chrome, Firefox, Safari) to run the app.

### Installation

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/your-username/health-tracker-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd health-tracker-app
   ```

3. Open `index.html` in your browser:
   ```bash
   open index.html
   ```

   Or, just double-click `index.html` to open it in your default browser.

### Folder Structure

```
/health-tracker-app
│
├── index.html           # Main HTML file
├── styles.css           # CSS file for styling
├── script.js            # JavaScript file for functionality
├── README.md            # Project documentation
└── /assets              # Folder for any assets like images (if needed)
```

## How to Use

1. **Enter Your Health Data**: On the main page, fill in the form with your daily health data (calories, exercise, water intake, and sleep hours).
2. **Save Your Data**: Click the "Save Today's Data" button to save your data.
3. **View Your Summary**: After saving, the summary section will display your daily health data.
4. **Edit Data**: You can edit past entries by clicking the "Edit" button next to each entry in the health data history.
5. **Save as PDF**: Click the "Save as PDF" button to generate and download a PDF of your health history.

## Customization

You can customize the design and functionality by modifying the `styles.css` and `script.js` files.

### Design Customization

- Change the colors and fonts by updating the `styles.css` file.
- The app uses the **Roboto** font, but you can replace it with any font by updating the Google Fonts URL.

### Functionality Customization

- Modify the `script.js` file to add more health metrics or change how data is displayed or processed.
- You can also switch from `localStorage` to a server-side database if you need to scale the app.

## Acknowledgments

- **jsPDF**: For PDF generation functionality.
- **Google Fonts**: For providing beautiful fonts like `Roboto`.

```
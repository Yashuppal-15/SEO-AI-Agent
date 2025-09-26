# 🚀 SEO AI Agent - Premium Dashboard

A modern, AI-powered SEO keyword research tool with a premium dashboard interface inspired by Slack Connect. Generate 50 high-quality keyword suggestions with competition analysis and ranking potential.

![SEO AI Agent Dashboard](https://img.shields.io/badge/Status-Production%20Ready-success)
![Version](https://img.shields.io/badge/Version-1.0.0-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

### 🎨 **Premium UI/UX**
- **Modern Dark Theme** with purple accent colors and hover glow effects
- **Light/Dark Mode Toggle** for user preference
- **Responsive Design** optimized for desktop, tablet, and mobile
- **Interactive Animations** with Slack-inspired hover effects
- **Professional Typography** using Inter font family

### 🔍 **AI-Powered SEO Tools**
- **Keyword Generation** - Get 50 AI-driven keyword suggestions
- **Competition Analysis** - Real-time difficulty and competition metrics
- **Search Volume Data** - Monthly search volume for each keyword
- **CPC Information** - Cost-per-click data for advertising insights

### 📊 **Analytics Dashboard**
- **Real-time Stats Cards** showing total keywords, average volume, and low competition percentage
- **Recent Searches** with clickable chips for quick re-analysis
- **Export Functionality** - Download results as CSV for further analysis
- **Last Search Timestamp** with real-time updates

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Styling:** Custom CSS with CSS Grid and Flexbox
- **Icons:** Font Awesome 6.4.0
- **Typography:** Google Fonts (Inter)
- **Backend:** Node.js with Express.js
- **Architecture:** RESTful API design

## 📁 Project Structure

seo-ai-agent/
├── public/
│ ├── index.html # Main dashboard interface
│ └── js/
│ └── app.js # Frontend JavaScript logic
├── src/
│ ├── app.js # Express server setup
│ └── routes/
│ └── keywords.js # Keyword generation API
├── package.json # Dependencies and scripts
└── README.md # Project documentation


## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
git clone https://github.com/Yashuppal-15/seo-ai-agent.git
cd seo-ai-agent


2. **Install dependencies**
npm install


3. **Start the development server**
npm run dev


4. **Open your browser**
Navigate to `http://localhost:3001`

## 🎯 Usage

### Basic Keyword Research
1. Enter a seed keyword in the search bar (e.g., "global internship", "digital marketing")
2. Click "Generate" to get 50 AI-powered keyword suggestions
3. View results in interactive cards showing:
   - Search volume
   - Competition percentage
   - Keyword difficulty
   - Cost-per-click data

### Advanced Features
- **Recent Searches:** Click on any recent search chip to re-analyze
- **Export Data:** Use the "Export CSV" button to download results
- **Theme Toggle:** Switch between dark and light modes
- **Real-time Stats:** Monitor keyword metrics in the dashboard cards

## 🎨 UI Components

### Header
- **Logo:** Branded SEO AI Agent with brain icon
- **Refresh Button:** Reload the entire application
- **Theme Toggle:** Switch between dark/light modes with smooth animations

### Main Dashboard
- **Hero Section:** Welcome message with AI-powered badge
- **Search Bar:** Large, prominent input with generate button
- **Stats Grid:** 4 cards showing key metrics
- **Recent Searches:** Horizontal chip layout for quick access
- **Results Grid:** Responsive card layout for keyword data

### Interactive Elements
- **Hover Effects:** Purple glow and lift animations
- **Card Interactions:** Border highlights and shadow effects
- **Button Animations:** Transform and color transitions
- **Responsive Behavior:** Mobile-first adaptive design

## 📱 Responsive Design

### Desktop (1200px+)
- 4-column stats grid
- 3-column results grid
- Full-width search bar with side-by-side buttons

### Tablet (768px - 1199px)
- 2-column stats grid
- 2-column results grid
- Responsive navigation and spacing

### Mobile (< 768px)
- Single column layout
- Stacked search elements
- Touch-optimized buttons and cards

## 🔧 Configuration

### Environment Variables
PORT=3001
NODE_ENV=development

### Scripts
{
"dev": "node src/app.js",
"start": "node src/app.js",
"test": "echo "No tests specified""
}


## 🎭 Theme Customization

The application supports both dark and light themes with CSS custom properties:
:root {
--bg-primary: #000000;
--bg-hover: #2e003e;
--accent1: #8b5cf6;
--accent2: #ec4899;
}


## 🔄 API Endpoints

### POST `/api/keywords`
Generate keyword suggestions for a given seed keyword.

**Request Body:**
{
"seedKeyword": "digital marketing"
}


**Response:**
{
"success": true,
"totalResults": 50,
"keywords": [
{
"rank": 1,
"keyword": "digital marketing strategy",
"searchVolume": 12000,
"competition": 65,
"difficulty": 45,
"cpc": 2.50
}
]
}


## 🐛 Troubleshooting

### Common Issues

**Port already in use:**
Kill process on port 3001
npx kill-port 3001
npm run dev

text


**Dependencies issues:**
Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install


## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙋‍♂️ Author

**Yash Uppal**
- GitHub: [@Yashuppal-15](https://github.com/Yashuppal-15)
- Email: 2k22.cse.2213230@gmail.com

## 🌟 Acknowledgments

- Inspired by Slack Connect's premium dashboard design
- Font Awesome for beautiful icons
- Google Fonts for Inter typography
- The amazing developer community for continuous inspiration

---

**⭐ If you found this project helpful, please give it a star on GitHub!**

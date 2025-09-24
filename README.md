# SEO AI Agent

🤖 An intelligent SEO keyword research agent that generates 50 optimized keyword suggestions based on search volume and competition analysis.

## Features

- 🎯 Single seed keyword input
- 📊 50 targeted keyword suggestions
- 🏆 Ranked by competition vs search volume ratio
- 🤖 N8N visual workflow automation
- 📈 Multiple SEO API integrations
- 🚀 Express.js REST API

## Tech Stack

- **Backend**: Node.js, Express.js
- **Automation**: N8N workflow platform
- **APIs**: Google Ads, SE Ranking, Serpstat
- **Database**: SQLite (via N8N)
- **Deployment**: Docker, Docker Compose

## Quick Start

\\\ash
# Clone repository
git clone https://github.com/Yashuppal-15/SEO-AI-Agent.git
cd SEO-AI-Agent

# Install dependencies
npm install

# Start development server
npm run dev

# Start N8N (requires Docker)
npm run docker-up
\\\

## API Endpoints

### Health Check
\\\
GET /
\\\

### Keyword Research
\\\
POST /api/keywords
Content-Type: application/json

{
  "seedKeyword": "global internship"
}
\\\

## Development Status

- [x] Project setup and Express server
- [ ] SEO API integrations
- [ ] Keyword ranking algorithm
- [ ] N8N workflow implementation
- [ ] Testing and optimization
- [ ] Documentation and video demo

## Author

👨‍💻 **Yashuppal** - BTech CSE Final Year
- GitHub: [@Yashuppal-15](https://github.com/Yashuppal-15)
- Email: 2k22.cse.2213230@gmail.com

## License

This project is developed for Callus Company Inc. AI Agent Developer Assessment.

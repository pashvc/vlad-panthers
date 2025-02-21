# Vlad Sadovskiy AI Avatar - Netevia CVI

This project showcases a specially crafted personal digital AI avatar of Vlad Sadovskiy, CEO of Netevia. The avatar is created and developed by Pavel Sukhachev (pashvc@gmail.com) in Miami, FL, utilizing Conversational Video Interface with React.

## About the Avatar

This digital representation of Vlad Sadovskiy, CEO of Netevia, is designed to engage in natural conversations while maintaining his unique personality, humor, and Hemingway-style communication. The avatar shares insights about:
- Payment industry expertise
- Netevia's innovative solutions
- Leadership philosophy
- Family and business balance
- Entrepreneurial wisdom

## Setup

1. Clone the repository
2. Install dependencies:
```bash
pnpm install
```

3. Copy the environment variables file:
```bash
cp .env.example .env
```

4. Add your API key to the `.env` file:
```bash
VITE_API_KEY=your_api_key_here
```

## Development

To run the development server:

```bash
pnpm dev
```

## Deployment to Cloudflare Pages

1. Push your code to GitHub
2. In Cloudflare Pages:
   - Create a new project
   - Connect to your GitHub repository
   - Set up the following build settings:
     - Framework preset: Vite
     - Build command: `pnpm build`
     - Build output directory: `dist`
   - Add environment variable:
     - Add `VITE_API_KEY` with your API key

## Environment Variables

The following environment variables are required:

- `VITE_API_KEY`: Your API key for authentication

## Credits

Created and developed by:
Pavel Sukhachev
Miami, FL
pashvc@gmail.com

## License

MIT

## 🚀 Features

This application provides an interactive interface to engage with Vlad Sadovskiy's AI avatar:
- Welcome screen with personalized greeting
- Professional video interface for natural conversation
- Hair check screen with custom audio/video device management
- High-quality video call interface powered by Daily.co
- Seamless integration with AI API for lifelike conversation management

|                                                                    |                                                                                              |
| ------------------------------------------------------------------ | -------------------------------------------------------------------------------------------- |
| ![Prejoin UI](./screenshots/scr-1.png) | ![Hair check UI](./screenshots/scr-2.png) |
| ![in-call UI](./screenshots/scr-3.png) |


## 📚 Learn More

- [Daily React Reference](https://docs.daily.co/reference/daily-react)

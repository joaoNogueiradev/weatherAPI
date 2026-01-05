# Weather React App 🌤️

A modern weather application built with React, TypeScript, and Chakra UI that provides real-time weather information for any city worldwide.

## Features 🌟

- **City Search**: Search for weather information in any city worldwide
- **Real-time Data**: Get current weather conditions from OpenWeatherMap API
- **Temperature Display**: Shows temperature in Celsius
- **Wind Information**: Displays wind speed and direction with visual arrow indicator
- **Weather Icons**: Dynamic weather icons based on current conditions
- **Error Handling**: User-friendly error messages for invalid cities or API issues
- **Loading States**: Smooth loading indicators during data fetching
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Tech Stack 🛠️

- **React 18** - UI framework
- **TypeScript** - Type safety and better development experience
- **Vite** - Fast build tool and development server
- **Chakra UI** - Modern UI component library
- **OpenWeatherMap API** - Weather data provider

## Project Status 📝

**Note**: This project has been redeployed due to API key configuration issues. The application is now fully functional with proper API integration.

## Getting Started 🚀

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/weather-react.git
cd weather-react
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:
   Create a `.env` file in the root directory:

```env
VITE_API_KEY=your_openweathermap_api_key_here
VITE_API_URL=https://api.openweathermap.org/data/2.5/
```

4. Get your free API key from [OpenWeatherMap](https://openweathermap.org/api)

5. Start the development server:

```bash
npm run dev
```

6. Open your browser and navigate to `http://localhost:5173`

## Usage 💡

1. Type the name of any city in the search input
2. Press Enter or click the search button
3. View the current weather information including:
   - City name and country
   - Current temperature
   - Weather condition icon
   - Wind speed and directional arrow

## Project Structure 📁

```
src/
├── components/          # Reusable UI components
│   ├── WeatherCard.tsx # Main weather display component
│   ├── SearchInput.tsx # Search functionality
│   ├── Loading.tsx     # Loading indicator
│   └── ...
├── context/            # React Context for state management
│   └── weatherContext.tsx
├── services/           # API integration
│   └── openWeather.ts
├── types/              # TypeScript type definitions
│   └── WeatherData.ts
└── App.tsx             # Main application component
```

## Contributing 🤝

Contributions are welcome! Please feel free to submit a Pull Request.

## License 📄

This project is licensed under the MIT License.

---

# Aplicação Weather React 🌤️

Uma aplicação moderna de clima construída com React, TypeScript e Chakra UI que fornece informações meteorológicas em tempo real para qualquer cidade do mundo.

## Funcionalidades 🌟

- **Busca de Cidades**: Pesquise informações meteorológicas em qualquer cidade do mundo
- **Dados em Tempo Real**: Obtenha condições climáticas atuais da API OpenWeatherMap
- **Exibição de Temperatura**: Mostra temperatura em Celsius
- **Informações de Vento**: Exibe velocidade e direção do vento com indicador visual de seta
- **Ícones do Tempo**: Ícones dinâmicos baseados nas condições atuais
- **Tratamento de Erros**: Mensagens de erro amigáveis para cidades inválidas ou problemas na API
- **Estados de Carregamento**: Indicadores suaves durante o carregamento de dados
- **Design Responsivo**: Funciona perfeitamente em desktop e dispositivos móveis

## Stack Tecnológico 🛠️

- **React 18** - Framework de UI
- **TypeScript** - Segurança de tipos e melhor experiência de desenvolvimento
- **Vite** - Ferramenta de build rápida e servidor de desenvolvimento
- **Chakra UI** - Biblioteca moderna de componentes UI
- **OpenWeatherMap API** - Provedor de dados meteorológicos

## Status do Projeto 📝

**Nota**: Este projeto foi reimplantado devido a problemas de configuração da chave de API. A aplicação agora está totalmente funcional com integração adequada da API.

## Como Começar 🚀

### Pré-requisitos

- Node.js (v16 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:

```bash
git clone https://github.com/yourusername/weather-react.git
cd weather-react
```

2. Instale as dependências:

```bash
npm install
```

3. Configure as variáveis de ambiente:
   Crie um arquivo `.env` no diretório raiz:

```env
VITE_API_KEY=sua_chave_api_openweathermap_aqui
VITE_API_URL=https://api.openweathermap.org/data/2.5/
```

4. Obtenha sua chave de API gratuita em [OpenWeatherMap](https://openweathermap.org/api)

5. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

6. Abra seu navegador e navegue para `http://localhost:5173`

## Como Usar 💡

1. Digite o nome de qualquer cidade no campo de busca
2. Pressione Enter ou clique no botão de busca
3. Visualize as informações meteorológicas atuais incluindo:
   - Nome da cidade e país
   - Temperatura atual
   - Ícone da condição do tempo
   - Velocidade do vento e seta direcional

## Estrutura do Projeto 📁

```
src/
├── components/          # Componentes UI reutilizáveis
│   ├── WeatherCard.tsx # Componente principal de exibição do clima
│   ├── SearchInput.tsx # Funcionalidade de busca
│   ├── Loading.tsx     # Indicador de carregamento
│   └── ...
├── context/            # React Context para gerenciamento de estado
│   └── weatherContext.tsx
├── services/           # Integração com API
│   └── openWeather.ts
├── types/              # Definições de tipos TypeScript
│   └── WeatherData.ts
└── App.tsx             # Componente principal da aplicação
```

## Contribuindo 🤝

Contribuições são bem-vindas! Sinta-se à vontade para enviar um Pull Request.

## Licença 📄

Este projeto está licenciado sob a Licença MIT.

import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const steps = [
  {
    id: '1',
    message: 'Please write your username',
    trigger: '2',
  },
  {
    id: '2',
    user: true,
    trigger: '3',
  },
  {
    id: '3',
    message: 'hi {previousValue}, how can I help you ?',
    trigger: '4',
  },
  {
    id: '4',
    user: true,
    trigger: '5'
  },
  {
    id: '5',
    message: 'you can send your request by email on amdouni.slim@gmail.com',
  }
];

// Creating our own theme
const theme = {
	background: 'white',
	headerBgColor: '#0891b2',
	headerFontSize: '20px',
	botBubbleColor: '#0891b2',
	headerFontColor: 'white',
	botFontColor: 'white',
	userBubbleColor: '#164e63',
	userFontColor: 'white',
};

// Set some properties of the bot
const config = {
	floating: true,
};

function Bot() {
	return (
			<ThemeProvider theme={theme}>
				<ChatBot
					headerTitle=""
          recognitionEnable={true}
          speechSynthesis={{ enable: true, lang: 'en' }}
					steps={steps}
					{...config}

				/>
			</ThemeProvider>
	);
}

export default Bot;

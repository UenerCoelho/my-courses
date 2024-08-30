import Chatbot from 'https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js'
Chatbot.initFull({
  chatflowid: 'd6fe74e9-a52d-4b5e-ba39-6e3b6615622a',
  apiHost: 'https://uener-my-flowise-ai.hf.space',
  theme: {
    chatWindow: {
      showTitle: true,
      title: "Uener's ChatBot",
      titleAvatarSrc: './imgs/title-avatar.svg',
      // showAgentMessages: true,
      welcomeMessage:
        'Olá! Eu sou um Chatbot, criado a partir da LLaMa 3.1 LLM, fique a vontade para me perguntar o que quiser.',
      errorMessage: 'Esta é uma mensagem de erro!',
      backgroundColor: '#222',
      // height: 720,
      // width: 1280,
      fontSize: 18,
      poweredByTextColor: '#303235',
      botMessage: {
        backgroundColor: '#444',
        textColor: '#eee',
        showAvatar: true,
        avatarSrc: './imgs/avatar-bot.jpg'
      },
      userMessage: {
        backgroundColor: '#3B81F6',
        textColor: '#ffffff',
        showAvatar: true,
        avatarSrc: './imgs/user-icon.png'
      },
      textInput: {
        placeholder: 'Escreva sua pergunta, por favor!',
        backgroundColor: '#ffffff',
        textColor: '#303235',
        sendButtonColor: '#3B81F6',
        maxChars: 50000,
        maxCharsWarningMessage:
          'Você excedeu o limite de caracteres. O máximo permitido é 50.000 caracteres.',
        autoFocus: true, // If not used, autofocus is disabled on mobile and enabled on desktop. true enables it on both, false disables it on both.
        sendMessageSound: true,
        // sendSoundLocation: "send_message.mp3", // If this is not used, the default sound effect will be played if sendSoundMessage is true.
        receiveMessageSound: true
        // receiveSoundLocation: "receive_message.mp3", // If this is not used, the default sound effect will be played if receiveSoundMessage is true.
      },
      feedback: {
        color: '#303235'
      },
      footer: {
        textColor: '#303235',
        text: 'Powered by Uener Coelho, a partir da ferramenta ',
        companyLink: 'https://flowiseai.com'
      }
    }
  }
})

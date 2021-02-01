module.exports = {
  pwa: {
    manifestOptions: {
      background_color: '#003956'
    },
    name: 'Yes or no!',
    themeColor: '#509bf5',
    workboxOptions: {
      runtimeCaching: [
        {
          handler: 'NetworkFirst',
          options: {
            networkTimeoutSeconds: 5
          },
          urlPattern: 'https://avancera.app/cities/'
        },
        {
          handler: 'NetworkFirst',
          options: {
            networkTimeoutSeconds: 5
          },
          urlPattern: 'https://cors-anywhere.herokuapp.com/http://yesno.wtf/api/'
        }
      ]
    }
  }
}

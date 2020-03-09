export default {
  name: 'BlurredBoard',
  server: Number(process.env.REACT_APP_ONLINE)
    ? process.env.REACT_APP_SERVER
    : process.env.REACT_APP_SERVER_OFFLINE,
}

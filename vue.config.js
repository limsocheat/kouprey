module.exports = {
  // proxy API requests to Valet during development
  devServer: {
    proxy: {
      "/maps": {
        target: "https://urbanvoicecambodia.net",
        pathRewrite: { "^/maps": "" },
        changeOrigin: true,
        secure: false
      },
      "/crm": {
        target: "https://api.apimo.pro/agencies/14169",
        pathRewrite: { "^/crm": "" },
        changeOrigin: true,
        secure: true,
        auth: "2533:d84694f2a9ef9163bfc5e4faac17afcb278445bc"
      }
    }
  }
};

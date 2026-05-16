const axios = require("axios")

const Log = async (
  stack,
  level,
  packageName,
  message
) => {

  try {

    await axios.post(
      "http://4.224.186.213/evaluation-service/logs",

      {
        stack,
        level,
        package: packageName,
        message
      },

      {
        headers: {
          Authorization:
            `Bearer ${process.env.AUTH_TOKEN}`
        }
      }
    )

    console.log("Log created")

  } catch (error) {

    console.log(
      "Logging failed:",
      error.message
    )

  }
}

module.exports = Log
const Log = require("../utils/logger")

const getNotifications =
async (req, res) => {

  try {

    await Log(
      "backend",
      "info",
      "controller",
      "Fetching notifications"
    )

    const notifications = [

      {
        ID: 1,
        Type: "Event",
        Message: "Hackathon tomorrow",
        Timestamp: "10:00 AM"
      },

      {
        ID: 2,
        Type: "Placement",
        Message: "Google hiring drive",
        Timestamp: "2:00 PM"
      }

    ]

    await Log(
      "backend",
      "info",
      "service",
      "Notifications fetched successfully"
    )

    res.json({
      notifications
    })

  } catch (error) {

    await Log(
      "backend",
      "error",
      "controller",
      "Failed to fetch notifications"
    )

    res.status(500).json({
      error:
      "Failed to fetch notifications"
    })

  }
}

module.exports = {
  getNotifications
}
const Log = require("../utils/logger")

const getNotifications = async (req, res) => {

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
        Message: "Hackathon starts tomorrow at 9 AM",
        Timestamp: "2026-05-16T10:00:00Z",
        Viewed: false
      },
      {
        ID: 2,
        Type: "Placement",
        Message: "Amazon placement drive registrations open",
        Timestamp: "2026-05-16T14:00:00Z",
        Viewed: true
      },
      {
        ID: 3,
        Type: "Result",
        Message: "Internal assessment results published",
        Timestamp: "2026-05-16T17:30:00Z",
        Viewed: false
      },
      {
        ID: 4,
        Type: "Announcement",
        Message: "College will remain closed on Monday",
        Timestamp: "2026-05-16T18:15:00Z",
        Viewed: false
      }
    ]

    await Log(
      "backend",
      "info",
      "service",
      "Notifications fetched successfully"
    )

    return res.status(200).json({
      success: true,
      count: notifications.length,
      notifications
    })

  } catch (error) {

    await Log(
      "backend",
      "error",
      "controller",
      `Failed to fetch notifications: ${error.message}`
    )

    return res.status(500).json({
      success: false,
      error: "Failed to fetch notifications"
    })

  }
}

module.exports = {
  getNotifications
}
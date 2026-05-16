import { useEffect, useState }
from "react"

import axios from "axios"

import NotificationCard
from "./components/NotificationCard"

import Log
from "./utils/logger"

function App() {

  const [notifications,
  setNotifications] = useState([])

  const [filter,
  setFilter] = useState("All")

  const [currentPage,
  setCurrentPage] = useState(1)

  const notificationsPerPage = 2

  const [loading,
  setLoading] = useState(true)

  const [error,
  setError] = useState("")

  useEffect(() => {

    Log(
      "frontend",
      "info",
      "component",
      "Dashboard loaded"
    )

    axios
      .get(
        "http://localhost:5000/api/notifications"
      )

      .then((res) => {

        setNotifications(
          res.data.notifications
        )

        setLoading(false)

        Log(
          "frontend",
          "info",
          "api",
          "Notifications fetched successfully"
        )

      })

      .catch((error) => {

        console.log(error)

        setError(
          "Failed to fetch notifications"
        )

        setLoading(false)

        Log(
          "frontend",
          "error",
          "api",
          "Failed to fetch notifications"
        )

      })

  }, [])

  const filteredNotifications =

    filter === "All"

      ? notifications

      : notifications.filter(
          (item) =>
            item.Type === filter
        )

  const indexOfLast =
    currentPage * notificationsPerPage

  const indexOfFirst =
    indexOfLast - notificationsPerPage

  const currentNotifications =
    filteredNotifications.slice(
      indexOfFirst,
      indexOfLast
    )

  return (

    <div className="
      min-h-screen
      bg-gray-100
      p-10
    ">

      <h1 className="
        text-5xl
        font-bold
        mb-10
      ">
        Notification Dashboard
      </h1>

      <select

        className="
          p-3
          rounded-xl
          border
          mb-8
          bg-white
        "

        onChange={(e) => {

          setFilter(
            e.target.value
          )

          setCurrentPage(1)

          Log(
            "frontend",
            "info",
            "state",
            `Filter changed to ${e.target.value}`
          )

        }}

      >

        <option>All</option>
        <option>Event</option>
        <option>Placement</option>
        <option>Result</option>

      </select>

      {
        loading && (

          <h2 className="
            text-2xl
            font-semibold
          ">
            Loading...
          </h2>

        )
      }

      {
        error && (

          <h2 className="
            text-red-500
            text-2xl
          ">
            {error}
          </h2>

        )
      }

      <div className="
        grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        gap-6
      ">

        {
          currentNotifications.map(
            (item) => (

            <NotificationCard
              key={item.ID}
              item={item}
            />

          ))
        }

      </div>

      <div className="
        flex
        gap-4
        mt-10
      ">

        <button

          className="
            bg-black
            text-white
            px-5
            py-2
            rounded-lg
            disabled:bg-gray-400
          "

          onClick={() => {

            setCurrentPage(
              currentPage - 1
            )

            Log(
              "frontend",
              "info",
              "state",
              "Moved to previous page"
            )

          }}

          disabled={currentPage === 1}

        >
          Previous
        </button>

        <button

          className="
            bg-black
            text-white
            px-5
            py-2
            rounded-lg
            disabled:bg-gray-400
          "

          onClick={() => {

            setCurrentPage(
              currentPage + 1
            )

            Log(
              "frontend",
              "info",
              "state",
              "Moved to next page"
            )

          }}

          disabled={
            indexOfLast >=
            filteredNotifications.length
          }

        >
          Next
        </button>

      </div>

    </div>

  )
}

export default App
function NotificationCard({ item }) {

  return (

    <div className="
      bg-white
      rounded-2xl
      shadow-lg
      p-5
      hover:scale-105
      transition
      duration-300
    ">

      <div className="
        flex
        justify-between
        items-center
      ">

        <h2 className="
          text-2xl
          font-bold
        ">
          {item.Type}
        </h2>

        {
          item.Viewed
          ? (

            <span className="
              bg-green-100
              text-green-600
              px-3
              py-1
              rounded-full
              text-sm
            ">
              Viewed
            </span>

          )

          : (

            <span className="
              bg-red-100
              text-red-600
              px-3
              py-1
              rounded-full
              text-sm
            ">
              New
            </span>

          )
        }

      </div>

      <p className="
        mt-5
        text-gray-700
        text-lg
      ">
        {item.Message}
      </p>

      <p className="
        mt-5
        text-gray-500
        text-sm
      ">
        {item.Timestamp}
      </p>

    </div>

  )
}

export default NotificationCard
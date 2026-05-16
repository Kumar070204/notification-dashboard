notifications = [

    {
        "type": "Placement",
        "message": "Google hiring drive",
        "viewed": False,
        "timestamp": "2026-05-16 10:00",
        "weight": 3
    },

    {
        "type": "Result",
        "message": "Semester results published",
        "viewed": False,
        "timestamp": "2026-05-16 09:00",
        "weight": 2
    },

    {
        "type": "Event",
        "message": "Hackathon tomorrow",
        "viewed": True,
        "timestamp": "2026-05-15 08:00",
        "weight": 1
    },

    {
        "type": "Placement",
        "message": "Amazon hiring drive",
        "viewed": False,
        "timestamp": "2026-05-16 11:00",
        "weight": 3
    }

]

unread_notifications = [

    notification

    for notification in notifications

    if notification["viewed"] == False

]

sorted_notifications = sorted(

    unread_notifications,

    key=lambda x: (
        x["weight"],
        x["timestamp"]
    ),

    reverse=True

)

top_notifications = sorted_notifications[:10]

print("\nPriority Inbox\n")

for notification in top_notifications:

    print(
        f"Type: {notification['type']}"
    )

    print(
        f"Message: {notification['message']}"
    )

    print(
        f"Timestamp: {notification['timestamp']}"
    )

    print("---------------------")
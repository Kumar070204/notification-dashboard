# Stage 1

# Notification System REST API Design

## Objective

Design a scalable notification platform for students to receive notifications related to:
- Placements
- Events
- Results

The system supports:
- fetching notifications
- filtering notifications
- viewed/unviewed notifications
- real-time updates

---

# Base URL

```text
/api
```

---

# 1. Get Notifications

## Endpoint

```http
GET /api/notifications
```

---

## Query Parameters

| Parameter | Type | Description |
|---|---|---|
| type | string | Filter by notification type |
| viewed | boolean | Filter viewed/unviewed |
| page | number | Pagination |
| limit | number | Number of notifications |

---

## Sample Request

```http
GET /api/notifications?type=Event&page=1&limit=10
```

---

## Response

```json
{
  "notifications": [
    {
      "id": 1,
      "type": "Event",
      "message": "Hackathon tomorrow",
      "viewed": false,
      "timestamp": "2026-05-16T10:00:00Z"
    }
  ]
}
```

---

# 2. Mark Notification As Viewed

## Endpoint

```http
PATCH /api/notifications/:id/view
```

---

## Response

```json
{
  "message": "Notification marked as viewed"
}
```

---

# 3. Create Notification

## Endpoint

```http
POST /api/notifications
```

---

## Request Body

```json
{
  "type": "Placement",
  "message": "Google hiring drive"
}
```

---

## Response

```json
{
  "message": "Notification created successfully"
}
```

---

# JSON Schema

```json
{
  "id": "number",
  "type": "string",
  "message": "string",
  "viewed": "boolean",
  "timestamp": "datetime"
}
```

---

# Real-Time Notification Design

Real-time notifications can be implemented using:
- WebSockets
- Socket.IO

Flow:
1. Backend receives notification
2. Event emitted through socket
3. Frontend receives update instantly
4. UI updates without refresh

---

# Logging Middleware Usage

All routes integrate centralized logging middleware.

Example:

```js
await Log(
  "backend",
  "info",
  "controller",
  "Fetching notifications"
)
```
# Stage 2

# Database and Storage Design

## Database Choice

PostgreSQL is selected because:
- structured relational data
- strong indexing support
- scalability
- reliable SQL querying

---

# Notifications Table Schema

| Column | Type |
|---|---|
| id | SERIAL PRIMARY KEY |
| student_id | INTEGER |
| type | VARCHAR |
| message | TEXT |
| viewed | BOOLEAN |
| created_at | TIMESTAMP |

---

# Example SQL Query

```sql
SELECT *
FROM notifications
WHERE type='Placement'
LIMIT 10;
```

---

# Scaling Strategy

To handle increasing data volume:
- indexing
- pagination
- caching
- partitioning
- optimized queries

These techniques reduce database load and improve performance.
# Stage 3

# Database Query Optimization

## Why The Query Is Slow

Problems:
- SELECT *
- full table scans
- missing indexes
- large dataset size

At 5 million notifications:
full scans become extremely expensive.

---

# Why Indexing Every Column Is Bad

Indexing every column:
- increases storage
- slows inserts and updates
- wastes memory

Only frequently queried columns should be indexed.

---

# Optimized Query

```sql
SELECT student_id, message, created_at
FROM notifications
WHERE type='Placement'
AND created_at >= NOW() - INTERVAL '7 days';
```

Recommended indexes:
- type
- created_at

# Stage 4

# System Performance Improvement

## Problem

Notifications are fetched on every page load for every student.

This causes:
- repeated API calls
- database overload
- slow frontend performance

---

# Solution

Use:
- pagination
- frontend caching
- lazy loading
- Redis caching
- polling or websockets

Benefits:
- reduced database load
- faster response time
- better user experience

# Stage 5

# Bulk Notification Reliability

## Problems In Original Approach

Sending notifications synchronously:
- is very slow
- blocks execution
- causes partial failures

If email fails midway:
the system becomes inconsistent.

---

# Improved Solution

Use:
- queues
- async workers
- retry mechanism
- batch processing

---

# Improved Pseudocode

```python
for student in students:

    queue.add_task(
        send_notification,
        student
    )
```

Workers process tasks asynchronously.

Benefits:
- fault tolerance
- retry support
- scalability
- faster processing
# Stage 6

# Priority Inbox Implementation

Priority inbox displays the most important unread notifications.

Priority order:
- Placement
- Result
- Event

Weights assigned:
- Placement = 3
- Result = 2
- Event = 1

Notifications are:
1. filtered for unread items
2. sorted by priority weight
3. sorted by recency
4. top notifications displayed

Python implementation is provided in:
`priority_inbox.py`

The algorithm efficiently maintains the top notifications by sorting only unread notifications.
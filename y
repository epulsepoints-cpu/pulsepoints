{
  "indexes": [
    {
      "collectionGroup": "ecgTasks",
      "queryScope": "COLLECTION",
      "fields": [
        {
          "fieldPath": "taskStatus",
          "order": "ASCENDING"
        },
        {
          "fieldPath": "usageCount",
          "order": "ASCENDING"
        }
      ]
    },
    {
      "collectionGroup": "learningProgress",
      "queryScope": "COLLECTION",
      "fields": [
        {
          "fieldPath": "userId",
          "order": "ASCENDING"
        },
        {
          "fieldPath": "lastAccessedAt",
          "order": "DESCENDING"
        }
      ]
    },
    {
      "collectionGroup": "lessons",
      "queryScope": "COLLECTION",
      "fields": [
        {
          "fieldPath": "moduleId",
          "order": "ASCENDING"
        },
        {
          "fieldPath": "order",
          "order": "ASCENDING"
        }
      ]
    },
    {
      "collectionGroup": "notifications",
      "queryScope": "COLLECTION",
      "fields": [
        {
          "fieldPath": "userId",
          "order": "ASCENDING"
        },
        {
          "fieldPath": "createdAt",
          "order": "DESCENDING"
        }
      ]
    },
    {
      "collectionGroup": "userNotifications",
      "queryScope": "COLLECTION",
      "fields": [
        {
          "fieldPath": "userId",
          "order": "ASCENDING"
        },
        {
          "fieldPath": "timestamp",
          "order": "DESCENDING"
        }
      ]
    },
    {
      "collectionGroup": "weeklyEvents",
      "queryScope": "COLLECTION",
      "fields": [
        {
          "fieldPath": "status",
          "order": "ASCENDING"
        },
        {
          "fieldPath": "startDate",
          "order": "DESCENDING"
        },
        {
          "fieldPath": "endDate",
          "order": "DESCENDING"
        }
      ]
    }
  ],
  "fieldOverrides": []
}
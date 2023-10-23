# Todo List Backend

This repository contains the backend for a simple Todo List application built with NestJS, GraphQL, and SQLite.

## Features

- CRUD operations for tasks.
- Mark tasks as completed.
- SQLite database for local development and testing.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/R1tter/todo-list-backend.git
   ```

2. Navigate to the project directory:
   ```bash
   cd todo-list-backend
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run start
   ```

The GraphQL API should now be running on `http://localhost:3000/graphql`.

## Usage

You can interact with the GraphQL API using tools like [GraphQL Playground](https://github.com/prisma-labs/graphql-playground) or [Postman](https://www.postman.com/).

### Sample GraphQL Queries/Mutations

1. **Create a Task**:
   ```graphql
   mutation {
     createTask(input: { title: "Sample Task" }) {
       id
       title
       completed
     }
   }
   ```

2. **Get All Tasks**:
   ```graphql
   query {
     getTasks {
       id
       title
       completed
     }
   }
   ```

3. **Update a Task**:
   ```graphql
   mutation {
     updateTask(id: 1, input: { title: "Updated Task Title" }) {
       id
       title
     }
   }
   ```

4. **Mark Task as Completed**:
   ```graphql
   mutation {
     markTaskAsCompleted(id: 1) {
       id
       completed
     }
   }
   ```

5. **Delete a Task**:
   ```graphql
   mutation {
     deleteTask(id: 1)
   }
   ```

## Future Enhancements

- User authentication and authorization.
- Integration with AWS for production-ready database and deployment.
- Frontend application integration.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License.

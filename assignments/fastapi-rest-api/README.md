# 📘 Assignment: Building REST APIs with FastAPI

## 🎯 Objective

Build a small RESTful API with FastAPI that manages a collection of tasks or books. You will practice creating routes, validating request data, returning structured responses, and documenting your API.

## 📝 Tasks

### 🛠️ Create the API structure

#### Description
Create a FastAPI application that exposes several endpoints for creating and retrieving items stored in memory.

#### Requirements
Completed program should:

- Create a FastAPI app with a clear app title and version
- Define at least five endpoints: list all items, create an item, get one item, update an item, and delete an item
- Return appropriate HTTP status codes for success and not-found cases
- Use a simple in-memory store for the data

### 🛠️ Add validation and documentation

#### Description
Improve the API so that requests are validated and the endpoints are easy to understand.

#### Requirements
Completed program should:

- Use Pydantic models for request and response data
- Validate required fields such as a non-empty title
- Include helpful docstrings for the endpoints
- Make the API easy to explore through FastAPI’s built-in documentation

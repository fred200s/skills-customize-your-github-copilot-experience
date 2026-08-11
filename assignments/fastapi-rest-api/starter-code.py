from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field
from typing import List, Dict

app = FastAPI(title="Task API", version="1.0.0")


class TaskCreate(BaseModel):
    title: str = Field(..., min_length=1)
    description: str = ""
    completed: bool = False


class Task(TaskCreate):
    id: int


# In-memory storage for the assignment
items: List[Dict] = []


@app.get("/tasks", response_model=List[Task])
def list_tasks():
    return items


@app.post("/tasks", response_model=Task, status_code=201)
def create_task(task: TaskCreate):
    new_task = {"id": len(items) + 1, **task.dict()}
    items.append(new_task)
    return new_task


@app.get("/tasks/{task_id}", response_model=Task)
def get_task(task_id: int):
    task = next((item for item in items if item["id"] == task_id), None)
    if task is None:
        raise HTTPException(status_code=404, detail="Task not found")
    return task


@app.put("/tasks/{task_id}", response_model=Task)
def update_task(task_id: int, task: TaskCreate):
    for index, existing_task in enumerate(items):
        if existing_task["id"] == task_id:
            updated_task = {"id": task_id, **task.dict()}
            items[index] = updated_task
            return updated_task

    raise HTTPException(status_code=404, detail="Task not found")


@app.delete("/tasks/{task_id}", status_code=204)
def delete_task(task_id: int):
    for index, existing_task in enumerate(items):
        if existing_task["id"] == task_id:
            del items[index]
            return None

    raise HTTPException(status_code=404, detail="Task not found")

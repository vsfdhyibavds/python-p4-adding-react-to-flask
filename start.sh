#!/bin/bash

# Start Flask backend
echo "Starting Flask backend..."
gnome-terminal -- bash -c "cd server && pipenv install && pipenv shell && export FLASK_APP=app.py && export FLASK_RUN_PORT=5555 && flask db upgrade && python seed.py && flask run --port=5555; exec bash"

# Start React frontend
echo "Starting React frontend..."
gnome-terminal -- bash -c "cd client && npm install && npm start; exec bash"

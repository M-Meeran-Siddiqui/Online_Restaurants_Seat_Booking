# Navigate to the backend folder and start the server
Write-Host "Starting backend server..."
Start-Process -NoNewWindow -FilePath "powershell" -ArgumentList "cd backend; npm run dev"

# Navigate to the frontend folder and start the development server
Write-Host "Starting frontend server..."
Start-Process -NoNewWindow -FilePath "powershell" -ArgumentList "cd frontend; npm run dev"

Write-Host "Both servers are starting..."
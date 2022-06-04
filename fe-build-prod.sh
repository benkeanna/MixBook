#!/bin/bash
[[ ! -d frontend ]] && echo "frontend not found" && exit 1
[[ ! -d backend ]] && echo "backend not found" && exit 1
cd frontend 
npm install
npm run build
cd ..
cp -r frontend/build/* backend/public/

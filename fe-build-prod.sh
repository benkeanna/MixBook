#!/bin/bash
cd frontend 
[[ ! -d .node_modules ]] && npm install
npm run build
cd ..
cp -r frontend/build/* backend/public/


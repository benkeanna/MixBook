#!/bin/bash
cd frontend 
npm run build
cd ..
cp -r frontend/build/* backend/public/


#!/bin/bash
set -e

echo "=========================================="
echo " Pushing Mohit's Portfolio to GitHub"
echo " Repo: https://github.com/sihagmohit09-create/final-web"
echo " Branch: main"
echo "=========================================="

git remote set-url origin https://github.com/sihagmohit09-create/final-web.git
git push -u origin main

echo ""
echo "✅ Successfully pushed to GitHub!"
echo "👉 Now return to Vercel and deploy final-web!"

#!/bin/bash
# Test script for organize-solutions workflow
cp -r solutions/test-folder ./
git add .
git commit -m "ci: copy test-folder to root for workflow trigger testing

Testing remove-and-replace logic for duplicate folder handling.
Should trigger auto-organize workflow to replace existing folder in solutions.

Co-authored-by: Claude Sonnet 4"
git push

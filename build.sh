#!/bin/bash
set -ev
if [ "$TRAVIS_EVENT_TYPE" == "pull_request" ]; then
 # build docker image and add pr number tag
 docker build -t "$DOCKER_IMAGE_NAME:pr$TRAVIS_PULL_REQUEST" .
fi